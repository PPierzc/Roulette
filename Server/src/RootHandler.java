import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;

import java.io.*;

class RootHandler implements HttpHandler {

    @Override

    public void handle(HttpExchange he) throws IOException {
        File fileHTML = new File(RootHandler.class.getProtectionDomain().getCodeSource().getLocation().getPath()+"/test.html");
        
        byte[] byteHTML = new byte[(int) fileHTML.length()];

        try {
            FileInputStream fileInputStreamHTML = new FileInputStream(fileHTML);
            fileInputStreamHTML.read(byteHTML);


            //wyswietlanie wczytanych danych
            for (int i = 0; i < byteHTML.length; i++)
                System.out.print((char)byteHTML[i]);


        } catch (FileNotFoundException e) {
            System.out.println("File Not Found.");
            e.printStackTrace();
        }


        he.sendResponseHeaders(200, fileHTML.length() );
        OutputStream os = he.getResponseBody();

        os.write(byteHTML);
        os.close();
    }
}
