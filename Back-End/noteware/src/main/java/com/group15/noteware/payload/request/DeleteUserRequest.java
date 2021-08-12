package com.group15.noteware.payload.request;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.*;

import com.group15.noteware.models.User;
import com.group15.noteware.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;


public class DeleteUserRequest {

    @Autowired
    private UserRepository userRepository;

    public String getUsername() { return username; }

    public static Long getId() { return id; }

    private String username;

    private static Long id;

    public void deleteUser(User id) { userRepository.delete(id); }
}
