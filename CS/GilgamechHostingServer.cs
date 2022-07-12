using System;
using System.Collections.Generic;
using System.IO;
using System.Net;
using System.Text;
using System.Data.SQLite;

//IPAddress ipaddress = [System.Text.Encoding]::ASCII.GetString((iwr https://checkip.amazonaws.com).content).trim()

namespace GilgamechHostingServer {
    internal class HostingServer {
        private static void Main(string[] args) {
            if (!HttpListener.IsSupported) {
                Console.WriteLine("Windows XP SP2 or Server 2003 is required to use the HttpListener class.");
                return;
            }

string ipaddress = "34.209.174.6";

			// Set up DB


SQLiteConnection Sites_dbConnection = new SQLiteConnection("Data Source=GilgamechHosting.sqlite;Version=3;");
Sites_dbConnection.Open();

Dictionary<string, string> sites = new Dictionary<string, string>();

        // Add some elements to the hash table. There are no
        // duplicate keys, but some of the values are duplicates.
string sql = "select * from Sites";
SQLiteCommand command = new SQLiteCommand(sql, Sites_dbConnection);
SQLiteDataReader reader = command.ExecuteReader();
while (reader.Read())
        sites.Add(reader["Site"].ToString(), reader["Page"].ToString());
       //Console.WriteLine("Site: " + reader["Site"] + "\tPage: " + reader["Page"]);
Sites_dbConnection.Close();


            // Build prefixes and listener, and add prefixes to listener, then start listening.
            var prefixes = new List<string>() { "http://*:80/" };

            HttpListener listener = new HttpListener();
            foreach (string prefix in prefixes) {
                listener.Prefixes.Add(prefix);
            }
            listener.Start();
            Console.WriteLine("Listening...");


            while (listener.IsListening) {
try {				
				
                // Note: The GetContext method blocks while waiting for a request, so the code will hang out here.
                HttpListenerContext context = listener.GetContext();
DateTime startTime = DateTime.Now;

                HttpListenerRequest request = context.Request;

                string documentContents;
                using (Stream receiveStream = request.InputStream) {
                    using (StreamReader readStream = new StreamReader(receiveStream, Encoding.UTF8)) {
                        documentContents = readStream.ReadToEnd();
                    }
                }
                Console.WriteLine("Request: " + request.Url + " - documentContents: " + documentContents);
                // Obtain a response object.
                HttpListenerResponse response = context.Response;

// response.Headers.Add("Content-Type","text/html")
IPAddress RemoteAddr = request.RemoteEndPoint.Address;
string RequestUrl = request.Url.OriginalString;
string Method = request.HttpMethod;
string UAgent = request.UserAgent;
CookieCollection Cookies = request.Cookies;
Uri Reefer = request.UrlReferrer;

                // Construct a response.
				string responseString = "<HTML><BODY>Hello world!</BODY></HTML>";
				response.StatusCode = 200;
Console.WriteLine("request.Url.Host: " + request.Url.Host + "\tPage: " + sites[request.Url.Host]);
try {
	string filename = "C:\\Media\\Projects\\GH\\Sites\\" + sites[request.Url.Host];
string text = System.IO.File.ReadAllText(@filename);	
				responseString = text;
				response.StatusCode = 200;
}catch  {
				responseString = "<HTML><body>404 Error not found.</body><HTML>";
				response.StatusCode = 404;
}
/*
if (request.RawUrl == "/errorpage") {
				responseString = "<HTML><body>404 Error not found.</body><HTML>";
				response.StatusCode = 404;
}
*/
                byte[] buffer = System.Text.Encoding.UTF8.GetBytes(responseString);
                byte[] OriginalString = System.Text.Encoding.UTF8.GetBytes(request.Url.OriginalString);

                // Get a response stream and write the response to it.
                response.ContentLength64 = buffer.Length;
                System.IO.Stream output = response.OutputStream;
                output.Write(buffer, 0, buffer.Length);
				
                // You must close the output stream.
                output.Close();
				
				
				//Logging

DateTime now = DateTime.Now;
double timeTaken = Math.Round((now - startTime).TotalMilliseconds);



/*
Fields: date time c-ip cs-username s-ip cs-method cs-uri-stem cs-uri-query sc-status sc-bytes cs-bytes time-taken cs-version cs(User-Agent) cs(Cookie) cs(Referrer)

sql = "create table logs (date varchar(20), time varchar(20), clientip varchar(20), csusername varchar(20), serverip varchar(20), csmethod varchar(20), uristem varchar(20), uriquery varchar(20), status int, scbytes int, csbytes int, timetaken int, csversion varchar(20), UserAgent varchar(255), Cookie varchar(255), Referrer varchar(20),)";
*/
SQLiteConnection Logs_dbConnection = new SQLiteConnection("Data Source=GilgamechHosting.sqlite;Version=3;");
Logs_dbConnection.Open();


DateTime getDate = DateTime.Now;

sql = "insert into logs (date, time, clientip, csusername, serverip, csmethod, uristem, uriquery, status, scbytes, csbytes, timetaken, csversion, UserAgent, Cookie, Referrer) values ('"+getDate.ToString("d")+"', '"+getDate.ToString("T")+"','"+RemoteAddr+"',' - ','"+ipaddress+"','"+Method+"','"+request.Url.PathAndQuery+"','"+request.Url.Query+"','"+response.StatusCode+"','"+response.ContentLength64+"','"+OriginalString.Length+"','"+timeTaken+"','"+(request.Url.Scheme+"/"+request.ProtocolVersion)+"','"+UAgent+"','"+Cookies+"','"+Reefer+"')";
command = new SQLiteCommand(sql, Logs_dbConnection);
command.ExecuteNonQuery();
Logs_dbConnection.Close();

} catch (Exception e) {
	
SQLiteConnection Logs_dbConnection = new SQLiteConnection("Data Source=GilgamechHosting.sqlite;Version=3;");
Logs_dbConnection.Open();

sql = "insert into errors (errors) values ('"+e+"')";
command = new SQLiteCommand(sql, Logs_dbConnection);
command.ExecuteNonQuery();
Logs_dbConnection.Close();


}

            }
            //listener.Stop();
        }// end Main
		
		
    }// end HostingServer
}// end GilgamechHostingServer

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
http://system.data.sqlite.org/index.html/doc/trunk/www/downloads.wiki
https://stackoverflow.com/questions/15292880/create-sqlite-database-and-table
Install-PackageProvider -Name NuGet -Force
Register-PackageSource -Name nuget.org -Location https://www.nuget.org/api/v2 -ProviderName NuGet
Install-Package System.Data.Common -RequiredVersion 4.3.0
https://www.c-sharpcorner.com/article/csharp-try-catch/
https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/file-system/how-to-write-to-a-text-file
https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/file-system/how-to-read-from-a-text-file
https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.dictionary-2?view=net-5.0
https://stackoverflow.com/questions/7388475/reading-int-values-from-sqldatareader
ipmo -Force "C:\Program Files\WindowsPowerShell\Modules\PSSQLite\1.1.0\Invoke-SqliteQuery.ps1"
Install-Module -Name PSSQLite -Force
https://zetcode.com/csharp/datetime/
https://www.tutorialkart.com/c-sharp-tutorial/c-sharp-math-round/
https://docs.microsoft.com/en-us/dotnet/api/system.net.ipaddress?view=net-5.0
https://stackoverflow.com/questions/40215995/system-array-doesnt-contain-a-definition-for-length
https:#stackoverflow.com/questions/15653921/get-current-folder-path
https:#www.sqlite.org/lang_UPSERT.html
https:#stackoverflow.com/questions/29312882/sqlite-preventing-duplicate-rows
https:#stackoverflow.com/questions/7702573/importing-csv-data-into-c-sharp-classes
https:#thesysadminchannel.com/create-free-lets-encrypt-ssl-certificates-using-powershell/
https:#support.n4l.co.nz/s/article/Installing-an-SSL-Certificate-on-a-Windows-Device-Manually
https:#stackoverflow.com/questions/15212190/why-is-the-netsh-http-add-sslcert-throwing-error-from-powershell-ps1-file
https:#community.qlik.com/t5/Knowledge-Base/How-To-Setup-HTTPS-SSL-with-QlikView-AccessPoint-WebServer-and/ta-p/1710263
https:#docs.microsoft.com/en-us/windows/win32/http/add-sslcert
https:#stackoverflow.com/questions/537173/what-appid-should-i-use-with-netsh-exe
https:#csharp.net-tutorials.com/regular-expressions-regex/search-replace-with-the-regex-class/
*/

