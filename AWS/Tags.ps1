#Author: Stephen Gillie
#Created: 3/2021
#Updated: 7/2022
#Purpose: Maintain AWS tags

$OwnerID = 123456789012

Function Run-KeepTagging {
	while ($true) {
		Clean-AWSVolumes
		Clean-AWSSnapshots
		Repair-MissingTags
		$error.clear()
		sleep 900
	}
}

Function Repair-MissingTags {
	Param (
		$APIName,
		$Days = 1
	)
	$StartTime = get-date
	Write-Host "Report Time: $StartTime"
	$EDWTime = get-date
	$TagsChecked = 0
	$TagsFixed = 0
	$status = "Starting Up"
	$PercentComplete = 0
	$sections = (Get-AWSSections)
	If ($APIName) {
		$sections = $sections | where {$_.APIName -eq $APIName}
	}#end if APIName
	If (($sections.APIName -contains "pl") -or ($sections.APIName -contains "fl")) {
		write-host "Loading tag IDs (normally takes up to 25 seconds)" -nonewline
		$EC2Tags = Get-EC2Tag 
	$SecondsTaken = [math]::Round( ((get-date) - $StartTime).TotalSeconds ,3)
		write-host " - $($EC2Tags.count) EC2 tags loaded (took $SecondsTaken seconds)." 
	}#end if sections
	
	write-host "Count: $TabLine Name $TabLine Owner $TabLine AlwaysOn $TabLine Lifecycle $TabLine Environment  |"
	Foreach ($section in $sections) {
		#$section = (Get-AWSSections) | where {$_.APIName -eq $APIName}
		$APIname = $section.APIname
		$TagName = $section.TagName
		$InTagType = $section.InTagType
		$OutTagType = $section.OutTagType
		$SectionName = $section.SectionName
		$Command = [Scriptblock]::Create($section.Command)
		$TagSourceCommand = [Scriptblock]::Create($section.TagSourceCommand)
		$TagApplyCommand = [Scriptblock]::Create($section.TagApplyCommand)
		$IDName = $section.IDName
		$DescriptionName = $section.DescriptionName
		$TagKeyList = $section.SectionTags -split ":"
		$TagRoute = $section.TagRoute

		$CommandOutput = & $Command
		$CommandOutputSectionItemIDs = $CommandOutput.$IDName | sort -unique
		
		$FixedCount = @{}
		$ToFixCount = @{}
		$ErrCount = @{}

		Write-MissingTagHeader -APIName $APIName -CommandOutputCount $CommandOutput.count
		
#Foreach item, get ItemID, then get a list of tags for the current item
		$itemindex = 0
		Foreach ($item in $CommandOutput) {
			#$item = $CommandOutput[0]
			$ItemID = $item.$IDName
			$TagSourceCommandOutput = & $TagSourceCommand
			$itemindex++
			
			$i=0
#Check item tag list for zero length or missing tag values, and add the tag to TagToCheck
			Foreach ($TagKey in $TagKeyList) {
				$OutTag = @()
				$TagsChecked ++
				$status = "$($ItemID): Checking Tag $TagKey"
				$i++;
				$PercentComplete = ($itemindex/$CommandOutput.count)*100
				Write-Progress -Activity "Checking Tags: $APIName" -Status $status -PercentComplete $PercentComplete
				switch ($InTagType){
					"InTagTypeA" {
						$TagToCheck = $TagSourceCommandOutput | where {$_.key -eq ($TagKey)} | where {$_.value.length -gt 0}
					}
					"InTagTypeB" {
						$TagToCheck = $TagSourceCommandOutput.$TagKey | where {$_.length -gt 0}
					}
					default {
						$ErrCount.($TagKey)++
					}
				}#end switch TagType

#If the current tag needs fixing
				if ($TagToCheck){
					Continue
				}else{
					$ToFixCount.($TagKey)++

#The Description is used to derive the Name. The Name is used to derive the rest of the tags.
					if ($TagKey -eq "Name") {
						$ItemName = $item.$DescriptionName
					}else {
						switch ($InTagType){
							"InTagTypeA" {
								$ItemName = Get-NameFromTags $TagSourceCommandOutput  -OutTagType $OutTagType
							}
							"InTagTypeB" {
								$ItemName =  $TagSourceCommandOutput.Name
							}
							default {
								$ErrCount.($TagKey)++
							}
						}#end switch InTagType
					}#end if TagKey

#create OutTag based on that
					$OutTag = Generate-GenericCoTag -Key $TagKey -ItemName $ItemName -OutTagType $OutTagType

#If the tag has a value, apply it. 
					if ($OutTag.Value) { #OutTagTypeA
						try {
							& $TagApplyCommand
							$FixedCount.($TagKey)++
							$TagsFixed++
							Write-Progress -Activity "Updating Tags: $APIName" -Status $status -PercentComplete $PercentComplete
						} catch {
							$ErrCount.($TagKey)++
						}
					}elseif ($OutTag.$TagKey) { #OutTagTypeB
						try {
							& $TagApplyCommand
							$FixedCount.($TagKey)++
							$TagsFixed++
							Write-Progress -Activity "Updating Tags: $APIName" -Status $status -PercentComplete $PercentComplete
						} catch {
							$ErrCount.($TagKey)++
						}
					}#end if OutTag
				}# end if TagToCheck
			}# end Foreach TagKey
		}# end Foreach item

#Print out results.
		Write-Progress -Activity "Checking Tags" -Status "Ready" -Completed
		Write-MissingTagOutput -TagKeyList $TagKeyList -ToFixCount $ToFixCount -FixedCount $FixedCount -ErrCount $ErrCount
	}# end Foreach section
	$MinutesTaken = [math]::Round( ((get-date) - $StartTime).TotalMinutes ,3)
	$TagsPerSecond = [math]::Round( (($TagsChecked + $TagsFixed)/ $MinutesTaken / 60) ,3) 
	Write-Host "$TagsChecked tags checked and $TagsFixed tags updated in $MinutesTaken minutes for $TagsPerSecond tagging operations per second. Errors encountered:"
	$error -split "`n" | sort -Unique
}#end Repair-MissingTags

#region Service Data
<#AWSSections Notes
APIname - Console output
SectionName - unused
Command - CommandOutput
IDName - Multiple
DescriptionName - $ItemName if TagKey -eq "Name"
TagName - Where on the object variable that tags are located (for section1)
TagSourceCommand - Source for tags (for section2 - section1 just uses $CommandOutput)
TagApplyCommand - Apply tags, with $ItemID and $OutTag
InTagType - InTagTypeA - key, value. InTagTypeB - key.value. InTagTypeC - {keys, values}
OutTagType - OutTagTypeA - key, value. OutTagTypeB - key.value. OutTagTypeC - {keys, values}
Route - RouteItemTags - EC2 style (tags on items) - RouteSeparateTags - Other style (separate API call for tags)
SectionTags - Colon:delimited list of tags to check for this service.

