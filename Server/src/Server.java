import com.sun.net.httpserver.*;
import java.io.*;
import java.net.InetSocketAddress;

//=================================================================================================
//
//
//=================================================================================================
public class Server {
    public static void main(String[] args) throws IOException {
        int port = 9000;
        HttpServer server = HttpServer.create(new InetSocketAddress(port), 0);
        System.out.println("server started at " + port);
        server.createContext("/", new RootHd("test.html"));
        server.createContext("/js.js", new RootHd("js.js"));



//    server.createContext("/echoHeader", new EchoHeaderHandler());
//    server.createContext("/echoGet", new EchoGetHandler());
//    server.createContext("/echoPost", new EchoPostHandler());
        server.setExecutor(null);
        server.start();
    }
}
