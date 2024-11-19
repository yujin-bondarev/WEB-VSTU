package com.example.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.model.entity.MyUser;
import com.example.model.repositories.MyUserRepository;

@Service
public class MyUserService {
    @Autowired
    private MyUserRepository myUserRepository;

    public List<MyUser > getAllUsers() {
        return myUserRepository.findAll();
    }
}
