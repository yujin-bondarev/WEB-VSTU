package com.example.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.entity.MyUser;
import com.example.services.MyUserService;

import java.util.List;

@RestController
public class MyUserController {

    @Autowired
    private MyUserService myUserService;

    @GetMapping("/users")
    @ResponseStatus(HttpStatus.OK)
    public List<MyUser> getAllUsers() {
        return myUserService.getAllUsers();
    }
}