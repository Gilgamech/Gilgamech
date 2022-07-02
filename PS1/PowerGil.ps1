
#region ModuleBuilding
New-Alias -Name instxt -Value Insert-TextIntoFile -Force
Function Insert-TextIntoFile {
<#
.SYNOPSIS
	Inserts the supplied text into the target module at the listed line number.
.DESCRIPTION
	Author	: Gilgamech
	Last edit: 5/29/2016
.EXAMPLE
	Insert-TextIntoFile (New-ForStatement Bees -top -bot ) .\New-ModuleFile.ps1 289 
#>
	[CmdletBinding()]
	Param(
		[Array]$InsertText,
		[String]$FileName = "NewModule.ps1",
		[ValidateRange(9,65535)]
		[int]$InsertAtLineNumber = 9, #Forces anti-clobber, leaves an empty line below the update log.
		[Array]$FileContents = (gc $FileName),
		[Array]$filesplit = ($FileContents[0].split(" ") | select -Unique),
		[String]$Copyright = ($filesplit[5] + " " + $filesplit[6] + " " + $filesplit[7] + " " + $filesplit[8] + " " + $filesplit[9]),
		[Array]$FileOutput = $FileContents[0.. ($InsertAtLineNumber -1)],
		[int]$build = $filesplit[3],
		[String]$dtstamp = (get-date -f s)
	); #end Param
	
	#Finish adding text to FileOutput.
	if ($InsertText) {
		$build += 1
		Write-Host -f green "$FileName build incremented to $build."
		
		#3. Rewrite top line.
		$FileOutput[0] = "# $FileName Build: $build $dtstamp $Copyright"
		
		#Rotate lines 4-7 up one line.
		for ($i = 4 ; $i -le 7 ; $i++) {
			$FileOutput[($i-1)] = $FileOutput[$i]
		}; #end for i
		
		#Add this change as a new line 7.
		$FileOutput[7] = "# $build : $InsertAtLineNumber : $($inserttext -replace('-','_') -replace('\(','_') -replace('\)','_') -replace('\{','_') -replace('\}','_') -replace('\s',' '))"

	$FileOutput += $InsertText 
	$FileOutput += $FileContents[($InsertAtLineNumber) ..($FileContents.Length)] 
	}; #end if InsertText
	
	#Append InsertText to the bottom of FileOutput, then the rest of the FileContents.
	#Write to file.
	[IO.File]::WriteAllLines((Resolve-Path $FileName), $FileOutput) 
	
	Send-UDPText -serveraddr $RemoteHost -serverport $RemotePort -Message ($dtstamp)
	#Every time it adds a line, push a backup. This way we don't backup for new modules?
	if ($InsertText) {
		Backup-Module $FileName
		
		Send-UDPText -serveraddr $RemoteHost -serverport $RemotePort -Message ($FileName)
		Send-UDPText -serveraddr $RemoteHost -serverport $RemotePort -Message ($InsertAtLineNumber)
		Send-UDPText -serveraddr $RemoteHost -serverport $RemotePort -Message ($InsertText)
	}; #end if InsertText
	
	Send-UDPText -serveraddr $RemoteHost -serverport $RemotePort -Message ("Clipboard: " + (Get-Clipboard))
}; #end Insert-TextIntoFile

