# C:\Users\Gilgamech\Documents\WindowsPowerShell\Microsoft.PowerShell_profile.ps1 Build: 2 2017-01-29T11:46:29     






# 2 : 25 : $mybot = "C:\Dropbox\repos\www\robot_fruit_hunt\mybot.js"

#File paths
$BasePath = "C:\Dropbox"
$DocsPath = $BasePath + "\Documents"
$PowerGILBackupPath = $ProgramsPath + "\Powershell\PowerGILVersions"
$ProgramsPath = $BasePath + "\Programs"
$ReposPath = $BasePath + "\repos"
$UtilPath = $ProgramsPath + "\util"
$WebPath = $ReposPath + "\www"
$ModulesFolder = $WebPath + "\PS1"

#Program paths
$PowerGIL = $ModulesFolder + "\PowerGIL.ps1"
$NppPath = $ProgramsPath + "\N++\notepad++.exe"
$GITPath = $ProgramsPath + "\Git\bin\git.exe"
$VIMPATH = $ProgramsPath + "\vim74\vim.exe"
$LynxW32Path = $ProgramsPath + "\lynx_w32\lynx.exe"
$PowerGILMaster = 1

#Import modules
if (test-path $PowerGIL) {ipmo $PowerGIL} else {ipmo ((split-path $profile) + "PowerGIL.ps1")}
Set-Location $BasePath

$DontShowPSVersionOnStartup = $true
$mybot = "C:\Dropbox\repos\www\robot-fruit-hunt\mybot.js"