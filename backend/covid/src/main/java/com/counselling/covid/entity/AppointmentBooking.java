package com.counselling.covid.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.Date;

@Entity
public class AppointmentBooking {

    public static final String TABLE_NAME= "appointment_bookings";

    @Id
    private int id;
    private int client_id;
    private int counsellor_id;
    private int slot_id;
    private Date booking_date;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getClientId() {
        return client_id;
    }

    public void setClientId(int clientId) {
        this.client_id = clientId;
    }

    public int getCounsellorId() {
        return counsellor_id;
    }

    public void setCounsellorId(int counsellorId) {
        this.counsellor_id = counsellorId;
    }

    public int getSlotId() {
        return slot_id;
    }

    public void setSlotId(int slotId) {
        this.slot_id = slotId;
    }

    public Date getBookingDate() {
        return booking_date;
    }

    public void setBookingDate(Date bookingDate) {
        this.booking_date = bookingDate;
    }
}