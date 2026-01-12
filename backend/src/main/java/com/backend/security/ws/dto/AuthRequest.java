package com.backend.security.ws.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Size;

public class AuthRequest {

    @Email(message = "Email format is not correct")
    private String username;
    @Size(min = 6, message = "Password should have 6 character minimum")
    private String password;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
