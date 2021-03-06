
Convert lang to JSON
Store somewhere
Convert JSON to lang




region test
endregion

Function Rebuild-Parameters {
	Param(
		[String]$FunctionName = "Rebuild-Parameters",
		[Array]$Function = (Find-Function $FunctionName),
		[switch]$GilFile
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
		[switch]$GilFile
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
		[switch]$AutoLoad
	); #end Param
	
	if ($FileName.substring($FileName.Length - 4,4) -ne ".ps1") {
		$FileName += ".ps1"
	}; #end if FileName.substring($FileName.Length - 4,4)
	
	if (!($FilePath)) {
		$FilePath = (get-location).path + "\" + $FileName
	}; #end if FilePath

#region fold this damn thing.
	$FunctionHeader = @"
<#
.SYNOPSIS
	Inserts the supplied text into the target module at the listed line number.
.DESCRIPTION
	Author: Gilgamech
	Last edit: 5/9/2016
	Build: 1
.Param Frequency
	Required.
	VMWare Performance Graph from which the CPU Ready value was taken.
.Param CPUReadyValue
	Required.
	CPU Ready value from the VMWare Performance Graph. 
.EXAMPLE
	New-FunctionStatement .\PowerShiriAdmin.ps1 289 -nos
.INPUTS
	[String]
	[int]
	[switch]
.OUTPUTS
	[String]
[int]
.LINK
	https://kb.vmware.com/selfservice/microsites/search.do?language=en_US&cmd=displayKC&externalId=2002181
#>
"@
#endregion
	
	New-Item -ItemType File -Path $FileName
	Insert-TextIntoFile  -FileName $FileName -FileContents $FunctionHeader
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


Function ConvertFrom-GilLang {
	Param(
		$Variable1
	); #end Param
	$Variable1.elements[0] |%{
		New-Function -FunctionName $_.ID -ScriptBlock ($Variable1.elements[1..99] |%{
			New-FunctionStatement -OperatorVar $_.OperatorVar -Not  -FunctionVariable ($_.FunctionVariable  -replace('this','_')) -ComparisonOperator $_.ComparisonOperator -ReferenceVariable $_.ReferenceVariable -ScriptBlock ($_.ScriptBlock -replace("`<","") -replace("`>"," ")) -ElseScriptBlock ($_.ElseScriptBlock) -OneLiner
		}) 
	}	
}

Function ConvertTo-GilLang {
	Param(
		$Variable1
	); #end Param
	$Variable1 = $Variable1 -replace("!"," not ")
	$Variable1 = $Variable1 -replace("$_"," this ")
	$Variable1 = $Variable1 -replace("%"," modulus ")
	$Variable1 = $Variable1 -replace("return"," <return> ")
	$t = $Variable1  -split " "
	'{ "elements": [ { "ElementParent": "ParentElement", "ID": "'+$t[1]+'", "ElementType": "'+$t[0]+'"}, { "ElementParent": "'+$t[1]+'", "ID": "IfNotModFifteen", "ElementType": "FunctionStatement", "OperatorVar": "If", "Not": "Not", "FunctionVariable": "this", "ComparisonOperator": "Equal", "ReferenceVariable": "[int]15", "ScriptBlock": "<return>[string]''FizzBuzz''" }, { "ElementParent": "IfNotModFifteen", "ID": "IfNotModFive", "ElementType": "FunctionStatement","OperatorVar": "ElseIf", "Not": "Not", "FunctionVariable": "this", "ComparisonOperator": "Equal", "ReferenceVariable": "[int]5", "ScriptBlock": "<return>[string]''Buzz''" }, { "ElementParent": "IfNotModFifteen", "ID": "IfNotModThree", "ElementType": "FunctionStatement","Not": "Not", "OperatorVar": "ElseIf", "FunctionVariable": "this", "ComparisonOperator": "Equal", "ReferenceVariable": "[int]3", "ScriptBlock": "<return>[string]''Fizz''", "ElseScriptBlock": "<return>this" } ] }'  | convertfrom-json

}

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
		[switch]$Filter,
		[switch]$Clipboard,
		[switch]$Header
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
	Build: 1
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
	[switch]
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
	
	if ($Clipboard) {
		$FunctionContents | clip
	} else {
		return $FunctionContents
	}; #end if Clipboard
	
}; #end New-Function


