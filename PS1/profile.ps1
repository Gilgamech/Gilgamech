#Copyright 2023 Gilgamech Technologies
#Author: Stephen Gillie
#Created 2/4/2023
#Updated 2/19/2023
#Notes: Import-Module C:\repos\Gilgamech\PS1\profile.ps1 -force

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

