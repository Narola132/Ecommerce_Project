package com.counselling.covid.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.Date;

@Entity
public class AppointmentSlot {

    public static final String TABLE_NAME= "appointment_slots";

    @Id
    private int id;
    private int counsellor_id;
    private Date slot_date;
    private boolean is_slot_available;

    public int getCounsellorId() {
        return counsellor_id;
    }

    public void setCounsellorId(int counsellorId) {
        this.counsellor_id = counsellorId;
    }

    public Date getSlotDate() {
        return slot_date;
    }

    public void setSlotDate(Date slotDate) {
        this.slot_date = slotDate;
    }

    public boolean getIsSlotAvailable() {
        return is_slot_available;
    }

    public void setIsSlotAvailable(boolean isSlotAvailable) {
        this.is_slot_available = isSlotAvailable;
    }
}