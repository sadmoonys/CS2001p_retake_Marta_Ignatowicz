package com.group15.noteware.controllers;

import com.group15.noteware.payload.request.UserUpdateRequest;
import com.group15.noteware.payload.response.MessageResponse;
import com.group15.noteware.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/userupdate")
public class UserUpdateController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/updateprofile")
    public ResponseEntity<?> updateUser(@Valid @RequestBody UserUpdateRequest userUpdateRequest){
        userRepository.findByUsername(userUpdateRequest.getUsername()).map(target ->{
            target.setBio(userUpdateRequest.getBio());
            target.setCurrentCourse(userUpdateRequest.getCurrentCourse());
            return target;
        });

        return ResponseEntity.ok(new MessageResponse("User updated successfully"));
    }

}
