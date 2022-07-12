#This was used with a scheduled task to check for uploaded MP3s and reduce their playback speed by a LOT. Used Audacity because other free/app/web audio editors introduced massive audio artifacts.

Function Open-Audacity {
	param(
		$ComputerName = '.',
		$Filename = "C:\Dropbox\pZH0JJA.mp4",
		$AudacityLocation = "C:\Dropbox\Programs\Audacity\audacity.exe"
	)
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
	$pipeWriter.WriteLine( "Import2: Filename=$Filename")
	$pipeWriter.WriteLine( 'ChangeSpeed: Percentage=-50.0')
	$pipeWriter.WriteLine( 'ChangeSpeed: Percentage=-50.0')
	$pipeWriter.WriteLine( 'ChangeSpeed: Percentage=-50.0')
	$savepath = (split-path $filename) + "\modify-"+ (split-path $filename -Leaf)
	$pipeWriter.WriteLine( "SaveProject2: Filename=$savepath")
	$pipeWriter.WriteLine( 'Close: ')
	$OutpipeClient.Close()
	$InpipeClient.Close()

}





