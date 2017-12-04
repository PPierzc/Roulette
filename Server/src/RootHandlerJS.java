import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;

import java.io.*;

public class RootHandlerJS implements HttpHandler {
    public void handle(HttpExchange he) throws IOException {
        File fileJS = new File(RootHandler.class.getProtectionDomain().getCodeSource().getLocation().getPath()+"/js.js");

        byte[] byteJS = new byte[(int) fileJS.length()];


        try {

            FileInputStream fileInputStreamJS = new FileInputStream(fileJS);
            fileInputStreamJS.read(byteJS);

            //wyswietlanie wczytanych danych

            for(int i = 0; i < byteJS.length ; ++i)
                System.out.print((char)byteJS[i]);

        } catch (FileNotFoundException e) {
            System.out.println("File Not Found.");
            e.printStackTrace();
        }
        //laczenie wszystkiego w jedna tabliece byte[]



        he.sendResponseHeaders(200,  fileJS.length());
        OutputStream os = he.getResponseBody();

        os.write(byteJS);
        os.close();
    }
}