"EC2 style" sections can be run as RouteSeparateTags instead of RouteItemTags - just change CommandOutput to Item.Tags(et)
Remove-AGResourceTag -ResourceArn "arn:aws:apigateway:us-east-1::/restapis/$ItemID" -TagKey Value -Force
#>
Function Get-AWSSections {
"APIname,SectionName,Command,IDName,DescriptionName,TagName,TagSourceCommand,TagApplyCommand,InTagType,OutTagType,SectionTags
acl,Access Control Lists,Get-EC2NetworkAcl,NetworkAclId,NetworkAclId,tags,`$item.tags,New-EC2Tag -Resource `$ItemID -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
acm,Certificates,Get-ACMCertificateList,CertificateArn,OrdermakerainName,tags,Get-ACMCertificateTagList -CertificateArn `$ItemID,Add-ACMCertificateTag -CertificateArn `$ItemID -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
ami,Images,(Get-EC2Image -Owner `$OwnerID),ImageId,Name,tags,`$item.tags,New-EC2Tag -Resource `$ItemID -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
apigateway,API Gateways,Get-AGRestApiList,Id,Name,tags,`$item.tags,Add-AGResourceTag -ResourceArn `"arn:aws:apigateway:us-east-1::/restapis/`$ItemID`" -Tag `$OutTag -Force,InTagTypeB,OutTagTypeB,Name:Owner:AlwaysOn:Lifecycle:Environment
cgw,Customer Gateways,Get-EC2CustomerGateway,CustomerGatewayId,CustomerGatewayId,tags,`$item.tags,New-EC2Tag -Resource `$ItemID -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
dax,Database Accelerators,Get-DAXCluster,ClusterID,ClusterID,tags,Get-DAXResourceTag -ResourceName `$ItemID,Add-DAXResourceTag -ResourceName `$ItemID -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
dlm,Database Lifecycle Manager,Get-DLMLifecyclePolicySummary,LifecycleID,LifecycleID,tags,Get-DLMResourceTag -ResourceArn `$ItemID,Add-DLMResourceTag -ResourceArn `$ItemID -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
dopt,DHCP options sets,Get-EC2DhcpOption,DhcpOptionsId,DhcpOptionsId,tags,`$item.tags,New-EC2Tag -Resource `$ItemID -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
ds,Directories,Get-DSDirectory,DirectoryId,Alias,tags,Get-DSResourceTag -ResourceId `$ItemID,Add-DSResourceTag -ResourceId `$ItemID -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
ecr,Elastic Container Repository,Get-ECRRepository,RepositoryArn,RepositoryName,tags,Get-ECRResourceTag -ResourceArn `$ItemID,Add-ECRResourceTag -ResourceArn `$ItemID -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
ecs,Elastic Containers,Get-ECSClusterList | select @{n='ClusterARN';e={`$_}},ClusterARN,ClusterARN,tags,Get-ECSTagsForResource -ResourceArn `$ItemID,Add-ECSResourceTag -ResourceArn `$ItemID -Tag $OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
efs,Elastic FileSystem,Get-EFSFileSystem,FileSystemId,Name,tags,Get-EFSTag -FileSystemId `$ItemID -WarningAction Ignore,New-EFSTag -FileSystemId `$ItemID -Tag `$OutTag -WarningAction Ignore,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
eipalloc,Elastic IP Allocations,Get-EC2Address,AllocationId,AllocationId,tags,`$item.tags,New-EC2Tag -Resource `$ItemID -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
eks,Elastic Kubernetes,Get-EKSClusterList,ClusterID,ClusterName,tags,Get-EKSResourceTag -ResourceArn `$ItemID,Add-EKSResourceTag -ResourceArn `$ItemID -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
elb,Elastic LoadBalancers,Get-ELBLoadBalancer,LoadBalancerName,DNSName,tags,(Get-ELBResourceTag -LoadBalancerName `$ItemID).tags,Add-ELBResourceTag -LoadBalancerName `$ItemID -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
elb2,Elastic LoadBalancer2s,Get-ELB2LoadBalancer,LoadBalancerArn,DNSName,tags,(Get-ELB2Tag -ResourceArn `$ItemID).tags,Add-ELB2Tag -ResourceArn `$ItemID -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
elcache,ElastiCache,Get-ECCacheCluster,CacheClusterId,CacheClusterId,tags,Get-ECTag -ResourceName `"arn:aws:elasticache:us-east-1:`$OwnerID:cluster:`$ItemID`",Add-ECTag -ResourceName `"arn:aws:elasticache:us-east-1:`$OwnerID:cluster:`$ItemID`" -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
emr,Elastic MapReduce,Get-EMRClusterList -ClusterState RUNNING,Id,Name,tags,$null,Add-EMRTag -ResourceId `$ItemID -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
eni,Elastic Network Interfaces,Get-EC2NetworkInterface,NetworkInterfaceId,NetworkInterfaceId,tag,`$item.tag,New-EC2Tag -Resource `$ItemID -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
events,CloudWatch Events,Get-CWEEventBusList,Arn,Name,tags,Get-CWEResourceTag -ResourceArn `$ItemID,Add-CWEResourceTag -ResourceArn `$ItemID -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
fl,Flow Log,Get-EC2FlowLog,FlowLogId,FlowLogId,tags,(`$EC2Tags | where{`$_.ResourceId -match 'fl-'}),New-EC2Tag -Resource `$ItemID -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
fsx,FileSystems,Get-FSXFileSystem,ResourceARN,ResourceARN,tags,`$item.tags,Add-FSXResourceTag -ResourceArn `$ItemID -Tag `$OutTag,InTagTypeA,OutTagTypeB,Name:Owner:AlwaysOn:Lifecycle:Environment
i,Instances,(Get-EC2Instance).instances,InstanceId,InstanceId,tags,`$item.tags,New-EC2Tag -Resource `$ItemID -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
iam role,IAM Role,Get-IAMRoleList,RoleName,RoleName,tags,Get-IAMRoleTagList -RoleName `$ItemID,Add-IAMRoleTag -RoleName `$ItemID -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
iam user,IAM User,Get-IAMUserList,UserName,Arn,tags,Get-IAMUserTagList -UserName `$ItemID,Add-IAMUserTag -UserName `$ItemID -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
igw,Internet Gateways,Get-EC2InternetGateway,InternetGatewayId,InternetGatewayId,tags,`$item.tags,New-EC2Tag -Resource `$ItemID -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
key,Encryption Keys,Get-EC2KeyPair,KeyPairId,KeyPairId,tags,`$item.tags,New-EC2Tag -Resource `$ItemID -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
ml batch,Machine Learning,Get-MLBatchPredictionList,BatchPredictionId,Name,tags,(Get-MLTag -ResourceId `$ItemID -ResourceType BatchPrediction).tags,Add-MLTag -ResourceId `$ItemID -ResourceType BatchPrediction -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
ml data,Machine Learning,Get-MLDataSourceList,DataSourceId,Name,tags,(Get-MLTag -ResourceId `$ItemID -ResourceType DataSource).tags,Add-MLTag -ResourceId `$ItemID -ResourceType DataSource -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
ml eval,Machine Learning,Get-MLEvaluationList,EvaluationId,Name,tags,(Get-MLTag -ResourceId `$ItemID -ResourceType Evaluation).tags,Add-MLTag -ResourceId `$ItemID -ResourceType Evaluation -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
ml model,Machine Learning,Get-MLModelList,MLModelId,Name,tags,(Get-MLTag -ResourceId `$ItemID -ResourceType MLModel).tags,Add-MLTag -ResourceId `$ItemID -ResourceType MLModel -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
mq,Message Queues,Get-MQBrokerList,BrokerArn,BrokerName,tags,Get-MQTagList `$ItemID,New-MQTag -ResourceArn `$ItemID -Tag `$OutTag,InTagTypeB,OutTagTypeB,Name:Owner:AlwaysOn:Lifecycle:Environment
nat,NATs,Get-EC2NatGateway,NatGatewayId,NatGatewayId,tags,`$item.tags,New-EC2Tag -Resource `$ItemID -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
pcx,Peering Connections,Get-EC2VpcPeeringConnections,VpcPeeringConnectionId,VpcPeeringConnectionId,tags,`$item.tags,New-EC2Tag -Resource `$ItemID -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
pg,Placement Groups,Get-EC2PlacementGroup,GroupId,GroupId,tags,`$item.tags,New-EC2Tag -Resource `$ItemID -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
pl,Prefix Lists,Get-EC2PrefixList,PrefixListId,PrefixListId,tags,(`$EC2Tags | where{`$_.ResourceId -match 'pl-'}),New-EC2Tag -Resource `$ItemID -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
rds,Relational Databases,Get-RDSDBInstance,DBInstanceArn,DBInstanceIdentifier,tags,Get-RDSTagForResource -ResourceName `$ItemID,Add-RDSTagsToResource -ResourceName `$ItemID -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
redshift,Redshift,Get-RSCluster,ClusterIdentifier,ClusterIdentifier,tags,(Get-RSTags -ResourceName `"arn:aws:redshift:us-east-1:`$OwnerID:cluster:`$ItemID`" -MaxRecord  50 -WarningAction Ignore).tag,New-RSTags -ResourceName `"arn:aws:redshift:us-east-1:`$OwnerID:cluster:`$ItemID`" -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
rtb,Route Tables,Get-EC2RouteTable,RouteTableId,RouteTableId,tags,`$item.tags,New-EC2Tag -Resource `$ItemID -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
sagemaker,Sagemaker Training Jobs,Get-SMTrainingJobList -CreationTimeAfter (Get-Date).AddDays(-1),TrainingJobArn,TrainingJobName,tags,Get-SMResourceTagList -ResourceArn `$ItemID,Add-SMResourceTag -ResourceArn `$ItemID -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
secretsmgr,Secrets Manager,Get-SECSecretList,ARN,ARN,tags,`$item.tags,Add-SECResourceTag -SecretId `$ItemID -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
ses,Simple Email Service,Get-SES2EmailIdentityList,IdentityName,IdentityName,tags,Get-SES2ResourceTag -ResourceArn `"arn:aws:ses:us-east-1:`$OwnerID:identity/`$ItemID`",Add-SES2ResourceTag -ResourceArn `"arn:aws:ses:us-east-1:`$OwnerID:identity/`$ItemID`" -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
sg,Security Groups,Get-EC2SecurityGroup,GroupId,GroupId,tags,`$item.tags,New-EC2Tag -Resource `$ItemID -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
snap,Snapshots,(Get-EC2Snapshot -OwnerId `$OwnerID) | where {`$_.StartTime -ge (Get-Date).AddDays(-`$Days)},SnapshotId,SnapshotId,tags,`$item.tags,New-EC2Tag -Resource `$ItemID -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
sns,Simple Notification Service,Get-SNSTopic,TopicArn,TopicArn,tags,Get-SNSResourceTag -ResourceArn `$ItemID,Add-SNSResourceTag -ResourceArn `$ItemID -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
subnet,Subnets,Get-EC2Subnet,subnetid,subnetid,tags,`$item.tags,New-EC2Tag -Resource `$ItemID -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
vgw,Virtual Gatways,Get-EC2VpnGateway,VpnGatewayId,VpnGatewayId,tags,`$item.tags,New-EC2Tag -Resource `$ItemID -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
vol,Volumes,Get-EC2Volume,VolumeId,VolumeId,tags,`$item.tags,New-EC2Tag -Resource `$ItemID -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
vpc,VPCs,Get-EC2Vpc,VpcId,VpcId,tags,`$item.tags,New-EC2Tag -Resource `$ItemID -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
vpce,VPC Endpoints,Get-EC2VpcEndpoint,VpcEndpointId,VpcEndpointId,tags,`$item.tags,New-EC2Tag -Resource `$ItemID -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
vpn,VPNs,Get-EC2VpnConnection,VpnConnectionId,VpnConnectionId,tags,`$item.tags,New-EC2Tag -Resource `$ItemID -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
workspaces,Workspaces,Get-WKSWorkspace,WorkspaceId,ComputerName,tags,Get-WKSTag -WorkspaceId `$ItemID,New-WKSTag -WorkspaceId `$ItemID -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment"| convertfrom-csv
}

#$item[0] | where {$_.tags.key -notcontain "Name"

$EDWTime = Get-Date
$eni = @{}
Function Get-GenericCoTag {
	Param(
		[string]$TagKey,
		[string]$ItemName,
		[string]$APIKey
	) 
	
	$ItemName = $ItemName | Filter-NonTagChars
	switch ($TagKey) {
		"Name"{ 
			switch -wildcard ($ItemName) {
				"*arn:aws:ecs:*"{ "ECS Attachment";Return}
				"*EDWEMR*"{ ('EDWEMR' + (get-date $EDWTime -f 'yyyy-MM-dd-HH-mm-ss'));Return}
				#ENI: If description, use it. Else if attachment, Get-InstanceNameFromID
				"*eni-*"{
					If ($eni.count -le 100) {
						$eni = Get-EC2NetworkInterface
					};
					$item = ($eni | where {$_.NetworkInterfaceId -eq $ItemName})
					If ($item.Description) {
						$item.Description;
					}else{
						Get-InstanceNameFromID $item.Attachment.InstanceId;
					}
					Return
				}
				#Generate attachment info
				"*vol-*"{
					$vol = Get-EC2Volume $ItemName;
					If ($vol.Attachment[0].InstanceId) {
						Get-InstanceNameFromID $vol.Attachment[0].InstanceId;
					}else{
						$vol.VolumeId;
					}
					Return
				}
				#Snap: Copy volume name tag
				"*snap-*"{ 
					try {
						Get-NameFromTags (Get-EC2Volume (Get-EC2Snapshot $ItemName).VolumeId).Tags  -OutTagType OutTagTypeA;
					}catch{
						(Get-EC2Snapshot $ItemName).Description
					}
					Return
				}
				default { $ItemName}
	}
		}
		"Owner"{
			switch -wildcard ($ItemName) {
				#region SalesTeam
				"*team-name*"{"SalesTeam";Return}
				"*SalesTeam*"{"SalesTeam";Return}
				"*aip*"{"SalesTeam";Return}
				"*ai-*"{"SalesTeam";Return}
				"*-ai*"{"SalesTeam";Return}
				"*-ai-*"{"SalesTeam";Return}
				"*batchpredictdataset*"{"SalesTeam";Return}
				"*Evaluation*"{"SalesTeam";Return}
				"*Forecast*"{"SalesTeam";Return}
				"*invml*"{"SalesTeam";Return}
				"*invsales*"{"SalesTeam";Return}
				"*invsls*"{"SalesTeam";Return}
				"*newcustds*"{"SalesTeam";Return}
				"*RStudio*"{"SalesTeam";Return}
				"*Sagemaker*"{"SalesTeam";Return}
				"*Sgmkr*"{"SalesTeam";Return}
				"*Training Data*"{"SalesTeam";Return}
				#endregion
				#region BusinessTeam
				"*BARD*"{"BusinessTeam";Return}
				"*BART*"{"BusinessTeam";Return}
				"*Hy*"{"BusinessTeam";Return}
				"*SalesDB*"{"BusinessTeam";Return}
				"*ServiceNow*"{"BusinessTeam";Return}
				"*SlsDB*"{"BusinessTeam";Return}
				"*Support_Role*"{"BusinessTeam";Return}
				"*Tab*"{"BusinessTeam";Return}
				"*Tableau*"{"BusinessTeam";Return}
				"*GenericCreditCardPortal*"{"BusinessTeam";Return}
				#endregion
				#region GenericCompanyOldName
				"*GenericCompanyOldName*"{"GenericCompanyOldName";Return}
				#endregion
				#region DevOpsTeam
				"*admin*"{"DevOpsTeam";Return}
				"*cloud9*"{"DevOpsTeam";Return}
				"*CNFL*"{"DevOpsTeam";Return}
				"*codepipeline*"{"DevOpsTeam";Return}
				"*codestar*"{"DevOpsTeam";Return}
				"*Confluence*"{"DevOpsTeam";Return}
				"*DevOpsTeam*"{"DevOpsTeam";Return}
				"*dvpstools*"{"DevOpsTeam";Return}
				"*Githb*"{"DevOpsTeam";Return}
				"*github*"{"DevOpsTeam";Return}
				"*-gh*"{"DevOpsTeam";Return}
				"*Jenkins*"{"DevOpsTeam";Return}
				"*Jira*"{"DevOpsTeam";Return}
				"*JKS*"{"DevOpsTeam";Return}
				"*JNKS*"{"DevOpsTeam";Return}
				"*logs*"{"DevOpsTeam";Return}
				"*NexusRepo*"{"DevOpsTeam";Return}
				"*properties*"{"DevOpsTeam";Return}
				"*PythonServer*"{"DevOpsTeam";Return}
				"*Sonar*"{"DevOpsTeam";Return}
				"*swd*"{"DevOpsTeam";Return}
				"*Zuul*"{"DevOpsTeam";Return}
				#endregion
				#region DeveloperTeam
				"*cloudformation-stackcreation*"{"DeveloperTeam";Return}
				"*DataModeling*"{"DeveloperTeam";Return}
				"*DemandCaptureAutomation*"{"DeveloperTeam";Return}
				"*DeveloperTeamcommerce*"{"DeveloperTeam";Return}
				"*DeveloperTeam*"{"DeveloperTeam";Return}
				"*ECS*"{"DeveloperTeam";Return}
				"*elasticbeanstalk*"{"DeveloperTeam";Return}
				"*email_classifier*"{"DeveloperTeam";Return}
				"*EKS*"{"DeveloperTeam";Return}
				"*Gorilla*"{"DeveloperTeam";Return}
				"*UserName1*"{"DeveloperTeam";Return}
				"*UserName2*"{"DeveloperTeam";Return}
				"*MarketingIT*"{"DeveloperTeam";Return}
				"*admn-mgnt*"{"DeveloperTeam";Return}
				"*AIWEB*"{"DeveloperTeam";Return}
				"*arn:aws:ecs:*"{"DeveloperTeam";Return}
				"*Auto-scaling-services*"{"DeveloperTeam";Return}
				"*AWSDO*"{"DeveloperTeam";Return}
				"*AWSEBLoa*"{"DeveloperTeam";Return}
				"*gncoPtimizer*"{"DeveloperTeam";Return}
				"*config-topic-virginia*"{"DeveloperTeam";Return}
				"*LowRoboCode*"{"DeveloperTeam";Return}
				"*cpm_alerts_topic*"{"DeveloperTeam";Return}
				"*custmessage01*"{"DeveloperTeam";Return}
				"*dynamodb*"{"DeveloperTeam";Return}
				"*eCom*"{"DeveloperTeam";Return}
				"*ECDB*"{"DeveloperTeam";Return}
				"*ECS Attachment*"{"DeveloperTeam";Return}
				"*ELASTICSEARCH*"{"DeveloperTeam";Return}
				"*emailClassification*"{"DeveloperTeam";Return}
				"*ES_CloudWatch_Alarms*"{"DeveloperTeam";Return}
				"*ES_Prd_number_node_topic*"{"DeveloperTeam";Return}
				"*ES_dev_number_node_topic*"{"DeveloperTeam";Return}
				"*ES_Slow_search_order_history_topic*"{"DeveloperTeam";Return}
				"*ES_order_history_error_log_topic*"{"DeveloperTeam";Return}
				"*ES_order_history_timeout_log_topic_prod*"{"DeveloperTeam";Return}
				"*Grafana*"{"DeveloperTeam";Return}
				"*Magento*"{"DeveloperTeam";Return}
				"*Marketing-*"{"DeveloperTeam";Return}
				"*Mongo*"{"DeveloperTeam";Return}
				"*MyS3*"{"DeveloperTeam";Return}
				"*NodeJS*"{"DeveloperTeam";Return}
				"*notify-service-now*"{"DeveloperTeam";Return}
				"*NX01*"{"DeveloperTeam";Return}
				"*PetStore*"{"DeveloperTeam";Return}
				"*PIM*"{"DeveloperTeam";Return}
				"*postgres_api*"{"DeveloperTeam";Return}
				"*pricing_services_topic_prod*"{"DeveloperTeam";Return}
				"*Redis*"{"DeveloperTeam";Return}
				"*RPA*"{"DeveloperTeam";Return}
				"*Sales_history_prd_error_topic*"{"DeveloperTeam";Return}
				"*SalesHistory*"{"DeveloperTeam";Return}
				"*SANDBOX*"{"DeveloperTeam";Return}
				"*SatisFactory*"{"DeveloperTeam";Return}
				"*s3_sdv-aws-marketingautomation_fileevent_triggers*"{"DeveloperTeam";Return}
				"*sales_history_job_sns*"{"DeveloperTeam";Return}
				"*Shop*"{"DeveloperTeam";Return}
				"*snd-aws-inspector-topic*"{"DeveloperTeam";Return}
				"*Summary_Sales*"{"DeveloperTeam";Return}
				"*testapi*"{"DeveloperTeam";Return}
				"*test_api*"{"DeveloperTeam";Return}
				"*thermalfluidproducts*"{"DeveloperTeam";Return}
				"*topicS3*"{"DeveloperTeam";Return}
				"*gnco-aws-vrg01-sns-inf01-cldtrl01-notifications*"{"DeveloperTeam";Return}
				"*vol-*"{ "DeveloperTeam";Return}
				#endregion
				#region EDW DataTeam (Enterprise Data Warehousing)
				"*AGW*"{"DataTeam";Return}
				"*bidw*"{"DataTeam";Return}
				"*Comprehend*"{"DataTeam";Return}
				"*consumption*"{"DataTeam";Return}
				"*Datalab*"{"DataTeam";Return}
				"*datapipeline*"{"DataTeam";Return}
				"*do*"{"DataTeam";Return}
				#"*docean*"{"DataTeam";Return}
				#"*documentRetrieval*"{"DataTeam";Return}
				#"*Ordermaker*"{"DataTeam";Return}
				"*ElasticMapReduce*"{"DataTeam";Return}
				"*Email_Send*"{"DataTeam";Return}
				"*EMR*"{"DataTeam";Return}
				"*EDW*"{"DataTeam";Return}
				"*esb*"{"DataTeam";Return}
				"*ETL*"{"DataTeam";Return}
				"*EXMB*"{"DataTeam";Return}
				"*FIFO_Queue_Alarm_Sample_Notifiers*"{"DataTeam";Return}
				"*gdw*"{"DataTeam";Return}
				"*heroku*"{"DataTeam";Return}
				"*ICC*"{"DataTeam";Return}
				"*Inform*"{"DataTeam";Return}
				"*integration*"{"DataTeam";Return}
				"*marketingautomation*"{"DataTeam";Return}
				"*mssqlbkp*"{"DataTeam";Return}
				"*mule*"{"DataTeam";Return}
				"*mckinsey_file_arrived*"{"DataTeam";Return}
				"*Redshift*"{"DataTeam";Return}
				"*SSAS*"{"DataTeam";Return}
				"*SFTP*"{"DataTeam";Return}
				"*Step_Function*"{"DataTeam";Return}
				"*Textract*"{"DataTeam";Return}
				"*writetodynamo*"{"DataTeam";Return}
				#endregion
				#region ITTeam
				"*-ad-*"{"ITTeam";Return}
				"*alb-access-logs-us-east*"{"ITTeam";Return}
				"*archive*"{"ITTeam";Return}
				"*athena-query-results*"{"ITTeam";Return}
				"*AutoScaling*"{"ITTeam";Return}
				"*backup*"{"ITTeam";Return}
				"*catblog*"{"ITTeam";Return}
				"*cf*"{"ITTeam";Return}
				"*ciscoumbrella*"{"ITTeam";Return}
				"*CloudCheckrDelegated*"{"ITTeam";Return}
				"*cloudsecuritylogs*"{"ITTeam";Return}
				"*cloudtrail*"{"ITTeam";Return}
				"*CloudWatchAgentServer*"{"ITTeam";Return}
				"*ComputeOptimizer*"{"ITTeam";Return}
				"*config*"{"ITTeam";Return}
				"*config-bucket*"{"ITTeam";Return}
				"*CPFW*"{"ITTeam";Return}
				"*CPM*"{"ITTeam";Return}
				"*Datadog*"{"ITTeam";Return}
				"*DirectoryMonitoring*"{"ITTeam";Return}
				"*dms*"{"ITTeam";Return}
				"*DPRXY*"{"ITTeam";Return}
				"*EC2Spot*"{"ITTeam";Return}
				"*EC2StartStop*"{"ITTeam";Return}
				"*ElastiCache*"{"ITTeam";Return}
				"*ElasticLoadBalancing*"{"ITTeam";Return}
				"*elbaccesslogsgnco*"{"ITTeam";Return}
				"*ensono*"{"ITTeam";Return}
				"*EnvisionDataReader*"{"ITTeam";Return}
				"*Events_Invoke_Step_Functions*"{"ITTeam";Return}
				"*falconcrest*"{"ITTeam";Return}
				"*Feedback*"{"ITTeam";Return}
				"*firewall*"{"ITTeam";Return}
				"*FSx*"{"ITTeam";Return}
				"*gb*"{"ITTeam";Return}
				"*GlobalAccelerator*"{"ITTeam";Return}
				"*glue*"{"ITTeam";Return}
				"*ido*"{"ITTeam";Return}
				"*inf-cldtrl*"{"ITTeam";Return}
				"*lambda_basic_execution*"{"ITTeam";Return}
				"*MigrationHub*"{"ITTeam";Return}
				"*MQ*"{"ITTeam";Return}
				"*ndc*"{"ITTeam";Return}
				"*Okta*"{"ITTeam";Return}
				"*Organizations*"{"ITTeam";Return}
				"*patch-target*"{"ITTeam";Return}
				"*PrismaCloudPOC*"{"ITTeam";Return}
				"*Qualys*"{"ITTeam";Return}
				"*Quotas*"{"ITTeam";Return}
				"*RDS*"{"ITTeam";Return}
				"*ReadOnly*"{"ITTeam";Return}
				"*serverless-deploy*"{"ITTeam";Return}
				"*SSM*"{"ITTeam";Return}
				"*Support*"{"ITTeam";Return}
				"*TrustedAdvisor*"{"ITTeam";Return}
				"*unite-data*"{"ITTeam";Return}
				"*vm-templates*"{"ITTeam";Return}
				"*workspace*"{"ITTeam";Return}
				#endregion
				#region Salesforce
				"*Salesforce*"{"Salesforce";Return}
				#endregion
				default { Return}
			}
		 }
		 "AlwaysOn"{
			switch -wildcard ($ItemName) {
				"*cloud9*"{"N";Return}
				"*ElasticMapReduce*"{"N";Return}
				"*EDWEMR*"{"N";Return}
				default { "Y"}
			}
		 }
		 "Lifecycle"{
			switch -wildcard ($ItemName) {
				"*BARD*"{"Temporary";Return}
				"*BART*"{"Temporary";Return}
				"*cloud9*"{"Temporary";Return}
				"*ElasticMapReduce*"{"Temporary";Return}
				"*EDW*"{"Temporary";Return}
				"*ETL*"{"Temporary";Return}
				"*Hy*"{"Temporary";Return}
				"*Inform*"{"Temporary";Return}
				"*SalesDB*"{"Temporary";Return}
				"*PythonServer*"{"Temporary";Return}
				"*SlsDB*"{"Temporary";Return}
				"*Sonar*"{"Temporary";Return}
				"*SSAS*"{"Temporary";Return}
				"*Tab*"{"Temporary";Return}
				"*Tableau*"{"Temporary";Return}
				"*Web-AutoScaling*"{"Temporary";Return}
				"*Zuul*"{"Temporary";Return}
				default { "Permanent"}
			}
		 }
		 "Environment"{
			switch -wildcard ($ItemName) {
				#DEV
				"*dev*"{ "DEV" ;Return}
				"*dv-*"{ "DEV" ;Return}
				#PROD
				"*prod*"{ "PROD";Return}
				"*PROD*"{ "PROD";Return}
				"*prd*"{ "PROD";Return}
				"*pv-*"{ "PROD" ;Return}
				#QA
				"*qa*"{ "QA" ;Return}
				"*qv-*"{ "QA" ;Return}
				#SBX
				"*sbx*"{ "SBX" ;Return}
				"*sv-*"{ "SBX" ;Return}
				#TST
				"*test*"{ "TST" ;Return}
				"*tst*"{ "TST" ;Return}
				"*tv-*"{ "TST" ;Return}
				#UAT
				"*uat*"{ "UAT";Return }
				"*uv-*"{ "UAT" ;Return}
				default {
					switch -wildcard ($ItemName) {
						"*arn:aws:ecs:*"{ "PROD";Return}
						"*Auto-scaling-services*"{ "PROD";Return}
						#"*aws-mule-fail*"{ "PROD";Return}
						"*AWS*"{ "PROD";Return}
						"*AzureSSO*"{ "PROD";Return}
						"*bard*"{ "PROD";Return}
						"*bart*"{ "PROD";Return}
						"*catblog*"{ "PROD";Return}
						"*gncoPtimizer*"{ "PROD";Return}
						"*confluence*"{ "PROD";Return}
						"*config-topic-virginia*"{ "PROD";Return}
						"*LowRoboCode*"{ "PROD";Return}
						"*cpm_alerts_topic*"{ "PROD";Return}
						"*custmessage01*"{ "PROD";Return}
						"*DirectoryMonitoring*"{ "PROD";Return}
						"*Ordermaker*"{ "PROD";Return}
						"*dynamo*"{ "PROD";Return}
						"*edw-runteam-notify*"{ "PROD";Return}
						"*edw_filewatcher_lamda*"{ "PROD";Return}
						"*edw_magento_job_topic*"{ "PROD";Return}
						"*EDWEMR*"{ "PROD";Return}
						"*ecomsvc*"{ "PROD";Return}
						"*ElasticMapReduce*"{ "PROD";Return}
						"*ES_CloudWatch_Alarms*"{ "PROD";Return}
						"*ES_Slow_search_order_history_topic*"{ "PROD";Return}
						"*ES_order_history_error_log_topic*"{ "PROD";Return}
						"*FIFO_Queue_Alarm_Sample_Notifiers*"{ "PROD";Return}
						"*gbnotify*"{ "PROD";Return}
						"*github*"{ "PROD";Return}
						"*grafana*"{ "PROD";Return}
						"*jenkins*"{ "PROD";Return}
						"*jira*"{ "PROD";Return}
						"*jnks*"{ "PROD";Return}
						"*lambda*"{ "PROD";Return}
						"*logs*"{ "PROD";Return}
						"*MyS3*"{ "PROD";Return}
						"*nexus*"{ "PROD";Return}
						"*Okta*"{ "PROD";Return}
						"*Qualys*"{ "PROD";Return}
						"*patch-target*"{ "PROD";Return}
						"*postgres*"{ "PROD";Return}
						"*UserNameX*"{ "PROD";Return}
						"*properties*"{ "PROD";Return}
						"*role*"{ "PROD";Return}
						"*s3_sdv_aws_heroku_*"{ "PROD";Return}
						"*s3_spv_aws_integration_*"{ "PROD";Return}
						"*s3_gnco-unite-data*"{ "PROD";Return}
						"*SageMaker*"{ "PROD";Return}
						"*sales_history_job_sns*"{ "PROD";Return}
						"*SalesHistory*"{ "PROD";Return}
						"*SatisFactory*"{ "PROD";Return}
						"*UserNameX*"{ "PROD";Return}
						"*UserNameX*"{ "PROD";Return}
						"*UserNameX*"{ "PROD";Return}
						"*UserNameX*"{ "PROD";Return}
						"*UserNameX*"{ "PROD";Return}
						"*UserNameX*"{ "PROD";Return}
						"*UserNameX*"{ "PROD";Return}
						"*UserNameX*"{ "PROD";Return}
						"*UserNameX*"{ "PROD";Return}
						"*UserNameX*"{ "PROD";Return}
						"*UserNameX*"{ "PROD";Return}
						"*shop*"{ "PROD";Return}
						"*snd-aws-datapipeline*"{ "PROD";Return}
						"*snd-aws-inspector-topic*"{ "PROD";Return}
						"*SNS*"{ "PROD";Return}
						"*sonarqube*"{ "PROD";Return}
						"*SSM*"{ "PROD";Return}
						"*tableau*"{ "PROD";Return}
						"*topicS3*"{ "PROD";Return}
						"*genericcocloudtrail-topic-virginia*"{ "PROD";Return}
						"*gnco-aws-vrg01-sns-inf01-cldtrl01-notifications*"{ "PROD";Return}
						"*gnco-edwsystems-alarm*"{ "PROD";Return}
						"*vol-*"{ "PROD";Return}
						default {Return}
					}#end switch ItemName
				}
			}#end switch ItemName
		 }
		default {Return}
	}#end switch TagKey
	#return $OutTag
}; #end Get-GenericCoTag

<# Todo
APIName,SectionName,Command,IDName,DescriptionName,tags,Get-ResourceTag -ResourceArn `$ItemID,Add-ResourceTag -ResourceArn `$ItemID -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
chatbot,SectionName,Command,IDName,DescriptionName,tags,Get-ResourceTag -ResourceArn `$ItemID,Add-ResourceTag -ResourceArn `$ItemID -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
cloudtrail,SectionName,Command,IDName,DescriptionName,tags,Get-ResourceTag -ResourceArn `$ItemID,Add-ResourceTag -ResourceArn `$ItemID -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
cloudwatch,SectionName,Command,IDName,DescriptionName,tags,Get-ResourceTag -ResourceArn `$ItemID,Add-ResourceTag -ResourceArn `$ItemID -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
codebuild,SectionName,Command,IDName,DescriptionName,tags,Get-ResourceTag -ResourceArn `$ItemID,Add-ResourceTag -ResourceArn `$ItemID -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
codecommit,SectionName,Command,IDName,DescriptionName,tags,Get-ResourceTag -ResourceArn `$ItemID,Add-ResourceTag -ResourceArn `$ItemID -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
codedeploy,SectionName,Command,IDName,DescriptionName,tags,Get-ResourceTag -ResourceArn `$ItemID,Add-ResourceTag -ResourceArn `$ItemID -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
codeguru-reviewer,SectionName,Command,IDName,DescriptionName,tags,Get-ResourceTag -ResourceArn `$ItemID,Add-ResourceTag -ResourceArn `$ItemID -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
codepipeline,SectionName,Command,IDName,DescriptionName,tags,Get-ResourceTag -ResourceArn `$ItemID,Add-ResourceTag -ResourceArn `$ItemID -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
codestar-connections,SectionName,Command,IDName,DescriptionName,tags,Get-ResourceTag -ResourceArn `$ItemID,Add-ResourceTag -ResourceArn `$ItemID -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
codestar-notifications,SectionName,Command,IDName,DescriptionName,tags,Get-ResourceTag -ResourceArn `$ItemID,Add-ResourceTag -ResourceArn `$ItemID -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
comprehend,SectionName,Command,IDName,DescriptionName,tags,Get-ResourceTag -ResourceArn `$ItemID,Add-ResourceTag -ResourceArn `$ItemID -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
config,SectionName,Command,IDName,DescriptionName,tags,Get-ResourceTag -ResourceArn `$ItemID,Add-ResourceTag -ResourceArn `$ItemID -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
datapipeline,SectionName,Command,IDName,DescriptionName,tags,Get-ResourceTag -ResourceArn `$ItemID,Add-ResourceTag -ResourceArn `$ItemID -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
devicefarm,SectionName,Command,IDName,DescriptionName,tags,Get-ResourceTag -ResourceArn `$ItemID,Add-ResourceTag -ResourceArn `$ItemID -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
dms,SectionName,Command,IDName,DescriptionName,tags,Get-ResourceTag -ResourceArn `$ItemID,Add-ResourceTag -ResourceArn `$ItemID -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
dynamodb,SectionName,Command,IDName,DescriptionName,tags,Get-ResourceTag -ResourceArn `$ItemID,Add-ResourceTag -ResourceArn `$ItemID -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
ebs Elastic Block Storage?,SectionName,Command,IDName,DescriptionName,tags,Get-ResourceTag -ResourceArn `$ItemID,Add-ResourceTag -ResourceArn `$ItemID -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
beanstalk/elasticbeanstalk,SectionName,Command,IDName,DescriptionName,tags,Get-ResourceTag -ResourceArn `$ItemID,Add-ResourceTag -ResourceArn `$ItemID -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
glacier,SectionName,Command,IDName,DescriptionName,tags,Get-ResourceTag -ResourceArn `$ItemID,Add-ResourceTag -ResourceArn `$ItemID -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
globalaccelerator,SectionName,Command,IDName,DescriptionName,tags,Get-ResourceTag -ResourceArn `$ItemID,Add-ResourceTag -ResourceArn `$ItemID -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
Glue Table,SectionName,Command,IDName,DescriptionName,tags,Get-ResourceTag -ResourceArn `$ItemID,Add-ResourceTag -ResourceArn `$ItemID -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
Glue Connections,SectionName,Command,IDName,DescriptionName,tags,Get-ResourceTag -ResourceArn `$ItemID,Add-ResourceTag -ResourceArn `$ItemID -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
iot,SectionName,Command,IDName,DescriptionName,tags,Get-ResourceTag -ResourceArn `$ItemID,Add-ResourceTag -ResourceArn `$ItemID -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
lakeformation,SectionName,Command,IDName,DescriptionName,tags,Get-ResourceTag -ResourceArn `$ItemID,Add-ResourceTag -ResourceArn `$ItemID -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
opsworks,SectionName,Command,IDName,DescriptionName,tags,Get-ResourceTag -ResourceArn `$ItemID,Add-ResourceTag -ResourceArn `$ItemID -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
pi,SectionName,Command,IDName,DescriptionName,tags,Get-ResourceTag -ResourceArn `$ItemID,Add-ResourceTag -ResourceArn `$ItemID -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
resource-groups,SectionName,Command,IDName,DescriptionName,tags,Get-ResourceTag -ResourceArn `$ItemID,Add-ResourceTag -ResourceArn `$ItemID -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
robomaker,SectionName,Command,IDName,DescriptionName,tags,Get-ROBOResourceTag -ResourceArn `$ItemID,Add-ROBOResourceTag -ResourceArn `$ItemID -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
route53,Route 53,Command,IDName,DescriptionName,tags,Get-R53RResourceTagList -ResourceArn `$ItemID,Add-R53RResourceTag -ResourceArn `$ItemID -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
savingsplans,SectionName,Command,IDName,DescriptionName,tags,Get-ResourceTag -ResourceArn `$ItemID,Add-ResourceTag -ResourceArn `$ItemID -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
sdb,SectionName,Command,IDName,DescriptionName,tags,Get-ResourceTag -ResourceArn `$ItemID,Add-ResourceTag -ResourceArn `$ItemID -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
ssm,SectionName,Command,IDName,DescriptionName,tags,Get-SSMResourceTag -ResourceArn `$ItemID,Add-SSMResourceTag -ResourceArn `$ItemID -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
storagegateway,SectionName,Command,IDName,DescriptionName,tags,Get-ResourceTag -ResourceArn `$ItemID,Add-ResourceTag -ResourceArn `$ItemID -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
transfer,SectionName,Command,IDName,DescriptionName,tags,Get-ResourceTag -ResourceArn `$ItemID,Add-ResourceTag -ResourceArn `$ItemID -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment


Slow
logs,CloudWatch Log Groups,Get-CWLLogGroups,LogGroupName,LogGroupName,tags,Get-CWLLogGroupTag -LogGroupName `$ItemID,Add-CWLLogGroupTag -LogGroupName `$ItemID -Tag `$OutTag,InTagTypeB,OutTagTypeB,Name:Owner:AlwaysOn:Lifecycle:Environment
sqs,Simple Queue Service,(Get-SQSQueue  | select @{n='QueueUrl';e={`$_}}),QueueUrl,QueueUrl,tags,Get-SQSResourceTag -QueueUrl `$ItemID,Add-SQSResourceTag -QueueUrl `$ItemID -Tag `$OutTag,InTagTypeB,OutTagTypeB,Name:Owner:AlwaysOn:Lifecycle:Environment


Tag List 
es,ElasticSearch,Get-ESOrdermakerainNameList,OrdermakerainName,OrdermakerainName,tags,Get-ESTag -ARN `"arn:aws:es:us-east-1:`$OwnerID:Ordermakerain/`$ItemID`",Add-ESTag -ARN `"arn:aws:es:us-east-1:`$OwnerID:Ordermakerain/`$ItemID`" -TagList $OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
s3,S3 Buckets,Get-S3Bucket,BucketName,BucketName,TagName,Get-S3ObjectTagSet -ResourceArn `$ItemID,Write-S3BucketTagging -ResourceArn `$ItemID -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
s3,S3 Buckets,Get-S3Bucket,BucketName,tags,Get-S3BucketTagging -BucketName `$ItemID,Write-S3BucketTagging -BucketName `$ItemID -TagSet `$TagSet
s3,S3 Objects,Get-S3Bucket,BucketName,BucketName,TagName,Get-S3ObjectTagSet -ResourceArn `$ItemID,Write-S3BucketTagging -ResourceArn `$ItemID -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment

Not In Use
apigateway2,API Gateway2s,Get-AG2ApiList,IDName,DescriptionName,tags,Get-AG2Tag -ResourceArn `$ItemID,Add-AG2ResourceTag -ResourceArn `$ItemID -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
cloudfront,CloudFronts,Get-CFList,ClusterID,ClusterName,tags,Get-CFResourceTag -ResourceArn `$ItemID,Add-CFResourceTag -ResourceArn `$ItemID -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
glue,Glue Crawler,Get-GLUECrawlerNameList | select @{n='CrawlerName';e={`$_}},CrawlerName,CrawlerName,tags,Get-GLUETag -ResourceArn `$ItemID, Add-GLUEResourceTag -ResourceArn `$ItemID -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment


Unusual
athena,Athena,Get-ATHNamedQueryList | %{Get-ATHNamedQuery -NamedQueryId $_},NamedQueryId,Name,tags,Get-ATHResourceTag -ARN `"arn:aws:es:us-east-1:`$OwnerID:Ordermakerain/`$ItemID`",Add-ATHResourceTag -ResourceArn `$ItemID -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
backup,Backups,Get-BAKBackupJobList,BackupVaultArn,(Get-BAKBackupPlan -BackupPlanId $list[0].CreatedBy.BackupPlanId).BackupPlan.BackupPlanName,tags,Get-BAKResourceTag -ResourceArn `$ItemID,Add-BAKResourceTag -ResourceArn `$ItemID -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment
cloudformation,CloudFormation,Get-CFNStack,StackId,StackName,tags,`$CommandOutput.Tags,Update-CFNStack  `$ItemID -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment (Tags can only be applied when launching a stack? "Either Template URL or Template Body must be specified.")
kms,Key Management Service,Get-KMSKeyList,KeyId,KeyArn,tags,Get-KMSResourceTag -KeyId `$ItemID,Add-KMSResourceTag -KeyId `$ItemID -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment - ($OutTag = @{}; $OutTag.TagKey = "AlwaysOn"; $OutTag.TagValue = "Y";Add-KMSResourceTag -KeyId $list[0].keyid -Tag $OutTag;Add-KMSResourceTag : User: arn:aws:iam::`$OwnerID:user/Stephen.Gillie is not authorized to perform: kms:TagResource)
lambda,SectionName,Command,IDName,DescriptionName,tags,Get-ResourceTag -ResourceArn `$ItemID,Add-ResourceTag -ResourceArn `$ItemID -Tag `$OutTag,InTagTypeA,OutTagTypeA,Name:Owner:AlwaysOn:Lifecycle:Environment


#>

$TabLine = " `t| "
$DoubleTabLine = " `t`t| "
$Spacer = ": "
$Comma = ","

Function Get-NewService ($Cmd) {
	$CmdSB = [Scriptblock]::Create($Cmd)
	#Examine command output
	$List = & $CmdSB
	$List[0] |fl

	$IDField = Read-Host "ID"
	$DescField = Read-Host "Description"
	$tags = Read-Host "tags"

	#Check these fields
	$List|select $IDField,$DescField | ft
	if ($tags -ne ""){
		$List|select $IDField,$tags | ft
	}
	
	#Verify
	$DescField = Read-Host "Verify Description ( $DescField )"
	
	#Create Name OutTag from the Description
	$OutTag = Generate-GenericCoTag -ItemName $List[0].$DescField -Key Name -OutTagType $OutTagType 
	$OutTag
	write-host "ID: $IDField"
	write-host "Description: $DescField"
	if ($tags -ne ""){
		write-host "tags: $tags"
		write-host "RouteItemTags" 
	}else{
		write-host "RouteSeparateTags" 
	}
	
	#Discover ARN format
	#$ItemID = $List[0].id
	#$arn = "arn:aws:apigateway:us-east-1::/restapis/$ItemID"
	#Add-AGResourceTag -ResourceArn $arn -Tag $OutTag
	
	$TagCommand = Read-Host "TagCommand"
	$TagCommandSB = [Scriptblock]::Create($TagCommand)
	$ItemID = $List[0].$IDField
	& $TagCommandSB
}

Function Check-Service {
	Param (
		$APIName,
		$Key="Owner"
	)
	$section = Get-AWSSections | where {$_.APIName -eq $APIName}
	$APIname = $section.APIname
	$TagName = $section.TagName
	$OutTagType = $section.OutTagType
	$SectionName = $section.SectionName
	$Command = [Scriptblock]::Create($section.Command)
	$TagSourceCommand = [Scriptblock]::Create($section.TagSourceCommand)
	$TagApplyCommand = [Scriptblock]::Create($section.TagApplyCommand)
	$IDName = $section.IDName
	$DescriptionName = $section.DescriptionName
	$TagKeyList = $section.SectionTags -split ":"
	$TagRoute = $section.TagRoute

	$CommandOutput = & $Command
	$CommandOutputSectionItemIDs = $CommandOutput.$IDName | sort -unique
	
	#Examine command output
	$CommandOutput[0] |fl

	Write-Host "IDName: $IDName"
	Write-Host "DescriptionName: $DescriptionName"
	Write-Host "TagName: $TagName"

	#Check these fields
	if ($IDName -eq $DescriptionName){
		$CommandOutput[0..100]|select $IDName | ft
	} else {
		$List[0..100]|select $IDName,$DescriptionName | ft
	}
	if ($TagRoute -eq "RouteItemTags"){
		$List[0..100]|select $IDName,$tags | ft
	}
		
	#Create Name OutTag from the Description
	Write-Host "`$CommandOutput = $Command"
	Write-Host "`$OutTag = Generate-GenericCoTag -ItemName `"$($CommandOutput[0].$DescriptionName)`" -Key $Key -OutTagType $OutTagType "
	Write-Host "`$ItemID = `$CommandOutput[0].$IDName"
	Write-Host "$TagApplyCommand"

}

Function Check-ServiceTag {
	Param (
		$APIName,
		$Key="Owner"
	)
	$section = Get-AWSSections | where {$_.APIName -eq $APIName}
	$APIname = $section.APIname
	$TagName = $section.TagName
	$OutTagType = $section.OutTagType
	$InTagType = $section.InTagType
	$SectionName = $section.SectionName
	$Command = [Scriptblock]::Create($section.Command)
	$TagSourceCommand = [Scriptblock]::Create($section.TagSourceCommand)
	$TagApplyCommand = [Scriptblock]::Create($section.TagApplyCommand)
	$IDName = $section.IDName
	$DescriptionName = $section.DescriptionName
	$TagKeyList = $section.SectionTags -split ":"
	$TagRoute = $section.TagRoute

	#Examine command output
	$CommandOutput = & $Command

	Foreach ($item in $CommandOutput) {
		$ItemID = $item.$IDName
		$TagSourceCommandOutput = & $TagSourceCommand

		switch ($InTagType){
			"InTagTypeA" {
				$ItemName = Get-NameFromTags $TagSourceCommandOutput -OutTagType $OutTagType
			}
			"InTagTypeB" {
				$ItemName =  $TagSourceCommandOutput.Name
			}
			default {
			}
		}#end switch TagType
		$OutTag = Generate-GenericCoTag -Key $Key -ItemName $ItemName -OutTagType $OutTagType
		If (!$OutTag.Value) {
			Write-Host "$ItemName"
		}
	}#end foreach item
}
#endregion

#region Tagging Utilities
Function Add-ENINameTags($TagKey="Name") {
	$eni = Get-EC2NetworkInterface;
	$ec2 = (Get-EC2Instance).instances
	Write-Host "Checking $($eni.count) network interfaces against $($ec2.count) server instances."
	$tagged = @();
	foreach ($e in $eni) {
		if ($e.tagset | where {$_.key -match $TagKey}) {
			$tagged += $e
		}
	}#end foreach e
	$untagged = (diff $eni $tagged | where {$_.SideIndicator -eq "<="}).inputobject
	Write-Host "Found $($tagged.count) tagged items and $($untagged.count) untagged items."
	foreach ($u in $untagged ){
		if ($u.Description.Length -gt 0){
			$name = $u.Description
		} elseif ($u.NetworkInterfaceId){
			$name = Get-NameFromTags ($ec2 | where {$_.PrivateIpAddress -eq $u.PrivateIpAddress}).tags  -OutTagType OutTagTypeA
		} else {
			write-host "No Name"
		}
		if ($name){
			$OutTag = Generate-GenericCoTag -ItemName $name -Key $TagKey -OutTagType OutTagTypeA
		}
		if ($outtag.value){
			New-EC2Tag -Resource $u.NetworkInterfaceId -Tag $OutTag
			Write-Progress -Activity ($u.NetworkInterfaceId) -Status ($outtag.value) -PercentComplete (($untagged.IndexOf($u)/$untagged.count))
		}
	}#end foreach u
}#end function

Function Remove-EC2SpecificTag {
	Param (
		$key = "Owner",
		$value="DeveloperTeam", 
		$ResourceID
	)
	$TagToRemove = @{}
	$TagToRemove.Key = $key
	$TagToRemove.Value = $value
	Remove-EC2Tag -Resource $ResourceID -Tag $TagToRemove -force
}

Function Get-Untagged {
	Param (
		$APIname,
		$key = "Owner"
	)

	$section = (Get-AWSSections) | where {$_.APIname -eq $APIname}
	$TagName = $section.TagName
	$OutTagType = $section.OutTagType
	$SectionName = $section.SectionName
	$Command = [Scriptblock]::Create($section.Command)
	$TagSourceCommand = [Scriptblock]::Create($section.TagSourceCommand)
	$TagApplyCommand = [Scriptblock]::Create($section.TagApplyCommand)
	$IDName = $section.IDName
	$DescriptionName = $section.DescriptionName

	$CommandOutput = & $Command
	$CommandOutputSectionItemIDs = $CommandOutput.$IDName | sort -unique
	$TagSourceCommandOutput = & $TagSourceCommand
	$TagSourceSectionItemIDs = $TagSourceCommandOutput.$IDName | sort -unique


	$untagged = $CommandOutput | where{$_.tags.keys -notcontains $key}
	switch ($OutTagType) {
		"OutTagTypeA" {
			($untagged.tags | where {$_.key -eq 'Name'}).value;
		}
		"OutTagTypeB" {
			$untagged.tags.Name
		}
		Default {}
	}#end switch OutTagType
}

Function Remove-ServiceTag {
	Param (
		$APIname,
		$key = "Owner",
		$value="DeveloperTeam"
	)

	$section = (Get-AWSSections) | where {$_.APIname -eq $APIname}
	$TagName = $section.TagName
	$OutTagType = $section.OutTagType
	$SectionName = $section.SectionName
	$Command = [Scriptblock]::Create($section.Command)
	$TagSourceCommand = [Scriptblock]::Create($section.TagSourceCommand)
	$TagApplyCommand = [Scriptblock]::Create($section.TagApplyCommand)
	$IDName = $section.IDName
	$DescriptionName = $section.DescriptionName

	$CommandOutput = & $Command
	$CommandOutputSectionItemIDs = $CommandOutput.$IDName | sort -unique
	$TagSourceCommandOutput = & $TagSourceCommand
	$TagSourceSectionItemIDs = $TagSourceCommandOutput.$IDName | sort -unique

	$items = $CommandOutput | where {$_.($TagName).key -match $key};
	$i=0;
	Foreach ($item in $items) {
		try{
			Remove-EC2SpecificTag -key $key -value $value -ResourceID $item.($IDName);
		}catch{
			write-host "e" -NoNewline;
		}
		$i++;
		Write-Progress -Activity $key -Status $item.($IDName) -PercentComplete (($i/$items.count)*100)
	}

}

Function Generate-GenericCoTag {
	Param (
		$Key,
		$ItemName,
		$OutTagType
	)
	$OutTag = @{};
	switch ($OutTagType) {
		"OutTagTypeA" {
			$OutTag.Key = $Key;
			$OutTag.Value = Get-GenericCoTag -TagKey $Key -ItemName $ItemName
		}
		"OutTagTypeB" {
			$OutTag.$Key = Get-GenericCoTag -TagKey $Key -ItemName $ItemName
		}
		default {
		}
	}
	$OutTag
}

Function Write-MissingTagOutput {
	Param (
		$TagKeyList,
		$ToFixCount,
		$FixedCount,
		$ErrCount
	)
	Foreach ($TagKey in $TagKeyList) {
		[int]$ToFix = $ToFixCount.($TagKey)
		[int]$Fixed = $FixedCount.($TagKey)
		[int]$Err = $ErrCount.($TagKey)
		$fgcolor = "green"
		if ($ToFix -gt 0) {
			$fgcolor="red"
		}
		write-host $ToFix -nonewline -foregroundcolor $fgcolor
		if ($Fixed -gt 0) {
			write-host $Comma -nonewline
			write-host $Fixed -nonewline -foregroundcolor cyan
		}
		if ($Err -gt 0) {
			write-host $Comma -nonewline
			write-host $Err -nonewline
		}
		#If less than 5 digits of numbers and comma
		if ((($ToFix.ToString()+$Fixed.ToString()).length -lt 4) -and ($Err -eq 0)) {
			write-host $DoubleTabLine -nonewline
		} else {
			write-host $TabLine -nonewline
		}
	}#end Foreach TagKey
	Write-host ""
}

Function Write-MissingTagHeader {
	Param (
		$APIname,
		$CommandOutputCount
	)

		Switch ($APIName.length) {
			1 {
				$sectionstring = $APIname + $Spacer +$CommandOutputCount+$DoubleTabLine
			}
			2 {
				if ($CommandOutputCount -le 99) {
					$sectionstring = $APIname + $Spacer +$CommandOutputCount+$DoubleTabLine
				} else {
					$sectionstring = $APIname + $Spacer +$CommandOutputCount+$TabLine
				}
			}
			3 {
				if ($CommandOutputCount -le 9) {
					$sectionstring = $APIname + $Spacer +$CommandOutputCount+$DoubleTabLine
				} else {
					$sectionstring = $APIname + $Spacer +$CommandOutputCount+$TabLine
				}
			}
			default {
				$sectionstring = $APIname + $Spacer +$CommandOutputCount+$TabLine
			}
		}
		
		Write-host $sectionstring -nonewline
}

Function Test-MissingTagOutput {
	Param (
		$ToFix = 10,
		$Fixed = $ToFix,
		$Err
	)
	$ToFixCount = @{}
	$FixedCount = @{}
	$ToFixCount.test = $ToFix
	Write-MissingTagOutput -TagKeyList Test -ToFixCount $ToFixCount 
	$FixedCount.test = $ToFix
	$ToFixCount.test = $ToFix
	Write-MissingTagOutput -TagKeyList Test -ToFixCount $ToFixCount -FixedCount $FixedCount
	$ToFixCount.test = $Fixed
	Write-MissingTagOutput -TagKeyList Test -ToFixCount $ToFixCount 
	$FixedCount.test = $Fixed
	$ToFixCount.test = $Fixed
	Write-MissingTagOutput -TagKeyList Test -ToFixCount $ToFixCount -FixedCount $FixedCount
}

Function Convert-VolumeAttachmentToName ($inputString = (Get-Clipboard)){
	($inputString -split "[(]")[1] -replace "[)]","" |clip
}

$ec2 = @{}
Function Get-InstanceNameFromID {
	Param (
		$inputString = ((Get-Clipboard)[0])
	)
	if ($ec2.count -le 100) {
		$ec2 = (Get-EC2Instance).Instances
	}
	Get-NameFromTags -Tags ($ec2 | where {$_.instanceid -eq $inputString}).tags -OutTagType OutTagTypeA #|clip
}

Function Get-NameFromTags ($Tags,$OutTagType) {
	switch ($OutTagType) {
		"OutTagTypeA" {
			($Tags | where {$_.key -eq 'Name'}).value;
		}
		"OutTagTypeB" {
			$Tags.Name
		}
		Default {}
	}#end switch OutTagType
}

Filter Filter-NonTagChars {
	$_ = $_ -replace '[]]',"_"
	$_ = $_ -replace '[[]',"_"
	$_ = $_ -replace '[)]',"_"
	$_ = $_ -replace '[(]',"_"
	$_ = $_ -replace '[*]',"_"
	$_ = $_ -replace '[&]',"_"
	$_ = $_ -replace '[%]',"_"
	$_ = $_ -replace '[$]',"_"
	$_ = $_ -replace '[#]',"_"
	$_ = $_ -replace '[@]',"_"
	$_ = $_ -replace '[!]',"_"
	$_ = $_ -replace '[~]',"_"
	$_ = $_ -replace '[<]',"_"
	$_ = $_ -replace '[>]',"_"
	$_ = $_ -replace '[,]',"_"
	return $_
}
#endregion

#region AWS general
Function Clean-AWSVolumes {
	$APIName = "vol"
	$section = Get-AWSSections | where {$_.APIName -eq $APIName}
	$APIname = $section.APIname
	$TagName = $section.TagName
	$OutTagType = $section.OutTagType
	$SectionName = $section.SectionName
	$Command = [Scriptblock]::Create($section.Command)
	$TagSourceCommand = [Scriptblock]::Create($section.TagSourceCommand)
	$TagApplyCommand = [Scriptblock]::Create($section.TagApplyCommand)
	$IDName = $section.IDName
	$DescriptionName = $section.DescriptionName
	$TagKeyList = $section.SectionTags -split ":"
	$TagRoute = $section.TagRoute

	$CommandOutput = & $Command
	$CommandOutputSectionItemIDs = $CommandOutput.$IDName | sort -unique

	$detach = $CommandOutput | where {!$_.Attachment.InstanceID}
	foreach ($d in $detach) {
		$name = Get-NameFromTags $d.$TagName -OutTagType $OutTagType
		if ($name) {
			Write-Host "Volume $name" -nonewline
			if ($d.CreateTime -ge (Get-Date).AddDays(-7)) {
				If (($name -split " ") -notcontains "(Detached)") {
					$OutTag = Generate-GenericCoTag -Key Name -ItemName $name -OutTagType OutTagTypeA
					$OutTag.Value = "(Detached) " + $OutTag.Value
					#New-EC2Tag -Resource $item.VolumeID -Tag $OutTag
					if ($OutTag.Value) {
						try {
							$ItemID = $d.$IDName
							& $TagApplyCommand
					Write-Host " - Name updated" -nonewline
						} catch {
					Write-Host " - Error" -nonewline
						}
					}
				}
			} else {
				Write-Host " - Removing $($d.VolumeID)... " -nonewline
				$newsnap = New-EC2Snapshot -Description $name -VolumeId $d.VolumeID
				while ($newsnap.state -eq "pending") {
					$newsnap = Get-EC2Snapshot $newsnap.SnapshotId
					Write-Host " - Snapshot $($newsnap.state), sleeping 5 sec... " -nonewline
					sleep 5
				}
				Remove-EC2Volume -VolumeId $d[0].VolumeId -Force
				Write-Host " - Complete " -nonewline
			}#end if d
			Write-Host ""
		}#end if name
	}
}

Function Clean-AWSSnapshots {
	$APIName = "snap"
	$section = Get-AWSSections | where {$_.APIName -eq $APIName}
	$APIname = $section.APIname
	$TagName = $section.TagName
	$OutTagType = $section.OutTagType
	$SectionName = $section.SectionName
	$Command = [Scriptblock]::Create($section.Command)
	$TagSourceCommand = [Scriptblock]::Create($section.TagSourceCommand)
	$TagApplyCommand = [Scriptblock]::Create($section.TagApplyCommand)
	$IDName = $section.IDName
	$DescriptionName = $section.DescriptionName
	$TagKeyList = $section.SectionTags -split ":"
	$TagRoute = $section.TagRoute

	$Days = 30
	$CommandOutput = & $Command 
	$CommandOutputSectionItemIDs = $CommandOutput.$IDName | sort -unique
	
	#If the snapshot has (Detached) in the name and is older than 1 month, delete it.

	foreach ($Snapshot in $CommandOutput) {
		$name = Get-NameFromTags $Snapshot.$TagName -OutTagType $OutTagType
		Write-Host "Snapshot $name" -nonewline
		If (($name -split " ") -contains "(Detached)") {
			try{
				Remove-EC2Snapshot -SnapshotId $Snapshot.SnapshotId -Force
				Write-Host " - Removed" -nonewline -foregroundcolor green
			}catch{
				Write-Host " - Error" -nonewline -foregroundcolor red
			}
		}
		Write-Host ""
	}
}

Function Get-AWSHealthItems {
	Get-HLTHEventAggregate
}

Function Get-IAMUserCheck {
	$UserList = (Get-IAMUserList).username
	Foreach ($User in $UserList) {
		$User = $User -replace "@GenericCompany.com","" -replace "@GenericCompanyOldName.com",""
		write-host "$($User) - " -nonewline
		try{
			write-host (Get-ADUser $User).Enabled -foregroundcolor green
		}catch{
			$First,$Last = $User -split "[.]"		
			try{
				write-host (Get-AD2 $First $Last).Enabled -foregroundcolor green
			}catch{
				write-host "not found" -foregroundcolor red
			}
		}
	}
}

Function Get-WKSUserCheck {
	$UserList = (Get-WKSWorkspace).username
	Foreach ($User in $UserList) {
		write-host "$($User) - " -nonewline
		try{
			write-host (Get-ADUser $User).Enabled -foregroundcolor green
		}catch{
				write-host "not found" -foregroundcolor red
		}
	}
}

Function Get-AWSUpdates {
	[xml]$Feed = iwr https://aws.amazon.com/about-aws/whats-new/recent/feed/
	$FeedTitles = ($Feed.rss.channel.Item | sort title).title
	
	$out = @();
	Foreach ($FeedTitle in $FeedTitles) {
		$SplitLine = "" | select service,ability;
		$SplitLine.service,$SplitLine.ability=$FeedTitle -split " is now " -split " are now " -split " now supports " -split " now " -split " changes " -split " using " -split " announces " -split " automates " -split " introduces " -split " expands " -split " launches " -split " adds " -split " releases " -split " achieves " -split " simplifies " -split " makes it easier " -split " - " -split ": "  -replace "Announcing ","" -replace "Customers ","" -replace "New ","" -replace "Introducing ","" -replace "AWS ","" -replace "Amazon ","" -replace " Generally Available","" -replace "Generally Available","" -replace "  "," " -replace "^ ","";
		$out +=$SplitLine 
	}
	$out  | sort service 
}

<# Lambda Functions
https://docs.aws.amazon.com/awssupport/latest/user/aws-trusted-advisor-change-log.html
AWS Lambda Functions Using Deprecated Runtimes               L4dfs2Q4C5
AWS Lambda Functions with Excessive Timeouts                 L4dfs2Q3C3
AWS Lambda Functions with High Error Rates                   L4dfs2Q3C2
AWS Lambda VPC-enabled Functions without Multi-AZ Redundancy L4dfs2Q4C6
	#$b = (Get-ASATrustedAdvisorChecks -Language en |where {$_.description -match "lambda"})
	#$c = Get-ASATrustedAdvisorCheckResult -CheckId $b[0].id
#>

\Function Get-LamdaWOmultiAZ {
	$Lambdas = Get-ASATrustedAdvisorCheckResult -CheckId "L4dfs2Q4C6"
	$Lambdas.FlaggedResources.metadata | select-string "arn"
	
}

Function Get-LamdaWHighErrorRates {
	$Lambdas = Get-ASATrustedAdvisorCheckResult -CheckId "L4dfs2Q3C2"
	$Lambdas.FlaggedResources.metadata | select-string "arn"
	
}

Function Get-LamdaWHighTimeouts {
	$Lambdas = Get-ASATrustedAdvisorCheckResult -CheckId "L4dfs2Q3C3"
	$Lambdas.FlaggedResources.metadata | select-string "arn"
	
}

Function Get-LamdaWDepreciatedRuntimes {
	$Lambdas = Get-ASATrustedAdvisorCheckResult -CheckId "L4dfs2Q4C5"
	$Lambdas.FlaggedResources.metadata | select-string "arn"
	
}

Function Get-AD2 {
	Param(
		[string]$First,
		[string]$Last,
		[string]$FullName = ("$First $Last")
	); #end Param
	Get-ADUser -filter {name -eq $FullName}
	
}; #end Get-AD2
#endregion



