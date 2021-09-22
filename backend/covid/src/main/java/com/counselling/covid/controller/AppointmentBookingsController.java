package com.counselling.covid.controller;

import com.counselling.covid.entity.AppointmentBooking;
import com.counselling.covid.repository.AppointmentBookingRepository;
import javassist.tools.web.BadHttpRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/appointmentbookings")
public class AppointmentBookingsController {

    @Autowired
    private AppointmentBookingRepository repository;

    @GetMapping
    public Iterable<AppointmentBooking> findAll() {
        return repository.findAll();
    }

    @GetMapping(path = "/{id}")
    public AppointmentBooking find(@PathVariable("id") int id) {
        return repository.findOne(id);
    }

    @PostMapping(consumes = "application/json")
    public AppointmentBooking create(@RequestBody AppointmentBooking appointmentBooking) {
        return repository.save(appointmentBooking);
    }

    @DeleteMapping(path = "/{id}")
    public void delete(@PathVariable("id") int id) {
        repository.delete(id);
    }

    @PutMapping(path = "/{id}")
    public AppointmentBooking update(@PathVariable("id") int id, @RequestBody AppointmentBooking appointmentBooking)
            throws BadHttpRequest {

        if (repository.exists(id)) {
            appointmentBooking.setId(id);
            return repository.save(appointmentBooking);
        } else {
            throw new BadHttpRequest();
        }
    }
}