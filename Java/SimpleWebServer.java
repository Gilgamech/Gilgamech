import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.ServerSocket;
import java.net.Socket;

public class SimpleWebServer {

  public static final int DEFAULT_WEB_SERVER_PORT = 6666;
  private int webServerPort = DEFAULT_WEB_SERVER_PORT;
  private int webServerRequestCount = 0;
  private ServerSocket webServerSocket;
  
  public SimpleWebServer(int webServerPort) {
    this.webServerPort = webServerPort;
    this.webServerRequestCount = 0;
  }
  
  /**
   * Start the web server 
   */
  protected void start() {
    
    log("Starting web server on port : " + webServerPort);
    
    try {
      //Web server socket creation
      webServerSocket = new ServerSocket(webServerPort);
      log("Started web server on port : " + webServerPort);
      
      /**
       * Wait for clients
       */
      listen();
      
    } catch (Exception e) {
      hault("Error: " + e);
    }
  }
  
  /**
   * Listening on webServerPort for the clients to connect. 
   */
  protected void listen() {
    log("Waiting for connection");
    while (true) {
      try {
        // Got a connection request from client
        Socket client = webServerSocket.accept();
        webServerRequestCount ++;
        
        //Handle client request
        //This processing can be in a separate Thread
        //if we would like to handle multiple requests
        //in parallel.
        serveClient(client);
        
      } catch (Exception e) {
        log("Error: " + e);
      }
    }
  }

  protected void serveClient(Socket client) throws IOException {
    
    /**
     * Read the client request (parse the data if required)
     */
    readClientRequest(client);
    
    /**
     * Send the response back to the client.
     */
    writeClientResponse(client);
  }
  
  protected void readClientRequest(Socket client) throws IOException {
    
    log("\n--- Request from : " + client + " ---");
    
    /**
     * Read the data sent by client.
     */
    BufferedReader in = new BufferedReader(
          new InputStreamReader(client.getInputStream()));
    
    // read the data sent. We basically ignore it,
    // stop reading once a blank line is hit. This
    // blank line signals the end of the client HTTP
    // headers.
    String str = ".";
    while (!str.equals("")) {
      str = in.readLine();
      log(str);
    }
  }
  
  protected void writeClientResponse(Socket client) throws IOException {
    PrintWriter out = new PrintWriter(client.getOutputStream());
    // Send the response
    // Send the headers
    out.println("HTTP/1.0 200 OK");
    out.println("Content-Type: text/html");
    out.println("Server: SimpleWebServer");
    // this blank line signals the end of the headers
    out.println("");
    // Send the HTML page
    out.println("<CENTER>");
    out.println("<H1 style='color:red'>Welcome to SimpleWebServer<H1>");
    out.println("<H2>This page has been visited <span style='color:blue'>" + 
        webServerRequestCount + " time(s)</span></H2>");
    out.println("</CENTER>");
    out.flush();
    client.close();
  }
  
  private static void log(String msg) {
    System.out.println(msg);
  }
  
  private static void hault(String msg) {
    System.out.println(msg);
    System.exit(0);
  }
  
  public static void main(String args[]) {
    /**
     * Start web server on port '8888'
     */
    SimpleWebServer ws = new SimpleWebServer(8888);
    ws.start();
  }
}