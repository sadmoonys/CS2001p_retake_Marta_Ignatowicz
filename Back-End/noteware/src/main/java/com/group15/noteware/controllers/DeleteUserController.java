package com.group15.noteware.controllers;

import com.group15.noteware.models.Category;
import com.group15.noteware.models.User;
import com.group15.noteware.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import static com.group15.noteware.payload.request.DeleteUserRequest.getId;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/deleteuser")
public class DeleteUserController {
    @Autowired
    private UserRepository userRepository;

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteUser(User id) {
        userRepository.delete(id);
    }

}
