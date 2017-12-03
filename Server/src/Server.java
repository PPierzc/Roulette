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
        File fileJS = new File(RootHandler.class.getProtectionDomain().getCodeSource().getLocation().getPath()+"/js.js");

        byte[] byteHTML = new byte[(int) fileHTML.length()];
        byte[] byteJS = new byte[(int) fileJS.length()];



        try {
            FileInputStream fileInputStreamHTML = new FileInputStream(fileHTML);
            fileInputStreamHTML.read(byteHTML);

            FileInputStream fileInputStreamJS = new FileInputStream(fileJS);
            fileInputStreamJS.read(byteJS);

            //wyswietlanie wczytanych danych
            for (int i = 0; i < byteHTML.length; i++)
                System.out.print((char)byteHTML[i]);
            for(int i = 0; i < byteJS.length ; ++i)
                System.out.print((char)byteJS[i]);

        } catch (FileNotFoundException e) {
            System.out.println("File Not Found.");
            e.printStackTrace();
        }
        //laczenie wszystkiego w jedna tabliece byte[]
        byte[] startScript = "\n<script>\n".getBytes();
        byte[] koniecScript = "\n</script>\n".getBytes();
        byte[] byteHtmlJs = new byte[byteHTML.length+startScript.length+byteJS.length+koniecScript.length];
        System.out.println("\n\nTEST\n\n");
        for(int i=0 ; i<byteHtmlJs.length ; ++i){
            if(i<byteHTML.length) {
                byteHtmlJs[i] = byteHTML[i];
                System.out.print((char)byteHtmlJs[i]);
            }

            else if(i<byteHTML.length+startScript.length){
                byteHtmlJs[i] = startScript[i-byteHTML.length];
                System.out.print((char)byteHtmlJs[i]);
            }
            else if(i<byteHTML.length+startScript.length+byteJS.length){
                byteHtmlJs[i] = byteJS[i-byteHTML.length-startScript.length];
                System.out.print((char)byteHtmlJs[i]);
            }
            else if(i<byteHTML.length+startScript.length+byteJS.length+byteJS.length){
                byteHtmlJs[i] = koniecScript[i-byteHTML.length-startScript.length-byteJS.length];
                System.out.print((char)byteHtmlJs[i]);
            }

        }
        he.sendResponseHeaders(200, fileHTML.length() + startScript.length + fileJS.length() + koniecScript.length);
        OutputStream os = he.getResponseBody();

        os.write(byteHtmlJs);
        os.close();
    }
}
