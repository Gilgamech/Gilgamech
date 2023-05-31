#Copyright 2023 Gilgamech Technologies
#Author: Stephen Gillie
#Created 2/4/2023
#Updated 2/19/2023
#Notes: Import-Module C:\repos\Gilgamech\PS1\profile.ps1 -force
#And the love kickstarts again.

New-Alias note "C:\Program Files\n++\notepad++.exe"

function Get-YoutubeDL ($videoURI) {
	& 'C:\Program Files\util\youtube-dl.exe' -x $videoURI
}

$ffmpegLoc = "C:\Users\Gilgamech\AppData\Local\Microsoft\WinGet\Packages\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe\ffmpeg-5.1.2-full_build\bin\ffmpeg.exe"
function Convert-FileToMp3 ($FileName) {
	$outName = Get-ChildItem $FileName
	$outFile = ($outName.FullName[0..$outName.FullName.IndexOf(".")] -join "") + "mp3"
	& $ffmpegLoc  -i $FileName -q:a 0 -map a $outFile
}

function Sort-Clipboard ($toSort = (Get-Clipboard)) {
	$toSort | sort | clip
}

function Get-File2Dir ($dir){
	rm "$dir\file2dir.txt";
	ls $dir | %{
		$_.fullname |out-file "$dir\file2dir.txt" -Append;
		gc $_.fullname |out-file "$dir\file2dir.txt" -Append
	}
}

function Restart-ProgWebserver($i) {
	copy .\inMemCacheFile.json .\imcs\$i.json
	copy .\inMemCacheFileCopy.json .\inMemCacheFile.json;
	node .\index.js
}

function Get-ScreenResolution {            
[void] [Reflection.Assembly]::LoadWithPartialName("System.Windows.Forms")            
[void] [Reflection.Assembly]::LoadWithPartialName("System.Drawing")            
$Screens = [system.windows.forms.screen]::AllScreens            

foreach ($Screen in $Screens) {            
 $DeviceName = $Screen.DeviceName            
 $Width  = $Screen.Bounds.Width            
 $Height  = $Screen.Bounds.Height            
 $IsPrimary = $Screen.Primary            

 $OutputObj = New-Object -TypeName PSobject             
 $OutputObj | Add-Member -MemberType NoteProperty -Name DeviceName -Value $DeviceName            
 $OutputObj | Add-Member -MemberType NoteProperty -Name Width -Value $Width            
 $OutputObj | Add-Member -MemberType NoteProperty -Name Height -Value $Height            
 $OutputObj | Add-Member -MemberType NoteProperty -Name IsPrimaryMonitor -Value $IsPrimary            
 $OutputObj            

}            
}

Function Get-Mouse {
Process {
        Add-Type -AssemblyName System.Windows.Forms
        $screen = [System.Windows.Forms.SystemInformation]::VirtualScreen
        [Windows.Forms.Cursor]::Position
    }
}

Function Move-Mouse {
	Param (
[int]$X = ((Get-ScreenResolution).Width), 
[int]$y = ((Get-ScreenResolution).Height/2)
    )
Process {
        Add-Type -AssemblyName System.Windows.Forms
        $screen = [System.Windows.Forms.SystemInformation]::VirtualScreen
        $screen.Width = $X
        $screen.Height = $y
        [Windows.Forms.Cursor]::Position = "$($screen.Width),$($screen.Height)"
    }
}

Function Run-Cat {
$newMouse = (Get-Mouse)
	while ($true) {
$oldMouse = $newMouse
$newMouse = (Get-Mouse)
Write-Host "oldMouse $oldMouse newMouse $newMouse"
if (!(diff $oldMouse $newMouse)) {
Move-Mouse
Write-Host "move"
}
sleep 3

}
}

Function Parse-Text($openDelim,$closeDelim,$text){
    ($text -replace $openDelim,"") -split $closeDelim
}