Function New-Parameter {
	Param(
		[Parameter(Position=1)]
		[Array]$ParameterName = "Variable1",
		[Parameter(Position=2)]
		[ValidateSet("string","char","byte","int","long","bool","decimal","single","double","DateTime","xml","array","hashtable","object","switch")]
		[String]$ParameterType,
		[Parameter(Position=3)]
		[int]$PositionValue,
		[Array]$ValidateSetList,
		[switch]$SetMandatory,
		[String]$DefaultValue, # = 'DefaultValue',
		[String]$SetValueFromPipelineByPropertyName,
		[switch]$SetValueFromPipeline,
		[switch]$OneLiner,
		[switch]$CmdletBind,
		[switch]$TopHeaderRemoved,
		[switch]$BottomHeaderRemoved,
		[switch]$Clipboard,
		[switch]$NoComma
	); #end Param
	$CommaVar = ","
	
	if (!($OneLiner)) {
		$NewLineVar = "`r`n"
		$TabVar = "`t"
	}; #end if OneLiner
	
	if (!($TopHeaderRemoved)) {
	
		if ($CmdletBind) {
			$NewParameterOutstring += $TabVar + "[CmdletBinding()]" + $NewLineVar;
		}; #end if OneLiner
		
		$NewParameterOutstring += $TabVar + "Param`(" + $NewLineVar
		
		if ($PositionValue) {
			$PositionValue = 1
		}; #end if $PositionValue
		
	} else {
		$NewParameterOutstring += ""
	}; #end if TopHeader
	
	Foreach ($ParameterNam in $ParameterName) {

		if (($SetMandatory) -OR ($PositionValue) -OR ($SetValueFromPipeline) -OR ($SetValueFromPipelineByPropertyName)  ) {
			$NewParameterOutstring += $TabVar + $TabVar + "[Parameter("
		}; #end if ($SetMandatory) -OR ($PositionValue) -OR ($SetValueFromPipeline) -OR ($SetValueFromPipelineByPropertyName)
			
		if ($SetMandatory) {
			$NewParameterOutstring += "Mandatory=`$$SetMandatory" 
			if (($PositionValue) -OR ($SetValueFromPipeline) -OR ($SetValueFromPipelineByPropertyName)  ) {
				$NewParameterOutstring += $CommaVar
			}; #end if (($PositionValue) -OR ($SetValueFromPipeline) -OR ($SetValueFromPipelineByPropertyName)
			}; #end if $SetMandatory

		if ($PositionValue) {
			$NewParameterOutstring += "Position=$PositionValue" 
			$PositionValue++
			if (($SetValueFromPipeline) -OR ($SetValueFromPipelineByPropertyName)) {
				$NewParameterOutstring += $CommaVar
			}; #end if ($SetMandatory) -OR ($SetValueFromPipeline) -OR ($SetValueFromPipelineByPropertyName)
		}; #end if $PositionValue

		if ($SetValueFromPipeline) {
			$NewParameterOutstring += "ValueFromPipeline=`$$SetValueFromPipeline" 
			if ( ($SetValueFromPipelineByPropertyName)  ) {
				$NewParameterOutstring += $CommaVar
			}; #end if ($SetMandatory) -OR ($PositionValue) -OR ($SetValueFromPipelineByPropertyName)
		}; #end if $SetValueFromPipeline

		if ($SetValueFromPipelineByPropertyName) {
			$NewParameterOutstring += "ValueFromPipelineByPropertyName=$SetValueFromPipelineByPropertyName" 
			#if (($SetMandatory) -OR ($PositionValue) -OR ($SetValueFromPipeline)) {
			#	$NewParameterOutstring += $CommaVar
			#}; #end if ($SetMandatory) -OR ($PositionValue) -OR ($SetValueFromPipeline)
		}; #end if $SetValueFromPipelineByPropertyName

		if ($($SetMandatory) -OR ($PositionValue) -OR ($SetValueFromPipeline) -OR ($SetValueFromPipelineByPropertyName)  ) {
			$NewParameterOutstring += ")]" + $NewLineVar
		}; #end if ($SetMandatory) -OR ($PositionValue) -OR ($SetValueFromPipeline) -OR ($SetValueFromPipelineByPropertyName)

		if ($ValidateSetList) {
			$NewParameterOutstring += $TabVar + $TabVar + "[ValidateSet("
			$NewParameterOutstring += For ($i = 0 ; $i -lt $ValidateSetList.Length ; $i++) {
				if ($i -eq ($ValidateSetList.Length - 1)) {
				"""" + $ValidateSetList[$i] + """" 
				} else {
				"""" + $ValidateSetList[$i] + """" + $CommaVar
				}; #end if i
				
			
			}; #end For i
			$NewParameterOutstring += ")]" #+ $NewLineVar
			
		}; #end if ValidateSetList
		
		$NewParameterOutstring += $TabVar + $TabVar 
		
		if ($ParameterType) {
			$NewParameterOutstring += "[$ParameterType]"
		}; #end if $ParameterType
		
		$NewParameterOutstring += "`$$ParameterNam" 
		
		if ($DefaultValue) {
			$NewParameterOutstring += " = ""$DefaultValue"""
		}; #end if DefaultValue
		
		if ($ParameterName[-1] -notmatch $ParameterNam) {
			$NewParameterOutstring += $CommaVar + $NewLinevar
		}; #end if ParameterName[-1]
		
	}; #end Foreach ParameterName
		
	if (!($BottomHeaderRemoved)) {
		$NewParameterOutstring += $NewLineVar + $TabVar +")`; #end `Param"
	} else {
		#The only way to get a trailing comma is if BottomHeaderRemoved and not NoComma
		if (!($NoComma)) {
			$NewParameterOutstring += $CommaVar
		}; #end if NoComma
		
	}; #end if BottomHeader
	
	if ($Clipboard) {
		$NewParameterOutstring | clip
	} else {
		return $NewParameterOutstring
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
		[switch]$OneLiner,
		[switch]$TopHeaderRemoved,
		[switch]$BottomHeaderRemoved,
		[switch]$Clipboard,
		[switch]$Not, #only works with if.
		[switch]$ForDecriment, #only works with For.
		[switch]$Pipeline,
		[switch]$PipeEqual,
		[switch]$PipePlus,
		[switch]$SetVerbose,
		[ValidateSet("PowerShell", "Javascript")][String]$Language = "PowerShell",
		[switch]$NoComma
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
	}; #end switch PowerShell
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
	}; #end switch Javascript
		default {
	}; #end switch default
	}; #end switch Language

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
		#Reverse OneLiner switch if ScriptBlock is longer than 1 line
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
				[String]$ClosingBracketOneLiner = '}; # end' + $Spacevar + $OperatorVar + $Spacevar + $FunctionVariable
			}; #end if OneLiner
