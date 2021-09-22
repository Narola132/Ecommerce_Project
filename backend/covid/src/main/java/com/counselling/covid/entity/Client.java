package com.counselling.covid.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Client {

    public static final String TABLE_NAME= "clients";

    @Id
    private int id;
    private int user_id;

    public int getUserId() {
        return user_id;
    }

    public void setUserId(int userId) {
        this.user_id = userId;
    }
}