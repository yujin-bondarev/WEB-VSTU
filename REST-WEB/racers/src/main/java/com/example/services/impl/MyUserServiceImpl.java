package com.example.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.model.entity.MyUser;
import com.example.model.repositories.MyUserRepository;
import com.example.services.MyUserService;

@Service
public class MyUserServiceImpl implements MyUserService{
     @Autowired
    private MyUserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public MyUser registerUser (MyUser user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setRole("ROLE_USER");
        return userRepository.save(user);
    }
}
