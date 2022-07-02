//C:\Windows\Microsoft.NET\Framework64\v4.0.30319\csc.exe C:\Media\Projects\HTTPListener\pingecWebserver.cs

using System;
using System.Collections.Generic;
using System.IO;
using System.Net;
using System.Text;

// [ipaddress]$ipaddress = [System.Text.Encoding]::ASCII.GetString((iwr https://checkip.amazonaws.com).content).trim()
// $LogPath = ".\"
// $sites = gc .\sites.csv |convertfrom-csv

namespace GilgamechHostingServer {
    internal class HostingServer {
        private static void Main(string[] args) {
            if (!HttpListener.IsSupported) {
                Console.WriteLine("Windows XP SP2 or Server 2003 is required to use the HttpListener class.");
                return;
            }
            // Build prefixes and listener, and add prefixes to listener, then start listening.
            var prefixes = new List<string>() { "http://*:80/" };

            HttpListener listener = new HttpListener();
            foreach (string prefix in prefixes) {
                listener.Prefixes.Add(prefix);
            }
            listener.Start();
            Console.WriteLine("Listening...");


            while (listener.IsListening) {
				
				
                // Note: The GetContext method blocks while waiting for a request, so the code will hang out here.
                HttpListenerContext context = listener.GetContext();
// $startTime = (get-date)

                HttpListenerRequest request = context.Request;
// $RequestUrl = request.Url.OriginalString

                string documentContents;
                using (Stream receiveStream = request.InputStream) {
                    using (StreamReader readStream = new StreamReader(receiveStream, Encoding.UTF8)) {
                        documentContents = readStream.ReadToEnd();
                    }
                }
// if(request.HasEntityBody) {
// $Reader = New-Object System.IO.StreamReader(request.InputStream)
// Write-Output $Reader.ReadToEnd()
// }
                Console.WriteLine("Recived request for " + request.Url);
                Console.WriteLine(documentContents);

                // Obtain a response object.
                HttpListenerResponse response = context.Response;
// response = context.Response

// response.Headers.Add("Content-Type","text/html")
// response.StatusCode = 200
// $RemoteAddr = request.RemoteEndPoint.Address
// $Method = request.HttpMethod
// $UAgent = request.UserAgent
// $Cookies = request.Cookies
// $Reefer = request.UrlReferrer

                // Construct a response.
// try {
                string responseString = "<HTML><BODY> Hello world!</BODY></HTML>";
// responseString = gc ($sites|where {$_.site -match request.Url.Host}).Page
// }catch {
// responseString = "<HTML><body>404 Error not found.</body><HTML>"
// response.StatusCode = 404
// }
                byte[] buffer = System.Text.Encoding.UTF8.GetBytes(responseString);

                // Get a response stream and write the response to it.
                response.ContentLength64 = buffer.Length;
                System.IO.Stream output = response.OutputStream;
                output.Write(buffer, 0, buffer.Length);
				
                // You must close the output stream.
                output.Close();

// Write-Output "" # Newline
// Write-Output "$RequestUrl"
// $outfile = $LogPath+(Get-Date -Format yyyyMMdd)+".log"
// $timeTaken = [math]::round(((get-date) - $startTime).TotalMilliseconds,0)

// Fields: date time c-ip cs-username s-ip cs-method cs-uri-stem cs-uri-query sc-status sc-bytes cs-bytes time-taken cs-version cs(User-Agent) cs(Cookie) cs(Referrer)

// $enc = [system.Text.Encoding]::ASCII
// $LogEntry = (get-date -f d)+" "+(get-date -f T)+" "+$RemoteAddr+" - "+$ipaddress+" "+$Method+" "+request.Url.PathAndQuery+" "+request.Url.Query+" "+response.StatusCode+" "+$enc.GetBytes(responseString).length+" "+$enc.GetBytes(request.Url.OriginalString).length+" "+$timeTaken+" "+request.Url.Scheme+"/"+request.ProtocolVersion+" "+$UAgent+" "+$Cookies+" "+$Reefer

// Out-File -Append -InputObject $LogEntry -FilePath $outfile
// }
// }

            }
            //listener.Stop();
// listener.Stop()
        }
    }
}





/*Function Write-AdminPage {
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

*/

/* Request body
$sites = gc .\sites.csv |convertfrom-csv
listener = New-Object System.Net.HttpListener
listener.Prefixes.Add("http://+:65530/")
listener.Start()
context = listener.GetContext()
request = context.Request
request

AcceptTypes: {text/html, application/xhtml+xml, application/xml;q=0.9, image/avif...}
ClientCertificateError: 
ContentEncoding: System.Text.SBCSCodePageEncoding
ContentLength64: 0
ContentType: 
Cookies: {}
HasEntityBody: False
Headers: {DNT, Upgrade-Insecure-Requests, Sec-Fetch-Site, Sec-Fetch-Mode...}
HttpMethod: GET
InputStream: System.IO.Stream+NullStream
IsAuthenticated: False
IsLocal: True
IsSecureConnection: False
IsWebSocketRequest: False
KeepAlive: True
LocalEndPoint: [::1]:65531
ProtocolVersion: 1.1
QueryString: {}
RawUrl: /
RemoteEndPoint: [::1]:62173
RequestTraceIdentifier: 00000000-0000-0000-2000-0080040000f7
ServiceName: 
TransportContext: System.Net.HttpListenerRequestContext
Url: http://localhost:65531/
UrlReferrer: 
UserAgent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Safari/537.36
UserHostAddress: [::1]:65531
UserHostName: localhost:65531
UserLanguages: {en-US, en;q=0.9}
*/

/*Bibliography
https://gist.github.com/pingec/9bf2fd92ac85032b5e30d487a35789a0#file-dumphttprequests-cs
*/