<#
#>
			$SBDelineationOpen = '"'
			$SBDelineationClose = '"'
			$PlaceholderFunOp = 'Write-Host -f green ' + $SBDelineationOpen
		}; #end switch PowerShell
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
		}; #end switch Javascript
		default {
		}; #end switch default
	}; #end switch Language
			
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
			
	switch ($OperatorVar)  { 
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
			
		}; #end switch If
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
		}; #end switch Foreach
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

		}; #end switch For
		"Where" {
			#Need to change this one up - put brackets where parentheses are, and then no brackets below.
			[String]$OpeningParenthesisVar = '{'; 
			[String]$ClosingParenthesisVar = '}';
			
		}; #end switch Where
		"While" {
			
		}; #end switch While
		"Try"  {
			# TryCatch - swap out parens for brackets like in Where, then swap Catch for Else.
			[String]$OpeningParenthesisVar = $null;
			[String]$ClosingParenthesisVar = $null;
			#$FunctionVariable = $null;
			#$CompOp = $null;
			#$ReferenceVariable = $null;
			
		}; #end switch Try
		"Switch" {
			
		}; #end switch Switch
		"Elseif" {
			$BottomHeaderRemoved = $True
				#Even if we're in an IF, if there's a CompOp set, and no RefVar, set a RefVar.
			if ($CompOp) {
				if (!($ReferenceVariable)) {
					$ReferenceVariable = $($FunctionVariable.substring(0,(($FunctionVariable.Length)-1)))
				}; #end if ReferenceVariable

			}; #end if CompOp
			
			if ($SB) {
				$SBHeader = 'The variable' +  $Spacevar
				$NumHeader = 'is'
			}; #end if SB
			
		}; #end switch Elseif
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
		}; #end switch default
	}; #end switch OperatorVar		
	
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
	}; #end if string
				
	if ($ReferenceVariable.TocharArray()[0] -match '[a-zA-Z_]') {
		$ReferenceVariableWOper = $VariableOperator + $ReferenceVariable
		$ReferenceVariableWOperRV = $VariableOperatorRV + $ReferenceVariable
	} else {
		$ReferenceVariableWOper = $ReferenceVariable
		$ReferenceVariableWOperRV = $ReferenceVariable
	}; #end if string

	if (!($TopHeaderRemoved)) {
			
			[String]$NewFunctionOperation = $TabVar + $OperatorVar + $Spacevar + $OpeningParenthesisVar + $ReferenceVariableWOper
			
			switch ($OperatorVar)  { 
				"If" {
						$NewFunctionOperation += $SpacevarCORV + $CompOp + $SpacevarCORV + $FunctionVariableWOperRV;
				}; #end switch If
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
					
				}; #end switch Foreach
				"For" {
					$NewFunctionOperation += $Spacevar + '='  + $Spacevar + $StartValue + $Spacevar + ';' + $Spacevar + $ReferenceVariableWOper + $Spacevar + $CompOp + $Spacevar + $FunctionVariableWOper + $Spacevar + ';' + $Spacevar + $ReferenceVariableWOper + $ForIncVar;
					
				}; #end switch For
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
				}; #end switch Where
				"While" {
						$NewFunctionOperation += $SpacevarCORV + $CompOp + $SpacevarCORV + $FunctionVariableWOperRV;
				}; #end switch While
				"Try"  {
						[String]$NewFunctionOperation = $TabVar + $OperatorVar + $Spacevar 

						$ElseVar = 'Catch'
					if (!($ElseScriptBlock)) {
						$ElseScriptBlock = '$Error[0]'
					}; #end if ElseScriptBlock
						
				}; #end switch Try
				"Switch" {
					$NewFunctionOperation += ""
				}; #end switch Switch
				"Elseif" {
					[String]$NewFunctionOperation = $OperatorVar + $Spacevar + $OpeningParenthesisVar + $ReferenceVariableWOper + $SpacevarCORV + $CompOp + $SpacevarCORV + $FunctionVariableWOperRV;
				}; #end switch Elseif
				default {
					Write-Verbose $OperatorVar 
				}; #end switch default
			}; #end switch OperatorVar	

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
		
		#Pull the function out of the file contents, this is only used to find the Parameter section lines.
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