New-Alias -Name insop -Value Insert-OperationIntoFunction -Force
Function Insert-OperationIntoFunction {
	Param(
		[Parameter(Position=0)]
		[ValidateSet("If","For","Foreach","Where","While","Try","Switch","ElseIf",$null)]
		[String]$OperationType,
		[ValidateSet("String","char","byte","int","long","bool","decimal","single","double","DateTime","XML","Array","hashtable","object","Switch")]
		[Parameter(Position=1)]
		[String]$ParameterType,
		[Parameter(Position=2)]
		[String]$FunctionVariable = "FunctionVariable",
		[ValidateSet("Equal","NotEqual","GreaterThanOrEqual","GreaterThan","LessThan","LessThanOrEqual","Like","NotLike","Match","NotMatch","Contains","NotContains","Or","And","Not","In","NotIn","Is","IsNot","As","BinaryAnd","BinaryOr","Modulus")]
		[String]$ComparisonOperator, 
		[String]$ReferenceVariable,
		[Parameter(Position=3)]
		[Array]$ScriptBlock,
		[String]$ElseScriptBlock, #only works with if...and it's the Catch for try-catch.
		[Parameter(Position=4)]
		[String]$FunctionName = "Insert-`OperationIntoFunction",
		[Array]$FoundFunction = (Find-Function $FunctionName),
		[Parameter(Position=5)]
		[int]$InsertAtLineNo = ($FoundFunction.EndLine - 2),
		$FileName = $FoundFunction.FileName,
		[int]$TabLevel = ((((gc $FileName)[($InsertAtLineNo - 1)]  |  Select-String `t -all).matches | measure).count ),
		$FunctionStatementOptions = @{
			OperatorVar  = $OperationType 
			FunctionVariable = $FunctionVariable 
			TabLevel = $TabLevel
		}, #end FunctionStatementOptions
		$PrameterStatementOptions = @{
			TopHeaderRemoved = $True 
			BottomHeaderRemoved = $True
		}, #end FunctionStatementOptions
		[Switch]$Not,
		[Switch]$SetMandatoryParameter,
		[String]$DefaultValueForParameter,
		[int]$PositionValueOfParameter,
		[Array]$ParameterValidateSetList,
		[Switch]$SetValueFromPipeline,
		[String]$SetValueFromPipelineByPropertyName,
		[Switch]$CmdletBind
	); #end Param

	if ($FileName.gettype() -eq "Array") {
		Write-Host "Function exists in multiple files, please specify one:";
		$FileName
		break
	}; #end if FileName.Length
	
	#If no ParameterType, leave that section blank.
	if (($ParameterType)) {
		[Array]$Parameters = (Get-Command $FunctionName).Parameters.keys
		
		if ($Parameters -notcontains $FunctionVariable) {
			if (($FoundFunction.ParamEndLine -ge $FoundFunction.ParamStartLine) -AND ($FoundFunction.ParamEndLine -le $FoundFunction.ParamEndLine)) { 
				$PrameterStatementOptions += @{
					ParameterType = $ParameterType 
				}; #end PrameterStatementOptions

				if ($SetMandatoryParameter) {
					$PrameterStatementOptions += @{
						SetMandatory = $True 
					}; #end PrameterStatementOptions
				}; #end if SetMandatoryParameter
				if ($DefaultValueForParameter) {
					$PrameterStatementOptions += @{
						DefaultValue = $DefaultValueForParameter 
					}; #end PrameterStatementOptions
				}; #end if DefaultValueForParameter
				if ($PositionValueOfParameter) {
					$PrameterStatementOptions += @{
						PositionValue = $PositionValueOfParameter 
					}; #end PrameterStatementOptions
				}; #end if PositionValueOfParameter
				if ($ParameterValidateSetList) {
					$PrameterStatementOptions += @{
						ValidateSetList = $ParameterValidateSetList 
					}; #end PrameterStatementOptions
				}; #end if ParameterValidateSetList
				if ($SetValueFromPipeline) {
					$PrameterStatementOptions += @{
						SetValueFromPipeline = $True 
					}; #end PrameterStatementOptions
				}; #end if SetValueFromPipeline
				if ($SetValueFromPipelineByPropertyName) {
					$PrameterStatementOptions += @{
						SetValueFromPipelineByPropertyName = $SetValueFromPipelineByPropertyName 
					}; #end PrameterStatementOptions
				}; #end if SetValueFromPipelineByPropertyName

				
				if ($CmdletBind) {
					$PrameterStatementOptions += @{
						CmdletBind = $True 
					}; #end PrameterStatementOptions
				}; #end if CmdletBind
				if ($SetMandatory) {
					$PrameterStatementOptions += @{ 
						SetMandatory = $True 
					}; #end PrameterStatementOptions
				}; #end if SetMandatory
				if ($FunctionVariable) {
					$PrameterStatementOptions += @{ 
						ParameterName = $FunctionVariable 
					}; #end PrameterStatementOptions
				}; #end if FunctionVariable
				if ($DefaultValue) {
					$PrameterStatementOptions += @{ 
						DefaultValue = $DefaultValue 
					}; #end PrameterStatementOptions
				}; #end if DefaultValue
				
				$ParameterBlock = New-Parameter @PrameterStatementOptions
				Write-Host -f yellow "Adding Parameter $FunctionVariable at line $($FoundFunction.ParamEndLine)."	
				Insert-TextIntoFile $ParameterBlock $FileName $FoundFunction.ParamEndLine
				
			} else {
				Write-Host -f red "Error: ParameterLine $($FoundFunction.ParamEndLine) was outside function $FunctionName's top line $($FoundFunction.ParamStartLine) and bottom line $($FoundFunction.ParamEndLine).`nThe `#end `Param section may be missing."	
			}; #end if InsertAtLineNo
		} else {
			Write-Host -f y "Parameter $FunctionVariable already exists, skipping."	
		}; #end if Parameters
	} else {
		Write-Host -f y "No ParameterType specified, skipping."	
	}; #end if ParameterType
		
	if ($OperationType) {
		#FunctionGuard
		if (($InsertAtLineNo -ge $FoundFunction.ParamEndLine) -AND ($InsertAtLineNo -le $FoundFunction.EndLine)) { 
			#If no OperationType, leave that section blank.
			if ($Not) {
				$FunctionStatementOptions += @{
					Not = $Not
				}; #end if ComparisonOperator
			}; #end if Not
			if ($ComparisonOperator) {
				$FunctionStatementOptions += @{
					ComparisonOperator = $ComparisonOperator
				}; #end FunctionStatementOptions
			}; #end if ComparisonOperator
			if ($ReferenceVariable) {
				$FunctionStatementOptions += @{
					ReferenceVariable = $ReferenceVariable
				}; #end FunctionStatementOptions
			}; #end if ReferenceVariable
			if ($ScriptBlock) {
				$FunctionStatementOptions += @{
					ScriptBlock = $ScriptBlock
				}; #end FunctionStatementOptions
			}; #end if ScriptBlock
			if ($ElseScriptBlock) {
				$FunctionStatementOptions += @{
					ElseScriptBlock = $ElseScriptBlock
				}; #end FunctionStatementOptions
			}; #end if ElseScriptBlock
			
			$TextBlock = New-FunctionStatement @FunctionStatementOptions
			Write-Host -f yellow "Adding operation ""$OperationType $FunctionVariable"" at line $InsertAtLineNo."	
			Insert-TextIntoFile $TextBlock $FileName $InsertAtLineNo
			
			#If no OperationType, leave that section blank.
		} else {
			Write-Host -f y "InsertAtLineNo $InsertAtLineNo was outside function $FunctionName's top line $($FoundFunction.ParamEndLine) and bottom line $($FoundFunction.EndLine)"	
		}; #end if InsertAtLineNo
	} else {
		Write-Host -f y "No OperationType specified, skipping."	
	}; #end if OperationType
	
}; #end Insert-OperationIntoFunction

Function Rebuild-Parameters {
	Param(
		[String]$FunctionName = "Rebuild-Parameters",
		[Array]$Function = (Find-Function $FunctionName),
		[Switch]$GilFile
	); #end Param
	
	#Build Parameter list - throws out comments.
	$PoramList = ($Function.Parameters.split("#") | Select-String '[$]')
	$FirstParameter = ([String]$PoramList[0]).split(""" `[`]`t`=,'$#") | select -unique
	$LastParameter = ([String]$PoramList[-1]).split(""" `[`]`t`=,'$#") | select -unique
	
	#If GilFile, return the commands in GilFile format.
	if ($GilFile) {
		
		Foreach ($Poramer in $PoramList) {
			$PoramerSplit = ([String]$Poramer).split(""" `[`]`t`=,'$`#") | select -unique
			if ($PoramerSplit[2] -match $FirstParameter[2]) {
				"New-Parameter $($PoramerSplit[2]) $($PoramerSplit[1]) -default ""$($PoramerSplit[3..99] -Join ' ')"" -bot"
			} elseif ($PoramerSplit[2] -match $LastParameter[2]) {
				"New-Parameter $($PoramerSplit[2]) $($PoramerSplit[1]) -default ""$($PoramerSplit[3..99] -Join ' ')"" -top"
			} else {
				"New-Parameter $($PoramerSplit[2]) $($PoramerSplit[1]) -default ""$($PoramerSplit[3..99] -Join ' ')"" -top -bot"
			}; #end if Poramer
		}; #end Foreach Poramer
	
	} else {
	#If not GilFile, return the actual Param section.
		Foreach ($Poramer in $PoramList) {
			$PoramerSplit = ([String]$Poramer).split(""" `[`]`t`=,'$") | select -unique
			#Rewrite so the Default section splits on the = symbol, and doesn't default unless it has those. And use the feature set thing.
			if ($PoramerSplit[2] -match $FirstParameter[2]) {
				New-Parameter $PoramerSplit[2] $PoramerSplit[1] -default ($PoramerSplit[3..99] -Join " ") -bot
			} elseif ($PoramerSplit[2] -match $LastParameter[2]) {
				New-Parameter $PoramerSplit[2] $PoramerSplit[1] -default ($PoramerSplit[3..99] -Join " ") -top 
			} else {
				New-Parameter $PoramerSplit[2] $PoramerSplit[1] -default ($PoramerSplit[3..99] -Join " ") -top -bot
			}; #end if Poramer
		}; #end Foreach Poramer
	}; #end if 	
}; #end Rebuild-Parameters

#$VariableInit = ($Oper | Select-String "[$][a-zA-Z][a-zA-Z0-9] [=]" -all).LineNumber[0]
Function Rebuild-Operations {
	Param(
		[String]$FunctionName = "Rebuild-Operations",
		[Array]$Function = (Find-Function $FunctionName),
		[Switch]$GilFile
	); #end Param
	
	$OperList = ($Function.Process | Select-String '[{]$') # '[(][$][\w*]' -AllMatches)
	$FirstOperation = ([String]$OperList[0]).split("""() `[`]`t`=,'$`{`}") | select -unique
	$LastOperation = ([String]$OperList[-1]).split("""() `[`]`t`=,'$`{`}") | select -unique
	
	#If next is elseif, make this -else
	
	#If GilFile, return the commands in GilFile format.
	if ($GilFile) {
		
		Foreach ($Oper in $OperList) {
			$OperSplit = ([String]$Oper).split("""() `[`]`t`=,'$`{`}") | select -unique
			if ($OperSplit[2] -match $FirstOperation[2]) {
				"nfs $($OperSplit[1]) $($OperSplit[2]) "# -default ""$($OperSplit[3..99] -Join ' ')"" -bot"
			} elseif ($OperSplit[2] -match $LastOperation[2]) {
				"nfs $($OperSplit[1]) $($OperSplit[2]) "#default ""$($OperSplit[3..99] -Join ' ')"" -top"
			} else {
				"nfs $($OperSplit[1]) $($OperSplit[2]) "#default ""$($OperSplit[3..99] -Join ' ')"" -top -bot"
			}; #end if Oper
		}; #end Foreach Oper
	
	} else {
	#If not GilFile, return the actual Param section.
		Foreach ($Oper in $OperList) {
			$OperSplit = ([String]$Oper).split("""() `[`]`t`=,'$`{`}") | select -unique
			#Rewrite so the Default section splits on the = symbol, and doesn't default unless it has those. And use the feature set thing.
			if ($OperSplit[2] -match $FirstOperation[2]) {
				New-FunctionStatement $OperSplit[1] $OperSplit[2] #default ($OperSplit[3..99] -Join " ") -bot
			} elseif ($OperSplit[2] -match $LastOperation[2]) {
				New-FunctionStatement $OperSplit[1] $OperSplit[2] #default ($OperSplit[3..99] -Join " ") -top 
			} else {
				New-FunctionStatement $OperSplit[1] $OperSplit[2] #default ($OperSplit[3..99] -Join " ") -top -bot
			}; #end if Oper
		}; #end Foreach Oper
	}; #end if GilFile
}; #end Rebuild-Operations

Function New-ModuleFile {
<#
.SYNOPSIS
	Writes a new Function to a file.
.DESCRIPTION
	Author	: Gilgamech
	Last edit: 5/8/2016
.EXAMPLE
	New-Function -FileName .\PowerShiriAdmin.ps1
#>
	Param(
		[String]$FileName = "NewModule.ps1",
		[String]$Copyright =" Copyright Gilgamech Technologies", #Default to GT ;)
		[int]$build = 0,
		[String]$UpdatePath = $FileName,
		#[String]$FilePath = (resolve-path $FileName)
		[String]$dtstamp = (get-date -f s),
		[Switch]$AutoLoad
	); #end Param
	
	if ($FileName.substring($FileName.Length - 4,4) -ne ".ps1") {
		$FileName += ".ps1"
	}; #end if FileName.substring($FileName.Length - 4,4)
	
	if (!($FilePath)) {
		$FilePath = (get-location).path + "\" + $FileName
	}; #end if FilePath

	New-Item -ItemType File -Path $FileName
	Insert-TextIntoFile  -FileName $FileName -FileContents $FileContents
	Write-Host -f green "$FileName build $build created."
	
	#Copy to builds folder with build number appended as extension.
	Backup-Module -ModuleName $FileName -build $build
	#New-ModuleFile adds the module to your Profile for auto-loading!
	if (!($AutoLoad)) {
		if ((gc $PROFILE) -notcontains "Import-Module $FilePath") {
			Insert-TextIntoFile "Import-Module $FilePath" $PROFILE (($PROFILE).Length)
		}; #end if (gc $PROFILE)
		Restart-PowerShell
	}; #end if AutoLoad
	
}; #end New-ModuleFile

New-Alias -name nf2 -value New-Function -Force
Function New-Function {
<#
.SYNOPSIS
	Writes a new Function to a file.
.DESCRIPTION
	Author	: Gilgamech
	Last edit: 5/8/2016
.EXAMPLE
	New-Function .\PowerShiriAdmin.ps1 289 -nos
#>
	Param(
		[Parameter(Position=0)]
		[String]$FunctionName = "New-Function",
		[Parameter(Position=1)]
		[Array]$ScriptBlock,
		[Switch]$Filter,
		[Switch]$Header
	); #end Param
	[String]$FunctionContents = ""
	[String]$TabVar = ("`t") 
	[String]$NewLineVar = "`n"
#region fold this damn thing.
	$FunctionHeader = @"
<#
.SYNOPSIS
	Inserts the supplied text into the target module at the listed line number.
.DESCRIPTION
	Author: Gilgamech
	Last edit: 5/9/2016
.Parameter Frequency
	Required.
	VMWare Performance Graph from which the CPU Ready value was taken.
.Parameter CPUReadyValue
	Required.
	CPU Ready value from the VMWare Performance Graph. 
.EXAMPLE
	New-FunctionStatement .\PowerShiriAdmin.ps1 289 -nos
.INPUTS
	[String]
	[int]
	[Switch]
.OUTPUTS
	[String]
[int]
.LINK
	https://kb.vmware.com/selfservice/microsites/search.do?language=en_US&cmd=displayKC&externalId=2002181
#>
"@
#endregion
	
	if ($Header) {
		$FunctionContents += $FunctionHeader + $NewLineVar
	}; #end if 
	
	if ($Filter) {
		$FunctionContents += "Filter $FunctionName {" + $NewLineVar
	} else {
		$FunctionContents += "Function $FunctionName {" + $NewLineVar
	}; #end if Filter
	$FunctionContents += $TabVar + "" + $NewLineVar
	if ($ScriptBlock) {
		Foreach ($ScriptBloc in $ScriptBlock.split("`n")) {
			$FunctionContents += $TabVar + $ScriptBloc + $NewLineVar
		}; #end Foreach ScriptBlock
	}; #end if ScriptBlock
	$FunctionContents += $TabVar + "" + $NewLineVar
	$FunctionContents += $NewLineVar
	$FunctionContents += "}; #end $FunctionName"
	
	return $FunctionContents

}; #end New-Function

Function New-Parameter {
	Param(
		[Parameter(Position=1)]
		[Array]$ParameterName = "Variable1",
		[Parameter(Position=2)]
		[ValidateSet("String","char","byte","int","long","bool","decimal","single","double","DateTime","xml","Array","hashtable","object","Switch")]
		[String]$ParameterType,
		[Parameter(Position=3)]
		[int]$PositionValue,
		[Array]$ValidateSetList,
		[Switch]$SetMandatory,
		[String]$DefaultValue, # = 'DefaultValue',
		[String]$SetValueFromPipelineByPropertyName,
		[Switch]$SetValueFromPipeline,
		[Switch]$OneLiner,
		[Switch]$CmdletBind,
		[Switch]$TopHeaderRemoved,
		[Switch]$BottomHeaderRemoved,
		[Switch]$Clipboard,
		[Switch]$NoComma
	); #end Param
	$CommaVar = ","
	
	if (!($OneLiner)) {
		$NewLineVar = "`r`n"
		$TabVar = "`t"
	}; #end if OneLiner
	
	if (!($TopHeaderRemoved)) {
	
		if ($CmdletBind) {
			$NewParameterOutString += $TabVar + "[CmdletBinding()]" + $NewLineVar;
		}; #end if OneLiner
		
		$NewParameterOutString += $TabVar + "Param(" + $NewLineVar
		
		if ($PositionValue) {
			$PositionValue = 1
		}; #end if $PositionValue
		
	} else {
		$NewParameterOutString += ""
	}; #end if TopHeader
	
	Foreach ($ParameterNam in $ParameterName) {

		if (($SetMandatory) -OR ($PositionValue) -OR ($SetValueFromPipeline) -OR ($SetValueFromPipelineByPropertyName)  ) {
			$NewParameterOutString += $TabVar + $TabVar + "[Parameter("
		}; #end if ($SetMandatory) -OR ($PositionValue) -OR ($SetValueFromPipeline) -OR ($SetValueFromPipelineByPropertyName)
			
		if ($SetMandatory) {
			$NewParameterOutString += "Mandatory=`$$SetMandatory" 
			if (($PositionValue) -OR ($SetValueFromPipeline) -OR ($SetValueFromPipelineByPropertyName)  ) {
				$NewParameterOutString += $CommaVar
			}; #end if (($PositionValue) -OR ($SetValueFromPipeline) -OR ($SetValueFromPipelineByPropertyName)
			}; #end if $SetMandatory

		if ($PositionValue) {
			$NewParameterOutString += "Position=$PositionValue" 
			$PositionValue++
			if (($SetValueFromPipeline) -OR ($SetValueFromPipelineByPropertyName)) {
				$NewParameterOutString += $CommaVar
			}; #end if ($SetMandatory) -OR ($SetValueFromPipeline) -OR ($SetValueFromPipelineByPropertyName)
		}; #end if $PositionValue

		if ($SetValueFromPipeline) {
			$NewParameterOutString += "ValueFromPipeline=`$$SetValueFromPipeline" 
			if ( ($SetValueFromPipelineByPropertyName)  ) {
				$NewParameterOutString += $CommaVar
			}; #end if ($SetMandatory) -OR ($PositionValue) -OR ($SetValueFromPipelineByPropertyName)
		}; #end if $SetValueFromPipeline

		if ($SetValueFromPipelineByPropertyName) {
			$NewParameterOutString += "ValueFromPipelineByPropertyName=$SetValueFromPipelineByPropertyName" 
			#if (($SetMandatory) -OR ($PositionValue) -OR ($SetValueFromPipeline)) {
			#	$NewParameterOutString += $CommaVar
			#}; #end if ($SetMandatory) -OR ($PositionValue) -OR ($SetValueFromPipeline)
		}; #end if $SetValueFromPipelineByPropertyName

		if ($($SetMandatory) -OR ($PositionValue) -OR ($SetValueFromPipeline) -OR ($SetValueFromPipelineByPropertyName)  ) {
			$NewParameterOutString += ")]" + $NewLineVar
		}; #end if ($SetMandatory) -OR ($PositionValue) -OR ($SetValueFromPipeline) -OR ($SetValueFromPipelineByPropertyName)

		if ($ValidateSetList) {
			$NewParameterOutString += $TabVar + $TabVar + "[ValidateSet("
			$NewParameterOutString += For ($i = 0 ; $i -lt $ValidateSetList.Length ; $i++) {
				if ($i -eq ($ValidateSetList.Length - 1)) {
				"""" + $ValidateSetList[$i] + """" 
				} else {
				"""" + $ValidateSetList[$i] + """" + $CommaVar
				}; #end if i
				
			
			}; #end For i
			$NewParameterOutString += ")]" + $NewLineVar
			
		}; #end if ValidateSetList
		$NewParameterOutString += $TabVar + $TabVar 
		if ($ParameterType) {
			$NewParameterOutString += "[$ParameterType]"
		}; #end if $ParameterType
		$NewParameterOutString += "`$$ParameterNam" 
		if ($DefaultValue) {
			$NewParameterOutString += " = ""$DefaultValue"""
		}; #end if DefaultValue
		
		if ($ParameterName[-1] -notmatch $ParameterNam) {
			$NewParameterOutString += $CommaVar + $NewLinevar
		}; #end if ParameterName[-1]
		
	}; #end Foreach ParameterName
		
	if (!($BottomHeaderRemoved)) {
		$NewParameterOutString += $NewLineVar + $TabVar +")`; #end `Param"
	} else {
		#The only way to get a trailing comma is if BottomHeaderRemoved and not NoComma
		if (!($NoComma)) {
			$NewParameterOutString += $CommaVar
		}; #end if NoComma
		
	}; #end if BottomHeader
	
	if ($Clipboard) {
		$NewParameterOutString | clip
	} else {
		return $NewParameterOutString
	}; #end if Clipboard
}; #end New-Parameter

New-Alias -name nfs -value New-FunctionStatement -Force
Function New-FunctionStatement {
<#
.SYNOPSIS
	Returns a new function statement. Like an If-Else or a Foreach.
.DESCRIPTION
	Author	: Gilgamech
	Last edit: 6/28/2016
.EXAMPLE
	New-FunctionStatement
#>
	Param(
		[ValidateSet("If","For","Foreach","Where","While","Try","Switch","ElseIf")]
		[String]$OperatorVar, # = 'if',
		[String]$FunctionVariable = "FunctionVariable",
		[ValidateSet("Equal","NotEqual","GreaterThanOrEqual","GreaterThan","LessThan","LessThanOrEqual","Like","NotLike","Match","NotMatch","Contains","NotContains","Or","And","Not","In","NotIn","Is","IsNot","As","BinaryAnd","BinaryOr","Modulus")]
		[String]$ComparisonOperator, 
		[String]$ReferenceVariable,
		[Array]$ScriptBlock,
		[String]$ElseScriptBlock, #only works with if.
		[String]$PreVariable,
		[ValidateRange(0,9)]
		[int]$TabLevel,
		[int]$StartValue = 1, #only works with For.
		[Switch]$OneLiner,
		[Switch]$TopHeaderRemoved,
		[Switch]$BottomHeaderRemoved,
		[Switch]$Clipboard,
		[Switch]$Not, #only works with if.
		[Switch]$ForDecriment, #only works with For.
		[Switch]$Pipeline,
		[Switch]$PipeEqual,
		[Switch]$PipePlus,
		[Switch]$SetVerbose,
		[ValidateSet("PowerShell", "Javascript")][String]$Language = "PowerShell",
		[Switch]$NoComma
	); #end Param
	Switch ($Language) {
		"PowerShell" {
		$PossibleOperators = @{
			"Equal" = "-eq"
			"NotEqual" = "-ne"
			"GreaterThanOrEqual" = "-ge"
			"GreaterThan" = "-gt"
			"LessThan" = "-lt"
			"LessThanOrEqual" = "-le"
			"Like" = "-like"
			"NotLike" = "-notlike"
			"Match" = "-match"
			"NotMatch" = "-notmatch"
			"Contains" = "-contains"
			"NotContains" = "-notcontains"
			"Or" = "-or"
			"And" = "-and"
			"Not" = "-not"
			"In" = "-in"
			"NotIn" = "-notin"
			"Is" = "-is"
			"IsNot" = "-isnot"
			"As" = "-as"
			"BinaryAnd" = "-band"
			"BinaryOr" = "-bor"
			"Modulus" = "%"
		}; #end PossibleOperators
	}; #end Switch PowerShell
	"Javascript" {
		$PossibleOperators = @{
			"Equal" = "=="
			"NotEqual" = "!=="
			"GreaterThanOrEqual" = "=>"
			"GreaterThan" = ">"
			"LessThan" = "<"
			"LessThanOrEqual" = "<"
			"Like" = "-like"
			"NotLike" = "-notlike"
			"Match" = "-match"
			"NotMatch" = "-notmatch"
			"Contains" = "-contains"
			"NotContains" = "-notcontains"
			"Or" = "-or"
			"And" = "&&"
			"Not" = "!"
			"In" = "-in"
			"NotIn" = "-notin"
			"Is" = "-is"
			"IsNot" = "-isnot"
			"As" = "-as"
			"BinaryAnd" = "-band"
			"BinaryOr" = "-bor"
			"Modulus" = "%"
		}; #end PossibleOperators
	}; #end Switch Javascript
		default {
	}; #end Switch default
	}; #end Switch Language

	#First things first, convert the ComparisonOperator into its output value.
	if ($ComparisonOperator) {
		$CompOp = $PossibleOperators[$ComparisonOperator]
	}; #end if ComparisonOperator
	
	if (!($ScriptBlock)) {
		$SB = $True
	}; #end if ScriptBlock
	
	<#
	#Need to sort this one out - usually a one-liner creeps into a multi-liner as we add functions, so it doesn't make much sense to one-liner everything. But it was a lot of work to make, so I don't want to just delete it. 
	if ($ScriptBlock) {
		#Reverse OneLiner Switch if ScriptBlock is longer than 1 line
		[int]$ScriptBlockLength = ([Array]$ScriptBlock.split("`n`r")).Length
		Write-Verbose $ScriptBlockLength
		if ([Array]$ScriptBlockLength -le 1) {
			if ($OneLiner) {
				Write-Verbose $OneLiner
				$OneLiner = $null
			} else {
				Write-Verbose "else"
				$OneLiner = $True
			}; #end if OneLiner
		}; #end if ScriptBlock.Length
	}; #end if ScriptBlock
	#>
	
	Switch ($Language) {
		"PowerShell" {
			[String]$VariableOperator = '$';
			[String]$Spacevar = " ";
			[String]$OpeningBracket = '{'
			[String]$ClosingBracket = '}'
			[String]$ElseVar = 'else'

			if ($OneLiner) {
				[String]$ClosingBracketOneLiner = '}'
			} else {
				[String]$SingleTabVar = "`t"
				[String]$TabVar = $SingleTabVar  * ($TabLevel)
				#[String]$NewLineVar = "`r`n"
				[String]$NewLineVar = "`n"
				[String]$ClosingBracketOneLiner = '}; #end' + $Spacevar + $OperatorVar + $Spacevar + $FunctionVariable
			}; #end if OneLiner

			$SBDelineationOpen = '"'
			$SBDelineationClose = '"'
			$PlaceholderFunOp = 'Write-Host -f green ' + $SBDelineationOpen
		}; #end Switch PowerShell
		"Javascript" {
			[String]$VariableOperator = '';
			[String]$Spacevar = " ";
			[String]$OpeningBracket = '{'
			[String]$ClosingBracket = '}'
			[String]$ElseVar = 'else'
			
			if ($OneLiner) {
				[String]$ClosingBracketOneLiner = '};'
			} else {
				[String]$SingleTabVar = "`t"
				[String]$TabVar = $SingleTabVar  * ($TabLevel)
				#[String]$NewLineVar = "`r`n"
				[String]$NewLineVar = "`n"
				[String]$ClosingBracketOneLiner = '}; // end' + $Spacevar + $OperatorVar + $Spacevar + $FunctionVariable
			}; #end if OneLiner
<#
#>
			$SBDelineationOpen = '("'
			$SBDelineationClose = '")'
			$PlaceholderFunOp = 'console.log' + $SBDelineationOpen
		}; #end Switch Javascript
		default {
		}; #end Switch default
	}; #end Switch Language
			
	If ($ForDecriment) {
		$ForIncVar = "--"		
	} else {
		$ForIncVar = "++"
	}; #end if ForDecriment

	if (($Not)) {
		$NotHeader =  $Spacevar + 'not'
		[String]$OpeningParenthesisVar = "(!("; 
		[String]$ClosingParenthesisVar = "))";
	} else {
		[String]$OpeningParenthesisVar = "("; 
		[String]$ClosingParenthesisVar = ")";
	}; #end if Not
			
	Switch ($OperatorVar)  { 
		"If" {
			if ($CompOp) {
				#Even if we're in an IF, if there's a CompOp set, and no RefVar, set a RefVar.
				if (!($ReferenceVariable)) {
					$ReferenceVariable = $($FunctionVariable.substring(0,(($FunctionVariable.Length)-1)))
				}; #end if ReferenceVariable

			}; #end if CompOp
			
			if ($SB) {
				$SBHeader = 'The variable' +  $Spacevar
				$NumHeader = 'is'
			}; #end if SB
			
		}; #end Switch If
		"Foreach" {
			if ($Pipeline -OR $PipeEqual) {
				$OpeningBracket = ""
				$ClosingBracket = ""
				$ClosingBracketOneLiner = ''
				
				#No FunVar!
				$FunctionVariable = ""
				$CompOp = ""
				$ReferenceVariable = ""
				#No script block!
				#$SB = $False
				#$ScriptBlock = $null
				
				#$NewFunctionOperation += $SpacevarCORV + $CompOp + $SpacevarCORV + $FunctionVariableWOperRV;
				
			} else {
					#if not Pipeline or PipeEqual
				$CompOp = 'in'
					#Even if we're in an IF, if there's a CompOp set, and no RefVar, set a RefVar.
				if (!($ReferenceVariable)) {
					$ReferenceVariable = $($FunctionVariable.substring(0,(($FunctionVariable.Length)-1)))
				}; #end if ReferenceVariable

				if ($SB) {
					$SBHeader = 'This is' +  $Spacevar
				}; #end if SB
				
				#We'll always need a RefVar, unless we're in an IF and one's not set.
				if (!($ReferenceVariable)) {
					$ReferenceVariable = $($FunctionVariable.substring(0,(($FunctionVariable.Length)-1)))
				}; #end if ReferenceVariable
			}; #end if Pipeline or PipeEqual
		}; #end Switch Foreach
		"For" {
			if (!($ReferenceVariable)) {
				$ReferenceVariable = $($FunctionVariable.substring(0,(($FunctionVariable.Length)-1)))
			}; #end if ReferenceVariable
			if (!($CompOp)) {
				#Even if we're in an IF, if there's a CompOp set, and no RefVar, set a RefVar.
				$CompOp = '-le'
			}; #end if CompOp

			if ($SB) {
				$NumHeader = 'number' +  $Spacevar
				#$ScriptBlock = ('Write-Host -f y "' + $ReferenceVariable.substring(0,1).toupper() + $ReferenceVariable.substring(1) + ' number $' + $ReferenceVariable + '"');
			}; #end if SB
			if (!($ReferenceVariable)) {
				$ReferenceVariable = $($FunctionVariable.substring(0,(($FunctionVariable.Length)-1)))
			}; #end if ReferenceVariable

		}; #end Switch For
		"Where" {
			#Need to change this one up - put brackets where parentheses are, and then no brackets below.
			[String]$OpeningParenthesisVar = '{'; 
			[String]$ClosingParenthesisVar = '}';
			
		}; #end Switch Where
		"While" {
			
		}; #end Switch While
		"Try"  {
			# TryCatch - swap out parens for brackets like in Where, then swap Catch for Else.
			[String]$OpeningParenthesisVar = $null;
			[String]$ClosingParenthesisVar = $null;
			#$FunctionVariable = $null;
			#$CompOp = $null;
			#$ReferenceVariable = $null;
			
		}; #end Switch Try
		"Switch" {
			
		}; #end Switch Switch
		"Elseif" {
			$BottomHeaderRemoved = $True
			if ($CompOp) {
				#Even if we're in an IF, if there's a CompOp set, and no RefVar, set a RefVar.
				if (!($ReferenceVariable)) {
					$ReferenceVariable = $($FunctionVariable.substring(0,(($FunctionVariable.Length)-1)))
				}; #end if ReferenceVariable

			}; #end if CompOp
			
			if ($SB) {
				$SBHeader = 'The variable' +  $Spacevar
				$NumHeader = 'is'
			}; #end if SB
			
		}; #end Switch Elseif
		default {
				$OpeningBracket = ""
				$ClosingBracket = ""
				$ClosingBracketOneLiner = ''
				[String]$OpeningParenthesisVar = $null;
				[String]$ClosingParenthesisVar = $null;
				
				$TopHeaderRemoved = $true
				$BottomHeaderRemoved = $true
				$OneLiner = $true
				[String]$SingleTabVar = ""
				[String]$TabVar = "" #$SingleTabVar  * ($TabLevel)
				#[String]$NewLineVar = "`r`n"
				[String]$NewLineVar = ""
				
				#No FunVar!
				$FunctionVariable = ""
				$CompOp = ""
				$ReferenceVariable = ""

			#Write-Verbose $OperatorVar 
		}; #end Switch default
	}; #end Switch OperatorVar		
	
	#Swap these 2 for simplicity.
	$RV = $ReferenceVariable
	$ReferenceVariable = $FunctionVariable
	$FunctionVariable = $RV
	
	
	#We'll always need a RefVar, unless we're in an IF and one's not set.
	if ($OperatorVar -AND ((!($ReferenceVariable))  -AND !(($OperatorVar -eq "If") -or (($OperatorVar -eq "Foreach") -AND $Pipeline)))) {
		$ReferenceVariable = $($FunctionVariable.substring(0,(($FunctionVariable.Length)-1)))
	}; #end if ReferenceVariable

	if ($CompOp) {
		#Even if we're in an IF, if there's a CompOp set, and no RefVar, set a RefVar.
		if (!($ReferenceVariable)) {
			$ReferenceVariable = $($FunctionVariable.substring(0,(($FunctionVariable.Length)-1)))
		}; #end if ReferenceVariable

		[String]$SpacevarCORV = " "
		[String]$VariableOperatorRV = '$';
	} else {
		If (!($OperatorVar -eq "IF" -OR $OperatorVar -eq "While" -OR $OperatorVar -eq "ElseIF")) {
			$CompOp = '-le'
		}; #end If 
	}; #end if CompOp

	
	if ($FunctionVariable.TocharArray()[0] -match '[a-zA-Z_]') {
		$FunctionVariableWOper = $VariableOperator + $FunctionVariable
		$FunctionVariableWOperRV = $VariableOperatorRV + $FunctionVariable
	} else {
		$FunctionVariableWOper = $FunctionVariable
		$FunctionVariableWOperRV = $FunctionVariable
	}; #end if String
				
	if ($ReferenceVariable.TocharArray()[0] -match '[a-zA-Z_]') {
		$ReferenceVariableWOper = $VariableOperator + $ReferenceVariable
		$ReferenceVariableWOperRV = $VariableOperatorRV + $ReferenceVariable
	} else {
		$ReferenceVariableWOper = $ReferenceVariable
		$ReferenceVariableWOperRV = $ReferenceVariable
	}; #end if String

	if (!($TopHeaderRemoved)) {
			
			[String]$NewFunctionOperation = $TabVar + $OperatorVar + $Spacevar + $OpeningParenthesisVar + $ReferenceVariableWOper
			
			Switch ($OperatorVar)  { 
				"If" {
						$NewFunctionOperation += $SpacevarCORV + $CompOp + $SpacevarCORV + $FunctionVariableWOperRV;
				}; #end Switch If
				"Foreach" {
					
					if ($Pipeline -OR $PipeEqual) {
						$OpeningBracket = ""
						$ClosingBracket = ""
						$ClosingBracketOneLiner = ''
						$ScriptBlock = $Spacevar + $ScriptBlock + $Spacevar + $ClosingParenthesisVar

						#No FunVar!
						$FunctionVariable = ""
						$CompOp = ""
						$ReferenceVariable = ""

						#No script block!
						#$SB = $False
						#$ScriptBlock = $null
						
						#$NewFunctionOperation += $SpacevarCORV + $CompOp + $SpacevarCORV + $FunctionVariableWOperRV;
						
					} else {
						#if not Pipeline or PipeEqual
						$CompOp = 'in'
						$NewFunctionOperation += $Spacevar + $CompOp + $Spacevar + $FunctionVariableWOper;
					}; #end if Pipeline
					
				}; #end Switch Foreach
				"For" {
					$NewFunctionOperation += $Spacevar + '='  + $Spacevar + $StartValue + $Spacevar + ';' + $Spacevar + $ReferenceVariableWOper + $Spacevar + $CompOp + $Spacevar + $FunctionVariableWOper + $Spacevar + ';' + $Spacevar + $ReferenceVariableWOper + $ForIncVar;
					
				}; #end Switch For
				"Where" {
						$ClosingBracket = ""
						$OpeningBracket = ""
						$ClosingBracketOneLiner = ''
						$Pipeline = $true
						
						if (!($Prevariable)) {
							$Prevariable = "Prevariable"
						}; #end if PreVariable
						
						if (!($CompOp)) {
							$CompOp = "-eq"
						}; #end if CompOp
						
						if (!($FunctionVariable)) {
							$FunctionVariableWOper = '$_'
						}; #end if FunctionVariable 
						#No script block!
						$SB = $False
						$ScriptBlock = $null
						
						$NewFunctionOperation += $Spacevar + $CompOp + $Spacevar + $FunctionVariableWOper;
						#$NewFunctionOperation += $SpacevarCORV + $CompOp + $SpacevarCORV + $FunctionVariableWOperRV;
				}; #end Switch Where
				"While" {
						$NewFunctionOperation += $SpacevarCORV + $CompOp + $SpacevarCORV + $FunctionVariableWOperRV;
				}; #end Switch While
				"Try"  {
						[String]$NewFunctionOperation = $TabVar + $OperatorVar + $Spacevar 

						$ElseVar = 'Catch'
					if (!($ElseScriptBlock)) {
						$ElseScriptBlock = '$Error[0]'
					}; #end if ElseScriptBlock
						
				}; #end Switch Try
				"Switch" {
					$NewFunctionOperation += ""
				}; #end Switch Switch
				"Elseif" {
					[String]$NewFunctionOperation = $OperatorVar + $Spacevar + $OpeningParenthesisVar + $ReferenceVariableWOper + $SpacevarCORV + $CompOp + $SpacevarCORV + $FunctionVariableWOperRV;
				}; #end Switch Elseif
				default {
					Write-Verbose $OperatorVar 
				}; #end Switch default
			}; #end Switch OperatorVar	

			$NewFunctionOperation +=  $ClosingParenthesisVar + $Spacevar + $OpeningBracket + $NewLineVar

			}; #end if TopHeader
			
	if ($SB) {
		[String]$ScriptBlock = $PlaceholderFunOp + $SBHeader + $Spacevar + $ReferenceVariable + $Spacevar + $NumHeader + $NotHeader + $Spacevar + $VariableOperator + '(' + $ReferenceVariableWOper + ')' + $SBDelineationClose;
	}; #end if ScriptBlock

	if ($SetVerbose) {
		$VerboseVar =  $TabVar + $SingleTabVar + "Write-Verbose 'You are running Function Statement $OperatorVar $ReferenceVariable';"  + $NewLineVar;
	}; #end if SetVerbose
			
	if ($ScriptBlock) {
		[String]$NewFunctionOperation += $VerboseVar
		Foreach ($ScriptBloc in $ScriptBlock.split("`n")) {
			[String]$NewFunctionOperation += $TabVar + $SingleTabVar + $ScriptBloc + $NewLineVar;
		}; #end Foreach ScriptBlock
	}; #end if ScriptBlock
	
	if ($ElseScriptBlock) {
		if ($ElseScriptBlock.split("`n")[0] -like "ElseIf *") {
			[String]$NewFunctionOperation += $VerboseVar
			[String]$NewFunctionOperation += $TabVar + $ClosingBracket;
			Foreach ($ElseScriptBloc in $ElseScriptBlock.split("`n")) {
				[String]$NewFunctionOperation += $Spacevar + $ElseScriptBloc + $NewLineVar;
			}; #end Foreach ElseScriptBlock
		} else {
			[String]$NewFunctionOperation += $TabVar + $ClosingBracket + $Spacevar + $ElseVar  + $Spacevar  + $OpeningBracket + $NewLineVar;
			Foreach ($ElseScriptBloc in $ElseScriptBlock.split("`n")) {
				[String]$NewFunctionOperation += $TabVar + $SingleTabVar + $ElseScriptBloc + $NewLineVar;
			}; #end Foreach ElseScriptBlock
		}; #end if ElseScriptBlock.split("`n")[0]
		
	}; #end if ElseScriptBlock
	
	if (!($BottomHeaderRemoved)) {
		[String]$NewFunctionOperation += $TabVar + $ClosingBracketOneLiner
	}; #end if BottomHeader
	[String]$PipelineVar = ''

	if ($Pipeline) {
		#If Pipeline, prepend with PipelineVar
		$PipelineVar += '| '
		#[String]$NewFunctionOperation = $PipelineVar + $NewFunctionOperation
	}; #end if Pipeline
		#} elseif ($PipeEqual) {
	if ($PipePlus) {
		#If PipePlus, prepend with Plus
		$PipelineVar += "+ "
	}; #end if PipePlus
	if ($PipeMinus) {
		#If PipeMinus, prepend with Minus
		$PipelineVar += "- "
	}; #end if PipeMinus
	if ($PipeEqual) {
		#If PipeEqual, prepend with Equals
		$PipelineVar += "= "
	}; #end if PipeEqual
	[String]$NewFunctionOperation = $PipelineVar + $NewFunctionOperation
	#Pipe, Equal, PlusEqual, MinusEqual
	
	if ($PreVariable) {
		#If PreVariable, prepend with it...need to add in pipe somehow
		[String]$NewFunctionOperation = $VariableOperator + $PreVariable + $Spacevar+ $NewFunctionOperation
	}; #end if PreVariable
	
	if ($Clipboard) {
		$NewFunctionOperation | clip
	} else {
		return $NewFunctionOperation
	}; #end if Clipboard
	
}; #end New-FunctionStatement

New-Alias -name ff -value Find-Function -Force
Function Find-Function {
	Param(
		[String]$FunctionName = "Find-Function",
		[Array]$FileName
	); #end Param
	
	#If FileName wasn't entered as a param,
	if (!($FileName)) {
		#Grab all loaded module names and return all which have this function.
		[Array]$FileName = Foreach ($ModuleName in (Get-Module).path) {
			if ((gc $ModuleName) -like "*Function $FunctionName*" -OR (gc $ModuleName) -like "*Filter $FunctionName*") {
					$ModuleName
				}; #end if gc Module 
		}; #end Foreach Module
	}; #end if FileName
	
	Foreach ($File in $FileName) {
		$Func = New-Object System.Object | select "FileName","StartLine","EndLine","ParamStartLine","ParamEndLine","Parameters","Process";
		$Func.FileName = $File
		$Filecontents = (gc $Func.FileName);
		
		#Start line is where either the Function or Filter is declared.
		$Func.StartLine = ((($Filecontents | Select-String "Function $FunctionName ").LineNumber) + (($Filecontents | Select-String "Filter $FunctionName ").LineNumber) );
		#End line uses my #end function name tag and the optional semicolon.
		$Func.EndLine = ((($Filecontents | Select-String "}; #end $FunctionName$").LineNumber) - 0);
		
		#Pull the function out of the file contents, this is only used to find the parameter section lines.
		$Funcn = $Filecontents[($Func.StartLine)..($Func.EndLine)];
		#Parameter start line is found by regexing the opening parenthesis.
		$Func.ParamStartLine = (($Func.StartLine + (($Funcn | Select-String 'Param[(]').LineNumber) ))
		#Parameter end line is found by regexing the closing parenthesis, optional semicolon, and my tag.
		$Func.ParamEndLine = ($Func.StartLine + (($Funcn | Select-String '[)][;] [#]end Param').LineNumber) - 2)
		
		$Func.Parameters = $Filecontents[($Func.ParamStartLine)..($Func.ParamEndLine)];
		$Func.Process = $Filecontents[($Func.ParamEndLine + 2)..($Func.EndLine)];
		$Func
	}; #end Foreach File
}; #end Find-Function

Function Get-DevFlags {
	Param(
		[Array]$File = (Get-Module).path
	); #end Param
	#Make this take a file/directory as input. (FLAG)
	Foreach ($Fil in $File) {
		Write-Host $Fil "has changes:"; 
		gc $Fil | Select-String "[(]FLAG[)]" -All | Select LineNumber, Line | Format-Table -Auto
	}; #end Foreach
}; #end Get-DevFlags

Function Compare-DevBuilds { 
	Param(
		[String]$FileName,
		[int]$FirstBuild,
		[int]$SecondBuild
	); #end Param
	diff (gc .\Builds\$FileName.$FirstBuild) (gc .\Builds\$FileName.$SecondBuild);
}; #end Compare-DevBuilds

#endregion 

#region MiscSystemUtilities

#Open here in Explorer.
New-Alias -name oex -value Open-Explorer -Force
Function Open-Explorer {
	Param(
		[String]$Location
	); #end Param
	if ($Location){
		explorer.exe $Location
	} else {
		explorer.exe (Get-Location)
	}; #end if Location
}; #end Open-Explorer

New-Alias -name nsp -value New-PowerShell -Force
New-Alias -Name npo -Value New-PowerShell -Force
Function New-PowerShell {
	Param(
		[Switch]$Elevated
	); #end Param
	if ($Elevated) {
		start-process PowerShell -verb runas
	} else {
		Start-Process PowerShell 
	}; #end if Elevated
}; #end New-PowerShell

New-Alias -name rsp -value Restart-PowerShell -Force
New-Alias -Name rpo -Value Restart-PowerShell -Force
Function Restart-PowerShell {
	Param(
		[Switch]$Elevated
	); #end Param
	Reset-CipherKey
	Stop-AllJobs
	if ($Elevated) {
		New-PowerShell -Elevated
	} else {
		New-PowerShell 
	}; #end if Elevated
	$HistoryPath = "c:\dropbox\history.txt"
	
	if (Test-Path $HistoryPath) {
		(Get-History).CommandLine >> $HistoryPath
	}; #end if Test-Path HistoryPath
	exit
}; #end Restart-PowerShell

Function Get-PSVersion {
	if ($PSVersionTable.psversion.major -ge 4) {
		Write-Host "PowerShell Version: $($PSVersionTable.PSVersion.Major).$($PSVersionTable.PSVersion.Minor).$($PSVersionTable.PSVersion.Build).$($PSVersionTable.PSVersion.Revision)" -f Yellow 
	} else {
		Write-Host "PowerShell Version: $($PSVersionTable.PSVersion.Major).$($PSVersionTable.PSVersion.Minor)" -f Yellow 
	}; #end if PSVersionTable
}; #end Get-PSVersion

New-Alias -name spsz -value Set-PSWindowSize -Force
Function Set-PSWindowSize {
	[CmdletBinding()]
	Param(
		[int]$Rows = 0,
		[int]$Columns = 0
	); #end Param
	#from http://www.PowerShellserver.com/support/articles/PowerShell-server-changing-terminal-width/
	$pshost = Get-Host			  # Get the PowerShell Host.
	$pswindow = $pshost.UI.RawUI	# Get the PowerShell Host's UI.
	
	$maxWindowSize = $pswindow.MaxPhysicalWindowSize # Get the max window size. 
	$newBufferSize = $pswindow.BufferSize # Get the UI's current Buffer Size.
	$newWindowSize = $pswindow.windowsize # Get the UI's current Window Size.
	
	if ($Rows -gt $maxWindowSize.height) {
		Write-Verbose "Max height $($maxWindowSize.height) rows tall."
		$Rows = $maxWindowSize.height
	}; #end if Rows -gt
	
	if ($Columns -gt $maxWindowSize.width) {
		Write-Verbose "Max width $($maxWindowSize.width) columns wide."
		$Columns = $maxWindowSize.width
	}; #end if Columns -gt
	
	$oldBufferSize = $newBufferSize			 # Save the oldsize.
	$oldWindowSize = $newWindowSize
	
	if ($Rows -gt 0 ) {
		$newWindowSize.height = $Rows
	} if ($oldWindowSize.height -eq $Rows) {
		Write-Verbose "Window is already $($newWindowSize.height) rows tall."
	} else {
		$pswindow.windowsize = $newWindowSize # Set the new Window Size as active.
	}; #end if Rows
	
	
	if ($Columns -gt 0) {
	$newWindowSize.width = $Columns # Set the new buffer's width to 150 columns.
	$newBufferSize.width = $Columns

	if ($newWindowSize.width -gt $oldWindowSize.width) {
		$pswindow.buffersize = $newBufferSize # Set the new Buffer Size as active.
		$pswindow.windowsize = $newWindowSize # Set the new Window Size as active.
	} elseif ($oldWindowSize.width -gt $newWindowSize.width) { #Order is important, buffer must always be wider.
		$pswindow.windowsize = $newWindowSize # Set the new Window Size as active.
		$pswindow.buffersize = $newBufferSize # Set the new Buffer Size as active.
	} elseif ($oldWindowSize.width -eq $newWindowSize.width) {
		Write-Verbose "Window is already $($newWindowSize.width) columns wide."
		}; #end if newWindowSize.width -gt
	}; #end if WindowWidth
}; #end Set-PSWindowSize

New-Alias -name spsy -value Set-PSWindowStyle -Force
Function Set-PSWindowStyle {
	Param(
		[Parameter()]
		[ValidateSet('FORCEMINIMIZE', 'HIDE', 'MAXIMIZE', 'MINIMIZE', 'RESTORE',
					 'SHOW', 'SHOWDEFAULT', 'SHOWMAXIMIZED', 'SHOWMINIMIZED',
					 'SHOWMINNOACTIVE', 'SHOWNA', 'SHOWNOACTIVATE', 'SHOWNORMAL')]
		$Style = 'MINIMIZE',
		[Parameter()]
		$MainWindowHandle = (Get-Process -id $pid).MainWindowHandle
	); #end Param

	$WindowStates = @{
		'FORCEMINIMIZE'	= 11
		'HIDE'			= 0
		'MAXIMIZE'		= 3
		'MINIMIZE'		= 6
		'RESTORE'		 = 9
		'SHOW'			= 5
		'SHOWDEFAULT'	 = 10
		'SHOWMAXIMIZED'	= 3
		'SHOWMINIMIZED'	= 2
		'SHOWMINNOACTIVE' = 7
		'SHOWNA'		  = 8
		'SHOWNOACTIVATE'  = 4
		'SHOWNORMAL'	  = 1
	}; #end WindowStates

$memberDefintion = @"
	[DllImport("user32.dll")]
	public static extern bool ShowWindowAsync(IntPtr hWnd, int nCmdShow);
"@

	$Win32ShowWindowAsync = Add-Type -memberDefinition $memberDefintion -name "Win32ShowWindowAsync" -namespace Win32Functions -passThru

	$Win32ShowWindowAsync::ShowWindowAsync($MainWindowHandle, $WindowStates[$Style]) | Out-Null
	Write-Verbose ("Set Window Style '{1} on '{0}'" -f $MainWindowHandle, $Style)

}; #end Set-PSWindowStyle

#https://stackoverflow.com/questions/1851087/powershell-Join#1851739
function Join-Object {
	Param(
	   [Parameter(Position=0)]$First,
	   [Parameter(Position=1,ValueFromPipeline=$true)]$Second
	); #end Param
	BEGIN {
	   [string[]] $p1 = $First | gm -type Properties | select -expand Name
	}; #end BEGIN
	Process {
	   $Output = $First | Select $p1
	   foreach($p in $Second | gm -type Properties | Where { $p1 -notcontains $_.Name } | select -expand Name) {
		  Add-Member -in $Output -type NoteProperty -name $p -value $Second."$p" -Force
	   }; #end foreach p
	   $Output
	}; #end Process
}; #end  Join-Object
 
#System WMI stuffs
Function Invoke-WMIInstaller {
	Param(
		[String]$Uninstall
	); #end Param
	$IsElevated = (whoami /all | Select-String S-1-16-12288) -ne $null

	#It takes a long time to run, so I'll just repeat myself down there. That way I can check if this is in admin without making the user wait for the list to load.
	Write-Host "This may take a minute or two..."
	if ($Uninstall) {
		if ($IsElevated) {
		$app = Get-WmiObject -Class Win32_Product
		$uninstallapp = $app | Where-Object { $_.Name -match $Uninstall }
		$uninstallapp.uninstall()
		} else {

			Write-Host -f red "Please run in Administrator PowerShell"
			break
		}; #end if iselevated
	
	} else { #if not uninstall, display a list of stuff to uninstall.

		$app = Get-WmiObject -Class Win32_Product
		$app.name | sort
		Write-Host -f yellow "Please copy one of the items in the list above, and re-run with -Uninstall option."

	}; #end if uninstall
}; #end Invoke-WMIInstaller

Function Get-WMIMemory {
	
		Param(
			$ProcessName = 'PowerShell.exe'
		); #end Param
	if (!($ProcessName.substring(($($ProcessName.Length) - 4), 4) -like '.exe')) {
		$ProcessName = $ProcessName + ".exe"
	}; #end if ProcessName.substring(($($ProcessName.Length) - 4), 4)
	
	Get-WMIObject Win32_Process -Filter "Name='$ProcessName'"  | Sort PrivatePageCount | Select Name,ProcessID,CommandLine,@{n="Private Memory(gb)";e={$_.PrivatePageCount/1gb}}
	
}; #end Get-WMIMemory

Function Get-WMIDisk {
	Param(
		[String]$Drive,
		[Switch]$Raw
	); #end Param
	if ($drive.Length -eq 1) {
		$Filter = ("DeviceID='" + $Drive + ":'")
		$GetWmiDisk = Get-WmiObject Win32_LogicalDisk -Filter $Filter
	} else {
		[object]$GetWmiDisk = Get-WmiObject Win32_LogicalDisk
	}; #end if Drive
	if ($Raw) {
		$GetWmiDisk
	} else {
		#$GetWmiDisk
		Foreach ($Disk in $GetWmiDisk) {
			#$Disk = [object]$Disk
			#$Disk
			#$Disk.DeviceID
			#$Disk.size
			#"Drive size here."
			if ($Disk.size -gt 0) {
				[math]::Round((($Disk.FreeSpace / $Disk.Size) * 100)).ToString() + "% free in drive " + $Disk.DeviceID
			}; #end if drivesize gt 0
		}; #end Foreach drive
	}; #end if Raw
}; #end Get-WMIDisk 

Function Get-RunningProcess {
	$CPUPercent = @{
	  Name = 'CPUPercent'
	  Expression = {
		$TotalSec = (New-TimeSpan -Start $_.StartTime).TotalSeconds
			[Math]::Round( ($_.CPU * 100 / $TotalSec), 2)
	  }; #end TotalSec
	}; #end CPUPercent
	
	$gp = Get-Process | Select-Object privatememorysize64,$CPUPercent,id,name,Description 
	#Get-Process |   Select-Object -Property Name, CPU, $CPUPercent, Description 
	
#	foreach ($g in $gp) {
#			$g.cpu = [int]$g.cpu
#	}; #end foreach g
	
	
	$gp | Sort-Object -Property CPUPercent -Descending #| ft -a
}; #end Get-RunningProcess

Function Export-PuTTY {
	Write-Host "Exports your PuTTY profiles to $home\Desktop\putty.reg"
	reg export HKCU\Software\SimonTatham $home\Desktop\putty.reg
}; #end Export-PuTTY

#Github
Function Get-GithubStatus {
	$StatusJSON = Invoke-RestMethod -Uri "https://status.github.com/api/status.JSON?callback=apiStatus"
	#Dig out the JSON from the response, convert.
	$Status = ConvertFrom-JSON $StatusJSON.substring(10,($StatusJSON.Length - 11))
	#Convert the date into a PowerShell object
	$Status.last_updated = get-date ($Status.last_updated -replace "Z","")
	#Return the status
	$Status
}; #end Get-GithubStatus

Function Leet-H4x0r {
$leet = @'
............................................________ 
....................................,.-'"...................``~., 
.............................,.-"..................................."-., 
.........................,/...............................................":, 
.....................,?......................................................, 
.................../...........................................................,} 
................./......................................................,:`^`..} 
.............../...................................................,:"........./ 
..............?.....__.........................................:`.........../ 
............./__.(....."~-,_..............................,:`........../ 
.........../(_...."~,_........"~,_....................,:`........_/ 
..........{.._$;_......"=,_......."-,_.......,.-~-,},.~";/....} 
...........((.....*~_......."=-._......";,,./`..../"............../ 
...,,,___.`~,......"~.,....................`.....}............../ 
............(....`=-,,.......`........................(......;_,,-" 
............/.`~,......`-...................................../ 
.............`~.*-,.....................................|,./.....,__ 
,,_..........}.>-._...................................|..............`=~-, 
.....`=~-,__......`,................................. 
...................`=~-,,.,............................... 
................................`:,,...........................`..............__ 
.....................................`=-,...................,%`>--==`` 
........................................_..........._,-%.......` 
..................................., 
'@
$leet
} #Leet-H4x0r

Function Stop-Explorer {
	get-process explorer | Foreach { stop-process $_.id }
}; #end Stop-Explorer

Function Receive-AllJobs {
	Foreach ($job in (get-job).id ) { 
		while ((get-job $job ).hasmoredata) { 
			receive-job $job
		}; #end while
	}; #end Foreach
}; #end Receive-AllJobs

Function Stop-AllJobs {
	Foreach ($job in (get-job).id ) {
		stop-job $job
	}; #end Foreach
}; #end Stop-AllJobs

Function Get-Clipboard {
#https://www.bgreco.net/PowerShell/get-clipboard/
	Param(
		[Switch]$JSON,
		[Switch]$raw
	); #end Param 
	Add-Type -Assembly PresentationCore
	if($raw) {
		$cmd = {
			[Windows.Clipboard]::GetText()
		}
	} else {
		$cmd = {
			[Windows.Clipboard]::GetText() -replace "`r", '' -split "`r`n"
		}
	}; #end if
	
	if ($JSON) {
		$cmd = $cmd | ConvertFrom-JSON
	}
	
	if([threading.thread]::CurrentThread.GetApartmentState() -eq 'MTA') {
		& PowerShell -Sta -Command $cmd
	} else {
		& $cmd
	}; #end if
}; #end Get-Clipboard

Function Watch-Clipboard {
	$cbclip = "test"
	while (Get-Clipboard -ne "") { 
		if ( (diff (Get-Clipboard -raw) $cbclip ) -ne $null) { 
			$cbclip = Get-Clipboard -raw
			$cbclip 
			sleep .5
		}; #end if 
	}; #end while
}; #end Watch-Clipboard

Function Get-UsGovWeather {
#https://blogs.technet.microsoft.com/heyscriptingguy/2010/11/07/use-PowerShell-to-retrieve-a-weather-forecast/
	Param(
	[String]$zip = 98104,
		[int]$numberDays = 4,
		[Switch]$Fahrenheit
	); #end Param

	$URI = "http://www.weather.gov/forecasts/xml/DWMLgen/wsdl/ndfdXML.wsdl"
	$Proxy = New-WebServiceProxy -uri $URI -namespace WebServiceProxy
	[xml]$latlon=$proxy.LatLonListZipCode($zip)
	Foreach($l in $latlon) {
		$a = $l.dwml.latlonlist -split ",";
		$lat = $a[0]
		$lon = $a[1]
		$sDate = get-date -UFormat %Y-%m-%d
		$format = "Item24hourly"

		if ($Fahrenheit) { $unit = "e" } else { $unit = "m" } 

		[xml]$weather = $Proxy.NDFDgenByDay($lat,$lon,$sDate,$numberDays,$unit,$format)

		For($i = 0 ; $i -le $numberDays -1 ; $i ++) {
			New-Object psObject -Property @{
				"Date" = ((Get-Date).addDays($i)).ToString("MM/dd/yyyy") ;
				"maxTemp" = $weather.dwml.data.Parameters.temperature[0].value[$i] ;
				"minTemp" = $weather.dwml.data.Parameters.temperature[1].value[$i] ;
				"Summary" = $weather.dwml.data.Parameters.weather."weather-conditions"[$i]."Weather-summary"
			}; #end New-Object
		}; #end For i
	}; #end  Foreach l
}; #end Get-UsGovWeather

Function Import-MDJ {
	Param(
		[string]$Filename = ".\Untitled.mdj",
		$Filecontents = "gc $Filename | ConvertFrom-Json"
	); #end Param
	#Identifiers are Base64 strings, but sadly they don't decode to anything meaningful.
	Flip-Base64ToText $Filecontents.ownedElements._parent.'$ref'
	
	#
	$Filecontents.ownedElements.ownedElements.ownedviews.subviews | ft _type,lineColor,fillColor,text,left,top,width,height,horizontalAlignment,verticalAlignment
	
	#Object, properties, constraint, etc.
	$Filecontents.ownedElements.ownedElements.ownedviews.subviews.subviews | ft _type,lineColor,fillColor,text,left,top,width,height,horizontalAlignment,verticalAlignment
	
	#Flowchart items.
	$Filecontents.ownedElements.ownedElements.ownedElements.ownedElements.ownedViews.subviews | ft _type,lineColor,fillColor,text,left,top,width,height,subviews
	
	#FCFlow identifiers.
	$Filecontents.ownedElements.ownedElements.ownedElements.ownedElements.ownedElements #| ft _type,lineColor,fillColor,text,left,top,width,height,subviews
	
}; #end Import-MDJ

Function Get-RandomMeme {
	Param(
		$Word= (Get-RandomMeaning)
	); #end Param
	$b = define-word $Word
	$c = ($b -split "[.] " -Join ".`n" | Convert-SymbolsToUnderscore ) -replace "__","_"
	if ($c.Length -gt 2) {
		$d = -Join $c[0..($c.length / 2)]
		$e = -Join $c[(($c.length / 2)+1)..$c.Length]
	}else{
		$d = $c[0]
		$e = $c[1]
	}; #end if c
	
	$meme = (gc -raw C:\Dropbox\www\Docs\meme.csv) | ConvertFrom-Csv
	$Chrome = "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"
	& $Chrome "https://memegen.link/$($meme.name | get-random)/$($d)/$($e).jpg"
}; #end Get-RandomMeme

Function Invoke-RandomAPI {
	Param(
		$SearchTerm = "foal",
		$FileName = "C:\Media\Docs\Text\RandomAPIs.txt",
		$FileContents = (gc $FileName),
		$RandNum = (get-random -min 0 -max $FileContents.length)
	); #end Param
	$APIList += $FileContents | %{ [scriptblock]::Create($_)}
	$Site = $APIList[$RandNum].tostring().split("`/")[2].split(".")[1]
	$Results = iwr (& $APIList[$RandNum])
	$Content = ($Results.content | ConvertFrom-Json)
	Switch ($Site) {
		"wikipedia" {
			$Pages = $Content.query.pages
			#$OutContent = $Pages
			#$Topics = (($Pages.(($Pages | gm | select -ExpandProperty name )[-1]) | select -ExpandProperty revisions | select -ExpandProperty '`**') -split ".`n" | Select-String "==" | Convert-SymbolsToUnderscore -Symbol " " )
			$OutContent = (($Pages.(($Pages | gm | select -ExpandProperty name )[-1]) | select -ExpandProperty revisions | select -ExpandProperty '`**') -split "`n" )[0..18]
			$OC = $OutContent -split " "
			if ($OC[0] -like "*Redirect*") { 
				$Pages = ((iwr "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=revisions&titles=$($OC[1])&rvprop=content").content | ConvertFrom-Json).query.pages
				$OutContent = (($Pages.(($Pages | gm | select -ExpandProperty name )[-1]) | select -ExpandProperty revisions | select -ExpandProperty '`**') -split "`n" )[0..18]
			} else {  } 

		}; #end wikipedia 
		"duckduckgo" {
			[String]$OutContent = ($Content.abstracttext)
		}; #end duckduckgo 
		"cleverbot" {
			[String]$OutContent = ($Content.output)
		}; #end duckduckgo 
		"urbandictionary" {
			#[String]$OutContent = ($Content.abstracttext)
			$OutContent = Get-Random ($Content.list) | select -ExpandProperty definition
		}; #end duckduckgo 
		Default {
			$OutContent = $Content
		}; #end Default 
	}; #end Switch Site
	"{0}:`n" -f $Site | ConvertVoice-CleanSpeech
	$OutContent | ConvertVoice-CleanSpeech
}; #end Invoke-RandomAPI


Function Test-PingJob {
	start-job { 
		ping -t 8.8.8.8 
	} ; 
	$pingjob = (get-job).id[-1] ; 
	while ((get-job $pingjob ).hasmoredata) {
		receive-job $pingjob 
	}; #end while 
}; #end Test-PingJob

Function Test-TCPPortConnection {
	[CmdletBinding()]
	Param(
		[IPAddress]$IPAddress = "127.0.0.1",
		[int]$Port = 443
	); #end Param
	try {
		(new-object Net.Sockets.TcpClient).Connect("$($IPAddress.IPAddressToString)", $Port)
	} catch {
		return $false
		Write-Verbose -Message "Connection failed.";
		break
	}; #end try 
	return $true
	Write-Verbose -Message "Connection succeeded.";
}; #end Test-TCPPortConnection

#endregion

#region init
#Set TLS 1.2:
[System.Net.ServicePointManager]::SecurityProtocol = [System.Net.SecurityProtocolType]::Tls12

#Set UTF8 Encoding 
#$OutputEncoding = New-Object -typename System.Text.UTF8Encoding #This messes up copypasta & other stuff.
#[Console]::OutputEncoding = New-Object -typename System.Text.UTF8Encoding #This setting messes up VI.
#Just use WriteAllLines instead.

	#Need this for Image functions.
	[System.Reflection.Assembly]::LoadWithPartialName("System.Drawing") | out-null

	#For the audio player 
	Add-Type -AssemblyName presentationCore
	$wmplayer = New-Object System.Windows.Media.MediaPlayer

	#Rename isn't Rename-Item, it's dumb.
	New-Alias -name rename -value Rename-Item -Force
[ipaddress]$localhost = "127.0.0.1"
$UnixEpochStart = New-Object -Type DateTime -ArgumentList 1970, 1, 1, 0, 0, 0, 0

#Used in Invoke-GilSQL - If true, it uses Invoke-Sqlcmd, if false it uses a slower, more common method.
$Invoke_Sqlcmd_exists = if (Get-Command | where {$_.name -eq "Invoke-Sqlcmd"}) {$True} else {$False}
#$DontShowPSVersionOnStartup = $false # to turn off PowerShell Version display.
#if (!($DontShowPSVersionOnStartup)){
#	Get-PSVersion
#}

#endregion

#region Speech
Function Read-Webpage ($URL) {
	$Response = iwr $url 
	$ResponseInnerHtml = ($Response.ParsedHtml.getElementsByTagName("p") | select innerhtml ).innerhtml
	return $ResponseInnerHtml
}; #end Read-Webpage

Function Say-This {
	#Rename to Out-Speech?
	Param(
		[Array]$Text = "Type something for me to say",
		[String]$Gender = "female",
		[String]$Age = "adult"
	); #end Param
	Add-Type -AssemblyName System.Speech
	$synthesizer = New-Object -TypeName System.Speech.Synthesis.SpeechSynthesizer
	$synthesizer.SelectVoiceByHints($Gender, $Age) 
	$synthesizer.Speak($Text)
}; #end Say-This

Function Invoke-Clipboard($Command) {
	#[scriptblock]$Scriptblock = "{param($text) " + $Scriptblock + " $text}"
	while ($True) {
		$ClipboardContents = (Get-Clipboard)
		if ($ClipboardOld -ne $ClipboardContents) {
			& $Command $ClipboardContents;
			$ClipboardOld = $ClipboardContents;
			sleep 1
		} 
	}
}; #end Say-Clipboard

Function Cache-This([string]$Property,[scriptblock]$DataSource) {
	#[scriptblock]$Scriptblock = "{param($text) " + $Scriptblock + " $text}"
	$propfile = "$([environment]::getfolderpath('mydocuments'))\$($DataSource | Convert-SymbolsToUnderscore).JSON"
	if (Test-Path $propfile){
		$Props = (gc -raw $propfile | ConvertFrom-JSON)
	} else {
		(& $DataSource) | ConvertTo-JSON > $propfile 
		$Props = (gc -raw $propfile | ConvertFrom-JSON)
	}; #end Try
	
	if ($Props.$Property){
		return $Props.$Property
	} else {
		(& $DataSource) | ConvertTo-JSON > $propfile 
		$Props = (gc -raw $propfile | ConvertFrom-JSON)
		return $Props.$Property
	}; #end Try
	
}; #end Say-Clipboard

Function Split-Sentence {
	Param(
		[String]$Text = "Grass is green.",
		[String]$Verb = "is",
		[ValidateSet("OSV","OVS","SVO","SOV","VSO","VOS")][String]$WordOrder = "SVO"
		#[String]$Age = "adult"
	); #end Param
	
	#$out = @()
	$out = "" | select Subject,Object,Verb
	$Text = $Text | ConvertVoice-CleanSpeech
	$out.Verb = $Verb
	Switch ($WordOrder) {
		"SVO" { 	
			$out.Subject,$out.Object = $Text -split " $($out.Verb) "
		}; #end foreach word
		"OVS" {
			$out.Object,$out.Subject = $Text -split " $($out.Verb) "
		}; #end foreach word
	}; #end foreach word
	$out
	
}; #end Split-Sentence

Function Get-MadLib {
	Param(
		[string]$StartingSentence 
	); #end Param
	
	foreach ($word in ($StartingSentence -split " ")) {
		Write-Verbose "Word: $Word"
		$meaning = Define-Word $word
		
		#$EndingSentence = $EndingSentence -replace " $word "," $meaning "
		$EndingSentence = $EndingSentence + " $meaning "
	}; #end foreach word
	$EndingSentence = ($EndingSentence -Join "" -split "[ ]+")[0..100] -Join " "
		Write-Verbose "Starting Sentence: $StartingSentence"
		Write-Verbose "Ending Sentence: $EndingSentence"
	if ($StartingSentence -eq $EndingSentence) {
		$EndingSentence = Define-Word (Get-Random $StartingSentence)
	} else {
	}; #end If StartingSentence
	$EndingSentence
}; #end Get-MadLib

New-Alias -name d -value Define-Word -force
Function Define-Word {
	Param(
		[string]$WordToDefine,
		$Definition = ((i -t meanings -where "where WordId = '$WordToDefine'"| select wordid,sourceid,@{n='meaning';e={$_.meaning  -replace "`n ",""}} | sort meaning -u | select -expand meaning) -split "`n" | where {$_.length -gt 2} | get-random)
	); #end Param
	
	Write-Verbose  "First Definition: $Definition"
	if ($Definition) {
		$Definition
	} else {
		$Definition = Get-Random ((i -t meanings | select wordid,sourceid,@{n='meaning';e={$_.meaning  -replace "`n ",""}} | sort meaning -u | select -expand meaning | Select-String -SimpleMatch $WordToDefine) -split "`n")
		if ($Definition) {
			$Definition
		} else {
			$Definition = Get-Random ((i -t meanings | select wordid,sourceid,@{n='meaning';e={$_.meaning  -replace "`n ",""}} | sort meaning -u | select -expand meaning | Select-String -SimpleMatch " $($WordToDefine.substring(1,1))") -split "`n")
			$Definition
		}; #end if meaning
	}; #end if meaning

	Write-Verbose "Final Definition: $Definition"
}; #end Define-Word

Function Get-WordMap {
	Param(
		[Parameter(Mandatory=$True)]
		[String]$WordToMap = "Hello",
		[Array]$InputSentence = ("Hello World, how are you?")
	); #end Param
	
	$WordToMap = $WordToMap | Convert-SymbolsToUnderscore
	$Wordmap = "" | select WordMap,Average,Location,Min,Max,SentenceLength
	$s1 = $InputSentence  -split "[.][ ]" -split "[?][ ]" -split "[!][ ]"
	$s2 = $s1[0] + "."
	$InputArray = $s2 -split "[ ]+"

	$Wordmap.SentenceLength = $InputArray.count 
	$Wordmap.Location = ($InputArray | Select-String $WordToMap).LineNumber
	#Write-Host $WordMap.Location
	foreach ($Location in ($Wordmap.Location)) {
		$Wordmap.Average += ($Location -1) / $Wordmap.SentenceLength
	}; #end Get-WordMap
	$MapLocation = $Wordmap.Average * 100
	
	#$Wordmap.Min = [math]::Min($Wordmap.Location)
	#$Wordmap.Max = [math]::Max($Wordmap.Location)

		$Wordmap.WordMap = "---------|---------|---------|---------|---------O---------|---------|---------|---------|---------|"
	if (($MapLocation -lt 100) -and ($MapLocation -ge 0)) {
		$Wordmap.WordMap = $Wordmap.WordMap.Remove($MapLocation,1).Insert($MapLocation,'x')
	} else {
		$MapLocation
		#Break
	}; # end if MapLocation
	
	$Wordmap

}; #end Get-WordMap

Function Get-OrderedSentence {
	Param(
		[String]$InputString = (Get-RandomMeaning)
	); #end Param
	
	((Get-WordLikelihood (($InputString) -replace "[(]") | where {$_.Probability} | sort ProbableLocation | select -Unique Word).word -Join " " -replace "[.]" -replace "`n")+"."
}; #end Get-OrderedSentence

Function Get-WordLikelihood {
	Param(
		[String]$InputSentence = ("Hello World, how are you?"),
		[Int]$Depth = 1000,
		[Int]$First = 1,
		[Switch]$Loud
	); #end Param
	if ($Loud) {
		$InputSentence
	} else {
	}; # end if Loud

	foreach ($Word in ($InputSentence -split "[ ]")) { 
		if ($Word) {
		$OutObj = "" | select Position,Hits,Matches,Probability,ProbableLocation,Word
		
		#Get an average of one, for similarity to the others.
			$WordmapGroup = Get-WordMap $Word $InputSentence | group average
			$W3Group = Get-WordMapRandomMeanings $Word (Get-RandomMeaning $Depth) | group average | sort count -d 
			$Matches = ($W3Group | where {$_.name -eq $WordMapGroup.name}).count
			
			$OutObj.Word = $Word
			$OutObj.Matches = $Matches
			$OutObj.Position = $WordmapGroup.Group.Location
			$OutObj.Hits = $W3Group.Name.Count
			$HitLikelihood =  @()
		
			 if ($Matches) {
				$OutObj.Probability = $Matches / $OutObj.Hits * 100
			} else {
				foreach ($Hit in $W3Group.Name) { 
					#write-host "Hit = $Hit"
					$HitWordDistance = [math]::abs(($Hit | Measure-Object -Average).Average - ($WordmapGroup.Name | Measure-Object -Average).Average)
					$HitLikelihood += ($Hit.count * $HitWordDistance)
				}; #end foreach Hit
				
				$Probability = ($HitLikelihood | Measure-Object -sum).sum
				$OutObj.Probability = $Probability
			}; #end if Matches
		
			$OutObj.ProbableLocation = ($W3Group | select -first 1 | select -expand group | select -expand location | Measure-Object -Average).Average
			if ($Loud) {
				$W3Group | select -first $First
				$WordmapGroup
				$OutObj
			} else {
				$OutObj
			}; # end if Loud
		}; # end if Word
	}; #end foreach Word
	
	
}; #end Get-WordLikelihood

Function Get-WordMap2 {
	Param(
		[String]$WordToMap = "Hello",
		[Array]$InputSentences = ("Hello World,","How are you?")
	); #end Param
	
	$Wordmap = "" | select WordMap,Average,Location,Min,Max,SentenceLength
	$Wordmap.WordMap = "--------|--------|--------|--------|--------O--------|--------|--------|--------|--------|"
	$InputSentences = $InputSentences -split "[.][ ]" -split "[?][ ]" -split "[!][ ]"
	foreach ($InputSentence in $InputSentences ) {
		#$s1 = $InputSentence -split "[.][ ]"
		#$s2 = $InputSentence + "."
		$InputSentenceArray = ($InputSentence + ".") -split "[ ]+"
	
		$InputSentenceLength = $InputSentenceArray.count
		$WordLocation = ($WordToMap | %{ ($InputSentenceLength | Select-String $_).LineNumber})
			#foreach ($word in $WordLocation ) {
		$WordAverage = $WordLocation / $InputSentenceLength
		$MapLocation = $WordAverage * 100
		
		
		$Wordmap.Location += $WordLocation
		$Wordmap.Average += $WordAverage
		$Wordmap.SentenceLength += $InputSentenceLength
		$Wordmap.Min = [math]::Min($Wordmap.Min,$WordLocation) 
		$Wordmap.Max = [math]::Max($Wordmap.Max,$WordLocation)
	}; #end foreach InputSentence
	
	$Wordmap.Location = $Wordmap.Location / $InputSentences.count
	$Wordmap.Average = $Wordmap.Average / $InputSentences.count
	$Wordmap.SentenceLength = $Wordmap.SentenceLength / $InputSentences.count
	$Wordmap.WordMap = $Wordmap.WordMap.Remove($MapLocation,1).Insert($MapLocation,'x')
	
	$Wordmap

}; #end Get-WordMap2

Function Get-RandomMeaning {
	Param(
		[int]$NumberOfMeanings = 1,
		[string]$Query = "select top $NumberOfMeanings meaning from meanings`n order by NEWID()",
		[string]$Word
	); #end Param
	if ($Word) {
		[string]$Query = "select top $NumberOfMeanings meaning from meanings where meaning like $Word`n order by NEWID()"
	}; #end if Word
	(i $Query).meaning
}; #end Get-RandomMeaning

Function Get-RandomSentence {
	while ($true) {$w = Get-RandomWords (get-random -Minimum 3 -Maximum 8);$w += "is","and","the";($w -Join ",") + (": ") +(Get-OrderedSentence $w); sleep 15}
 }; #end Get-RandomSentence

Function Out-Variable {
	Param(
		$Var
	); #end Param
	$Var
}; #end Out-Variable

Function Get-RandomWords {
	Param(
		[int]$NumberOfWords = 1
	); #end Param
	(i "select top $NumberOfWords word from words`n order by NEWID()").word
}; #end Get-RandomWords

Function Get-WordMapRandomMeanings {
	Param(
		[string]$Word = "is",
		$RandomMeanings = (Get-RandomMeaning 10)
	); #end Param
	#$wr = @()
	#1..10 | ${$wr += Get-RandomMeaning}
	if ($Word) {
		$SplitRandomMeanings = $RandomMeanings -split "`n " -split "[.][ ]+" | select -Unique
		$WordMapRandomMeanings = $SplitRandomMeanings | %{Get-WordMap $Word $_ | where {$_.location}}
		
		$WordMapRandomMeanings
	} else {
	}; #end if Replace
	 
}; #end Get-WordMapRandomMeanings

Function Add-WordToSentence {
	Param(
		[String]$LearningSentence = (Get-RandomMeaning),
		[Parameter(Position=1)][String]$WordToMap = (Get-Random ($LearningSentence -split "[ ]+")),
		[String]$MapToSentence = (Get-RandomMeaning),
		[Switch]$DontReplace
	); #end Param
	
	$MapSentenceSplit = ($MapToSentence -split "[ ]+")
	$WordAverageLocation = (Get-WordMap $WordToMap $LearningSentence).average
	$WordNewLocation = [math]::Round($MapSentenceSplit.count/(1/$WordAverageLocation))
	$WordNewLocation -= 1
	$OutArray = $MapSentenceSplit[0..$WordNewLocation]
	$OutArray +=$WordToMap
	if ($DontReplace) {
		$WordNewLocation += 1
		#$OutArray = $MapToSentence.Remove($WordNewLocation,1).Insert($WordNewLocation,$WordToMap)
	} else {
		$WordNewLocation += 2
		#$OutArray = $MapToSentence.Insert($WordNewLocation,$WordToMap)
	}; #end if Replace
	$OutArray += $MapSentenceSplit[($WordNewLocation)..$MapSentenceSplit.length]
	$OutArray = $OutArray -Join " "
	$OutArray

}; #end Add-WordToSentence

New-Alias -name c -value Get-CleverReply -force
Function Get-CleverReply {
	Param(
		#[String]$CleverInput = ("Hello World."),
		#[Switch]$DontSay
	); #end Param
	$CleverInput = $args -Join " "
	$CleverInput
	if ($DontSay) {
		#$CleverInput
	} else {
		Say-This $CleverInput	
	}; #end if DontSay
	$CleverInput = [uri]::EscapeDataString($CleverInput) 
	$url = "http://www.cleverbot.com/getreply?key=CC1dcHNGMzIrVGXxetQBP7v38vQ&input=$CleverInput&cs=76nxdxIJ02AAA"
	$Response = iwr $url 
	$CleverReply = (($Response.Content )| ConvertFrom-Json).output
	$CleverReply
	if ($DontSay) {
		#$CleverReply
	} else {
		Say-This $CleverReply male
	}; #end if DontSay
}; #end Get-CleverReply

Function Get-InterbotChat($Word = (Get-Clipboard)) {
	while ($True) {
	if ($Word.Contains(" ")) {
		#$Reply =  ((Get-MadLib $Word) -split "[.]") | select -unique
		$Reply = get-random ((Get-MadLib $Word) -split "[.]")
	} else {
		#$Reply = ((Get-MadLib (Define-Word $Word)) -split "[.]") | select -unique
		$Reply = get-random ((Get-MadLib (Define-Word $Word)) -split "[.]" | where {$_.length -gt 2})
	}; #end if Word.Count
	if ($Reply) {
		Write-Verbose "Reply: $Reply"
	} else {
		#$Reply = Define-Word $Word
		$Reply = Get-OrderedSentence (Define-Word $Word)
	}; #end if Reply
	Write-Host "Enkida: $Reply"
	$Word = (c $Reply)[1] -replace "'","" -replace "[.]","" | ConvertVoice-CleanSpeech
	Write-Host "CleverBot: $Word"
	sleep 10
	}; #end while true
}; #end Get-InterbotChat

Function Get-RandomTrivia {
	Param(
		[Int]$NumberOfQuestions = 10,
		$Trivia = (iwr "https://opentdb.com/api.php?amount=$NumberOfQuestions" | ConvertFrom-Json),
		[Int]$SleepTime = 10
	); #end param
	ipmo C:\Dropbox\www\PS1\PowerShiri\PowerShiriGrammarConvert.ps1
	
	foreach ($Result in ($Trivia.results | sort difficulty)) {
		$Question = $Result.question | ConvertVoice-CleanSpeech
		$Question
		Say-This $Question
		sleep (2.5 * $SleepTime)
		$incorrect_answers = ($Result.incorrect_answers) -Join ", "
	if ($incorrect_answers) {
		"Incorrect Answers: $incorrect_answers"
		Say-This "Incorrect Answers:"
		Say-This ($incorrect_answers -split ",")
	}
		sleep (1 * $SleepTime)
		$correct_answer = $Result.correct_answer
		"Correct Answer: {0}" -f $correct_answer
		Say-This "Correct Answer:"
		Say-This $correct_answer
		sleep (4 * $SleepTime)
	}
}; #end Get-RandomTrivia

#endregion

#region Time
New-Alias -name cftt -value ConvertFrom-TimezoneToTimezone -force
Function ConvertFrom-TimezoneToTimezone {
	#If there's more than 1 option, have it loop. (FLAG)
	Param(
		[Parameter(Mandatory=$false,Position=1)]
		[String]$time = (get-date),
		[validateset("AST","BST","CST","China","DST","EST","FST","GST","HST","IST","JST","Japan","KST","LST","MST","NST","PST","RST","Russia","SST","TST","UST","UTC","VST","YST")]
		[String]$ToTZ = "PST",
		[validateset("AST","BST","CST","China","DST","EST","FST","GST","HST","IST","JST","Japan","KST","LST","MST","NST","PST","RST","Russia","SST","TST","UST","UTC","VST","YST")]
		[String]$FromTZ = "PST",
		[String]$FromTimeZoneFullName = $null, 
		[String]$ToTimeZoneFullName = $null,
		[Switch]$UTCtoo,
		[Switch]$ListTZones
	); #end Param
	#1. Funnel the TLAs into the fromtimezone
	#2. Set the partnames to be a Foreach loop. 

	$SystemTZones = ([System.TimeZoneInfo]::GetSystemTimeZones()).id
	if ($ListTZones) {
		#ListTZones will just dump the system time zones.
		$SystemTZones
		Write-Host -f y "This system knows about the above time zones. Please use these with '-FromTimeZoneFullName' and '-ToTimeZoneFullName' Parameters."
		break
	} else {
		#Otherwise run the full script.
		
		#Three Letter Acronym Time Zone (TLATZ) list
		$TLATZ = @{
			'AST' = "Alaskan Standard Time"
			'BST' = "Bangladesh Standard Time"
			'CST' = "Central Standard Time"
			'China' = "China Standard Time"
			'DST' = "Dateline Standard Time"
			'EST' = "Eastern Standard Time"
			'FST' = "Fiji Standard Time"
			'GST' = "Greenwich Standard Time"
			'HST' = "Hawaiian Standard Time"
			'IST' = "India Standard Time"
			'JST' = "Jordan Standard Time"
			'Japan' = "Tokyo Standard Time"
			'KST' = "Korea Standard Time"
			'LST' = "Libya Standard Time"
			'MST' = "Mountain Standard Time"
			'NST' = "Newfoundland Standard Time"
			'PST' = "Pacific Standard Time"
			'RST' = "Russian Standard Time"
			'Russia' = "Russian Standard Time"
			'SST' = "Singapore Standard Time"
			'TST' = "Tokyo Standard Time"
			'UST' = "Ulaanbaatar Standard Time"
			'UTC' = "UTC"
			'VST' = "Venezuela Standard Time"
			'YST' = "Yakutsk Standard Time"
		}; #end TLATZ
		
		if ($FromTimeZoneFullName) {
			$fromtzone = $SystemTZones |  where {$_ -like "*$FromTimeZoneFullName*"}
		} elseif ($FromTZ) {
			$fromtzone = $TLATZ[$FromTZ]
		} else {
			Write-Host -f red "No 'From' time zone entered. Use -FromTZ or -FromTimeZoneFullName"
			break
		}; #end if fromTimeZone
		
		$oFromTimeZone = [System.TimeZoneInfo]::FindSystemTimeZoneById($fromtzone)
		Write-Verbose "Converting from $oFromTimeZone"
		
		if ($ToTimeZoneFullName) {
			$totzone = $SystemTZones |  where {$_ -like "*$ToTimeZoneFullName*"}
		} elseif ($ToTZ) {
			$totzone = $TLATZ[$ToTZ]
		} else {
			Write-Host -f red "No 'To' time zone entered. Use -ToTZ or -ToTimeZoneFullName"
			break
		}; #end if toTimeZone
		
		
		$oToTimeZone = [System.TimeZoneInfo]::FindSystemTimeZoneById($totzone)
		Write-Verbose "Converting to $oToTimeZone"
		
		$utc = [System.TimeZoneInfo]::ConvertTimeToUtc($time, $oFromTimeZone)
		$newTime = [System.TimeZoneInfo]::ConvertTime($utc, $oToTimeZone)
		
		$newtime
		
		if ($UTCtoo){
			$utc
		}; #end if UTC
	}; #end if ListTZones

}; #end ConvertFrom-TimezoneToTimezone

#List of TLAs
#$r = Foreach ($name in (([System.TimeZoneInfo]::GetSystemTimeZones()).standardname)) {-Join (($name).split(" ") | Foreach {$_[0]})} ; 
#$r | select -Unique | where {$_.Length -eq 3} | sort

#endregion

#region Music!

Function Start-Music {
#http://www.adminarsenal.com/admin-arsenal-blog/PowerShell-music-remotely/
	Param(
		[Parameter(Mandatory=$True,Position=1)]
		[uri]$FileName
	); #end Param
	#Add-Type -AssemblyName presentationCore
	$wmplayer = New-Object System.Windows.Media.MediaPlayer
	#$FileName = [uri] "C:\temp\Futurama - Christmas Elves song.mp3"
	#$wmplayer = New-Object System.Windows.Media.MediaPlayer
	$wmplayer.Open($FileName)
	Start-Sleep 2 # This allows the $wmplayer time to load the audio file
	#$duration = $wmplayer.NaturalDuration.TimeSpan.TotalSeconds
	$wmplayer.Play()
}; #end Start-Music-Music

Function Stop-Music {
	$wmplayer.Stop()
	$wmplayer.Close()
}; #end Stop-Music

#endregion

#region Conversions

#1..50 | Filter-FizzBuzz
Filter Filter-FizzBuzz {
	if (!($_ % 15)) {
		return "FizzBuzz"
	} elseif (!($_ % 5)) {
			return "Buzz"
	} elseif (!($_ % 3)) {
			return "Fizz"
	} else {
		return $_
	}; #end if 15
}; #end Filter-FizzBuzz

Filter Flip-TextToBinary {
	if ($_) {
		[System.Text.Encoding]::UTF8.Getbytes($_) | %{ 
			[System.Convert]::ToString($_,2).PadLeft(8,'0')
		}; #end Foreach
#[System.Text.Encoding]::UTF8.Getbytes([System.Convert]::ToString($_,2).PadLeft(8,'0'))
	}; #end if _
}; #end Filter

Filter Filter-FizzBuzz2 {
	$outstring = ""
	if (!($_ % 3)) {
			$outstring += ("Fizz" * [int]($_/3))
	} 
	if (!($_ % 5)) {
			$outstring += ("Buzz" * [int]($_/5))
	} 
	if (!($outstring)) {
		$outstring = $_
	}; #end if 15
	return $outstring
}; #end Filter-FizzBuzz2

Filter Flip-BinaryToText {
	Param(
		[Switch]$ASCII
	); #end Param
	if ($_) {
		if ($ASCII) {
			#[System.Text.Encoding]::ASCII.Getbytes($_)
			%{ 
				[System.Text.Encoding]::ASCII.GetString([System.Convert]::ToInt32($_,2)) 
			}; #end Foreach
		} else {
			%{ 
				[System.Text.Encoding]::UTF8.GetString([System.Convert]::ToInt32($_,2)) 
			}; #end Foreach
		}; #end if
	}; #end if _
}; #end Filter

Filter Flip-TextToBytes {
	Param(
		[Switch]$ASCII
	); #end Param
	if ($_) {
		if ($ASCII) {
			[System.Text.Encoding]::ASCII.Getbytes($_)
		} else {
			[System.Text.Encoding]::Unicode.Getbytes($_)
		}; #end if
	}; #end if _
}; #end Filter

<# Filter Flip-TextToHex {
	Param(
		[Switch]$ASCII
	)
	if ($ASCII) {
		$ab = [System.Text.Encoding]::ASCII.Getbytes($_);
	} else {
		$ab = [System.Text.Encoding]::UTF8.Getbytes($_);
	}; #end if
	$ac = [System.BitConverter]::ToString($ab);
	$ac.split("-")
}; #end Filter
#>

