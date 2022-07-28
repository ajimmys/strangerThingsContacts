package com.example.crudweb.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin("*")
public class UrlCheckController {

    private final String USERNAME = "root";
    private final String PASSWORD = "Password1!";
    private final String URL = "jdbc:mysql://mysqldb:3306/stContactsDB";

    @RequestMapping(value = "/addUser", produces = "application/json")
    public String addUser(@RequestParam String firstName, @RequestParam String lastName, @RequestParam String phoneNumber, 
        @RequestParam String address1, @RequestParam String address2, @RequestParam String email, @RequestParam String birthday, Boolean isWork){
        String query = "INSERT INTO contacts (firstName, lastName, phoneNumber, address1, address2, email, birthday, isWork) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

        try {
            Connection con = DriverManager.getConnection(URL, USERNAME, PASSWORD);
            PreparedStatement statement = con.prepareStatement(query);
            statement.setString(1, firstName);
            statement.setString(2, lastName);
            statement.setString(3, phoneNumber);
            statement.setString(4, address1);
            statement.setString(5, address2);
            statement.setString(6, email);
            statement.setString(7, birthday);

            if(isWork == null || isWork == false){
                statement.setInt(8, 0);
            } else {
                statement.setInt(8, 1);
            }
            
            statement.executeUpdate();

        } catch (SQLException e) {
            e.printStackTrace();
            return "SQL Entry Failed";
        }

        return "Completed";
    }


    @RequestMapping(value = "/getContacts", produces = "application/json")
    public List<List<String>> getRecieveMessage(){

        String query = "SELECT * FROM contacts ORDER BY lastName ASC;";

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
        } catch (ClassNotFoundException e){
            e.printStackTrace();
        }

        try {
            Connection con = DriverManager.getConnection(URL, USERNAME, PASSWORD);
            Statement statement = con.createStatement();
            ResultSet result = statement.executeQuery(query);
            List<List<String>> contactData = new ArrayList<List<String>>();

            while(result.next()){
                List<String> tempUser = new ArrayList<String>();

                for(int i = 2; i <= 9; i++){
                    tempUser.add(result.getString(i));
                }
                contactData.add(tempUser);
            }

            return contactData;

        } catch (SQLException e){
            e.printStackTrace();
            List<List<String>> badData = new ArrayList<List<String>>();
            return badData;
        }
    }


}
