import com.sun.net.httpserver.*;
import java.io.*;
import java.net.InetSocketAddress;

//=================================================================================================
//  Aby odpalic server w consoli musisz wpisac polecenie: java Server
//  Po wprowadzeniu zmian należy skompilować plik czyli komenda: javac +path+ nazwa pliku z .java
//================================================================================================
public class Server {
    public static void main(String[] args) throws IOException {
        int port = 9000;
        HttpServer server = HttpServer.create(new InetSocketAddress(port), 0);
        System.out.println("server started at " + port);
        server.createContext("/", new RootHandler());
//    server.createContext("/echoHeader", new EchoHeaderHandler());
//    server.createContext("/echoGet", new EchoGetHandler());
//    server.createContext("/echoPost", new EchoPostHandler());
        server.setExecutor(null);
        server.start();
    }
}
class RootHandler implements HttpHandler {

    @Override

    public void handle(HttpExchange he) throws IOException {
        File fileHTML = new File(RootHandler.class.getProtectionDomain().getCodeSource().getLocation().getPath()+"/test.html");
        byte[] b = new byte[(int) fileHTML.length()];


        try {
            FileInputStream fileInputStream = new FileInputStream(fileHTML);
            fileInputStream.read(b);
            for (int i = 0; i < b.length; i++) {
                System.out.print((char)b[i]);
            }
        } catch (FileNotFoundException e) {
            System.out.println("File Not Found.");
            e.printStackTrace();
        }
        he.sendResponseHeaders(200, fileHTML.length());
        OutputStream os = he.getResponseBody();

        os.write(b);
        os.close();
    }
}
