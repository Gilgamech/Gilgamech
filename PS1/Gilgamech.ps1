

#Get-WmiObject -query "SELECT Caption FROM Win32_PnPEntity WHERE ConfigManagerErrorCode = 0 and Caption like'Standard Serial over Bluetooth link (COM%'"


<# Hosting Vars
[string]$AvailabilityZone = "us-west-2a"
$DefaultSecurityGroupID = "sg-d76f81ad"
$Keypair = "GilKeyPair"
$PemFile = "C:\Media\Backup\$Keypair.pem" 

$rootDomain = "Gilgamech.com"
$subDomain = "Hosting"
[string]$CFAuthKey = "194334739f060fc5b41c67cc42f25a9c755fb"
[string]$CFAuthEmail = "StephenGillie@Gilgamech.com"
[string]$PFXPass = "rF8pG0aAP6Ge!7m17#WR"
[array]$Domains = ("*.Gilgamech.com","*.Hosting.Gilgamech.com","Gilgamech.com")
[string]$ContactEmail = "Contact@Gilgamech.com"

#>

#region OPB
Function Build-OPB {
	cd C:\Media\Projects\OPB\
	C:\Windows\Microsoft.NET\Framework64\v4.0.30319\csc.exe /target:winexe C:\Media\Projects\OPB\OldPersonBrowser.cs 
}

#endregion

#region Obnubilate
<#
Proxy Cache LB 
#>

Function Build-OBserver {
	cd C:\Media\Projects\GH\
	C:\Windows\Microsoft.NET\Framework64\v4.0.30319\csc.exe C:\Media\Projects\GH\obnubilate.cs -reference:System.Data.SQLite.dll	
}


#endregion

#region Starspar
<#
Proxy Cache LB 
#>

Function Build-StarsparServer {
	cd C:\Media\Projects\Games\Starspar\
	C:\Windows\Microsoft.NET\Framework64\v4.0.30319\csc.exe C:\Media\Projects\Games\Starspar\Starspar.cs
}


#endregion

#region CrudRest
Function Build-CrudRestServer {
	cd C:\Media\Projects\CrudRest
	C:\Windows\Microsoft.NET\Framework64\v4.0.30319\csc.exe C:\Media\Projects\CrudRest\CrudRest.cs
}

#endregion

Function Get-Smoke ($seconds=300,$aHz=440,$cHz=523.25,$eHz=659.25,$beeplen=250) {
	0..$seconds|%{
		if ($_ -ge ($seconds - 15)) {
			$activity = "Smoke"
		} elseif ($_ -ge ($seconds/2)) {
			$activity = "Get Ready"
		} else {
			$activity = "Not Yet"
		} 
		Write-Progress -Activity $activity -Status "$_/$seconds" -PercentComplete ($_*(100/$seconds));
		sleep 1;
	};
	foreach ($tone in ($ahz,$chz,$ehz)){
		[console]::beep($tone,$beeplen);
	}
}

Function Get-Sorted ($tosort = (Get-Clipboard)) {
	$tosort -split "`n" | sort | clip
}

#region Webserver
<#
Site gives folder
Page gives file
#>

Function Build-Webserver {
	C:\Windows\Microsoft.NET\Framework64\v4.0.30319\csc.exe C:\Media\Projects\CrudPost\GilgamechHostingServer.cs -reference:C:\Media\Projects\Hosting\System.Data.SQLite.dll	
}

Function Get-Interaction ($Username,$Password,$Token) {
	$min = 100000000
	$max = $min * 10
	if ($Token) {
			[int]$SystemToken = (Invoke-RestMethod -Method get -Uri "http://localhost:9999/Token") -replace "`n",""
		if ($Token -eq $SystemToken) {
			$SystemToken = Get-Random -Minimum $min -Maximum $max -SetSeed $SystemToken;
			$null = Invoke-RestMethod -Method delete -Uri "http://localhost:9999/Token"
			$null = Invoke-RestMethod -Method put -Uri "http://localhost:9999/Token" -Body $SystemToken
			return $SystemToken;
		} else {
			return "Error: Bad Token"
		}
	} else {
		if ($Password -eq $UserPassword) {
			[int]$SystemToken = Get-Random -Minimum $min -Maximum $max;
			$null = Invoke-RestMethod -Method delete -Uri "http://localhost:9999/Token"
			$null = Invoke-RestMethod -Method put -Uri "http://localhost:9999/Token" -Body $SystemToken
			return $SystemToken;
		} else {
			return "Error: Bad Password"
		}
	}
}

