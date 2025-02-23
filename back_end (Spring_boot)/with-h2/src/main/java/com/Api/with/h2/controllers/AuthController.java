package com.Api.with.h2.controllers;

import com.Api.with.h2.models.User;
import com.Api.with.h2.models.AuthRequest;
import com.Api.with.h2.util.JwtUtil;
import com.Api.with.h2.services.UserServiceImpl;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class AuthController {
    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private UserServiceImpl userServiceImpl;


    @PostMapping("/register")

    public ResponseEntity<String> addNewUser(@RequestBody @Valid User user) {
        String response = userServiceImpl.saveUser(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }
    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody @Valid AuthRequest request) {
        try{
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));

        UserDetails userDetails = userServiceImpl.loadUserByUsername(request.getUsername());
        String token = jwtUtil.generateToken(userDetails);

        return ResponseEntity.ok(token);
    }
        catch(Exception e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid user request!");
        }

    }
    @GetMapping("/admin/hello")
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public String hello() {
        return "Hello World!";
    }
}



