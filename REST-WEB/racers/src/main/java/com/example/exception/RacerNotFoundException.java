package com.example.exception;

public class RacerNotFoundException extends RuntimeException {
    public RacerNotFoundException(String message) {
        super(message);
    }
}