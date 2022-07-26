package com.example.crudweb.controllers;

import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class UrlCheckController {
    
    private final String SITE_IS_UP = "Site is up";
    private final String SITE_IS_DOWN = "Site is down";
    private final String SITE_SUPER_DOWN = "Site is super down";
    private final String INCORRECT_URL = "Bad URL sent";    

    private final String USERNAME = "root";
    private final String PASSWORD = "Password1!";
    private final String URL = "jdbc:mysql://localhost:3306/stContactsDB";

    @GetMapping("/check")
    public String getUrlStattusMessage(@RequestParam String url){
        String returnMessage = "";

        try {
            URL urlObj = new URL(url);
            HttpURLConnection con = (HttpURLConnection) urlObj.openConnection();
            con.setRequestMethod("GET");
            con.connect();
            int responseCodeCategory = con.getResponseCode() / 100;
            if (responseCodeCategory > 3){
                returnMessage = SITE_IS_DOWN;
            } else {
                returnMessage = SITE_IS_UP;
            }
        } catch (MalformedURLException e) {
            e.printStackTrace();
            returnMessage = INCORRECT_URL;
        } catch (IOException e) {
            returnMessage = SITE_SUPER_DOWN;
        }

        return returnMessage;
    }

    @GetMapping("/getContacts")
    public List<String> getRecieveMessage(){

        String query = "select * from contacts";

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
        } catch (ClassNotFoundException e){
            e.printStackTrace();
        }

        try {
            Connection con = DriverManager.getConnection(URL, USERNAME, PASSWORD);
            Statement statement = con.createStatement();
            ResultSet result = statement.executeQuery(query);
            List<String> contactData = new ArrayList<String>();

            while(result.next()){
                String tempUser = "";
                for(int i = 1; i <= 3; i++){
                    tempUser += result.getString(i) + ", ";
                }
                contactData.add(tempUser);
            }

            return contactData;

        } catch (SQLException e){
            e.printStackTrace();
            List<String> badData = new ArrayList<String>();
            return badData;
        }
    }


}