Filter Flip-BytesToText {
	Param(
		#[int]$Unicode2 = 0,
		[Switch]$Unicode
	); #end Param
	$RetStr = ""
	if ($_) {
		if ($Unicode) {
			#if ($Unicode2) {
				$RetStr = [System.Text.Encoding]::Unicode.GetString(($_,$Unicode2))
			#} else {
				#[System.Text.Encoding]::Unicode.GetString($_)
			#}; #end if Unicode2
			write-host "Unicode currently broken."
			break
		} else {
			$RetStr = [System.Text.Encoding]::ASCII.GetString($_)
		}; #end if Unicode
		if ($RetStr -ne "") {
			return $RetStr
		}; #end if RetStr	
	}; #end if _
}; #end Flip-BytesToText

Filter Flip-TextToBase64 {
	if ($_) {
		#$EncodedText =[Convert]::ToBase64String([System.Text.Encoding]::Unicode.Getbytes($InputText))
		$bytes = [System.Text.Encoding]::Unicode.Getbytes($_)
		$EncodedText =[Convert]::ToBase64String($bytes)
		$EncodedText
	}; #end if _
}; #end Filter

Function Flip-Base64ToText($InputText) {
	if ($_) {
	}; #end if _
		$DecodedText = [System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String($InputText))
		#$DecodedText = [System.Text.Encoding]::Unicode.GetString([System.Convert]::FromBase64String($InputText))
		$DecodedText
}; #end Filter

