package com.example.services;

import org.springframework.stereotype.Service;

import com.example.model.entity.MyUser;

@Service
public interface MyUserService {

    public MyUser registerUser (MyUser user);
}