Function Test-Webserver {
	#$Testpage = (iwr http://localhost:80)

	$TestItem = "StatusCode"
try{
	$TestOutput = (iwr http://localhost:80).StatusCode.ToString()
} catch {
	$TestOutput = ($error[0] -split "`n")[0]
}
	$TestExpect = 200
	
	Write-Host -nonewline "Test: $TestItem of $TestOutput matches expected value of $TestExpect - "
	If ($TestOutput -eq $TestExpect) {
		Write-Host "OK" -ForegroundColor Green
	} else {
		Write-Host "Fail" -ForegroundColor Red;
		Break;
	}

	$TestItem = "ErrorPage"
try{
	$TestOutput = (iwr http://localhost:80/errorpage).StatusCode.ToString()
} catch {
	$TestOutput = ($error[0] -split "`n")[0]
}
	$TestExpect = "404 Error not found."
	
	Write-Host -nonewline "Test: $TestItem of $TestOutput matches expected value of $TestExpect - "
	
	
	If ($TestOutput -eq $TestExpect) {
		Write-Host "OK" -ForegroundColor Green
	} else {
		Write-Host "Fail" -ForegroundColor Red;
		Break;
	}

	Write-Host "All tests passed." -ForegroundColor Green
}

Filter Flip-BytesToText {
Param(
[switch]$Unicode
); #end Param
[int]$Unicode2 = 0
$ReturnString = ""
if ($_) {
if ($Unicode) {
$ReturnString = [System.Text.Encoding]::Unicode.GetString(($_,$Unicode2))
} else {
$ReturnString = [System.Text.Encoding]::ASCII.GetString($_)
}; #end if Unicode
if ($ReturnString -ne "") {
return $ReturnString
}; #end if ReturnString
}; #end if _
}; #end Flip-BytesToText

Function Get-LogsDatabase {
	Invoke-MainDatabase "select * from logs"
}

Function Add-Site {
	Param (
		$Account,
		$Site,
		$RequestPage,
		$File
	)
	Invoke-MainDatabase -Query ("insert into sites (Account, Site, RequestPage, File) values ('"+$Account+"','"+$Site+"','"+$RequestPage+"','"+$File+"')")

}

Function Get-Sites {
	Invoke-MainDatabase "select * from sites"|ft
}

Function Ping-Site {
	Param (
		$PingAddr = "roblox.com"
	)
	while ($true) {
		$tstcon = Test-Connection $pingaddr -Count 1 
		$Activity = "Ping to $pingaddr"
		if ($tstcon) {
			$rt = $tstcon.ResponseTime
			$status = "Last Reply: $rt"
		} else {
			$rt = 1000
			$status = "Last Reply: error"
		}
		if ($rt -gt 1000) {
			$pct = 100
		} else {
			$pct = $rt/10
		}
		Write-Progress -Activity $activity -Status $status -PercentComplete $pct
		sleep 1
	}
}

Function Get-ServerErrors {
	Param (
		$query = "select * from errors"
	)
	$results = Invoke-LogsDatabase $query
	$results
}

Filter Filter-Rowboat {
	$_ = $_ -replace 0," "
	$_ = $_ -replace 1," ~"
	$_ = $_ -replace 2," ~ "
	$_ = $_ -replace 3," ~~"
	$_ = $_ -replace 4,"~ "
	$_ = $_ -replace 5,"~ ~"
	$_ = $_ -replace 6,"~~ "
	$_ = $_ -replace 7,"~~~"
	$_ = $_ -replace 8,"- ~"
	$_ = $_ -replace 9,"-~ "
	return $_
}

Function Filter-StringNums ($intxt){
	([char[]]$intxt | %{[int][char]$_ -65}) -replace "-","~" -join ""
}

Function Get-Splitter {
	Param (
		$String,
		$index = 0,
		$Offset = 52
	)
	if ($string.length -gt $offset) {
		for($i=1; $i -le [int]($string.Length / $offset); $i++){
			$String[$index..($index+$Offset)] -join "";
			$index = $index + $Offset+1;
		}
	} else {
		$string
	}

}

Function Get-Rowboats {
"Welcome to Rowboats.txt. Please be careful of"
"the swimmers, and have a great day."
Get-Splitter (Filter-StringNums "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Safari/537.36"|Filter-Rowboat)
"        c <    o    o    o    o             " +(Get-Splitter (Filter-StringNums "hi t"|Filter-Rowboat))
"     /\/ /\/) /\/) /\/) /\/)        " +(Get-Splitter (Filter-StringNums "here"|Filter-Rowboat))
"    __/_____/__/_/__/_/__/_/__/______"
"-~-~ '-----/----/----/----/-------' "
Get-Splitter (Filter-StringNums (get-date).toString()|Filter-Rowboat)
"o,    o__ -~-~ o_/| o_.    -~-~ o,    o__ -~-~"
Get-Splitter (Filter-StringNums "10.20.30.40"|Filter-Rowboat)
}



#endregion

#region SqlLite

Function Invoke-LogsDatabase {
	Param (
		$query = "select * from logs",
		$DataSource = "C:\Media\Projects\GH\Logs.sqlite"
	)
	$results = Invoke-SqliteQuery -Query $query -DataSource $DataSource 
	$results
}

Function Invoke-MainDatabase {
	Param (
		$query = "select * from sites",
		$DataSource = "C:\Media\Projects\GH\GilgamechHosting.sqlite"
	)
	$results = Invoke-SqliteQuery -Query $query -DataSource $DataSource 
	$results
}

Function Throw-Database {
	Param (
		$DatabaseName,
		$TableName,
		$InputArray,
		$DataSource = ((Get-Location).path + "\$DatabaseName.sqlite")
	)
	$Columns = ($inputarray[0] |gm | where {$_.membertype -eq "NoteProperty"}).name
	#Create table
	$query = "create table $TableName (id INTEGER PRIMARY KEY AUTOINCREMENT"
	foreach ($Column in $Columns) {
		$query += ", $Column TEXT"
	}
	$query += ")" 
	$query = $query -join ""
	Invoke-SqliteQuery -Query $query -DataSource $DataSource
	
	#Insert array
	$inputarray |%{
		$query = "insert into $TableName ("
		foreach ($Column in $Columns) {
			$query += ", " + $Column
		}
		$query += ") values (" 
		foreach ($Column in $Columns) {
			$query += ", '" +$_.$Column+"'"
		}
		$query += ")" 
		$query = $query -join "" -replace "[(][,]","("
		write-host $query
		Invoke-SqliteQuery -Query $query -DataSource $DataSource 
	}
}

Function Write-AdminPage {
	Param (
		$OutFile = ".\admin.html"
	)
$cpuTime = (Get-Counter '\Processor(_Total)\% Processor Time').CounterSamples.CookedValue
$availMem = (Get-Counter '\Memory\Available MBytes').CounterSamples.CookedValue
$totalRam = (Get-CimInstance Win32_PhysicalMemory | Measure-Object -Property capacity -Sum).Sum


	
Out-File -FilePath $OutFile -Encoding ascii -InputObject "<HTML>" 
Out-File -FilePath $OutFile -Append -Encoding ascii -InputObject "<body>"
Out-File -FilePath $OutFile -Append -Encoding ascii -InputObject "<h1>Admin Page</h1>"
Out-File -FilePath $OutFile -Append -Encoding ascii -InputObject ("CPU use: " + $cpuTime.ToString("#,0.000") + "%<br>")
Out-File -FilePath $OutFile -Append -Encoding ascii -InputObject ("Avail. Mem.: " + $availMem.ToString("N0") + "MB (" + (104857600 * $availMem / $totalRam).ToString("#,0.0") + "%)<br>")
Out-File -FilePath $OutFile -Append -Encoding ascii -InputObject "<br>"
Out-File -FilePath $OutFile -Append -Encoding ascii -InputObject "</body>"
Out-File -FilePath $OutFile -Append -Encoding ascii -InputObject "<HTML>"

<#
"percent" > test.csv
25 >> test.csv
26 >> test.csv
26 >> test.csv
25 >> test.csv
24 >> test.csv
26 >> test.csv
28 >> test.csv
30 >> test.csv
$c = gc test.csv |convertfrom-csv
$c.percent |%{"a"*$_}
#>

}

<#Upsert
CREATE TABLE vocabulary(word TEXT PRIMARY KEY, count INT DEFAULT 1);
INSERT INTO vocabulary(word) VALUES('jovial')
 ON CONFLICT(word) DO UPDATE SET count=count+1;

#redo database to have account, site, page, file
Invoke-MainDatabase -Query "drop table sites"
Invoke-MainDatabase -Query "create table sites (Site TEXT, File TEXT)" -DataSource "C:\Media\Projects\GH\GilgamechHosting.sqlite"
(Get-Clipboard) | convertfrom-csv |%{Invoke-MainDatabase -query ("insert into sites (Site, File) values ('"+$_.site+"','"+$_.File+"')")}

"Site","File"
"localhost","admin.html"
"www.gilgamech.com","Gilgamech.html"
"hosting.gilgamech.com","GilgamechHosting.html"
"charity.gilgamech.com","GilgamechCharity.html"

"Site","File"
"http://localhost/","admin.html"
"http://www.gilgamech.com/","Gilgamech.html"
"https://www.gilgamech.com/","Gilgamech.html"
"http://hosting.gilgamech.com/","GilgamechHosting.html"
"http://charity.gilgamech.com/","GilgamechCharity.html"

Invoke-MainDatabase -Query "create table logs (date TEXT, time TEXT, clientip TEXT, csusername TEXT, serverip TEXT, csmethod TEXT, uristem TEXT, uriquery TEXT, status INT, scbytes INT, csbytes INT, timetaken INT, csversion TEXT, UserAgent TEXT, Cookie TEXT, Referrer TEXT)" -DataSource "C:\Media\Projects\GH\GilgamechLogs.sqlite"
Invoke-MainDatabase -Query "create table errors (date TEXT, time TEXT, Error TEXT)" -DataSource "C:\Media\Projects\GH\GilgamechLogs.sqlite"

sql = "create table logs (date varchar(20), time varchar(20), clientip varchar(20), csusername varchar(20), serverip varchar(20), csmethod varchar(20), uristem varchar(20), uriquery varchar(20), status int, scbytes int, csbytes int, timetaken int, csversion varchar(20), UserAgent varchar(255), Cookie varchar(255), Referrer varchar(20),)";

#>

#endregion

<# References
https://www.vanderbilt.edu/AnS/physics/astrocourses/AST101/readings/escape_velocity.html
#>

#region Constants

#region ConstantValues
$AvogadroConstant = 6.02214129E23
$BohrMagneton = 927.400968E-26
$BohrRadius = 0.52917721092E-10
$BoltzmannConstant = 1.3806488E-20
$c = 299792458
$cSquared = [Math]::Pow($c,2)
$CharacteristicEmpedanceofVacuum = 376.730313461
$classicalElectronRadius = 2.8179403267E-15
$ComptonWavelength = 2.4263102389E-12
$e = [math]::e
$EarthMass = 5.97237E24
$EarthRadius = 6.378137E6
$SunMass = 1.99E30
$SunRadius = 7E8
$SunSurfaceTemp = 5800
$HydrogenMass = 1.67E-24
$electricConstant = 8.854187817E-12
$electronGfactor = -2.00231930436153
$electronMass = 9.10938291E-31
$elementaryCharge = 1.602176565E-19
$FaradayConstant = 96485.3365
$FermiCouplingConstant = 1.166364E-5
$FineStructureConstant = 7.2973525698E-3
$FirstRadiationConstant = 3.74177153E-16
$GravitationalConstant = 6.67430E-11
$InverseFineStructureConstant = 137.035999074
$MagneticConstant = 12.566370614E-7
$MuonComptonWavelength = 11.73444103E-15
$neutronGfactor = -3.82608545
$neutronMass = 1.674927351E-27
$NewtonianConstantofGravitation = 6.67384E-11
$nuclearMagneton = 5.05078353E-27
$PlanckConstant = 6.62606957E-34
$PlanckLength = 1.616199E-35
$PlanckMassEnergyEquivalent = 1.220932E19
$PlanckMass = 2.17651E-8
$PlanckTemperature = 1.416833E32
$PlanckTime = 5.39106E-44
$pi = [math]::PI
$protonChargetoMassQuotient = 9.57883358E7
$protonComptonWavelength = 1.32140985623E-15
$protonGfactor = 5.585694713
$protonElectronEassRatio = 1836.15267245
$RydbergConstant = 10973731.568

#endregion

#region ConstantUnits
$AvogadroConstantUnits = "mol^-1"
$BohrMagnetonUnits = "J T^-1"
$BohrRadiusUnits = "m"
$BoltzmannConstantUnits = "g cm2 sec-2 deg-1"
$cUnits = "m s^-1"
$CharacteristicEmpedanceofVacuumUnits = "ohm"
$classicalElectronRadiusUnits = "m"
$ComptonWavelengthUnits = "m"
$EarthMassUnits = "g"
$EarthRadiusUnits = "m"
$SunMassUnits = "g"
$SunRadiusUnits = "m"
$SunSurfaceTempUnits = "K"
$HydrogenMassUnits = "g"
$electricConstantUnits = "F m^-1"
$electronGfactorUnits = "{dimensionless}"
$electronMassUnits = "kg"
$elementaryChargeUnits = "C"
$FaradayConstantUnits = "C mol^-1"
$FermiCouplingConstantUnits = "GeV^-2"
$FineStructureConstantUnits = "{dimensionless}"
$FirstRadiationConstantUnits = "W m^2"
$GravitationalConstantUnits = "m^3 kg^-1 s^-2"
$InverseFineStructureConstantUnits = "{dimensionless}"
$MagneticConstantUnits = "N A^-2"
$MuonComptonWavelengthUnits = "m"
$neutronGfactorUnits = "{dimensionless}"
$neutronMassUnits = "kg"
$NewtonianConstantofGravitationUnits = "m^3 kg^-1 s^-2"
$nuclearMagnetonUnits = "J T^-1"
$PlanckConstantUnits = "J s"
$PlanckLengthUnits = "m"
$PlanckMassEnergyEquivalentUnits = "GeV"
$PlanckMassUnits = "kg"
$PlanckTemperatureUnits = "K"
$PlanckTimeUnits = "s"
$protonChargetoMassQuotientUnits = "C kg^-1"
$protonComptonWavelengthUnits = "m"
$protonGfactorUnits = "{dimensionless}"
$protonElectronEassRatioUnits = "{dimensionless}"
$RydbergConstantUnits = "m^-1"
#endregion

#endregion

#region NewtonianEquations
Function Get-NForce($Mass,$Acceleration) {
	$Force = $Mass * $Acceleration	
	return $Force
}

Function Get-NMomentum($Mass,$Velocity) {
	$Momentum = $Mass * $Velocity
	return $Momentum
}
#endregion

#region RelativisticEquations

Function Get-LorentzFactor($Velocity) {
	$LorentzFactor = 1 / [math]::Sqrt(1- ([Math]::Pow($Velocity,2) / $cSquared))
	return $LorentzFactor
}

Function Get-LorentzMultiple($Velocity) {
	$Velocity * (Get-LorentzFactor $Velocity)
}

Function Get-RMomentum($Mass,$Velocity) {
	$Momentum = 1 / [math]::Sqrt(1+ ([Math]::Pow($Velocity,2)/([Math]::Pow($Mass,2) * $cSquared)))
	return $Momentum
}

Function Get-TimeDilation ($timeObserver,$Velocity) {
	$timePrime = (Get-LorentzFactor $Velocity) * $timeObserver
	return $timePrime
}

Function Get-LengthContraction ($Length,$Velocity) {
	$LengthPrime = $Length/(Get-LorentzFactor $Velocity)
	return $LengthPrime
}

Function Get-RMass ($restMass,$Velocity) {
	$MassPrime = (Get-LorentzFactor $Velocity)* $restMass
	return $MassPrime
}

Function Get-RMomentum ($restMass,$Velocity) {
	$Momentum = (Get-LorentzFactor $Velocity) * $restMass * $Velocity
	return $Momentum
}

Function Get-RKE ($restMass,$Velocity) {
	$kineticEnergy = ((Get-LorentzFactor $Velocity) -1) * $restMass * $cSquared
	return $kineticEnergy
}

Function Get-EscapeVelocity ($restMass = $EarthMass,$Radius = $EarthRadius) {
#Escape velocity is the minimum speed a ballistic object needs to escape from a massive body such as Earth. It represents the kinetic energy that, when added to the object's gravitational potential energy, (which is always negative) is equal to zero. The general formula for the escape velocity of an object at a distance r from the center of a planet with mass M is
	$EscapeVelocity = Get-LorentzMultiple ([math]::Sqrt( (2 * $GravitationalConstant * $restMass) / $Radius))
	return $EscapeVelocity
}

Function Get-Units ($FirstUnit,$SecondUnit) {
	$out = $FirstUnit
	if ($out.Contains($SecondUnit)) {
		$out = $out.Replace("$SecondUnit^-1","")
		$out = $out.Replace(" "," ")
	}
	return $out
}
#endregion

#region ThermalEquations
Function Get-GasMoleculeVelocity ($Kelvins,$restMassKG,$round=2) {
	$Velocity = @{};
	$Velocity.Avg = [math]::Round((Get-LorentzMultiple ([math]::Sqrt(3 * $BoltzmannConstant * $Kelvins / $restMass ))),$round);
	$Velocity.Min = $Velocity.Avg * .20;
	$Velocity.Max = $Velocity.Avg * 2;
	return $Velocity;
}

#endregion

#region KeplerPlanetary

Function Get-Ellipse ($a,$b,$Eccentricity,$CurrentPosition) {
#where is the semi-latus rectum, ε is the eccentricity of the ellipse, r is the distance from the Sun to the planet, and θ is the angle to the planet's current position from its closest approach, as seen from the Sun. So (r, θ) are polar coordinates.
	$SemiLatusRectum = $b*$b/$a
	$Radius =$SemiLatusRectum/(1+$Eccentricity* [math]::Cos($CurrentPosition))
	return $Radius
}


#endregion

#region HistoryPage

$thousand = 1000
$million = $thousand *$thousand
$billion = $million *$thousand
$trillion = $billion *$thousand
$quadrillion = $trillion *$thousand

function Get-TextToNumNotation($inputObject) {
	if ($inputObject.gettype().name -ne "String") {
	return $inputObject;
	break;
	}
	if ($inputObject.Substring($inputObject.Length -1,1) = "k") {
		$inputObject = $inputObject.replace("k"," thousand");
	}
	if ($inputObject.Substring($inputObject.Length -2,2) = "bn") {
		$inputObject = $inputObject.replace("bn"," billion");
	}
	[float]$value,[string]$multiplier = $inputObject -split " "
	switch ($multiplier){
		"quadrillion"{$multiplier = $quadrillion}
		"trillion"{$multiplier = $trillion}
		"billion"{$multiplier = $billion}
		"million"{$multiplier = $million}
		"thousand"{$multiplier = $thousand}
		default{$multiplier = 1}
	}
	$outputItem = [math]::round(($value * $multiplier));
	return $outputItem;
}

function Get-NumToTextNotation($InputVal,$identifier) {
	if ($InputVal -gt $quadrillion){
		$outVal2 = [math]::round($InputVal/$quadrillion,1);
		"$outVal2 quadrillion $identifier";
	}elseif ($InputVal -gt $trillion){
		$outVal2 = [math]::round($InputVal/$trillion,1);
		"$outVal2 trillion $identifier";
	}elseif ($InputVal -gt $billion){
		$outVal2 = [math]::round($InputVal/$billion,1);
		"$outVal2 billion $identifier";
	}elseif ($InputVal -gt $million){
		$outVal2 = [math]::round($InputVal/$million,1);
		"$outVal2 million $identifier";
	}elseif ($InputVal -gt $thousand){
		$outVal2 = [math]::round($InputVal/$thousand,1);
		"$($outVal2)k $identifier";
	}else{
		$outVal2 = [math]::round($InputVal,1);
		"$outVal2 $identifier";
	}
}

<#
1 Square Kilometer = 0.38610216 Square Miles
10,000 Square Kilometers = 1,000,000 Hectares= 1 MHectare
1562.5 sq mi = 1,000,000 acres = 1 MAcre
#>

function Get-MegaAcre($inputObject=(Get-Clipboard)) {
$mi = Get-TextToNumNotation $inputObject 
$kmVal = ($mi / 0.38610216);
$km = Get-NumToTextNotation $kmVal "km<sup>2</sup>";
$MHectares = Get-NumToTextNotation ($kmVal / 10000) "MHectares";
$MAcres = Get-NumToTextNotation ($mi / 1562.5) "MAcres";
$mi = Get-NumToTextNotation $mi "mi<sup>2</sup>";
"$km, $mi, $MHectares, $MAcres"|clip
}

function Get-GilDollar($inputObject =(Get-Clipboard)) {
	$outputItem = (Get-TextToNumNotation $inputObject )/63500;
	" or "+(Get-NumToTextNotation $outputItem "GD")
}

function Get-GilCent($inputObject =(Get-Clipboard)) {
	$outputItem = (Get-TextToNumNotation $inputObject )/254;
	" or "+(Get-NumToTextNotation $outputItem "GC" )
}

function Get-HDates {
	
	$r = Get-Clipboard
	$r = $r -join " " 
	$r = $r -replace "`r",""
	$r = $r -replace "[.]\s",".`n" 
	$r = $r -split "`n" 
	$r = $r | Filter-HFilter
	$out = $r | select-string "[0-9][0-9][0-9]"
	$out -replace "`r",""|clip
}

filter Filter-HFilter {
	$_ = $_ -replace "^In ",""
	$_ = $_ -replace "`”",'"'
	$_ = $_ -replace "`“",'"'
	return $_
}

filter Filter-RomanToArabicNumbers {
	$_ = $_ -replace " I ","1 "
	$_ = $_ -replace " II ","2 "
	$_ = $_ -replace " III ","3 "
	$_ = $_ -replace " IV ","4 "
	$_ = $_ -replace " V ","5 "
	$_ = $_ -replace " VI ","6 "
	$_ = $_ -replace " VII ","7 "
	$_ = $_ -replace " VIII ","8 "
	$_ = $_ -replace " IX ","9 "
	$_ = $_ -replace " X ","10 "
	return $_
}

filter Filter-BadCSS {
 	$_ = $_ -replace '</tbody></table>',""
 	$_ = $_ -replace '<tbody>',"`n"
 	$_ = $_ -replace 'tr><tr',"tr>`n<tr"

 	$_ = $_ -replace ' style=" text-align: center;font-size: 95%;width: 3%;min-width: 30px;color: #989898;" class="type-text svelte-1jvu5aw force-padding" colspan="1"',""
 	$_ = $_ -replace ' style=" ;" class="type-text svelte-1jvu5aw last-mobile last-desktop force-padding" colspan="1"',""
 	$_ = $_ -replace ' style=" text-align: center;font-size: 95%;width: 3%;min-width: 30px;" class="type-text svelte-1jvu5aw force-padding" colspan="1"',""
 	$_ = $_ -replace ' style=" ;" class="type-text svelte-1jvu5aw force-padding" colspan="1"',""
 	$_ = $_ -replace ' class="svelte-1jvu5aw dw-bold"',""
 	$_ = $_ -replace ' class="type-text svelte-1jvu5aw first-mobile first-desktop force-padding dw-bold" colspan="1"',""
 	$_ = $_ -replace ' style=" width: 12%;min-width: 30px;"',""
 	$_ = $_ -replace ' class="datawrapper-IV0h3-afmhvg svelte-1jvu5aw"',""
 	$_ = $_ -replace ' class="align-center type-text svelte-1jvu5aw force-padding inverted resortable" style="width: 3%;min-width: 30px;text-align: center;border-bottom:1px solid #e8e8e8;color: #909090;background: #00000000;font-size: 100%;" colspan="1" data-column="State" data-row="-1"',""
	return $_

}

Function Out-HistoryEntry {
	Param (
		[int]$Day,
		[string]$Month,
		[int]$Year,
		[string]$Event,
		[uri]$ReferenceUri,
		[string]$ReferenceTitle,
		[string]$ReferenceName,
		[string]$Notes
	)
	return "<tr><td>$Day</td><td>$Month</td><td>$Year</td><td>$Event</td><td><a href='$ReferenceUri' title='$ReferenceTitle'>$ReferenceName</a></td><td>$Notes</td></tr>"
}

Function Out-Year ($HistoryItem) {
	$out = @{}
	$HistoryItem = $HistoryItem -replace "`”",'"'
	$HistoryItem = $HistoryItem -replace "`“",'"'
	$HistoryItem = $HistoryItem -replace "[.]"," " -split " "
	$out.Year = [int]($HistoryItem | Select-String -Pattern '\d\d\d\d').ToString()
	$out.Event = $HistoryItem -replace " in $year",""
	$out
}

Function Get-HistoryEntry ($title){
	$a = Out-Year (Get-Clipboard);
	if (!$title){		
		$con = (iwr $uri).Content
		$title = (($con -split ">" |select-string "</title") -split " - ")[0]
	}
	$outHist = Out-HistoryEntry -Year $a.year -event $a.event -ReferenceUri $uri -ReferenceTitle $title -ReferenceName $name 
	$outHist = $outHist -replace ">0<","><"
	$outHist = $outHist -join ""
	$outHist |clip
}
#endregion

#region Chinese
#Character CommonPhonetics - MyPhonetics - Emoji - Radical - Meanings

#Invoke-SqliteQuery -Query "create table Language (reference_id INTEGER PRIMARY KEY AUTOINCREMENT, Character TEXT, CommonPhonetics TEXT, MyPhonetics TEXT, Emoji TEXT, Radical TEXT, Meanings TEXT)" -DataSource "C:\Media\Projects\Chinese.sqlite"

Function Write-Chinese {
	Param (
		$Character,
		$CommonPhonetics,
		$MyPhonetics,
		$Emoji,
		$Radical,
		$Meanings,
		$DataSource = "C:\Media\Projects\Chinese.sqlite"
	)
Invoke-SqliteQuery -Query ("insert into Language (Character, CommonPhonetics, MyPhonetics,Emoji,Radical,Meanings) values ('"+$Character+"','"+$CommonPhonetics+"','"+$MyPhonetics+"','"+$Emoji+"','"+$Radical+"','"+$Meanings+"')") -DataSource $DataSource

}

Function Read-Chinese {
	Param (
		$Character = "語",
		$DataSource = "C:\Media\Projects\Chinese.sqlite"
		)
	Invoke-SqliteQuery -Query "select * from Language where Character = '$Character'" -DataSource $DataSource 
}


#endregion

#region Words
<#
pre- root -suf

#$r = (get-term foal).replace(". ","~").split("~")
#$r[2].definition.split(" ") |%{if (!(read-term $_)){up-term $_}else{read-term $_}}
#Invoke-SqliteQuery -Query ("delete from dictionary where word = '"+$s.word+"'") -DataSource $DataSource ;$r = Invoke-SqliteQuery -Query "select * from dictionary" -DataSource $DataSource;$r
#>
#$r = (Read-AllTerms)|where {($_.definition -split " ").length -gt 10}

$regexAlphanumeric = '[^a-zA-Z0-9-_]'
$regexSentence = '[^a-zA-Z0-9-_ ,()]'
$regexSentence2 = '[^a-zA-Z0-9-_ ,\.()]'
$WordsErroringWhenEnteredIntoDatabase = @()
$NextLookup = (get-date).AddSeconds(5)

Function Add-Term {
	Param (
		$word,
		$definition,
		$DataSource = "C:\Media\Projects\Dictionary.sqlite"
	)
	$word = $word.ToLower() -Replace($regexAlphanumeric,'')
	$definition = $definition.ToLower() -Replace($regexSentence,'')
	try {
		Invoke-SqliteQuery -Query ("insert into dictionary (word,definition) values ('"+$word+"','"+$definition.ToLower()+"')") -DataSource $DataSource -ErrorAction stop
	} catch {
		write-host "Error: $word"
		$WordsErroringWhenEnteredIntoDatabase += $word
	}
}

Function Reload-Words {
	ipmo C:\Media\Projects\Words.ps1 -force
}

Function Read-Term {
	Param (
		$word,
		$DataSource = "C:\Media\Projects\Dictionary.sqlite"
		)
	$word = $word.ToLower() -Replace($regexAlphanumeric,'')
	#Invoke-SqliteQuery -Query ("insert into dictionary (word,definition) values ('"+$word+"','"+$definition+"')") -DataSource $DataSource
	$out = Invoke-SqliteQuery -Query "select * from dictionary where word = '$word'" -DataSource $DataSource 
	if (!$out) {
		$word = $word -replace '[s^]',''
		$out = Invoke-SqliteQuery -Query "select * from dictionary where word = '$word'" -DataSource $DataSource 
	}
	$out.definition
	#Invoke-SqliteQuery -Query "create table dictionary (id INTEGER PRIMARY KEY AUTOINCREMENT, word TEXT, definition TEXT)" -DataSource "C:\Media\Projects\Dictionary.sqlite"
}

Function Find-Term {
	Param (
		$word,
		$DataSource = "C:\Media\Projects\Dictionary.sqlite"
		)
	$word = $word.ToLower() -Replace($regexAlphanumeric,'')
	$out = Invoke-SqliteQuery -Query "select * from dictionary where definition like '$word%'" -DataSource $DataSource 
	$out
}

Function Read-AllTerms {
	Param (
		$DataSource = "C:\Media\Projects\Dictionary.sqlite"
		)
	Invoke-SqliteQuery -Query "select * from dictionary" -DataSource $DataSource 
}

Function Get-Term {
	Param(
		$SearchTerm = "foal",
			$URL = ("https://api.duckduckgo.com/?q=$SearchTerm&format=json")
#"https://api.urbandictionary.com/v0/define?term=$SearchTerm"
	); #end Param
	$SearchTerm = $SearchTerm.ToLower() -Replace($regexAlphanumeric,'')
	$Results = iwr $URL
	#$NextLookup = (get-date).AddSeconds(5)
	$Content = ($Results.content | ConvertFrom-Json)
	[String]$OutContent = ($Content.abstracttext)
	If (!$OutContent) {
		[String]$OutContent = ($Content.RelatedTopics.text)
	}
	$OutContent;
}; #end Invoke-RandomAPI

Function Delete-Term {
	Param (
		$word,
		$DataSource = "C:\Media\Projects\Dictionary.sqlite"
		)
	$word = $word.ToLower() -Replace($regexAlphanumeric,'')
	Invoke-SqliteQuery -Query "delete from dictionary where word = '$word'" -DataSource $DataSource 
}

Function Lookup-Term ($SearchTerm,$MillisecondPause) {
	$SearchTerm = $SearchTerm.ToLower() -Replace($regexAlphanumeric,'')
	write-host "Lookup: $SearchTerm"
	$ReadTerm = Read-Term $SearchTerm
	if ($ReadTerm) {
		#$ReadTerm
	} else {
		$rawterms = (Get-Term $SearchTerm).replace(". ","~").split("~")
		#$rawterm = $rawterms[0]
		foreach ($rawterm in $rawterms) {
			$term,$category,$definition = $rawterm -split " "
			$term = $term.ToLower() -Replace($regexAlphanumeric,'')
			$definition = $definition -join " "
			$definition = $definition.ToLower() -Replace($regexSentence,'')
			Add-Term $term $definition
			#Read-Term $term
		} #end foreach rawterm
	} #end if ReadTerm
}

Function Define-Term ($SearchTerm) {
	$SearchTerm = $SearchTerm.ToLower() -Replace($regexAlphanumeric,'')
	$rawterms = (Get-Term $SearchTerm).replace(". ","~").split("~")
	Add-Term $SearchTerm $rawterms[0]
}

Function Redefine-Term ($SearchTerm,$ReplaceTerm) {
	$SearchTerm = $SearchTerm.ToLower() -Replace($regexAlphanumeric,'')
	$ReplaceTerm = $ReplaceTerm.ToLower() -Replace($regexAlphanumeric,'')
	Add-Term $SearchTerm (Read-Term $ReplaceTerm)
}

Function Update-Term {
	Param (
		$SearchTerm,
		$ReplaceDef,
		$DataSource = ("C:\Media\Projects\Dictionary.sqlite")
	)
	$SearchTerm = $SearchTerm.ToLower() -Replace($regexAlphanumeric,'')
	$ReplaceDef = $ReplaceDef.ToLower() -Replace($regexSentence2,'')
	$out = Invoke-SqliteQuery -Query ("update dictionary set definition = '"+$ReplaceDef+"' where word = '"+$SearchTerm+"'") -DataSource $DataSource 
}

Function Reload-Tests{
}

Function Get-LongTerms ($Len) {
	(Read-AllTerms) | %{if (($_.definition -split " ").length -gt $Len){$_}}
}

Function Split-Term ($SearchTerm) {
	$SearchTerm = $SearchTerm.ToLower() -Replace($regexAlphanumeric,'')
	$ReadTerm = (read-term $SearchTerm)
	($ReadTerm -split " " |%{
		$term = read-term $_;
		write-host "$_ : $term"
	})
}

Function Split-2Term ($SearchTerm) {
	$SearchTerm = $SearchTerm.ToLower() -Replace($regexSentence2,'')
	($SearchTerm -split " " |%{
		$term = read-term $_;
		write-host "$_ : $term"
	})
}

Function Synergize-2Term ($SearchTerm) {
	$SearchTerm = $SearchTerm.ToLower() -Replace($regexSentence2,'')
	($SearchTerm -split " " |%{
		$term = read-term $_;
		if ($term){$term}else{$_}
	}) -join " "
}

Function Split-Synergy ($SearchTerm) {
	$SearchTerm = $SearchTerm.ToLower() -Replace($regexAlphanumeric,'')
	$SynergizeTerm = (synergize-term $SearchTerm)
	($SynergizeTerm -split " " |%{
		$term = read-term $_;
		write-host "$_ : $term"
	})
}

Function Recurse-Terms ($ShorterThan,$LongerThan) {
	$terms = (Read-AllTerms).definition -split " " |where {$_.length -lt $LongerThan}|where {$_.length -gt $ShorterThan} | sort -unique
	foreach ($term in $terms){
		$i++
		$term = $term.ToLower() -Replace($regexAlphanumeric,'')
		Lookup-Term $term
		$SecondsLeft = ($terms.count - $i) * 5
		$PercentComplete = (($i/$terms.count)*100)
		Write-Progress -Activity "Recursing Terms - $SecondsLeft seconds remaining" -Status ($term +" - "+ $i +" / "+ $terms.count +" = "+ [math]::round($PercentComplete,2)+"%") -PercentComplete $PercentComplete
	}
	write-host "Error words: "
	$WordsErroringWhenEnteredIntoDatabase | sort -unique
}

Function Query-Term ($c = (Get-Clipboard)) {
	$s = Synergize-Term $c;
	if ($s){$s}else{Lookup-Term $c;Synergize-Term $c}
}


Function Get-MissingTerms ($SearchTerm) {
	Split-BasicWord (read-term $SearchTerm) |select-string "missing"
}

Function Get-Synergy ($SearchTerm) {
	$SearchTerm = $SearchTerm.ToLower() -Replace($regexAlphanumeric,'')
	$SynergizeTerm = (synergize-Synergy $SearchTerm)
	($SynergizeTerm -split " " |%{
		$term = read-term $_;
		if ($term){$term}else{$_}
	}) -join " "
}

Function Split-BasicWord {
	Param (
		$SearchTerm
	)
	$SearchTerm = $SearchTerm.ToLower() -Replace($regexSentence,'') -split " "
	foreach ($Term in $SearchTerm) {
		#write-host "Term: $Term"
		$basicword = Read-BasicWord $Term
		$readterm = read-term $Term;
		if ($basicword) {
			"Word: $basicword"
		} elseif ($readterm) {
			"Term: $Term - definition: $readterm"
		} else {
			"Missing: $term"
		}
		$out += $out | select @{n="word";e={$Term}},@{n="term";e={Read-BasicWord $Term}}
	}
	$out
}

Function Synergize-Synergy ($SearchTerm) {
	$SearchTerm = $SearchTerm.ToLower() -Replace($regexAlphanumeric,'')
	$SynergizeTerm = (synergize-term $SearchTerm)
	($SynergizeTerm -split " " |%{
		$term = read-term $_;
		if ($term){$term}else{$_}
	}) -join " "
}

Function Synergize-Term ($SearchTerm) {
	$SearchTerm = $SearchTerm.ToLower() -Replace($regexAlphanumeric,'')
	$ReadTerm = (read-term $SearchTerm)
	($ReadTerm -split " " |%{
		$term = read-term $_;
		if ($term){$term}else{$_}
	}) -join " "
}


Function Read-AllBasicWords {
	Param (
		$DataSource = "C:\Media\Projects\BasicWords.txt"
	)
	gc C:\Media\Projects\BasicWords.txt
}

Function Read-BasicWord {
	Param (
		$SearchTerm
	)
	$SearchTerm = $SearchTerm.ToLower() -Replace($regexSentence,'')
	$out = Read-AllBasicWords | where {$_ -eq $SearchTerm}
	if (!$out) {
		$SearchTerm = $SearchTerm -replace '[s^]',''
		$out = Read-AllBasicWords | where {$_ -eq $SearchTerm}
	}
	$out
}

Function Find-BasicWord {
	Param (
		$SearchTerm
	)
	$SearchTerm = $SearchTerm.ToLower() -Replace($regexSentence,'')
	$out = Read-AllBasicWords | where {$_ -match $SearchTerm}
	if (!$out) {
		$SearchTerm = $SearchTerm -replace '[s^]',''
		$out = Read-AllBasicWords | where {$_ -match $SearchTerm}
	}
	$out
}

Function Filter-PreSuf {
	Param (
		$SearchTerm
	)
	$SearchTerm = $SearchTerm.ToLower() -Replace($regexSentence,'')
	$SearchTerm = " " +$SearchTerm + " "
	$suf = Read-AllSuffix
	$pre = Read-AllPrefix
	$suf | %{$SearchTerm = $SearchTerm -replace ($_.Suffix+" "),(" "+$_.definition)}
	$pre | %{$SearchTerm = $SearchTerm -replace (" "+$_.Prefix),($_.definition+" ")}
	$SearchTerm
}



Function Read-AllSuffix {
	Param (
		$DataSource = "C:\Media\Projects\Dictionary.sqlite"
		)
	Invoke-SqliteQuery -Query "select * from suffix" -DataSource $DataSource 
}

Function Read-Suffix {
	Param (
		$Suffix,
		$DataSource = "C:\Media\Projects\Dictionary.sqlite"
		)
	$Suffix = $Suffix.ToLower() -Replace($regexAlphanumeric,'')
	$out = Invoke-SqliteQuery -Query "select * from suffix where suffix = '$Suffix'" -DataSource $DataSource 
	$out.definition
}
#-ing: [noun suffix] action or process : instance of an action or process.


Function Read-AllPrefix {
	Param (
		$DataSource = "C:\Media\Projects\Dictionary.sqlite"
		)
	Invoke-SqliteQuery -Query "select * from prefix" -DataSource $DataSource 
}

Function Read-Prefix {
	Param (
		$Prefix,
		$DataSource = "C:\Media\Projects\Dictionary.sqlite"
		)
	$Prefix = $Prefix.ToLower() -Replace($regexAlphanumeric,'')
	$out = Invoke-SqliteQuery -Query "select * from prefix where prefix = '$Prefix'" -DataSource $DataSource 
	$out.definition
}

Function Remove-BasicTerms {
	Param (
		$AllBasicWords = (Read-AllBasicWords)
		)
	$AllBasicWords | %{delete-term $_}
	$AllBasicWords | %{add-term $_ ""}
}


#endregion

#region Imports
Function Generate-IChing {
	0..5|%{
		$r = ""
		0..2|%{
			if ((Get-Random -Minimum 0 -Maximum 2) -eq 1) {$r += "H"}else{$r+="T"};
		}

		switch ($r){
		"HHH" {"--- > - -"}
		"TTT" {"- - > ---"}
		"HHT" {"--- | ---"}
		"HTH" {"--- | ---"}
		"THH" {"--- | ---"}
		"HTT" {"- - | - -"}
		"THT"  {"- - | - -"}
		"TTH" {"- - | - -"}
		}
	}
}

Function Open-Audacity {
	param(
		$Filename,
		$ComputerName = '.',
		$AudacityLocation = "C:\Dropbox\Programs\Audacity\audacity.exe"
	)
	$inputpath = "C:\Dropbox\www\Convert\"+ (split-path $filename -Leaf)
	$originalpath = "C:\Dropbox\www\Complete\Original\"+ (split-path $filename -Leaf)
	$outputpath = "C:\Dropbox\www\Complete\"+ (split-path $filename -Leaf)
	$projectpath = "C:\Dropbox\www\audio\"+ (split-path $filename -Leaf)
	try{remove-item $projectpath}catch{"Couldn't find $projectpath"}
	& $AudacityLocation
	$OutpipeClient = new-object System.IO.Pipes.NamedPipeClientStream($ComputerName, 'FromSrvPipe', [System.IO.Pipes.PipeDirection]::InOut,
																	[System.IO.Pipes.PipeOptions]::None, 
																	[System.Security.Principal.TokenImpersonationLevel]::Impersonation)
	$InpipeClient = new-object System.IO.Pipes.NamedPipeClientStream($ComputerName, 'ToSrvPipe', [System.IO.Pipes.PipeDirection]::InOut,
																	[System.IO.Pipes.PipeOptions]::None, 
																	[System.Security.Principal.TokenImpersonationLevel]::Impersonation)
	$pipeReader = $pipeWriter = $null
	$OutpipeClient.Connect()
	$InpipeClient.Connect()
	$pipeReader = new-object System.IO.StreamReader($OutpipeClient)
	$pipeWriter = new-object System.IO.StreamWriter($InpipeClient)
	$pipeWriter.AutoFlush = $true
	sleep 3
	$pipeWriter.WriteLine( "Import2: Filename=$inputpath")
	$pipeWriter.WriteLine( 'ChangeSpeed: Percentage=-50.0')
	$pipeWriter.WriteLine( 'ChangeSpeed: Percentage=-50.0')
	$pipeWriter.WriteLine( 'ChangeSpeed: Percentage=-50.0')
	$pipeWriter.WriteLine( "Export2: Filename=$outputpath")
	$pipeWriter.WriteLine( "SaveProject2: Filename=$projectpath")
	$pipeWriter.WriteLine( 'Close: ')
	sleep 5
	Stop-Process -Name "audacity"
	move-item $inputpath $originalpath
	$OutpipeClient.Close()
	$InpipeClient.Close()

}
#while ($true) {$ls = ls "C:\Dropbox\www\Convert";foreach ($l in $ls) {Open-Audacity $l.FullName};sleep 60}

Function Get-Error {
	[CmdletBinding()]
	Param(
		[switch]$Resolve
	); #end Param
	
	if ($Error[0].InvocationInfo -ne $null) {
		$Error
		$EnGuard
		$Text = $Error[0]
		$File = (gc $Text.InvocationInfo.ScriptName)
		$Line = $Text.InvocationInfo.ScriptLineNumber
		
		$Text.Exception
		$Text.InvocationInfo
		
		$ResolveText += $File[0..($Line -2)]
		
		if ($Text.Exception -like '*Missing ''`)'' in function parameter list.*') {
			$ResolveText += $File[$Line - 1] + ","
			Write-Verbose "Proposed change: $($ResolveText[-1])"
		}; #end if Text.Message
		
		if ($Text.Exception -like '*Missing function body in function declaration.*') {
			$ResolveText += $File[$Line - 1] + "`{"
			Write-Verbose "Proposed change: $($ResolveText[-1])"
		}; #end if Text.Message
		
		$ResolveText += $File[($Line)..$File.Length]
		
		#Need to make it so Resolve only works on stuff we know how to fix.
		if ($Resolve) {
			if ($Text.Exception -like '*Missing ''`)'' in function parameter list.*') {
				"Adding a comma to fix a parameter."
				Insert-TextIntoFile -FileContents $ResolveText -FileName $Text.InvocationInfo.ScriptName
				Restart-Powershell
			} elseif ($Text.Exception -like '*Missing function body in function declaration.*') {
				"Adding an opening bracket to fix a function."
				Insert-TextIntoFile -FileContents $ResolveText -FileName $Text.InvocationInfo.ScriptName
				Restart-Powershell
			} else {
				"EnGuard doesn't know how to fix that."
				break
			}; #end if Text.Exception
		}; #end if Resolve
	} else {
		"EnGuard found no errors."
	}; #end if Error
	
}; #end Get-Error

#Check-System to monitor memory use and restart Powershell when it's too high.
#Diff running processes for new processes
Function Check-System {
	#New-Parameter Job
	Param(
		[switch]$Job
	); #end Param
	if ($Job) {
		Send-UDPText  -message ("Check-System Job mode - startup time: " + (get-date -f s))
	}; #end if
	$iterate = $true
	while ($iterate) {
	[string]$dtstamp = (get-date -f s)
		
		#Check for new processes
		$DiffProcess = diff $CurrentProcesses $OldProcesses -ErrorAction SilentlyContinue
		$OldProcesses = $CurrentProcesses
		$CurrentProcesses = Get-Process
		if ($DiffProcess) {
			foreach ($Process in $DiffProcess) {
				$PSI = $Process.SideIndicator.replace("<=","start").replace("=>","stop")
				Send-UDPText  -message ("EnGuard saw process $($PSI): $($Process.Inputobject.ProcessName) with PID: $($Process.Inputobject.Id) and Memory size: $($Process.Inputobject.PrivateMemorySize64) bytes at timestamp: $dtstamp ")
			}; #end foreach Process
		} else {
		}; #end if DiffProcess
		
		$Procc = ( $CurrentProcesses | where {$_.name -like "*powershell*"} | sort PrivateMemorySize64 -Descending)[0]
		if ($Procc.privatememorysize64  -gt 1gb ) {
			Send-UDPText  -message ("EnGuard ended process: $($Procc.Description) with CPU use: $($Procc.CPUPercent) % and Memory size: $($Procc.PrivateMemorySize64) bytes at timestamp: $dtstamp ")
			
			sleep 2
			#Do this part last so all logfiles get written etc.
			Stop-Process -ID ($Procc.ID)
		}; #end if Procc
		
		if ($Job) {
			sleep 10
		} else {
			#If Job flag wasn't set, dump us from the loop.
			$iterate = $false
		}; #end if job
	} # end while
}; #end Check-System
#Diff the registry to find recent updates. 

#Scan for "Conflicted copy" and resolve.
<#

#If this is running on the main module, it will load EnGuard. Otherwise the variable won't be there. 
if ($EnGuard) {
	
	#Error check and status output
	$EnGuardStatus = Get-Error -Resolve
	$StatusText = "$EnGuardStatus Build: $((gc $EnGuard)[0].split(' ')[3] )"
	Write-Host -f green $StatusText
	Send-UDPText  -message $StatusText
	Send-UDPText (get-date -f s) # >> C:\Dropbox\EnGuardLog.txt; 
	
	#System monitor
	Send-UDPText (Start-Job -ScriptBlock { 
		$DontShowPoweGILVersionOnStartup = $True
		ipmo C:\Dropbox\Public\html5\PS1\PowerGIL.ps1;
		ipmo C:\Dropbox\Public\html5\PS1\EnGuard.ps1; 
		Check-System -job; 
	}) # >> C:\Dropbox\EnGuardLog.txt; 
} else {
}; #end if EnGuard
#>

Function ConvertFrom-Gzip {
<#
.SYNOPSIS
This function will decompress the contents of a GZip file and output it to the pipeline.  Each line in the converted file is 
output as distinct object.

.DESCRIPTION
Using the System.IO.GZipstream class this function will decompress a GZip file and send the contents into 
the pipeline.  The output is one System.String object per line.  It supports the various types of encoding 
provided by the System.text.encoding class.

.EXAMPLE
ConvertFrom-Gzip -path c:\test.gz

test content

.EXAMPLE
get-childitem c:\archive -recure -filter *.gz | convertfrom-Gzip -encoding unicode | select-string -pattern "Routing failed" -simplematch

Looks through the c:\archive folder for all .gz files, those files are then converted to system.string 
objects, all that data is piped to select-string.  Strings which match the pattern "Routing failed" are returned to the console.

.EXAMPLE
get-item c:\file.txt.gz | convertfrom-Gzip | out-string | out-file c:\file.txt

Converts c:\file.txt.gz to a string array and then into a single string object.  That string object is then written into a new file.

.NOTES
Written by Jason Morgan
Created on 1/10/2013
Last Modified 7/11/2014
# added support for relative paths

#>
[CmdletBinding()]
Param
    (
        # Enter the path to the target GZip file, *.gz
        [Parameter(
        Mandatory = $true,
        ValueFromPipeline=$True, 
        ValueFromPipelineByPropertyName=$True,
        HelpMessage="Enter the path to the target GZip file, *.gz",
        ParameterSetName='Default')]             
        [Alias("Fullname")]
        [ValidateScript({$_.endswith(".gz")})]
        [String]$Path,
        # Specify the type of encoding of the original file, acceptable formats are, "ASCII","Unicode","BigEndianUnicode","Default","UTF32","UTF7","UTF8"
        [Parameter(Mandatory=$false,
        ParameterSetName='Default')]
        [ValidateSet("ASCII","Unicode","BigEndianUnicode","Default","UTF32","UTF7","UTF8")]
        [String]$Encoding = "ASCII"
    )
Begin 
    {
        Set-StrictMode -Version Latest
        Write-Verbose "Create Encoding object"
        $enc= [System.Text.Encoding]::$encoding
    }
Process 
    {
        Write-Debug "Beginning process for file at path: $Path"
        Write-Verbose "test path"
        if (-not ([system.io.path]::IsPathRooted($path)))
          {
            Write-Verbose 'Generating absolute path'
            Try {$path = (Resolve-Path -Path $Path -ErrorAction Stop).Path} catch {throw 'Failed to resolve path'}
            Write-Debug "New Path: $Path"
          } 
        Write-Verbose "Opening file stream for $path"
        $file = New-Object System.IO.FileStream $path, ([IO.FileMode]::Open), ([IO.FileAccess]::Read), ([IO.FileShare]::Read)
        Write-Verbose "Create MemoryStream Object, the MemoryStream will hold the decompressed data until it is loaded into `$array"
        $stream = new-object -TypeName System.IO.MemoryStream
        Write-Verbose "Construct a new [System.IO.GZipStream] object, created in Decompress mode"
        $GZipStream = New-object -TypeName System.IO.Compression.GZipStream -ArgumentList $file, ([System.IO.Compression.CompressionMode]::Decompress)
        Write-Verbose "Open a Buffer that will be used to move the decompressed data from `$GZipStream to `$stream"
        $buffer = New-Object byte[](1024)
        Write-Verbose "Instantiate `$count outside of the Do/While loop"
        $count = 0
        Write-Verbose "Start Do/While loop, this loop will perform the job of reading decopressed data from the gzipstream object into the MemoryStream object.  The Do/While loop continues until `$GZipStream has been emptied of all data, which is when `$count = 0"
        do
            {
                $count = $gzipstream.Read($buffer, 0, 1024)
                if ($count -gt 0)
                    {
                        $Stream.Write($buffer, 0, $count)
                    }
            }
        While ($count -gt 0)
        Write-Verbose "Take the data from the MemoryStream and convert it to a Byte Array"
        $array = $stream.ToArray()
        Write-Verbose "Close the GZipStream object instead of waiting for a garbage collector to perform this function"
        $GZipStream.Close()
        Write-Verbose "Close the MemoryStream object instead of waiting for a garbage collector to perform this function"
        $stream.Close()
        Write-Verbose "Close the FileStream object instead of waiting for a garbage collector to perform this function"
        $file.Close()
        Write-Verbose "Create string(s) from byte array, a split is added after the conversion to ensure each new line character creates a new string"
        $enc.GetString($array).Split("`n")
    }
End {}
}

Function Download-YoutubeVid ($VideoHash) {
	cd C:\Media\Projects\Video
	& C:\Media\Programs\util\youtube-dl.exe "https://youtu.be/$VideoHash"
}
#endregion

#region Music
function Reload-Notes {
	write-host "IPMO -force C:\Media\Projects\Notes.ps1"
}

function Play-Note {
	Param(
		$note,
		$octave = 4,
		$NoteLengthInverse = 4,
		$QuarterNotesPerMinute = 120
	)
	$frequency = Get-Note $note $octave
	$duration = Get-NoteDuration $NoteLengthInverse $QuarterNotesPerMinute
	[console]::beep($frequency,$duration);
}

function Get-Note {
	Param(
		$note,
		$octave
	)
	[double]((Get-AllNotes) |where {$_.note -eq $note}|where {$_.octave -eq $octave}).frequency
}

function Get-NoteDuration {
	Param(
		$NoteLengthInverse,
		$QuarterNotesPerMinute = 120
	)
	#How many milliseconds is a quarter note in 4/4 when q = 120 BPM?

	$NoteLengthInMS = 1000 / ($QuarterNotesPerMinute / 60)  #beats per millisecond
	$NoteLengthInMS / ($NoteLengthInverse / 4)
	
	#1 2000
	#2 1000
	#4 500
	#8 250

}

function Get-AllNotes {
"Note,octave,Frequency
A#,0,0
A,0,0
Ab,0,0
B,0,0
Bb,0,0
C,0,16.35
C#,0,17.32
Db,0,17.32
D,0,18.35
D#,0,19.45
Eb,0,19.45
E,0,20.60
F,0,21.83
F#,0,23.12
Gb,0,23.12
G,0,24.50
G#,0,25.96
A,1,27.50
B,1,30.87
C,1,32.70
D,1,36.71
E,1,41.20
F,1,43.65
G,1,49.00
A,2,55.00
B,2,61.74
C,2,65.41
D,2,73.42
E,2,82.41
F,2,87.31
G,2,98.00
A,3,110.00
B,3,123.47
C,3,130.81
D,3,146.83
E,3,164.81
F,3,174.61
G,3,196.00
A,4,220.00
B,4,246.94
C,4,261.63
D,4,293.66
E,4,329.63
F,4,349.23
G,4,392.00
A,5,440.00
B,5,493.88
C,5,523.25
D,5,587.33
E,5,659.25
F,5,698.46
G,5,783.99
A,6,880.00
B,6,987.77
C,6,1046.50
D,6,1174.66
E,6,1318.51
F,6,1396.91
G,6,1567.98
A,7,1760.00
B,7,1975.53
C,7,2093.00
D,7,2349.32
E,7,2637.02
F,7,2793.83
G,7,3135.96
A,8,3520.00
B,8,3951.07
C,8,4186.01
D,8,4698.63
E,8,5274.04
F,8,5587.65
G,8,6271.93
A,9,7040.00
B,9,7902.13
Ab,1,25.96
Bb,1,29.14
Db,1,34.65
Eb,1,38.89
Gb,1,46.25
Ab,2,51.91
Bb,2,58.27
Db,2,69.30
Eb,2,77.78
Gb,2,92.50
Ab,3,103.83
Bb,3,116.54
Db,3,138.59
Eb,3,155.56
Gb,3,185.00
Ab,4,207.65
Bb,4,233.08
Db,4,277.18
Eb,4,311.13
Gb,4,369.99
Ab,5,415.30
Bb,5,466.16
Db,5,554.37
Eb,5,622.25
Gb,5,739.99
Ab,6,830.61
Bb,6,932.33
Db,6,1108.73
Eb,6,1244.51
Gb,6,1479.98
Ab,7,1661.22
Bb,7,1864.66
Db,7,2217.46
Eb,7,2489.02
Gb,7,2959.96
Ab,8,3322.44
Bb,8,3729.31
Db,8,4434.92
Eb,8,4978.03
Gb,8,5919.91
Ab,9,6644.88
Bb,9,7458.62
A#,1,29.14
C#,1,34.65
D#,1,38.89
F#,1,46.25
G#,1,51.91
A#,2,58.27
C#,2,69.30
D#,2,77.78
F#,2,92.50
G#,2,103.83
A#,3,116.54
C#,3,138.59
D#,3,155.56
F#,3,185.00
G#,3,207.65
A#,4,233.08
C#,4,277.18
D#,4,311.13
F#,4,369.99
G#,4,415.30
A#,5,466.16
C#,5,554.37
D#,5,622.25
F#,5,739.99
G#,5,830.61
A#,6,932.33
C#,6,1108.73
D#,6,1244.51
F#,6,1479.98
G#,6,1661.22
A#,7,1864.66
C#,7,2217.46
D#,7,2489.02
F#,7,2959.96
G#,7,3322.44
A#,8,3729.31
C#,8,4434.92
D#,8,4978.03
F#,8,5919.91
G#,8,6644.88
A#,9,7458.62" |convertfrom-csv

}

#endregion

#region Enkida

<#
1. Lookup
2. Add entries
3. Parse entries
#>

$identity = @{}
#[hashtable]$identity 
#$identity = gc C:\Media\Data\JSON\identity.json | convertfrom-json | %{}
$LastMessage = "";

#$config = gc "C:\Media\Projects\Enkida_Discord\config.json" |ConvertFrom-Json
$URL = @{
    "duckduckgo"="https://api.duckduckgo.com/?q=$SearchTerm&format=json";
    "urbandictionary"="https://api.urbandictionary.com/v0/define?term=$SearchTerm";
    "wikipedia"= 
"https://en.wikipedia.org/w/api.php?action=query&format=json&prop=revisions&titles=$SearchTerm&rvprop=content"
}
$config = @{
    "BotName"="Enkida";
    "TriggerKey"="!enkida";
    "LogName"="EnkidaLog";
    "CommandProcessConfirmation"=$false;
    "CommandLockEnabled"=$false;
    "LockMinutes"=30;
    "DiscordChannelName"="general";
    "DiscordServerName"="Gilgamech";
    "DiscordTextChannelID"="554879870388404246";
    "DiscordToken"="ODExNjI4NDA1MDIzODM0MTYz.YC092w.PyJ2aeAuuBrSjKa-Smktz8BtkNk";
    "DiscordURL"="https://discordapp.com/api";
    "DiscordHook"="https://discord.com/api/webhooks/811625284767318026/imNLZ7_6H8ftQR6ZRv36mscnZl3TUo4xJkdp0qP5TdF0vnI9GwhM34NMOF7_0mIBiJH2";
    "DiscordChannelMessages"="{0}/channels/{1}/messages?after={2}";
    "DiscordName"="Discord";
    "DiscordLink"="Discord.lnk"
}

Function Get-EnkidaDiscordMessage {
	#$getUrl = $Config.DiscordChannelMessages -f $Config.DiscordURL,$Config.DiscordTextChannelID,$MessageCache
	#$getUrl ="https://discordapp.com/api/channels/554879870388404246/messages?after="
	$Headers = @{Authorization = "Bot $($Config.DiscordToken)"}
	
	$ChannelUrl ="https://discordapp.com/api/channels/554879870388404246"
	$response = Invoke-RestMethod -ContentType "Application/JSON" -Uri $ChannelUrl -Method "GET" -Headers $Headers -UseBasicParsing

	$getUrl ="https://discordapp.com/api/channels/554879870388404246/messages/"+$response.last_message_id
	#$getUrl ="https://discordapp.com/api/channels/554879870388404246/messages?after=691723071383666748"

	$response = Invoke-RestMethod -ContentType "Application/JSON" -Uri $GetURL -Method "GET" -Headers $Headers -UseBasicParsing
	$response.content
}

Function Send-EnkidaDiscordMessage ($content) {
	$hookUrl =  "https://discord.com/api/webhooks/811625284767318026/imNLZ7_6H8ftQR6ZRv36mscnZl3TUo4xJkdp0qP5TdF0vnI9GwhM34NMOF7_0mIBiJH2"
	$payload = [PSCustomObject]@{content = $content}
	$headers = @{"Content-Type"="application/json"}
	Invoke-RestMethod -Uri $hookUrl -Method Post -Body ($payload | ConvertTo-Json) -Headers $headers
}

Function Watch-EnkidaDiscordChannel ($content) {
	while ($true) {
		sleep 5
		$response = Get-EnkidaDiscordMessage
		if ($response -eq $LastMessage) {Continue}else{$LastMessage = $response}
		$ask = ""
		$out = ""
	Write-Host "Channel ask: " $response
		
		switch -Wildcard ($response){
			"!enkida"{
				Send-EnkidaDiscordMessage "I am here."
			}
			"What is *"{
				$ask = $response -replace "What is ","" -replace "\?",""
	Write-Host "Search term: " $ask;
				$out = (Synergize-APIResponses $ask)[0..1000] -join "";
				if (!$out){$out = "I can't find "+$ask}
				Send-EnkidaDiscordMessage $out;
	Write-Host "Channel reply: " $out;
				#write-host $str
				#Send-EnkidaDiscordMessage (Invoke-RandomAPI $out)
			}
			Default{}
		}
	}

}

Function Synergize-APIResponses {
	Param(
		$SearchTerm = "foal",
		$FileName = "C:\Media\Docs\Text\RandomAPIs.txt",
		$FileContents = (gc $FileName)
		#$RandNum = (get-random -min 0 -max $FileContents.length)
	); #end Param
	$APIList += $FileContents | %{ [scriptblock]::Create($_)}
			$OutContent = ""
	foreach ($API in $APIList) {		
		$Site = $API.tostring().split("`/")[2].split(".")[1]
		$Results = iwr (& $API)
		$Content = ($Results.content | ConvertFrom-Json)
		write-host "Site: $Site";# | ConvertVoice-CleanSpeech
		Switch ($Site) {
			"wikipedia" {
				$Pages = $Content.query.pages
				#$Topics = (($Pages.(($Pages | gm | select -ExpandProperty name )[-1]) | select -ExpandProperty revisions | select -ExpandProperty '`**') -split ".`n" | Select-String "==" | Convert-SymbolsToUnderscore -Symbol " " )
				$OutContent += (($Pages.(($Pages | gm | select -ExpandProperty name )[-1]) | select -ExpandProperty revisions | select -ExpandProperty '`**') -split "`n" )[0..18]

			}; #end wikipedia 
			"duckduckgo" {
				[String]$OutContent += ($Content.abstracttext)
			}; #end duckduckgo 
			"cleverbot" {
				[String]$OutContent += ($Content.output)
			}; #end duckduckgo 
			"urbandictionary" {
				#[String]$OutContent += ($Content.abstracttext)
				$OutContent += Get-Random ($Content.list) | select -ExpandProperty definition
			}; #end duckduckgo 
			Default {
				$OutContent += $Content
			}; #end Default 
		}; #end Switch Site
	}; #end foreach API
	$OutContent;# | ConvertVoice-CleanSpeech
}; #end Invoke-RandomAPI

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
	write-host "Site: $Site";# | ConvertVoice-CleanSpeech
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
	if (!$OutContent) {Invoke-RandomAPI $OutContent;break}
		}; #end duckduckgo 
		"cleverbot" {
			[String]$OutContent = ($Content.output)
		}; #end duckduckgo 
		"urbandictionary" {
			#[String]$OutContent = ($Content.abstracttext)
			$OutContent = Get-Random ($Content.list) | select -ExpandProperty definition
	if (!$OutContent) {Invoke-RandomAPI $OutContent;break}
		}; #end duckduckgo 
		Default {
			$OutContent = $Content
		}; #end Default 
	}; #end Switch Site
	$OutContent;# | ConvertVoice-CleanSpeech
}; #end Invoke-RandomAPI

