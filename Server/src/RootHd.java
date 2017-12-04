import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;

import java.io.*;

public class RootHd implements HttpHandler {
    private String fileName;
    RootHd(String fileName){
        this.fileName = fileName;
    }
    @Override
    public void handle(HttpExchange exchange) throws IOException {
        File file = new File(RootHd.class.getProtectionDomain().getCodeSource().getLocation().getPath()+"/"+fileName);
        byte[] byteFile = new byte[(int)file.length()];

        try{
            FileInputStream fis = new FileInputStream(file);
            fis.read(byteFile);
        } catch (FileNotFoundException e){
            System.out.println("File not found!!");
            e.printStackTrace();
        }

        exchange.sendResponseHeaders(200,file.length());
        OutputStream os = exchange.getResponseBody();
        os.write(byteFile);
        os.close();

    }
}
