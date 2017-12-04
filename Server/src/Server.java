import com.sun.net.httpserver.*;
import java.io.*;
import java.net.InetSocketAddress;

//=================================================================================================
//  Aby odpalic server w consoli musisz wpisac polecenie: java Server
//  Po wprowadzeniu zmian należy skompilować plik czyli komenda: javac +path+ nazwa pliku z .java
//=================================================================================================
public class Server {
    public static void main(String[] args) throws IOException {
        int port = 9001;
        HttpServer server = HttpServer.create(new InetSocketAddress(port), 0);
        System.out.println("server started at " + port);
        server.createContext("/", new RootHandler());
        server.createContext("/js.js", new RootHandlerJS());


//        sprawdzic czy mozna ustawic zapytanie o plik js TODO
//    server.createContext("/echoHeader", new EchoHeaderHandler());
//    server.createContext("/echoGet", new EchoGetHandler());
//    server.createContext("/echoPost", new EchoPostHandler());
        server.setExecutor(null);
        server.start();
    }
}