Function Add-EnkidaIdentity ($InputText) {
	$ReadyText = $InputText -replace "\[\[","" -replace "\]\]","" -replace "'''",'"' 
	foreach ($Group in ($ReadyText -split "\|")) {
		foreach ($Sentence in ($Group -split "\. ")) {
			if ($Sentence[0] -eq " ") {$Sentence = $Sentence[1..($Sentence.length)]}
			if ($Sentence -match " is "){
				$outtext = $Sentence -split " is " 
				$identity[$outtext[0]] = ($outtext[1..99] -join "")
			}
			if ($Sentence -match " are "){
				$outtext = $Sentence -split " are " 
				$identity[$outtext[0]] = ($outtext[1..99] -join "")
			}
			if ($Sentence -match " am "){
				$outtext = $Sentence -split " am " 
				$identity[$outtext[0]] = ($outtext[1..99] -join "")
			}
		}
	}
}

filter Filter-EnkidaIdentity {
	$keys = ($identity | Select-Object -ExpandProperty Keys); 
	foreach ($key in $keys) {
		$_ = $_ -replace $key,$identity[$key]
	};
	return $_
}

function Post-ToSlack {
    <#  
            .SYNOPSIS
            Sends a chat message to a Slack organization
            .DESCRIPTION
            The Post-ToSlack cmdlet is used to send a chat message to a Slack channel, group, or person.
            Slack requires a token to authenticate to an org. Either place a file named token.txt in the same directory as this cmdlet,
            or provide the token using the -token parameter. For more details on Slack tokens, use Get-Help with the -Full arg.
            .NOTES
            Written by Chris Wahl for community usage
            Twitter: @ChrisWahl
            GitHub: chriswahl
            .EXAMPLE
            Post-ToSlack -channel '#general' -message 'Hello everyone!' -botname 'The Borg'
            This will send a message to the #General channel, and the bot's name will be The Borg.
            .EXAMPLE
            Post-ToSlack -channel '#general' -message 'Hello everyone!' -token '1234567890'
            This will send a message to the #General channel using a specific token 1234567890, and the bot's name will be default (PowerShell Bot).
            .LINK
            Validate or update your Slack tokens:
            https://api.slack.com/tokens
            Create a Slack token:
            https://api.slack.com/web
            More information on Bot Users:
            https://api.slack.com/bot-users
    #>

    Param(
        [Parameter(Mandatory = $true,Position = 0,HelpMessage = 'Chat message')]
        [ValidateNotNullorEmpty()]
        [String]$Message,
        [Parameter(Mandatory = $false,Position = 1,HelpMessage = 'Slack channel')]
        [String]$Channel="general",
        [Parameter(Mandatory = $false,Position = 2,HelpMessage = 'Slack API token')]
        [String]$token,
        [Parameter(Mandatory = $false,Position = 3,HelpMessage = 'Optional name for the bot')]
        [String]$BotName = 'Enkida'
    )

    Process {

        # Static parameters
        if (!$token) 
        {
            $token = Get-Content -Path "$PSScriptRoot\token.txt"
        }
        $uri = 'https://slack.com/api/chat.postMessage'

        # Build the body as per https://api.slack.com/methods/chat.postMessage
        $body = @{
            token    = $token
            channel  = $Channel
            text     = $Message
            username = $BotName
            parse    = 'full'
        }

        # Call the API
        try 
        {
            Invoke-RestMethod -Uri $uri -Body $body
        }
        catch 
        {
            throw 'Unable to call the API'
        }

    } # End of process
} # End of function

