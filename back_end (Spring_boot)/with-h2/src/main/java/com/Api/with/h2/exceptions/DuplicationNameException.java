package com.Api.with.h2.exceptions;

public class DuplicationNameException extends RuntimeException{
    public DuplicationNameException(String name) {
        super("The  name " + name +" already exist.");
    }
}
