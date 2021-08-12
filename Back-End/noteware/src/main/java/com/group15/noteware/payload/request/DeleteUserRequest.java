package com.group15.noteware.payload.request;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.*;

public class DeleteUserRequest {

    public String getUsername() { return username; }

    public static Long getId() { return id; }

    private String username;

    private static Long id;
}