#New-Alias p Post-ToDiscord
function Post-ToDiscord {
    <#  
            .SYNOPSIS
            Sends a chat message to a Slack organization
            .DESCRIPTION
            The Post-ToSlack cmdlet is used to send a chat message to a Slack channel, group, or person.
            Slack requires a token to authenticate to an org. Either place a file named token.txt in the same directory as this cmdlet,
            or provide the token using the -token parameter. For more details on Slack tokens, use Get-Help with the -Full arg.
            .NOTES
            Written by Chris Wahl for community usage
            Twitter: @ChrisWahl
            GitHub: chriswahl
            .EXAMPLE
            Post-ToSlack -channel '#general' -message 'Hello everyone!' -botname 'The Borg'
            This will send a message to the #General channel, and the bot's name will be The Borg.
            .EXAMPLE
            Post-ToSlack -channel '#general' -message 'Hello everyone!' -token '1234567890'
            This will send a message to the #General channel using a specific token 1234567890, and the bot's name will be default (PowerShell Bot).
            .LINK
            Validate or update your Slack tokens:
            https://api.slack.com/tokens
            Create a Slack token:
            https://api.slack.com/web
            More information on Bot Users:
            https://api.slack.com/bot-users
    #>

    Param(
        [Parameter(Mandatory = $true,Position = 0,HelpMessage = 'Chat message')]
        [ValidateNotNullorEmpty()]
        [String]$Message,
        [Parameter(Mandatory = $false,Position = 1,HelpMessage = 'Discord channel')]
        [String]$Channel="general",
        [Parameter(Mandatory = $false,Position = 2,HelpMessage = 'Discord API token')]
        [String]$token,
        [Parameter(Mandatory = $false,Position = 3,HelpMessage = 'Optional name for the bot')]
        [String]$BotName = 'Enkida'
    )

	
    Process {
	$AuthURI = "https://discordapp.com/api/oauth2/authorize?client_id=370977730583461899&scope=bot&permissions=1"

        # Static parameters
        if (!$token) 
        {
            $token = Get-Content -Path "$PSScriptRoot\discord.txt"
        }
        $uri = 'https://slack.com/api/chat.postMessage'

        # Build the body as per https://api.slack.com/methods/chat.postMessage
        $body = @{
            token    = $token
            channel  = $Channel
            text     = $Message
            username = $BotName
            parse    = 'full'
        }

        # Call the API
        try 
        {
            Invoke-RestMethod -Uri $uri -Body $body
        }
        catch 
        {
            throw 'Unable to call the API'
        }

    } # End of process
} # End of function