Filter Flip-HexToText {
	if ($_) {
		$_.Split(" ") | Foreach {
			[char][byte]([CONVERT]::ToInt16($_,16))
		}; #end Foreach
	}; #end if _
}; #end Flip-HexToText

Filter Flip-TextToHex {
	if ($_) {
		$_.TocharArray() | Foreach {
			([CONVERT]::ToString([byte][char]$_,16))
		}; #end Foreach
	}; #end if _
}; #end Flip-HexToText

Filter Flip-HexToBinary {
	if ($_) {
		$_.Split(" ") | Foreach {
			([CONVERT]::ToInt16($_,16))
		}; #end Foreach
	}; #end if _
}; #end Flip-HexToText

New-Alias -name Scramble-String -value Shuffle-String -force
Function Shuffle-String {
	#http://poshcode.org/4531
	Param(
		[String]$String, 
		[Switch]$IgnoreSpaces, 
		[Switch]$IgnoreCRLF, 
		[Switch]$IgnoreWhitespace
	); #end Param
	#Simple enough, input a string or here-string, return it randomly shuffled, whitespace, carriage returns and all
	#IgnoreSpaces removes spaces from output
	#IgnoreCRLF removes Carriage Returns and LineFeeds from the output
	#IgnoreWhitespace removes spaces and tabs from the output
	#Tab = [char]9
	#LF = [char]10
	#CR = [char]13
	
	If ($String.Length -eq 0) {
		Return
	}; #end if String.Length
	
	If ($IgnoreWhiteSpace) {
		$String = $String.Replace([String][char]9,"")
		$IgnoreSpaces = $True
	}; #end if IgnoreWhiteSpace
 
	If ($IgnoreSpaces) {
		$String = $String.Replace(" ","")
	}; #end if IgnoreSpaces
 
	If ($IgnoreCRLF) {
		$String = $String.Replace([String][char]10,"").Replace([String][char]13,"")
	}; #end if IgnoreCRLF

	$Random = New-Object Random
	
	Return [String]::join("",($String.ToCharArray()|sort {$Random.Next()}))
}; #end Shuffle-String

