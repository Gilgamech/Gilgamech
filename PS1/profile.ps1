#Copyright 2023 Gilgamech Technologies
#Author: Stephen Gillie
#Created 2/4/2023
#Updated 2/4/2023
#Notes: Import-Module C:\repos\Gilgamech\PS1\profile.ps1 -force

function Get-YoutubeDL ($videoURI) {
	& 'C:\Program Files\util\youtube-dl.exe' -x $videoURI
}

function Convert-FileToMp3 ($FileName) {
	$outName = Get-ChildItem $FileName
	$outFile = ($outName.FullName[0..$outName.FullName.IndexOf(".")] -join "") + "mp3"
	& 'C:\Program Files\ffmpeg-2022-12-15-git-9adf02247c-full_build\bin\ffmpeg.exe' -i $FileName -q:a 0 -map a $outFile
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

