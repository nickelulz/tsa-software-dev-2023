package com.example;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Scanner;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;


public class Request {
    public static void main(String[] args) throws Exception {
        urlParser("https://home-access.cfisd.net/", "s372533", "Mantralay@58");



    }
    static void urlParser(String link, String user, String pass) throws Exception{
        URL url = new URL("https://homeaccesscenterapi.vercel.app/api/transcript?link="+link+"&user="+user+"&pass="+pass);
        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
        conn.setRequestMethod("GET");
        conn.connect();

        //check connection
        int responseCode = conn.getResponseCode();

        if (responseCode != 200) {
            throw new RuntimeException("Not correct response message " + responseCode);

        }
        else {
            StringBuilder informationString = new StringBuilder();
            Scanner scan = new Scanner(url.openStream());
            while (scan.hasNext()) {
                informationString.append(scan.next());
             }
             scan.close();
        
            // System.out.println(informationString.toString());

             JSONParser parser = new JSONParser();
             JSONObject jsonObject = (JSONObject) parser.parse(String.valueOf(informationString));
             System.out.println(jsonObject.get("CumulativeGPA"));

             
        }
        
    }
}