#endregion

#region Server
#Step 1: Prereq Variables
[string]$AvailabilityZone = "us-west-2a"
$DefaultSecurityGroupID = "sg-d76f81ad"
$Keypair = "GilKeyPair"
$PemFile = "C:\Media\Personal\Gilgamech\$Keypair.pem" 

#Prerequisite 1: utility function:
#This function takes bytes as input, and outputs ASCII (or Unicode) characters.

Filter Flip-BytesToText {
Param(
[switch]$Unicode
); #end Param
[int]$Unicode2 = 0
$ReturnString = ""
if ($_) {
if ($Unicode) {
$ReturnString = [System.Text.Encoding]::Unicode.GetString(($_,$Unicode2))
} else {
$ReturnString = [System.Text.Encoding]::ASCII.GetString($_)
}; #end if Unicode
if ($ReturnString -ne "") {
return $ReturnString
}; #end if ReturnString
}; #end if _
}; #end Flip-BytesToText
#Prerequisite 2: Rotate AWS key
#Updating this function with a progress bar to countdown the 30 seconds.

Function Reset-AwsApiKey {
$oldKey = (Get-AWSCredential default).GetCredentials().AccessKey
$key = New-IAMAccessKey
Set-AWSCredential -AccessKey $key.AccessKeyId -SecretKey $key.SecretAccessKey -StoreAs default
0..30| %{Write-Progress -Activity "Sleeping for keys to settle down." -Status "Countdown to 30 seconds: $_" -PercentComplete ($_*3.33);sleep 1}
Remove-IAMAccessKey -AccessKeyId $oldKey -Force
}
#Step 2: New Security Group
#Updating this function with a better name for the SG.