Function Convert-ArrayToString {
	Param(
		[Parameter(ValueFromPipeline=$True)][Array]$Array = (Get-Clipboard),
		[Switch]$NoClipboard = $False,
		[Switch]$CharArray = $False
	); #end Param

	$Array = $Array -Join " - " -replace ' -  - ',"`n"

	if (!($NoClipboard)) {
		$Array | clip
	} else {
		$Array
	}; #end if Clipboard
	
}; #end Convert-ArrayToString

Function Select-IPAddress {
	[CmdletBinding()]
	Param(
		[Parameter(ValueFromPipeline=$True)][String]$String = (Get-Clipboard),
		[Switch]$NoClipboard = $False
	); #end Param
	Write-Verbose $String
	$String = $String | foreach {($_ -as [ipaddress])}
	Write-Verbose $String
	
	if (!($NoClipboard)) {
		$String | clip
	} else {
		$String
	}; #end if Clipboard
	
}; #end Select-IPAddress
	
Function Select-ServerName {
	[CmdletBinding()]
	Param(
		[Parameter(ValueFromPipeline=$True)][String]$String = (Get-Clipboard),
		[Switch]$NoClipboard = $False,
		[Array]$DataCenterNames = ("AU1","CA1","CA2","CA3","DE1","GB1","GB3","IL1","LB1","NE1","NY1","SG1","UC1","UT1","VA1","VA2","WA1")
	); #end Param
	
	Write-Verbose $String
	$String = $String | Split-String -min 5 -max 16 | where {$DataCenterNames -contains $_.Substring(0,3)} 
	Write-Verbose $String
		
	if (!($NoClipboard)) {
		$String | clip
	} else {
		$String
	}; #end if Clipboard
	
}; #end Select-ServerName

Function Split-String {
	[CmdletBinding()]
	Param(
		[Parameter(ValueFromPipeline=$True)][String]$String = (Get-Clipboard),
		[int]$MaxLength = ($String.Length),
		[int]$MinLength = 0,
		#[Array]$ContainsNames = "",
		#[int]$SubstringLength = (($ContainsNames).length),
		[Array]$SplitOn = (9,10,13,32,33,35,36,37,38,40,41,42,44,47,58,64,94,126)
	); #end Param
	
	#Write-Verbose $String
	Write-Verbose $String
	$String = $String.split($SplitOn) -Join "`n" -split " " 
	#$String = $String.split(($SplitOn | Flip-BytesToText)) #-Join "`n" -split " " 
	Write-Verbose $String
	$String = $String | where {$_.length -ge $MinLength} 
	Write-Verbose $String
	$String = $String | where {$_.length -le $MaxLength} #| where {$ContainsNames -contains $_.Substring(0,$SubstringLength)} 
	Write-Verbose $String
	#Write-Verbose $String
	$String
}; #end Split-String

Function ConvertFrom-SpaceDel {
	Param(
		[Parameter(ValueFromPipeline=$True)]$String = (Get-Clipboard),
		[Switch]$NoClipboard = $False,
		[Switch]$CharArray = $False,
		[String]$Delineator = " - "
	); #end Param

	if ($CharArray) {
		$String =  ConvertFrom-CharArrayToString $String
	}; #end if CharArray

	$String = $String -replace '\s+',$Delineator -replace '\t+',$Delineator
	
	if (!($NoClipboard)) {
		$String | clip
	} else {
		$String
	}; #end if Clipboard

}; #end ConvertFrom-SpaceDeltoHypehnDel

Function ConvertFrom-ParagraphtoBulletList {
	Param(
		[Parameter(ValueFromPipeline=$True)]$String = (Get-Clipboard),
		[Switch]$NoClipboard = $False,
		[Switch]$CharArray, #(Get-Clipboard).gettype().name
		[String]$BulletPointChar = "- "
	); #end Param

	$String = $String -split "\n" -Join " "
	if ($CharArray) {
		$String =  ConvertFrom-CharArrayToString $String
	}; #end if CharArray
	$String = $BulletPointChar + $String -replace "[.]\s+",(".`n" + $BulletPointChar) -replace "[?]\s+",("?`n" + $BulletPointChar) -replace "[!]\s+",("!`n" + $BulletPointChar) -replace "\s{2,}",("`n" + $BulletPointChar) -replace "\t{2,}",("`n" + $BulletPointChar) -replace "`n`n",("`n" + $BulletPointChar) -replace "$BulletPointChar{2,}",$BulletPointChar
	#$String = $BulletPointChar + $String -replace "[.]\s+",(".`n" + $BulletPointChar) -replace "[?]\s+",("?`n" + $BulletPointChar) -replace "[!]\s+",("!`n" + $BulletPointChar) -replace "[ - ]\s+",(";`n" + $BulletPointChar) -replace "[;]\s+",(";`n" + $BulletPointChar) -replace "\s{2,}",("`n" + $BulletPointChar) -replace "\t{2,}",("`n" + $BulletPointChar) -replace "`n`n",("`n" + $BulletPointChar) -replace "$BulletPointChar{2,}",$BulletPointChar
	
	if (!($NoClipboard)) {
		$String | clip
	} else {
		$String
	}; #end if Clipboard
	
}; #end ConvertFrom-ParagraphtoBulletList

Function ConvertTo-HashTable {
    <#
    .Synopsis
        Convert an object to a HashTable
    .Description
        Convert an object to a HashTable excluding certain types.  For example, ListDictionaryInternal doesn't support serialization therefore
        can't be converted to JSON.
    .Parameter InputObject
        Object to convert
    .Parameter ExcludeTypeName
        Array of types to skip adding to resulting HashTable.  Default is to skip ListDictionaryInternal and Object Arrays.
    .Parameter MaxDepth
        Maximum depth of embedded objects to convert.  Default is 4.
    .Example
        $bios = get-ciminstance win32_bios
        $bios | ConvertTo-HashTable
	.Link
		https://gallery.technet.microsoft.com/Simple-REST-api-for-b04489f1
    #>
    
    Param (
        [Parameter(Mandatory=$true,ValueFromPipeline=$true)]
        [Object]$InputObject,
        [string[]]$ExcludeTypeName = @("ListDictionaryInternal","Object[]"),
        [ValidateRange(1,10)][Int]$MaxDepth = 4
    )

    Process {

        Write-Verbose "Converting to hashtable $($InputObject.GetType())"
        #$propNames = Get-Member -MemberType Properties -InputObject $InputObject | Select-Object -ExpandProperty Name
        $propNames = $InputObject.psobject.Properties | Select-Object -ExpandProperty Name
        $hash = @{}
        $propNames | % {
            if ($InputObject.$_ -ne $null) {
                if ($InputObject.$_ -is [string] -or (Get-Member -MemberType Properties -InputObject ($InputObject.$_) ).Count -eq 0) {
                    $hash.Add($_,$InputObject.$_)
                } else {
                    if ($InputObject.$_.GetType().Name -in $ExcludeTypeName) {
                        Write-Verbose "Skipped $_"
                    } elseif ($MaxDepth -gt 1) {
                        $hash.Add($_,(ConvertTo-HashTable -InputObject $InputObject.$_ -MaxDepth ($MaxDepth - 1)))
                    }
                }
            }
        }
        $hash
    }
}

function ConvertTo-ScriptBlock {
	Param(
		[Parameter(ValueFromPipeline=$True)][String]$String
	); #end Param
	$scriptblock = $executioncontext.invokecommand.NewScriptBlock($string)
	return $scriptblock
}; #end ConvertTo-ScriptBlock
		
Function ConvertFrom-CharArrayToString {
	Param(
		[Parameter(ValueFromPipeline=$True)]$String = (Get-Clipboard),
		[Switch]$NoClipboard = $False
	); #end Param

	$String = $String -Join "" -split "`n"
	
	if (!($NoClipboard)) {
		$String | clip
	} else {
		$String
	}; #end if Clipboard
	
}; #end ConvertFrom-CharArrayToString

Filter Convert-CharacterstoCharacter($CharactersToConvert = " ``~!@#$%^&*()_+-=",$Character = "_") {
	if ($_) {
		foreach ($Char in ($CharactersToConvert) -split "") {
			$_ = $_ -replace($CharactersToConvert,$Character)
			Write-Host -f green "This is  Char  $($Char)"
		}; # end foreach Char
	}; #end if _
	return $_
}; #end Convert-SymbolsToUnderscore

Filter Convert-SymbolsToUnderscore($Symbol = "_") {
	if ($_) {
		$_ = $_ -replace(" ",$Symbol)
		$_ = $_ -replace("``",$Symbol)
		$_ = $_ -replace("[~]",$Symbol)
		$_ = $_ -replace("[!]",$Symbol)
		$_ = $_ -replace("[@]",$Symbol)
		$_ = $_ -replace("[#]",$Symbol)
		$_ = $_ -replace("[$]",$Symbol)
		$_ = $_ -replace("[%]",$Symbol)
		$_ = $_ -replace("[\^]",$Symbol)
		$_ = $_ -replace("[&]",$Symbol)
		$_ = $_ -replace("[*]",$Symbol)
		$_ = $_ -replace("[(]",$Symbol)
		$_ = $_ -replace("[)]",$Symbol)
		$_ = $_ -replace("[[]",$Symbol)
		$_ = $_ -replace("[]']",$Symbol)
		$_ = $_ -replace("[-]",$Symbol)
		$_ = $_ -replace("[=]",$Symbol)
		$_ = $_ -replace("[+]",$Symbol)
		$_ = $_ -replace("[{]",$Symbol)
		$_ = $_ -replace("[}]",$Symbol)
		$_ = $_ -replace("\\",$Symbol)
		$_ = $_ -replace("[|]",$Symbol)
		$_ = $_ -replace("[:]",$Symbol)
		$_ = $_ -replace("[;]",$Symbol)
		$_ = $_ -replace('["]',$Symbol)
		$_ = $_ -replace("[']",$Symbol)
		$_ = $_ -replace("[<]",$Symbol)
		$_ = $_ -replace("[,]",$Symbol)
		$_ = $_ -replace("[>]",$Symbol)
		$_ = $_ -replace("[.]",$Symbol)
		$_ = $_ -replace("[?]",$Symbol)
		$_ = $_ -replace("[/]",$Symbol)
		$_ = $_ -replace("_",$Symbol)
		$_ = $_ -replace "Exists",("Exists" + $Symbol)
		$_ = $_ -replace "Where",("Where" + $Symbol)
	}; #end if _
	return $_
}; #end Convert-SymbolsToUnderscore

Filter Convert-SymbolsToUnderscore2($Symbol = "_") {
	if ($_) {
		#$_ = $_ -replace(" ",$Symbol)
		$_ = $_ -replace("``",$Symbol)
		#$_ = $_ -replace("[~]",$Symbol)
		#$_ = $_ -replace("[!]",$Symbol)
		#$_ = $_ -replace("[@]",$Symbol)
		#$_ = $_ -replace("[#]",$Symbol)
		#$_ = $_ -replace("[$]",$Symbol)
		#$_ = $_ -replace("[%]",$Symbol)
		#$_ = $_ -replace("[\^]",$Symbol)
		#$_ = $_ -replace("[&]",$Symbol)
		#$_ = $_ -replace("[*]",$Symbol)
		#$_ = $_ -replace("[(]",$Symbol)
		#$_ = $_ -replace("[)]",$Symbol)
		$_ = $_ -replace("[[]",$Symbol)
		$_ = $_ -replace("[]']",$Symbol)
		#$_ = $_ -replace("[-]",$Symbol)
		#$_ = $_ -replace("[=]",$Symbol)
		#$_ = $_ -replace("[+]",$Symbol)
		$_ = $_ -replace("[{]",$Symbol)
		$_ = $_ -replace("[}]",$Symbol)
		$_ = $_ -replace("\\",$Symbol)
		#$_ = $_ -replace("[|]",$Symbol)
		#$_ = $_ -replace("[:]",$Symbol)
		$_ = $_ -replace("[;]",$Symbol)
		#$_ = $_ -replace('["]',$Symbol)
		$_ = $_ -replace("[']",$Symbol)
		$_ = $_ -replace("[<]",$Symbol)
		$_ = $_ -replace("[,]",$Symbol)
		$_ = $_ -replace("[>]",$Symbol)
		$_ = $_ -replace("[.]",$Symbol)
		#$_ = $_ -replace("[?]",$Symbol)
		$_ = $_ -replace("[/]",$Symbol)
		#$_ = $_ -replace("_",$Symbol)
		$_ = $_ -replace "Exists",("Exists" + $Symbol)
		$_ = $_ -replace "Where",("Where" + $Symbol)
	}; #end if _
	return $_
}; #end Convert-SymbolsToUnderscore
<#
	$SymbolKey = '!','"','#','$','%','&',"'",'(',')','*','+',',','-',' - ','.','/',':',';','<','=','>','?','@','[','\',']','^','_','`','{','|','}','~','  ';
	$WordKey = ' not ',' double quote ',' comment ',' variable ',' foreach ',' and ',' quote ',' OpenParens ','CloseParens ',' all ',' plus ',' comma ',' dash ',' minus ',' dot ',' slash ',' colon ',' end ',' GreaterThan ','Equals ',' LessThan ',' where ',' At ',' OpenSquareBracket ',' EscapeSlash ',' CloseSquareBracket ',' to thepower of ',' this ',' escape ',' script ',' pipe ',' endscript ',' about ',' ';
	
Filter Flip-SymbolToWord2 {
#http://securekomodo.com/PowerShell-simple-substitution-cipher/
	$SymbolText = $_
	$Hash = @{}
	$WordText=""

	# Adding letters to Array
	for($i=0; $i -lt ($WordKey.Length); $i+=1) {
		$Hash.add($SymbolKey[$i],$WordKey[$i])
	}; #end for i
	
	#Swap letters
	for($i=0; $i -lt ($SymbolText.Length); $i+=1) {
		$char = $SymbolText[$i]
		$WordText+=$Hash[$char]
	}; #end for i

	Return $WordText
}; #end Flip-SymbolToWord2


Filter Flip-WordToSymbol2 {
#http://securekomodo.com/PowerShell-simple-substitution-cipher/
	$WordText = $_
	$Hash = @{}
	$SymbolText=""

	# Adding letters to Array
	for($i=0; $i -lt ($WordKey.Length); $i+=1) {
		$Hash.add($WordKey[$i],$SymbolKey[$i])
	}; #end for i

	#Swap letters
	for($i=0; $i -lt ($WordText.Length); $i+=1) {
		$char = $WordText[$i]
		$SymbolText+=$Hash[$char]
	}; #end for i
	
	#Write-host -ForegroundColor Green "`n$SymbolText"
	Return $SymbolText
}; #end Flip-WordToSymbol2

#>

#"if  OpenParens  variable Text -eq  variable true  CloseParens  script  write dash host  DoubleQuote hello world DoubleQuote  endscript " | Flip-WordToSymbol

