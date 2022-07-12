
function Compare-IAMPolicy {
	param(
		$FirstPolicyName,
		$SecondPolicyName
	);	
	
	$FirstPolicy = Decode-IAMPolicy $FirstPolicyName
	$SecondPolicy = Decode-IAMPolicy $SecondPolicyName
	
	$Diff = diff $FirstPolicy.action $SecondPolicy.action -includeequal
	
	$Compare = "" | select FirstPolicy,SecondPolicy,BothPolicies
	
	try {
		$Compare.FirstPolicy = Convert-IAMPolicyData $Diff "=>"
	} catch {}
	try {
		$Compare.SecondPolicy = Convert-IAMPolicyData $Diff "<="
	} catch {}
	try {
		$Compare.BothPolicies = Convert-IAMPolicyData $Diff  "=="
	} catch {}
	
	$Compare
}

function Convert-IAMPolicyData {
	param(
		$Diff,
		$SideIndicator,
		$ServiceHeader = "Service",
		$PermissionHeader = "Permission"
	);	
	$out = ConvertFrom-Csv ($Diff|where{$_.SideIndicator -eq $SideIndicator}).InputObject -delimiter : -Header $ServiceHeader,$PermissionHeader | group service | select count,name,@{n=$ServiceHeader;e={$_.group.permission}} | sort name
	$out
}

function Decode-IAMPolicy {
	param(
		$PolicyName,
		$IAMPolicyList = (Get-IAMPolicyList)
	);	
	$PolicyData = $IAMPolicyList | where {$PolicyName -eq ($_.arn -split "/")[1]}
	
	$Policy = ([System.Web.HttpUtility]::UrlDecode((Get-IAMPolicyVersion -PolicyArn $PolicyData[0].arn -VersionId $PolicyData[0].DefaultVersionId).Document) | ConvertFrom-Json).statement
	$Policy
}