Function New-RdpSecurityGroup {
[ipaddress]$IpAddress = (((iwr https://checkip.amazonaws.com).content | Flip-BytesToText ) -replace "`n","" -join "")
[string]$IpCidr = ($IpAddress.IPAddressToString+"/32")

[string]$GroupDesc="Created on "+(Get-date -f d)+" - access from "+$IpCidr
New-EC2SecurityGroup -Description $GroupDesc -GroupName ($CurrentSecurityGroupName+1) -VpcId $Subnet.VpcId

$cidrBlocks = New-Object 'collections.generic.list[string]'
$cidrBlocks.add($IpCidr)

$ipPermissions = New-Object Amazon.EC2.Model.IpPermission
$ipPermissions.IpProtocol = "tcp"
$ipPermissions.FromPort = 3389
$ipPermissions.ToPort = 3389
$ipPermissions.IpRanges = $cidrBlocks

Grant-EC2SecurityGroupIngress -GroupName ($CurrentSecurityGroupName+1) -IpPermissions $ipPermissions
}

function Update-GilServerSG {
	Set-DefaultAWSRegion -Region ($AvailabilityZone.Substring(0,$AvailabilityZone.Length-1))
	$currentServer = (Get-EC2Instance).Instances
	[string]$SubnetID = $currentServer.subnetID
	$Subnet = get-ec2subnet $SubnetID
	[int]$CurrentSecurityGroupName = (Get-EC2SecurityGroup | where {$_.description -match "Created on"}).GroupName
	Reset-AwsApiKey
	$newSecurityGroupID = New-RdpSecurityGroup
	$newServer = (Get-EC2Instance $newServer.instanceid).Instances
	Edit-EC2InstanceAttribute -InstanceId $newServer.InstanceId -Group @($DefaultSecurityGroupID, $newSecurityGroupID)
	Remove-EC2SecurityGroup -GroupId (Get-EC2SecurityGroup -GroupName $CurrentSecurityGroupName).GroupId -Force
}


#endregion

