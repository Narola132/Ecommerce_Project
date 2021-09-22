package com.counselling.covid.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.counselling.covid.entity.User;

@RepositoryRestResource(path = "/users")
public interface UserRepository extends JpaRepository<User, Integer> {



}