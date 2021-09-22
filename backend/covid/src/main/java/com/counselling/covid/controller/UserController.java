package com.counselling.covid.controller;

import com.counselling.covid.entity.User;
import com.counselling.covid.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javassist.tools.web.BadHttpRequest;

@RestController
@RequestMapping(path = "/users")
public class UserController {

    @Autowired
    private UserRepository repository;

    @GetMapping
    public Iterable<User> findAll() {
        return repository.findAll();
    }

    @GetMapping(path = "/{id}")
    public User find(@PathVariable("id") int id) {
        return repository.findOne(id);
    }

    @PostMapping(consumes = "application/json")
    public User create(@RequestBody User user) {
        return repository.save(user);
    }

    @DeleteMapping(path = "/{username}")
    public void delete(@PathVariable("username") int id) {
        repository.delete(id);
    }

    @PutMapping(path = "/{username}")
    public User update(@PathVariable("username") int id, @RequestBody User user) throws BadHttpRequest {

        if (repository.exists(id)) {
            user.setId(id);
            return repository.save(user);
        } else {
            throw new BadHttpRequest();
        }
    }
}