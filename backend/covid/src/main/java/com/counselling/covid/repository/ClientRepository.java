package com.counselling.covid.repository;

import com.counselling.covid.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "/clients")
public interface ClientRepository extends JpaRepository<User, Integer> {



}