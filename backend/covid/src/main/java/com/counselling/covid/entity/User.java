package com.counselling.covid.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
public class User {

    public static final String TABLE_NAME= "users";

    @Id
    private int id;

    private String first_name;
    private String last_name;
    private String email;
    private String phone;
    private String password_hash;


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFirstname() {
        return first_name;
    }

    public void setFirstname(String firstName) {
        this.first_name = firstName;
    }

    public String getLastname() {
        return last_name;
    }

    public void setLastname(String lastName) {
        this.last_name = lastName;
    }


    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }


    public String getPasswordHash() {
        return password_hash;
    }

    public void setPasswordHash(String passwordHash) {
        this.password_hash = passwordHash;
    }

}