Filter Flip-SymbolToWord {
	
	If ($_) {
		$_ = $_.replace('-eq ',' IsEqual ')
		$_ = $_.replace('-ne ',' IsNotEqual ')
		$_ = $_.replace('-ge ',' IsGreaterThanOrEqual ')
		$_ = $_.replace('-gt ',' IsGreaterThan ')
		$_ = $_.replace('-lt ',' IsLessThan ')
		$_ = $_.replace('-le ',' IsLessThanOrEqual ')
		$_ = $_.replace('-like ',' IsLike ')
		$_ = $_.replace('-notlike ',' IsNotLike ')
		$_ = $_.replace('-match ',' Matches ')
		$_ = $_.replace('-notmatch ',' DoesNotMatch ')
		$_ = $_.replace('-contains ',' Contains ')
		$_ = $_.replace('-notcontains ',' DoesNotContain ')
		$_ = $_.replace('-or ',' Or ')
		$_ = $_.replace('-and ',' And ')
		$_ = $_.replace('-not ',' IsNot ')
		$_ = $_.replace('-in ',' IsIn ')
		$_ = $_.replace('-notin ',' IsNotIn ')
		$_ = $_.replace('-is ',' Is ')
		$_ = $_.replace('-isnot ',' IsNot ')
		$_ = $_.replace('-as ',' As ')
		$_ = $_.replace('-band ',' BinaryAnd ')
		$_ = $_.replace('-bor ',' BinaryOr ')
		$_ = $_.replace('% ',' Modulus ')
		$_ = $_.replace('!',' Not ')
		$_ = $_.replace('"',' DoubleQuote ')
		$_ = $_.replace('#',' Comment ')
		$_ = $_.replace('$',' Variable ')
		$_ = $_.replace('%',' Foreach ')
		$_ = $_.replace('&',' And ')
		$_ = $_.replace("'",' Quote ')
		$_ = $_.replace('(',' OpenParens ')
		$_ = $_.replace(')',' CloseParens ')
		$_ = $_.replace('*',' All ')
		$_ = $_.replace('+',' Plus ')
		$_ = $_.replace(',',' Comma ')
		$_ = $_.replace('-',' Dash ')
		$_ = $_.replace(' - ',' Minus ')
		$_ = $_.replace('.',' Dot ')
		$_ = $_.replace(':',' Colon ')
		$_ = $_.replace(';',' End ')
		$_ = $_.replace('<',' GreaterThan ')
		$_ = $_.replace('=',' Equals ')
		$_ = $_.replace('-eq',' IsEqualTo ')
		$_ = $_.replace('-eq',' IsEqualTo ')
		$_ = $_.replace('>',' LessThan ')
		$_ = $_.replace('?',' Where ')
		$_ = $_.replace('@',' At ')
		$_ = $_.replace('[',' OpenSquareBracket ')
		$_ = $_.replace(']',' CloseSquareBracket ')
		$_ = $_.replace('^',' OfPower ')
		$_ = $_.replace('_',' This ')
		$_ = $_.replace('{',' Script ')
		$_ = $_.replace('|',' Pipe ')
		$_ = $_.replace('}',' Endscript ')
		$_ = $_.replace('~',' About ')
		$_ = $_.replace('`t',' Tab ')
		$_ = $_.replace('`',' Escape ')#'
		$_ = $_.replace('\',' Slash ')
		$_ = $_.replace('/',' Escape ')
		#$_ = $_.replace('  ',' ')
	}; #end If _
	
	Return $_
}; #end Flip-SymbolToWord


Filter Flip-WordToSymbol {
	
	If ($_) {
		$_ = $_.replace(' IsEqual ','-eq ')
		$_ = $_.replace(' IsNotEqual ','-ne ')
		$_ = $_.replace(' IsGreaterThanOrEqual ','-ge ')
		$_ = $_.replace(' IsGreaterThan ','-gt ')
		$_ = $_.replace(' IsLessThan ','-lt ')
		$_ = $_.replace(' IsLessThanOrEqual ','-le ')
		$_ = $_.replace(' IsLike ','-like ')
		$_ = $_.replace(' IsNotLike ','-notlike ')
		$_ = $_.replace(' Matches ','-match ')
		$_ = $_.replace(' DoesNotMatch ','-notmatch ')
		$_ = $_.replace(' Contains ','-contains ')
		$_ = $_.replace(' DoesNotContain ','-notcontains ')
		$_ = $_.replace(' Or ','-or ')
		$_ = $_.replace(' And ','-and ')
		$_ = $_.replace(' IsNot ','-not ')
		$_ = $_.replace(' IsIn ','-in ')
		$_ = $_.replace(' IsNotIn ','-notin ')
		$_ = $_.replace(' Is ','-is ')
		$_ = $_.replace(' IsNot ','-isnot ')
		$_ = $_.replace(' As ','-as ')
		$_ = $_.replace(' BinaryAnd ','-band ')
		$_ = $_.replace(' BinaryOr ','-bor ')
		$_ = $_.replace(' Modulus ','% ')
		$_ = $_.replace(' not ','!')
		$_ = $_.replace(' DoubleQuote ','"')
		$_ = $_.replace(' Comment ','#')
		$_ = $_.replace(' Variable ','$')
		$_ = $_.replace(' Foreach ','%')
		$_ = $_.replace(' And ','&')
		$_ = $_.replace(' Quote ',"'")
		$_ = $_.replace(' OpenParens ','(')
		$_ = $_.replace(' CloseParens ',')')
		$_ = $_.replace(' All ','*')
		$_ = $_.replace(' Plus ','+')
		$_ = $_.replace(' Comma ',',')
		$_ = $_.replace(' Dash ','-')
		$_ = $_.replace(' Minus ',' - ')
		$_ = $_.replace(' Dot ','.')
		$_ = $_.replace(' Colon ',':')
		$_ = $_.replace(' End ',';')
		$_ = $_.replace(' GreaterThan ','<')
		$_ = $_.replace(' Equals ','=')
		$_ = $_.replace(' LessThan ','>')
		$_ = $_.replace(' Where ','?')
		$_ = $_.replace(' At ','@')
		$_ = $_.replace(' OpenSquareBracket ','[')
		$_ = $_.replace(' CloseSquareBracket ',']')
		$_ = $_.replace(' OfPower ','^')
		$_ = $_.replace(' This ','_')
		$_ = $_.replace(' Script ','{')
		$_ = $_.replace(' Pipe ','|')
		$_ = $_.replace(' Endscript ','}')
		$_ = $_.replace(' About ','~')
		$_ = $_.replace(' Tab ','`t')
		$_ = $_.replace(' Escape ','`')#'
		$_ = $_.replace(' Slash ','\')
		$_ = $_.replace(' EscapeSlash ','/')
		#$_ = $_ = $_ -replace "\s+"," "
	}; #end If _
	
	Return $_
}; #end Flip-WordToSymbol

#endregion

#region Images

#Take-Screenshot -bounds (Get-Window).rectangle -ascii

Function Take-Screenshot {
	[CmdletBinding()]
	Param(
		[String]$WindowName = "Windows PowerShell"
	); #end Param
	Set-PSWindowStyle -Style Minimize
	Get-Screenshot -UploadToS3 -ascii -bounds (
		get-window -ProcessName (
			get-process | where {
				$_.MainWindowTitle -eq $WindowName
			}#end where __.MainWindowTitle
		).processname
	).rectangle; 
	Set-PSWindowStyle -Style Restore
}; #end Take-Screenshot

Function Get-Screenshot {
#https://stackoverflow.com/questions/2969321/how-can-i-do-a-screen-capture-in-windows-PowerShell
	[CmdletBinding()]
	Param(
		[int]$xMin = 0,
		#[ValidateRange(($xMin),999999)]
		[int]$xMax = 1000,
		[int]$yMin = 0,
		#[ValidateRange(($yMin),999999)]
		[int]$yMax = 900,
		[Drawing.Rectangle]$bounds = (Get-Window).rectangle,
		[Switch]$ascii,
		[String]$path = (".\" + (get-date -f yy-MM-dd-HH-mm-ss) + ".png")
	); #end Param
	#Need this for Image functions.
	[System.Reflection.Assembly]::LoadWithPartialName("System.Drawing") | out-null
	if ($xMin -gt $xMax) {
		0;
		Write-Verbose "First value xMin = $xMin must be less than Second value xMax = $xMax";
		return
	}; #end if xMin
	
	if ($yMin -gt $yMax) {
		0;
		Write-Verbose "Third value yMin = $yMin must be less than Fourth value yMax = $yMax";
		return
	}; #end if yMin
	
	$bmp = New-Object Drawing.Bitmap $bounds.width, $bounds.height
	$graphics = [Drawing.Graphics]::FromImage($bmp)
	$graphics.CopyFromScreen($bounds.Location, [Drawing.Point]::Empty, $bounds.size)
	
	if (test-path $path) {
		rm $path 
	}; #end if path
	
	$bmp.Save($path)
	write-host -f green "File $path written."
	$graphics.Dispose()
	$bmp.Dispose()
	if ($ascii) {
		ciai $path
	}; #end if ascii
}; #end Get-Screenshot

Function Invoke-PowerGilImage {
# load the appropriate assemblies 
	[void][Reflection.Assembly]::LoadWithPartialName("System.Windows.Forms") 
	[void][Reflection.Assembly]::LoadWithPartialName("System.Windows.Forms.DataVisualization")

	# create chart object 
	$chart = New-object System.Windows.Forms.DataVisualization.charting.chart 
	$chart.Width = 500 
	$chart.Height = 400 
	$chart.Left = 40 
	$chart.Top = 30

	# create a chartarea to draw on and add to chart 
	$chartArea = New-Object System.Windows.Forms.DataVisualization.charting.chartArea 
	$chart.chartAreas.Add($chartArea)

	# add data to chart 
	$Cities = @{London=7556900; Berlin=3429900; Madrid=3213271; Rome=2726539; 
				Paris=2188500} 
	[void]$chart.Series.Add("Data") 
	$chart.Series["Data"].Points.DataBindXY($Cities.Keys, $Cities.Values)

	# display the chart on a form 
	$chart.Anchor = [System.Windows.Forms.AnchorStyles]::Bottom -bor [System.Windows.Forms.AnchorStyles]::Right -bor
					[System.Windows.Forms.AnchorStyles]::Top -bor [System.Windows.Forms.AnchorStyles]::Left 
	$Form = New-Object Windows.Forms.Form 
	$Form.Text = "PowerShell chart" 
	$Form.Width = 600 
	$Form.Height = 600 
	$Form.controls.add($chart) 
	$Form.Add_Shown({$Form.Activate()}) 
	$Form.ShowDialog()
}; #end Invoke-PowerGilImage

Function Display-Image {
# Loosely based on http://www.vistax64.com/PowerShell/202216-display-image-PowerShell.html
	Param(
		[Parameter(Mandatory=$True,Position=1)]
		[String]$FileName
	); #end Param
	[void][reflection.assembly]::LoadWithPartialName("System.Windows.Forms")
	#Need this for Image functions.
	[System.Reflection.Assembly]::LoadWithPartialName("System.Drawing") | out-null

	$file = (get-item $FileName)
	#$file = (get-item "c:\image.jpg")

	$img = [System.Drawing.Image]::Fromfile($file);

	# This tip from http://stackoverflow.com/questions/3358372/windows-forms-look-different-in-PowerShell-and-PowerShell-ise-why/3359274#3359274
	[System.Windows.Forms.Application]::EnableVisualStyles();
	$form = new-object Windows.Forms.Form
	$form.Text = "Image Viewer"
	$form.Width = $img.Size.Width;
	$form.Height =  $img.Size.Height;
	$pictureBox = new-object Windows.Forms.PictureBox
	$pictureBox.Width =  $img.Size.Width;
	$pictureBox.Height =  $img.Size.Height;

	$pictureBox.Image = $img;
	$form.controls.add($pictureBox)
	$form.Add_Shown( { $form.Activate() } )
	$form.ShowDialog()
	#$form.Show();
}; #end Display-Image

New-Alias -name ciai -value ConvertImage-ToASCIIArt -Force
Function ConvertImage-ToASCIIArt {
	#----------------------------------------------------------------------------- 
	# Copyright 2006 Adrian Milliner (ps1 at soapyfrog dot com) 
	# http://ps1.soapyfrog.com 
	# 
	# This work is licenced under the Creative Commons  
	# Attribution-NonCommercial-ShareAlike 2.5 License.  
	# To view a copy of this licence, visit  
	# http://creativecommons.org/licenses/by-nc-sa/2.5/  
	# or send a letter to  
	# Creative Commons, 559 Nathan Abbott Way, Stanford, California 94305, USA. 
	#----------------------------------------------------------------------------- 
	
	#----------------------------------------------------------------------------- 
	# This script loads the specified image and outputs an ascii version to the 
	# pipe, line by line. 
	# Heavily modified by Gil.
	Param( 
		[Parameter(Mandatory=$True,Position=1)]
		[String]$path, #= $(throw "Supply an image path"), 
		[int]$maxwidth, # default is width of console 
		[ValidateSet("ascii","shade","bw")]
		[String]$palette = "ascii", # choose a palette, "ascii" or "shade" 
		[float]$ratio = 1.5 # 1.5 means char height is 1.5 x width 
	); #end Param
	[System.Reflection.Assembly]::LoadWithPartialName("System.Drawing") | out-null
	#----------------------------------------------------------------------------- 
	# here we go 
	
	$palettes = @{ 
		"ascii" = " .,:;=|iI+hHOE#`$" 
		"shade" = " " + [char]0x2591 + [char]0x2592 + [char]0x2593 + [char]0x2588 
		"bw"	= " " + [char]0x2588 
	} 

	$c = $palettes[$palette] 

<#
	if (-not $c) { 
		write-warning "palette should be one of:  $($palettes.keys.GetEnumerator())" 
		write-warning "defaulting to ascii" 
		$c = $palettes.ascii 
	} 
#>

	[char[]]$charpalette = $c.TocharArray() 
	
	# We load the drawing assembly at the top of PowerGIL
	$path = (Resolve-Path $path)

	# load the image
	$image = [Drawing.Image]::FromFile($path)  
	if ($maxwidth -le 0) { [int]$maxwidth = $host.ui.rawui.WindowSize.Width - 1} 
	[int]$imgwidth = $image.Width 
	[int]$maxheight = $image.Height / ($imgwidth / $maxwidth) / $ratio 
	$bitmap = new-object Drawing.Bitmap ($image,$maxwidth,$maxheight) 
	[int]$bwidth = $bitmap.Width; [int]$bheight = $bitmap.Height 
	# draw it! 
	$cplen = $charpalette.count 
	for ([int]$y=0; $y -lt $bheight; $y++) { 
		$line = "" 
		for ([int]$x=0; $x -lt $bwidth; $x++) { 
			$colour = $bitmap.GetPixel($x,$y) 
			$bright = $colour.GetBrightness() 
			[int]$offset = [Math]::Floor($bright*$cplen) 
			$ch = $charpalette[$offset] 
			if (-not $ch) { 
				#overflow 
				$ch = $charpalette[-1] 
			}; #end if not ch 
			$line += $ch 
		}; #end for x
		$line 
	}; #end for y
	
}; #end ConvertImage-ToASCIIArt

Function Get-Window {
#https://gallery.technet.microsoft.com/scriptcenter/Get-the-position-of-a-c91a5f1f
#That version only outputs RECT, the Rectangle portions are by Gil, to work with Take-Screenshot.
    <#
        .SYNOPSIS
            Retrieve the window size (height,width) and coordinates (x,y) of
            a process window.

        .DESCRIPTION
            Retrieve the window size (height,width) and coordinates (x,y) of
            a process window.

        .PARAMETER ProcessName
            Name of the process to determine the window characteristics

        .NOTES
            Name: Get-Window
            Author: Boe Prox
            Version History
                1.0//Boe Prox - 11/20/2015
                    - Initial build
				1.1//PowerGIL - 06/26/2016
					-	Changed output to be more useful.

        .OUTPUT
            System.Automation.WindowInfo

        .EXAMPLE
            Get-Process PowerShell | Get-Window

            ProcessName Size     TopLeft  BottomRight
            ----------- ----     -------  -----------
            PowerShell  1262,642 2040,142 3302,784   

            Description
            -----------
            Displays the size and coordinates on the window for the process PowerShell.exe
        
    #>
    [OutputType('System.Automation.WindowInfo')]
    [cmdletbinding()]
    Param (
        [Parameter(ValueFromPipelineByPropertyName=$True)]
        $ProcessName = "PowerShell"
    ); #end Param
    Begin {
		[System.Reflection.Assembly]::LoadWithPartialName("System.Drawing") | out-null
        Try{
            [void][Window]
        } Catch {
        Add-Type @"
              using System;
              using System.Runtime.InteropServices;
              public class Window {
                [DllImport("user32.dll")]
                [return: MarshalAs(UnmanagedType.Bool)]
                public static extern bool GetWindowRect(IntPtr hWnd, out RECT lpRect);
              }
              public struct RECT
              {
                public int Left;        // x position of upper-left corner
                public int Top;         // y position of upper-left corner
                public int Right;       // x position of lower-right corner
                public int Bottom;      // y position of lower-right corner
              }
"@
        }
    }
    Process {        
        Get-Process -Name $ProcessName | ForEach {
            $Handle = $_.MainWindowHandle
            $Rectangle = New-Object Drawing.Rectangle
            $Rect = New-Object RECT
            $Return = [Window]::GetWindowRect($Handle,[ref]$Rect)
            If ($Return) {
                $Rectangle.Height = $Rect.Bottom - $Rect.Top
                $Rectangle.Width = $Rect.Right - $Rect.Left
				$Rectangle.x = $Rect.Left
				$Rectangle.y = $Rect.Top
				
                If ($Rect.Top -lt 0 -AND $Rect.Left -lt 0) {
                    Write-Warning "Window is minimized! Coordinates will not be accurate."
                }; #end if $Rectangle.Top
                $Object = [pscustomobject]@{
                    ProcessName = $ProcessName
                    #TopLeft = $TopLeft
                    #BottomRight = $BottomRight
					Rect = $Rect
					Rectangle = $Rectangle
                }
                $Object.PSTypeNames.insert(0,'System.Automation.WindowInfo')
                $Object
            }; #end if Return
        }; #end Foreach
    }; #end Process
}; #end Get-Window

#endregion

#region Encryption
#Run in Elevated: New-SelfSignedCertificate -CertStoreLocation cert:\LocalMachine\My -DnsName "gilgamech.com"

#$test = Get-Encrypted "test"
#$de = Get-Decrypted $test

<#
Function Get-Encrypted {
#http://PowerShell.org/wp/2014/02/01/revisited-PowerShell-and-encryption/
	[CmdletBinding()]
	Param(
		[Parameter(Mandatory=$True,Position=1)]
		[object]$Message,
		[String]$FileName
	); #end Param
	#Write-Verbose "Encrypting to $FileName..."
	try {
	Write-Verbose "Encrypting input..."
	$secureString = $Message | ConvertTo-SecureString -AsPlainText -Force
	#	$secureString = 'This is my password.  There are many like it, but this one is mine.' | 
	#ConvertTo-SecureString -AsPlainText -Force

	# Generate our new 32-byte AES key.  They don't recommend using Get-Random for this; the System.Security.Cryptography namespace offers a much more secure random number generator.

	$key = New-Object byte[](32)
	$rng = [System.Security.Cryptography.RNGCryptoServiceProvider]::Create()
	Write-Verbose "Creating key..."
	$rng.Getbytes($key)

	Write-Verbose "Encrypting input..."
	$encryptedString = ConvertFrom-SecureString -SecureString $secureString -Key $key
	Write-Verbose "Input encrypted."
	# This is the thumbprint of a certificate on my test system where I have the private key installed.
	#$thumbprint = (ls  -Path Cert:\CurrentUser\My\).Thumbprint
	$thumbprint = ((ls -Path Cert:\LocalMachine\CA) | where {$_.subject -match "CN=Root Agency"}).thumbprint
	#$cert = Get-Item -Path Cert:\CurrentUser\My\$thumbprint -ErrorAction Stop
	$cert = Get-Item -Path Cert:\LocalMachine\CA\$thumbprint -ErrorAction Stop
	$encryptedKey = $cert.PublicKey.Key.Encrypt($key, $true)
	Write-Verbose "Key encrypted."

	$object = New-Object psobject -Property @{
		Key = $encryptedKey
		Payload = $encryptedString
	}; #end object

	Write-Verbose "Encryption complete."
	
	if ($FileName) {
		$object | Export-Clixml $FileName
	} else {
		$object
	}; #end if FileName
	} 	finally {
		if ($null -ne $key) { [Array]::Clear($key, 0, $key.Length) }
		Write-Verbose "Key cleared."
	#	if ($null -ne $secureString) { [Array]::Clear($secureString, 0, $secureString.Length) }
	#	if ($null -ne $rng) { [Array]::Clear($rng, 0, $rng.Length) }
	#	if ($null -ne $encryptedString) { [Array]::Clear($encryptedString, 0, $encryptedString.Length) }
	#	if ($null -ne $thumbprint) { [Array]::Clear($thumbprint, 0, $thumbprint.Length) }
	#	if ($null -ne $cert) { [Array]::Clear($cert, 0, $cert.Length) }
	#	if ($null -ne $encryptedKey) { [Array]::Clear($encryptedKey, 0, $encryptedKey.Length) }
	#	if ($null -ne $object) { [Array]::Clear($object, 0, $object.Length) }

	}; #end try
}; #end Get-Encrypted 
#>

Function Get-Decrypted {
#http://PowerShell.org/wp/2014/02/01/revisited-PowerShell-and-encryption/
	[CmdletBinding()]
	Param(
		[String]$FileName,
		[Parameter(Position=1)]
		[object]$Object #= (Import-Clixml -Path $FileName)
	); #end Param
	Write-Verbose "Decrypting..."
	try {
		#Write-Verbose "Reading file $FileName"
		#$object = Import-Clixml -Path $FileName
		if ($FileName) {
			Write-Verbose "Removing $FileName"
			rm $FileName
		}; #end if FileName
		
		$thumbprint = (ls  -Path Cert:\CurrentUser\My\).Thumbprint
		$cert = Get-Item -Path Cert:\CurrentUser\My\$thumbprint -ErrorAction Stop
		Write-Verbose $cert
		Write-Verbose $object
		$key = $cert.PrivateKey.Decrypt($object.Key, $true)
		Write-Verbose "Key decrypted."
		Write-Verbose "Decrypting payload, this may take a while..."
		$secureString = $object.Payload | ConvertTo-SecureString -Key $key
		Write-Verbose "Input decrypted."
		ConvertFrom-SecureToPlain $secureString
		Write-Verbose "Decryption complete. Hope you wrote this to a variable!"
	
	} finally {
		if ($null -ne $key) { [Array]::Clear($key, 0, $key.Length) }
	Write-Verbose "Key cleared."
	}; #end try
}; #end Get-Decrypted

Function Get-NISTRandomBeacon {
	Param(
		[Int]$Timestamp = (Get-UnixTimestamp)
	); #end Param
	
	#Get the latest beacon.
	$Beacon = iwr ("https://beacon.nist.gov/rest/record/"+$Timestamp);
	#Convert from XML objects to .NET objects.
	$BeaconXML = [xml]$Beacon.Content;
	#Return the Record attribute.
	$BeaconXML.record

}; #end Get-NISTRandomBeacon

Function Get-UnixTimestamp {
	[int]((get-date) - $UnixEpochStart).TotalSeconds
}; #end Get-UnixTimestamp

Function Get-BadPassword {
#http://blog.oddbit.com/2012/11/04/PowerShell-random-passwords/
#http://www.peterprovost.org/blog/2007/06/22/Quick-n-Dirty-PowerShell-Password-Generator/
#http://PowerShell.org/wp/2014/02/01/revisited-PowerShell-and-encryption/
[CmdletBinding()]
	Param(
		$Length = 16,
		[ValidateSet("All","Keyboard","NumbersAndLetters","Base64")][String]$CharSet = "NumbersAndLetters"
	); #end Param

		Switch ($CharSet) {
		"All"{ 
			[String]$chars = $PlainTextAlpha 
		}
		"Keyboard"{ 
			$chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_!@#$%^&*()"
		}
		"NumbersAndLetters"{ 
			$chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
		}
		"Base64" {
			$chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+="
		}
		default { 
			[String]$chars = $PlainTextAlpha
		}
		}; #end Switch DataType

	# Generate our new 32-byte AES key.  They don't recommend using Get-Random for this; the System.Security.Cryptography namespace offers a much more secure random number generator.
		
	$key = New-Object byte[]($Length)
	$rng = [System.Security.Cryptography.RNGCryptoServiceProvider]::Create()
	#Write-Host "Creating key..." -f y
	
	$rng.Getbytes($key) #| Flip-BytesToText )
	
	#Original wouldn't reuse letters from the set. This gave a max Length of the 62 chars in the set, not random at all. This way reuses the entire set foreach letter in the password.
	[String]$NewPassword = ""
	for ($FunctionVariable = 0 ; $FunctionVariable -lt $Length ; $FunctionVariable++) {
		$NewPassword += $chars[ $key[$FunctionVariable] % $chars.Length ]	
	}; #end for FunctionVariable
	
	Return $NewPassword
	
}; #end Get-BadPassword

	$PlainTextKey = 9, 10, 13, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126; 
	$CipherTextKey = 54,96,115,60,69,77,97,64,125,99,103,118,61,94,48,88,82,53,104,106,113,59,89,122,71,55,102,112,63,44,123,105,121,42,65,46,101,35,114,79,34,109,98,110,91,81,87,49,108,45,32,84,119,47,43,51,92,124,80,9,74,52,36,111,40,95,126,75,67,37,73,38,33,13,117,107,93,90,68,70,50,100,76,62,72,85,86,120,56,39,78,58,57,116,83,41,66,10;
	
	$PlainTextAlpha = -Join ($PlainTextKey | Flip-BytesToText -ASCII)
	$CipherTextAlpha = -Join ($CipherTextKey | Flip-BytesToText -ASCII)
	
Function Reset-CipherKey {
	Param(
		[String]$InputFile = $PowerGIL,
		[Array]$ScrambleKey = $PlainTextKey,
		$ModuleContents = (gc $InputFile),
		$CTKLineNo = (($ModuleContents | Select-String '[$]CipherTextKey [=]*')[0].LineNumber - 1),
		$ModuleOut =  ($ModuleContents[0..($CTKLineNo -1)]),
		$NewCipherKey = (Get-Random -InputObject $ScrambleKey -Count $ScrambleKey.Length),
		[String]$OutKey = "`t`$`CipherTextKey = " 
	); #end Param

	$ModuleContents = gc $InputFile
	$CTKLineNo = (($ModuleContents | Select-String '[$]CipherTextKey [=]*')[0].LineNumber - 1)
	Write-Verbose $ModuleContents[$CTKLineNo]
	$ModuleOut =  $ModuleContents[0..($CTKLineNo -1)]
	
	$NewCipherKey = Get-Random -InputObject $ScrambleKey -Count $ScrambleKey.Length
	
	[String]$OutKey = "`t`$`CipherTextKey = " 
	foreach ($Char in $NewCipherKey) {
		if ($Char -eq $NewCipherKey[-1]) {
			$DelimVar = ';'
		} else {
			$DelimVar = ', '
		}; #end if Char
		$OutKey += $Char.ToString() + $DelimVar 
	}; #end foreach Char
	$ModuleOut += $OutKey
	$ModuleOut += $ModuleContents[($CTKLineNo +1)..$ModuleContents.Length]
	Insert-TextIntoFile -FileOutput $ModuleOut -FileName $InputFile
}; #end Reset-CipherKey
	
Filter Flip-StringToHashed {
#http://securekomodo.com/PowerShell-simple-substitution-cipher/
	$Message = $_
	# Declaring the encryption and decryption key (A=A,B=Z,C=Qdash = dash or something (this part keeps getting corrupted by something) etc)
	$CTALength = $CipherTextAlpha.Length
	# Adding letters to Array
	$Hash = @{}
	for($i=0; $i -lt $CTALength; $i+=1) {
		$Hash.add($PlainTextAlpha[$i],$CipherTextAlpha[$i])
	}; #end for i
	
	# Converting to Upper
	#$Message = $Message.ToUpper()
	$CTLength = $Message.Length
	$CipherText=""
	
	for($i=0; $i -lt $CTLength; $i+=1) {
		$char = $Message[$i]
		$CipherText+=$Hash[$char]
	}; #end for i
	#Write-host -ForegroundColor Yellow "`n$CipherText"
	$CipherText

}; #end Flip-StringToHashed

Filter Flip-HashedToString {
#http://securekomodo.com/PowerShell-simple-substitution-cipher/
	$CTALength = $CipherTextAlpha.Length
	$Hash = @{}
	$CTLength = $_.Length
	$PlainText=""

	for($i=0; $i -lt $CTALength; $i+=1) {
		$Hash.add($CipherTextAlpha[$i],$PlainTextAlpha[$i])
	}; #end for i

	for($i=0; $i -lt $CTLength; $i+=1) {
		$char = $_[$i]
		$PlainText+=$Hash[$char]
	}; #end for i
	$PlainText
}; #end Flip-HashedToString
#endregion

#region SQL
#
New-Alias -Name i -Value Invoke-GilSQL -force
function Invoke-GilSQL {
#https://stackoverflow.com/questions/8423541/how-do-you-run-a-sql-server-query-from-powershell
#http://poshcode.org/2484
	[CmdletBinding()]
    param(
		[ValidateSet("Select","Insert","Update","Delete")]
		[String]$CRUD = "Select",
		[String]$ColumnName = "*",
		[ValidateSet("From","Into","Set")]
		[String]$CRUDAdjuster = "From",
        [String]$Table = "TableName",
		[String]$WhereCondition,
        [String]$Database = "PowerGIL",
        [Switch]$ShowErrors,
        [Switch]$NoCredentials,
        [Switch]$DropTable, #Does nothing.
		#[String]$Username = "PowerGilAdmin",
		#[String]$Password = "KJYiQAr27u6jjVkJ",
		[String]$Username = "PowerGIL",
		[String]$Password = "AM7SOIySgTQG6Z6w",
		[int]$QueryTimeout = 10,
		[int]$ConnectionTimeout = 30,
        [String]$ServerInstance = "GilServer01\GILEXPRESS,54321",
		[Parameter(Position=1)]
		[String]$Query = "Use $Database $CRUD $ColumnName $CRUDAdjuster $Table $WhereCondition"
	); #end Param
	
	if ($CRUD -ne "Select") {
		$ColumnName = ""
	}; #end if CRUD

	$parms = @{
		'Query'= $Query;
		'Database' = $Database;
		'ServerInstance'= $ServerInstance;
	}; #end Parms
	Write-Verbose "Query: $Query"
	Write-Verbose "Database: $Database"
	Write-Verbose "ServerInstance: $ServerInstance"
	
	if (($NoCredentials)) {
		$ConnectionString = "Server={0};Database={1};Trusted_Connection=True;Connect Timeout={2}" -f $ServerInstance,$Database,$ConnectionTimeout 
	} else {
		$parms += @{
			'Username' = $Username;
			'Password' = $Password;
		}; #end Parms
	
		Write-Verbose "Username: $Username"
		Write-Verbose "Password: $Password"
		$ConnectionString = "Server={0};Database={1};User ID={2};Password={3};Trusted_Connection=False;Connect Timeout={4}" -f $ServerInstance,$Database,$Username,$Password,$ConnectionTimeout 
	}; #end if NoCredentials
	
	#This check is made in the Init region above, during module loading.
	if ($Invoke_Sqlcmd_exists){
		Write-Verbose "Params: $($parms)"
		Invoke-Sqlcmd @parms
	} else {
		Write-Verbose "ConnectionString: $ConnectionString"
		$connection = new-object system.data.SqlClient.SQLConnection($connectionString)
		$command = new-object system.data.sqlclient.sqlcommand($Query,$connection)
		$command.CommandTimeout=	$QueryTimeout
		$connection.Open()

		$adapter = New-Object System.Data.sqlclient.sqlDataAdapter $command
		$DataSet = New-Object system.Data.DataSet
		$adapter.Fill($dataSet) | Out-Null

		$connection.Close()
		[Array]$output = @{}
		foreach ($line in $DataSet.Tables) {$output += $line}
		
	}; #end if Invoke_Sqlcmd_exists
	$output
	
}; #end Invoke-GilSQL

New-Alias -Name j -Value Invoke-GilpgSQL -force
function Invoke-GilpgSQL {
#https://stackoverflow.com/questions/8423541/how-do-you-run-a-sql-server-query-from-powershell
#http://poshcode.org/2484
	[CmdletBinding()]
    param(
		[ValidateSet("Select","Insert","Update","Delete")]
		[String]$CRUD = "Select",
		[String]$ColumnName = "*",
		[ValidateSet("From","Into","Set")]
		[String]$CRUDAdjuster = "From",
        [String]$Table = "TableName",
		[String]$WhereCondition,
        [String]$Database = "postgres",
        [Switch]$ShowErrors,
        [Switch]$NoCredentials,
        [Switch]$DropTable, #Does nothing.
		[String]$Username = "postgres",
		[String]$Password = "dbpasswd",
		[int]$QueryTimeout = 10,
		[int]$ConnectionTimeout = 30,
		[String]$ServerAddr = "localhost",
		[String]$ServerPort  = "5432",
		[Parameter(Position=1)]
		[String]$Query = "Use $Database $CRUD $ColumnName $CRUDAdjuster $Table $WhereCondition"
	); #end Param
	
	if ($CRUD -ne "Select") {
		$ColumnName = ""
	}; #end if CRUD

	$parms = @{
		'Query'= $Query;
		'Database' = $Database;
	}; #end Parms
	Write-Verbose "Query: $Query"
	Write-Verbose "Database: $Database"
	
	if (($NoCredentials)) {
		$ConnectionString = "Driver={PostgreSQL ODBC Driver(UNICODE)};Server=$ServerAddr;Port=$ServerPort;Database=$Database;"
	} else {
	
		Write-Verbose "Username: $Username"
		Write-Verbose "Password: $Password"
		$ConnectionString = "Driver={PostgreSQL ODBC Driver(UNICODE)};Server=$ServerAddr;Port=$ServerPort;Database=$Database;Uid=$Username;Pwd=$Password;"
	}; #end if NoCredentials
	
	Write-Verbose "ConnectionString: $ConnectionString"
	$connection = New-Object System.Data.Odbc.OdbcConnection($ConnectionString);

	$command = New-Object System.Data.Odbc.OdbcCommand($Query,$connection);
	$command.CommandTimeout=	$QueryTimeout
	$connection.Open();

	$adapter = New-Object System.Data.Odbc.OdbcDataAdapter $command
	$DataSet = New-Object system.Data.DataSet
	$adapter.Fill($dataSet) | Out-Null

	$connection.Close();
	[Array]$output = @{}
	foreach ($line in $DataSet.Tables) {$output += $line}
		
	$output
	
}; #end Invoke-GilSQL

<#
		Switch ($DataType) {
		1 { }; #end 1
		2 { }; #end 2
		default { }; #end default
		}; #end Switch DataType

2. Change variables from NoCredentials to Local or WindowsAuthentication or something. 		
#>

function Add-SQLDatabase {
    param(
        [String]$NewDatabase,
        [String]$NewLoginUserName,
        [String]$NewLoginPassword = (Get-BadPassword 16),
        [Switch]$NoCredentials,
        [Switch]$NoCreateDB,
		[String]$Username,
		[String]$Password,
        [String]$Database,
		[String]$CreateLoginQuery = "CREATE LOGIN $NewLoginUserName WITH PASSWORD = '$NewLoginPassword',DEFAULT_Database = $NewDatabase",
		[String]$CreateUserQuery = "Use $NewDatabase CREATE User $NewLoginUserName FOR Login $NewLoginUserName",
		[String]$AddRoleMemberQuery = "Use $NewDatabase exec sp_addrolemember 'db_owner', $NewLoginUserName",
		$parms = @{
			'ShowErrors' = $True
			'NoCredentials' = $NoCredentials
		}
	); #end Param
	if ($Database) {
		$parms += @{
			'Database' = $Database
		}
	}; #end Database
	if ($UserName) {
		$parms += @{
			'Username' = $UserName;
			'Password' = $Password;
		}
	}; #end UserName

	if  (!($NoCreateDB)) {
		i "Create Database $NewDatabase" @parms
	}; #end if NoCreateDB
	
	foreach (	$Query in ($CreateLoginQuery,$CreateUserQuery,$AddRoleMemberQuery)) {
		i $Query @parms
	}; #end foreach Query

	$ConfirmOutput = "New user created: $NewLoginUserName / $NewLoginPassword"
	$ConfirmOutput
	
}; #end Add-UserToSQL

function Drop-SQLDatabase {
    param(
        [Parameter(Mandatory=$True)][String]$DatabaseToDrop,
        [String]$DatabaseForLogin,
		[String]$UserName,
		[String]$Password,
        [Switch]$NoCredentials,
		[String]$DropUserQuery = "use $Database drop user $UserToRemove",
		[String]$DropLoginQuery = "use master drop login $UserToRemove",
		[String]$SingleUserModeQuery = "ALTER Database $Database SET SINGLE_USER WITH ROLLBACK IMMEDIATE",
		[String]$MultiUserModeQuery = "ALTER Database $Database SET MULTI_USER",
		$parms = @{
			#'Database' = $Database
			'ShowErrors' = $True
			'NoCredentials' = $NoCredentials
			#'Database' = "master"
		}
	); #end Param
	if ($Database) {
		$parms += @{
			'Database' = $Database
		}
	}; #end Database
	if ($UserName) {
		$parms += @{
			'Username' = $UserName;
			'Password' = $Password;
		}
	}; #end UserName
	
	i "ALTER DATABASE $DatabaseToDrop SET OFFLINE WITH ROLLBACK IMMEDIATE;
	ALTER DATABASE $DatabaseToDrop SET ONLINE;
	DROP DATABASE $DatabaseToDrop;" @parms -Database $DatabaseForLogin
}; #end Drop-SQLDatabase

function Remove-UserFromSQL {
    param(
        [Parameter(Mandatory=$True)][String]$UserToRemove,
        [String]$Database,
		[String]$UserName,
		[String]$Password,
        [Switch]$NoCredentials,
		[String]$DropUserQuery = "use $Database drop user $UserToRemove",
		[String]$DropLoginQuery = "use master drop login $UserToRemove",
		[String]$SingleUserModeQuery = "ALTER Database $Database SET SINGLE_USER WITH ROLLBACK IMMEDIATE",
		[String]$MultiUserModeQuery = "ALTER Database $Database SET MULTI_USER",
		$parms = @{
			#'Database' = $Database
			'ShowErrors' = $True
			'NoCredentials' = $NoCredentials
			#'Database' = "master"
		}
	); #end Param
	if ($Database) {
		$parms += @{
			'Database' = $Database
		}
	}; #end Database
	if ($UserName) {
		$parms += @{
			'Username' = $UserName;
			'Password' = $Password;
		}
	}; #end UserName
	
	i $DropUserQuery @parms -Database $Database
	foreach (	$Query in ($SingleUserModeQuery,$DropLoginQuery,$MultiUserModeQuery)) {
		i $Query @parms -Database master
	}; #end foreach Query

	$ConfirmOutput = "User deleted: $UserToRemove"
	$ConfirmOutput
	
}; #end Remove-UserFromSQL

New-Alias -Name e -Value Export-SQLTable -force
function Export-SQLTable {
	[CmdletBinding()]
    param(
        [Parameter(Mandatory=$True)][object]$Data,
        [String]$TableName = "Table_$(Get-Date -f yyyyMMddHHmmss)",
        [String]$Database,
		[String]$Username,
		[String]$Password,
		[Array]$NullValues, # = '???', 'N/A', 'No Tribe'
		[Array]$ColumnNamesToNull, # = "ARKName","TribeName"
        [Switch]$NoCredentials,
        [Switch]$ShowErrors,
        [Switch]$DropTable,
        [Switch]$OnlyCreate,
        [Switch]$SeenColumns,
		[Array]$SeenColumnNames = ("Firstseen","Lastseen"),
		[int]$DataRows = ($Data.Length),
		[String]$IDChar = "ID",
		[ValidateSet("int","bigint","smallint","tinyint","decimal")]
		[String]$IDType = "INT",
		[String]$TableColumns = "$IDChar $IDType IDENTITY(1,1) PRIMARY KEY, ",
		[String]$InsertColumns = "($IDChar, ",
		[Array]$ColumnNames = ((Get-PropertyFromObject $Data | where {$_ -notmatch $IDChar}) -replace " ","_"),
		[Array]$ColumnNamestoUnique = ($ColumnNames | Select-String "name" | select -First 1),
		[datetime]$GetDate = (Get-Date),
		[String]$TestingQuery = "select top 10 * from $TableName"
	); #end Param
	if (!($ShowErrors)){
		$ErrorActionPreference = "SilentlyContinue"
	}; #end if DropTable
	
	#Build parms for i wrapper.
	$parms = @{
		'ShowErrors' = $ShowErrors
		'NoCredentials' = $NoCredentials
	}
	if ($Database) {
		$parms += @{
			'Database' = $Database
		}
	}; #end Database
	if ($UserName) {
		$parms += @{
			'Username' = $UserName;
			'Password' = $Password;
		}
	}; #end UserName
	
	#DropTable Switch, for dropping the table to rebuild it.
	if ($DropTable){
		Write-Verbose "Dropping table $TableName"
		i "Drop table $($TableName)" @Parms
	}; #end if DropTable
	

	$TableInfo = (i "select COLUMN_NAME from information_schema.columns where table_name = '$($TableName)'" @parms)
	#If table has a column named FirstSeen, set SeenColumns True.
	if ($TableInfo.COLUMN_NAME -like $SeenColumnNames[1]){
		$SeenColumns = $True
		Write-Verbose "Setting SeenColumns True."
	}; #end if i 
	if ($SeenColumns){
		#$ColumnNames += $SeenColumnNames
		
	}; # end if SeenColumns

	
	#Create TableColumns variable, for use when inserting rows.
	Write-Verbose "Data length: $DataRows"
	Write-Verbose "ColumnNames: $ColumnNames"
	
		
	Write-Verbose "Building columns."
	$DataType = "varchar(255)"
	foreach ($ColumnName in $ColumnNames) {			
		#$ColumnNames += $SeenColumnNames
		
			Switch ($Data[0].$ColumnName.GetType().name) {
				"Int32" { 
					$DataType = "INT"
				}; #
				"Decimal" { 
					$DataType = "FLOAT(24)"
				}; #
				"Boolean" { 
					$DataType = "BIT"
				}; #end Switch Int32
				"DateTime" { 
					$DataType = "DateTime"
				}; #end Switch Int32
				"String" { 
					$DataType = "varchar(255)"
				}
				default { 
					$DataType = "varchar(255)"
				}
			}; #end Switch Data
			
		if ($Data[0].$ColumnName){
		} else {
		}; # end if Data
		
		$TableColumns += "$($ColumnName | Convert-SymbolsToUnderscore2) $DataType, "
		Write-Verbose "Column: $ColumnName $DataType"
			
	}; #end foreach ColumnName
	Write-Verbose "TableColumns: $TableColumns"
	$TableColumns = (-Join $TableColumns[0..($TableColumns.Length -3)] )
	Write-Verbose "Checking Table: $TableName"
	i "if not exists (select distinct TABLE_NAME from INFORMATION_SCHEMA.TABLES where TABLE_NAME = '$($TableName)')
	begin; 
	Create table $($TableName) ($($TableColumns)); 
	end;" @parms
	
	
	#If SeenColumns is set true, and there are no SeenColumns, add them.
	foreach ($ColumnName in ($SeenColumnNames | Convert-SymbolsToUnderscore)) {
		if (($TableInfo.COLUMN_NAME -notcontains $ColumnName) -AND ($SeenColumns)) {
			Write-Verbose "Adding SeenColumn $ColumnName."
			i "ALTER TABLE $($TableName) ADD $ColumnName DateTime default '$($GetDate)';" @parms
		}; #end if i
	}; # end foreach ColumnName

	
	if ($ColumnNamestoUnique) {
		$ConstraintName = "CN_" + (($ColumnNamestoUnique | Convert-SymbolsToUnderscore) -Join"_") + "_"+ (Get-BadPassword)
		$CN2 = ($ColumnNamestoUnique  | Convert-SymbolsToUnderscore) -Join","
		Write-Verbose "Checking (maybe creating) constraint $ConstraintName on columns $CN2."
		i "if not exists (select distinct TABLE_NAME FROM INFORMATION_SCHEMA.TABLE_CONSTRAINTS where TABLE_NAME = '$($TableName)')
		begin; 
		ALTER TABLE $TableName ADD CONSTRAINT $ConstraintName UNIQUE($CN2);end;" @parms
	}; #end if ColumnNamesToUnique

	#Reparse data into input strings.
	for ($RowNumber = 0 ; $RowNumber -lt $DataRows ; $RowNumber++) {
		
		$InsertString = @()
		$UpdateString = @()
		foreach ($ColumnName in ($ColumnNames | Convert-SymbolsToUnderscore)) {
			#Iterate over each Array item, sanitize into input strings.
			$DataCell = $Data[$RowNumber].$ColumnName
			If (!($DataCell)) {continue}
			$DataCellType = $DataCell.GetType().name
			#Write-Verbose $DataCellType
			Switch ($DataCellType) {
				"Int32" {
					$InsertString += $DataCell
					$UpdateString += "$ColumnName = '$DataCell'"
				}; #
				"Decimal" { 
					$InsertString += $DataCell
					$UpdateString += "$ColumnName = '$DataCell'"
				}; #
				"Boolean" { 
					$InsertString += $DataCell
					$UpdateString += "$ColumnName = '$DataCell'"
				}; #end Switch Int32
				"DateTime" { 
					$InsertString += $DataCell
					$UpdateString += "$ColumnName = '$DataCell'"
				}; #end Switch Int32
				"String" { 
					$InsertString += $DataCell | Convert-SymbolsToUnderscore2
					$UpdateString += "$ColumnName = '$($DataCell | Convert-SymbolsToUnderscore2)'"
					Write-Verbose "Data $DataCell Type $($DataCell.GetType().name), sanitizing input."
				}
				default { 
					$InsertString += $DataCell | Convert-SymbolsToUnderscore2
					$UpdateString += "$ColumnName = '$($DataCell | Convert-SymbolsToUnderscore2)'"
					Write-Verbose "Data $DataCell Type $($DataCell.GetType().name), sanitizing input."
				}
			}; #end Switch DataType
			
		}; #end foreach ColumnName
		$InsertString = ($InsertString -Join "','")
		Write-Verbose "InsertString: $InsertString"
		$UpdateString = ($UpdateString -Join ",")
		Write-Verbose "UpdateString: $UpdateString"
		
		$ColumnNameJoin = (($UpdateString -replace " = ","_COLUMN " -replace ","," " -split " " | select-string "_COLUMN") -replace "_COLUMN","" -Join ",")
		#$ColumnNameJoin = $ColumnNameJoin[0..($ColumnNameJoin - 2)]
		$ColumnNamestoUnique = $ColumnNamestoUnique -Join ","
		
		$ColumnNameUniqueJoin = @()
		foreach ($ColumnName in ($ColumnNamestoUnique | Convert-SymbolsToUnderscore)) {
			$ItemToUnique = $Data[$RowNumber].$ColumnNamestoUnique
			$ColumnNameUniqueJoin += "$ColumnName = '$($ItemToUnique | Convert-SymbolsToUnderscore2)'"
		}; #end foreach ColumnName
		$ColumnNameUniqueJoin = $ColumnNameUniqueJoin -Join " AND "
		
		if ($SeenColumns){
			$ColumnNameJoin += ",$($SeenColumnNames[0]),$($SeenColumnNames[1])"
			$InsertString += "','$($GetDate)','$($GetDate)"
			$UpdateString += ",$($SeenColumnNames[1]) = '$($GetDate)'"
		}; # end if SeenColumns
		
		i "if not exists (select distinct * from $TableName where $ColumnNameUniqueJoin)
		begin
		Insert into $TableName ($ColumnNameJoin) values ('$InsertString')
		end
		else Update $TableName Set $UpdateString where $ColumnNameUniqueJoin;" @parms
		
		#i "Update $TableName Set $($SeenColumnNames[1]) = '$($GetDate)' where $ColumnNameUniqueJoin;"

	}; #end for RowNumber
	
		
	#Null the NullValues.
	foreach ($ColumnName in ($ColumnNamesToNull | Convert-SymbolsToUnderscore)) {
		foreach ($NullValue in $NullValues) {
			Write-Verbose "Nulling value $($NullValue) in columns $($ColumnName)"
			i "update $TableName set $ColumnName = NULL where $ColumnName IN ('$NullValue')" @parms
		}; #end foreach NullValue
	}; #end foreach ColumnName
	
	#Run testing query.
	if ($TestingQuery) {
		Write-Verbose "Table written, running query to confirm: $TestingQuery"
		$Response = i $TestingQuery @parms
		$Response | ft #-a
	} else {
		Write-Verbose "Table written, no testing query, skipping test."
	}; #end if TestingQuery
	
}; #end Export-SQLTable

New-Alias -Name f -Value Export-pgSQLTable -force
function Export-pgSQLTable {
	[CmdletBinding()]
    param(
        [Parameter(Mandatory=$True)][object]$Data,
        [String]$TableName = "Table_$(Get-Date -f yyyyMMddHHmmss)",
        [String]$Database,
		[String]$Username,
		[String]$Password,
		[Array]$NullValues, # = '???', 'N/A', 'No Tribe'
		[Array]$ColumnNamesToNull, # = "ARKName","TribeName"
        [Switch]$NoCredentials,
        [Switch]$ShowErrors,
        [Switch]$DropTable,
        [Switch]$OnlyCreate,
        [Switch]$SeenColumns,
		[Array]$SeenColumnNames = ("Firstseen","Lastseen"),
		[int]$DataRows = ($Data.Length),
		[String]$IDChar = "ID",
		[ValidateSet("int","bigint","smallint","tinyint","decimal")]
		[String]$IDType = "INT",
		[String]$TableColumns = "$IDChar $IDType IDENTITY(1,1) PRIMARY KEY, ",
		[String]$InsertColumns = "($IDChar, ",
		[Array]$ColumnNames = ((Get-PropertyFromObject $Data | where {$_ -notmatch $IDChar}) -replace " ","_"),
		[Array]$ColumnNamestoUnique = ($ColumnNames | Select-String "name" | select -First 1),
		[datetime]$GetDate = (Get-Date),
		[String]$TestingQuery = "select top 10 * from $TableName"
	); #end Param
	if (!($ShowErrors)){
		$ErrorActionPreference = "SilentlyContinue"
	}; #end if DropTable
	
	#Build parms for i wrapper.
	$parms = @{
		'ShowErrors' = $ShowErrors
		'NoCredentials' = $NoCredentials
	}
	if ($Database) {
		$parms += @{
			'Database' = $Database
		}
	}; #end Database
	if ($UserName) {
		$parms += @{
			'Username' = $UserName;
			'Password' = $Password;
		}
	}; #end UserName
	
	#DropTable Switch, for dropping the table to rebuild it.
	if ($DropTable){
		Write-Verbose "Dropping table $TableName"
		j "Drop table $($TableName)" @Parms
	}; #end if DropTable
	

	$TableInfo = (j "select COLUMN_NAME from information_schema.columns where table_name = '$($TableName)'" @parms)
	#If table has a column named FirstSeen, set SeenColumns True.
	if ($TableInfo.COLUMN_NAME -like $SeenColumnNames[1]){
		$SeenColumns = $True
		Write-Verbose "Setting SeenColumns True."
	}; #end if i 
	if ($SeenColumns){
		#$ColumnNames += $SeenColumnNames
		
	}; # end if SeenColumns

	
	#Create TableColumns variable, for use when inserting rows.
	Write-Verbose "Data length: $DataRows"
	Write-Verbose "ColumnNames: $ColumnNames"
	
		
	Write-Verbose "Building columns."
	$DataType = "varchar(255)"
	foreach ($ColumnName in $ColumnNames) {			
		#$ColumnNames += $SeenColumnNames
		
			Switch ($Data[0].$ColumnName.GetType().name) {
				"Int32" { 
					$DataType = "INT"
				}; #
				"Decimal" { 
					$DataType = "FLOAT(24)"
				}; #
				"Boolean" { 
					$DataType = "BIT"
				}; #end Switch Int32
				"DateTime" { 
					$DataType = "DateTime"
				}; #end Switch Int32
				"String" { 
					$DataType = "varchar(255)"
				}
				default { 
					$DataType = "varchar(255)"
				}
			}; #end Switch Data
			
		if ($Data[0].$ColumnName){
		} else {
		}; # end if Data
		
		$TableColumns += "$($ColumnName | Convert-SymbolsToUnderscore2) $DataType, "
		Write-Verbose "Column: $ColumnName $DataType"
			
	}; #end foreach ColumnName
	Write-Verbose "TableColumns: $TableColumns"
	$TableColumns = (-Join $TableColumns[0..($TableColumns.Length -3)] )
	Write-Verbose "Checking Table: $TableName"
	j "if not exists (select distinct TABLE_NAME from INFORMATION_SCHEMA.TABLES where TABLE_NAME = '$($TableName)')
	begin; 
	Create table $($TableName) ($($TableColumns)); 
	end;" @parms
	
	
	#If SeenColumns is set true, and there are no SeenColumns, add them.
	foreach ($ColumnName in ($SeenColumnNames | Convert-SymbolsToUnderscore)) {
		if (($TableInfo.COLUMN_NAME -notcontains $ColumnName) -AND ($SeenColumns)) {
			Write-Verbose "Adding SeenColumn $ColumnName."
			j "ALTER TABLE $($TableName) ADD $ColumnName DateTime default '$($GetDate)';" @parms
		}; #end if i
	}; # end foreach ColumnName

	
	if ($ColumnNamestoUnique) {
		$ConstraintName = "CN_" + (($ColumnNamestoUnique | Convert-SymbolsToUnderscore) -Join"_") + "_"+ (Get-BadPassword)
		$CN2 = ($ColumnNamestoUnique  | Convert-SymbolsToUnderscore) -Join","
		Write-Verbose "Checking (maybe creating) constraint $ConstraintName on columns $CN2."
		j "if not exists (select distinct TABLE_NAME FROM INFORMATION_SCHEMA.TABLE_CONSTRAINTS where TABLE_NAME = '$($TableName)')
		begin; 
		ALTER TABLE $TableName ADD CONSTRAINT $ConstraintName UNIQUE($CN2);end;" @parms
	}; #end if ColumnNamesToUnique

	#Reparse data into input strings.
	for ($RowNumber = 0 ; $RowNumber -lt $DataRows ; $RowNumber++) {
		
		$InsertString = @()
		$UpdateString = @()
		foreach ($ColumnName in ($ColumnNames | Convert-SymbolsToUnderscore)) {
			#Iterate over each Array item, sanitize into input strings.
			$DataCell = $Data[$RowNumber].$ColumnName
			If (!($DataCell)) {continue}
			$DataCellType = $DataCell.GetType().name
			#Write-Verbose $DataCellType
			Switch ($DataCellType) {
				"Int32" {
					$InsertString += $DataCell
					$UpdateString += "$ColumnName = '$DataCell'"
				}; #
				"Decimal" { 
					$InsertString += $DataCell
					$UpdateString += "$ColumnName = '$DataCell'"
				}; #
				"Boolean" { 
					$InsertString += $DataCell
					$UpdateString += "$ColumnName = '$DataCell'"
				}; #end Switch Int32
				"DateTime" { 
					$InsertString += $DataCell
					$UpdateString += "$ColumnName = '$DataCell'"
				}; #end Switch Int32
				"String" { 
					$InsertString += $DataCell | Convert-SymbolsToUnderscore2
					$UpdateString += "$ColumnName = '$($DataCell | Convert-SymbolsToUnderscore2)'"
					Write-Verbose "Data $DataCell Type $($DataCell.GetType().name), sanitizing input."
				}
				default { 
					$InsertString += $DataCell | Convert-SymbolsToUnderscore2
					$UpdateString += "$ColumnName = '$($DataCell | Convert-SymbolsToUnderscore2)'"
					Write-Verbose "Data $DataCell Type $($DataCell.GetType().name), sanitizing input."
				}
			}; #end Switch DataType
			
		}; #end foreach ColumnName
		$InsertString = ($InsertString -Join "','")
		Write-Verbose "InsertString: $InsertString"
		$UpdateString = ($UpdateString -Join ",")
		Write-Verbose "UpdateString: $UpdateString"
		
		$ColumnNameJoin = (($UpdateString -replace " = ","_COLUMN " -replace ","," " -split " " | select-string "_COLUMN") -replace "_COLUMN","" -Join ",")
		#$ColumnNameJoin = $ColumnNameJoin[0..($ColumnNameJoin - 2)]
		$ColumnNamestoUnique = $ColumnNamestoUnique -Join ","
		
		$ColumnNameUniqueJoin = @()
		foreach ($ColumnName in ($ColumnNamestoUnique | Convert-SymbolsToUnderscore)) {
			$ItemToUnique = $Data[$RowNumber].$ColumnNamestoUnique
			$ColumnNameUniqueJoin += "$ColumnName = '$($ItemToUnique | Convert-SymbolsToUnderscore2)'"
		}; #end foreach ColumnName
		$ColumnNameUniqueJoin = $ColumnNameUniqueJoin -Join " AND "
		
		if ($SeenColumns){
			$ColumnNameJoin += ",$($SeenColumnNames[0]),$($SeenColumnNames[1])"
			$InsertString += "','$($GetDate)','$($GetDate)"
			$UpdateString += ",$($SeenColumnNames[1]) = '$($GetDate)'"
		}; # end if SeenColumns
		
		j "if not exists (select distinct * from $TableName where $ColumnNameUniqueJoin)
		begin
		Insert into $TableName ($ColumnNameJoin) values ('$InsertString')
		end
		else Update $TableName Set $UpdateString where $ColumnNameUniqueJoin;" @parms
		
		#i "Update $TableName Set $($SeenColumnNames[1]) = '$($GetDate)' where $ColumnNameUniqueJoin;"

	}; #end for RowNumber
	
		
	#Null the NullValues.
	foreach ($ColumnName in ($ColumnNamesToNull | Convert-SymbolsToUnderscore)) {
		foreach ($NullValue in $NullValues) {
			Write-Verbose "Nulling value $($NullValue) in columns $($ColumnName)"
			j "update $TableName set $ColumnName = NULL where $ColumnName IN ('$NullValue')" @parms
		}; #end foreach NullValue
	}; #end foreach ColumnName
	
	#Run testing query.
	if ($TestingQuery) {
		Write-Verbose "Table written, running query to confirm: $TestingQuery"
		$Response = j $TestingQuery @parms
		$Response | ft #-a
	} else {
		Write-Verbose "Table written, no testing query, skipping test."
	}; #end if TestingQuery
	
}; #end Export-SQLTable

New-Alias -Name gsi -Value Get-SQLInformation -force
function Get-SQLInformation {
    param(
        [String]$Table,
        [String]$Database,
		[String]$Username,
		[String]$Password,
        [Switch]$NoCredentials,
        [Switch]$ShowErrors,
		[Parameter(Position=1)]
		[ValidateSet(
		#"select * from information_schema.columns where table_name = '$($Table)'",
		"Select TABLE_NAME FROM INFORMATION_SCHEMA.TABLES",
		"Select name from Sys.Databases",
		"SELECT * FROM sys.Database_principals",
		"SELECT * FROM master..syslogins"
		)]
        [String]$Query
	); #end Param

	$parms = @{
		'Query' = $Query
		'ShowErrors' = $ShowErrors
		'NoCredentials' = $NoCredentials
	}
	if ($Database) {
		$parms += @{
			'Database' = $Database
		}
	}; #end Database
	if ($UserName) {
		$parms += @{
			'Username' = $UserName;
			'Password' = $Password;
		}; #end Parms
	}; #end UserName
	
	i @parms

}; #end Get-SQLInformation

Function Import-IISLog {
    param(
		$FileName,
		$IISLog = (gc $FileName),
		[Switch]$LogtypeA
	); #end Param
	[Array]$obj = @{}
	
	foreach ($Line in $IISLog) {
		
		if ($LogtypeA) {
			$obj += "" | select date, time, s_sitename, s_computername, s_ip, cs_method, cs_uri_stem, cs_uri_query, s_port, cs_username, c_ip, cs_version, cs_User_Agent, cs_Cookie, cs_Referer, cs_host, sc_status, sc_substatus, sc_win32_status, sc_bytes, cs_bytes, time_taken
		}else{
			$obj += "" | select date, time, s_ip, cs_method, cs_uri_stem, cs_uri_query, s_port, cs_username, c_ip, cs_User_Agent, cs_Referer, sc_status, sc_substatus, sc_win32_status, time_taken
		}; #end if LogtypeA
		
		$Arrayspot = ( $obj.length -1 )

		if ($LogtypeA) {
			$obj[$Arrayspot].date,$obj[$Arrayspot].time,$obj[$Arrayspot].s_sitename,$obj[$Arrayspot].s_computername,$obj[$Arrayspot].s_ip,$obj[$Arrayspot].cs_method,$obj[$Arrayspot].cs_uri_stem,$obj[$Arrayspot].cs_uri_query,$obj[$Arrayspot].s_port,$obj[$Arrayspot].cs_username,$obj[$Arrayspot].c_ip,$obj[$Arrayspot].cs_version,$obj[$Arrayspot].cs_User_Agent,$obj[$Arrayspot].cs_Cookie,$obj[$Arrayspot].cs_Referer,$obj[$Arrayspot].cs_host,$obj[$Arrayspot].sc_status,$obj[$Arrayspot].sc_substatus,$obj[$Arrayspot].sc_win32_status,$obj[$Arrayspot].sc_bytes,$obj[$Arrayspot].cs_bytes,$obj[$Arrayspot].time_taken = $Line -split " "
		}else{
			$obj[$Arrayspot].date,$obj[$Arrayspot].time,$obj[$Arrayspot].s_ip,$obj[$Arrayspot].cs_method,$obj[$Arrayspot].cs_uri_stem,$obj[$Arrayspot].cs_uri_query,$obj[$Arrayspot].s_port,$obj[$Arrayspot].cs_username,$obj[$Arrayspot].c_ip,$obj[$Arrayspot].cs_User_Agent,$obj[$Arrayspot].cs_Referer,$obj[$Arrayspot].sc_status,$obj[$Arrayspot].sc_substatus,$obj[$Arrayspot].sc_win32_status,$obj[$Arrayspot].time_taken = $Line -split " "
		}; #end IF LogtypeA
	}; #end foreach Line

	$obj

}; #end Import-IISLog

function Get-Whois {
	Param(
        [Parameter(Mandatory=$true,ValueFromPipeline=$True)][ipaddress]$IPAddress
	); #end Param
	(iwr "ipinfo.io/$IPAddress").content | ConvertFrom-Json
}; #end Import-IISLog

function Get-PropertyFromObject($Object) {
	
	$Property = $Object | Get-Member | where {$_.MemberType -eq "NoteProperty"} | select -ExpandProperty name -unique
	$Property += $Object | Get-Member | where {$_.MemberType -eq "Property"} | select -ExpandProperty name -unique
	
	if ($Property) {
	}else{
	}; #end if LogtypeA
	#$Property = $Property | where {$_.length -gt 0}
	$Property
}; #end Get-PropertyFromObject

function Drop-TableByWildcard($TableNameStartsWith = "ls") {
	$SearchTerm = $TableNameStartsWith + "*"
	foreach ($Table in (Get-SQLInformation 'Select TABLE_NAME FROM INFORMATION_SCHEMA.TABLES' | where {$_.TABLE_NAME -like $SearchTerm}).TABLE_NAME) {i "drop table $Table"}
}; #end Import-IISLog

function Copy-SQLTable {
	Param(
        [String]$TableName,
        [String]$FromDB = "ArkDB",
        [String]$ToDB = "ArkDB",
		[String]$Username,
		[String]$Password,
        [Switch]$NoCredentials,
        [Switch]$ShowErrors,
        [String]$DestinationTableName = $TableName
	); #end Param
	
	$parms = @{
		'ShowErrors' = $ShowErrors
		'NoCredentials' = $NoCredentials
		'DataBase'= $ToDB
	}
	if ($UserName) {
		$parms += @{
			'Username' = $UserName;
			'Password' = $Password;
		}
	}; #end UserName
	
	i "SELECT * into $ToDB.dbo.$TableName from $FromDB.dbo.$DestinationTableName" @parms
	
}; #end Copy-SQLTable


#endregion

#region UDP

Function Send-UDPText {
#http://PowerShell.com/cs/blogs/tips/archive/2012/05/09/communicating-between-multiple-PowerShells-via-udp.aspx
	Param(
		[object]$Message = (Get-Clipboard),
		[ipaddress]$serveraddr = $localhost,
		[int]$serverport = $RemotePort,
		[Switch]$NotJSON,
		[Switch]$Insecure
	); #end Param

	#Basic protection, at least it's not plaintext. Doesn't work with JSON IIRC.
	
	#Send Objects with JSON flag set on both sender and listener, otherwise they'll just be the useless output strings.
	if (!($NotJSON)) {
		try {
			$Message = ConvertTo-JSON $Message -ErrorAction SilentlyContinue
		} catch {
			#Try to convert to JSON, but failback to just passing the message.
			$Message = $Message
		}; #end try
	}; #end if NotJSON
		
	if (!($Insecure)) {
		$Message = ($Message | Flip-StringToHashed) 
	}; #end if Insecure
	
	#$Message = Get-Encrypted $Message
	$Message = ConvertTo-JSON $Message -Compress
	
	#Create endpoint & UDP client
	$endpoint = New-Object System.Net.IPEndPoint ($serveraddr,$serverport)
	$udpclient = New-Object System.Net.Sockets.UdpClient
	
	#Swaps the message from ASCII to bytes. Should change for like Flip-TextToBytes (FLAG)
	$bytes = [Text.Encoding]::ASCII.Getbytes($Message)
	#$bytes = $Message | Flip-TextToBytes -ASCII
	
	$bytesSent = $udpclient.Send($bytes,$bytes.Length,$endpoint)
	$udpclient.Close()
}; #end Send-UDPText

Function Start-UDPListen {
#http://PowerShell.com/cs/blogs/tips/archive/2012/05/09/communicating-between-multiple-PowerShells-via-udp.aspx
	Param(
		[int]$ServerPort = $RemotePort,
		[String]$FileName,
		[Switch]$NotContinuous,
		[Switch]$NotJSON,
		[int]$Timeout = 2000,
		[Switch]$SourceInfo,
		[Switch]$Insecure
	); #end Param
	#If there's no endpoint, create one - this tries to avoid errors that the endpoint already exists.
	#Swap [IPAddress]::Any for an address (or range?) to limit who can send to this. That would be an ACL, and we should limit to who we think/know who has the file. OR maybe send others to another file?
	if ($endpoint.port -eq $null) {
		$endpoint = New-Object System.Net.IPEndPoint ([IPAddress]::Any,$serverport)
	}; #end if

	Write-Host "Now listening on port" $serverport -f green
	if (!($NotContinuous)) {
		Write-Host "Continuous mode" -f "Red"
	}; #end if
	
	#Create the socket
	if ($udpclient -eq $null) {
		$udpclient = New-Object System.Net.Sockets.UdpClient $serverport
		$udpclient.Client.ReceiveTimeout = $Timeout
	}; #end if

	#Quick and dirty way to loop when iterate is set to true. 
	$iterate = $true
	while ($iterate) {
		$Content = $null
		#Open socket, store 
		try {
			$Content = $udpclient.Receive([ref]$endpoint) 
		} catch {
		}; #end try
				
		if ($Content) {
			#Swaps the message from bytes to ASCII. Should change for like Flip-BytesToText (FLAG)
			$Content = [Text.Encoding]::ASCII.GetString($Content)
			#$Content = $Content | Flip-BytesToText -ASCII
			#$bytes = [Text.Encoding]::ASCII.Getbytes($Message)
			#$bytes = $Message | Flip-TextToBytes -ASCII
			#How to improve security?
			#PSK: 
			#PSK used for first message, 
			#new key computed and sent, 
			#new key encrypts second message
			#Second key encrypted and sent.
			$Content = ConvertFrom-JSON $Content
			#$Content = Get-Decrypted $Content

			if (!($Insecure)) {
				$Content = $Content | Flip-HashedToString
				#$Content = ConvertFrom-SecureToPlain $Content -ErrorAction SilentlyContinue
				#$key = -Join ((get-random -count 16	-input (  48..57 + 65..90 + 97..122 ) ) | Flip-BytesToText)
			}; #end if Insecure
			
			#If you're receiving Objects, expect them to be sent as JSON strings, so convert them back to Objects.
			if (!($NotJSON)) {
				try {
					$Content = ConvertFrom-JSON $Content -ErrorAction SilentlyContinue
				} catch {
					#Try to convert to JSON, but failback to just passing the message.
					$Content = ConvertFrom-JSON ("'" + $Content + "'") -ErrorAction SilentlyContinue
					#$Content = $Content
				}; #end try
			} else {	}; #end if - Not sure what was going there.
			
			if ($Error) {
				Write-Verbose $Error[0]
			}; #end if Error
			
			#If Continuous flag wasn't set, dump us from the loop.
			if ($NotContinuous) {
				$iterate = $false
			}; #end if NotContinuous
			
			if ($FileName) {
				Write-Verbose $Content
				if ($Content.Length -ge 1) {
					$Content >> $FileName
				}; #end if content.Length
				Write-Verbose "Written to $FileName"
			} else {
				$Content
				if ($SourceInfo) {
					"$($endpoint.address):$($endpoint.port)"
				}; # end if SourceInfo
				Write-Verbose "Standard out."
			}; #end if FileName
		} else {
			$Content
			Write-Verbose "No content."
		}; #end if Content
	Write-Verbose $iterate
	} # end while
}; #end Start-UDPListen

# endregion
