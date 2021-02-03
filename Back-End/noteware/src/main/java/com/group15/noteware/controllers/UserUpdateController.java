package com.group15.noteware.controllers;

import com.group15.noteware.models.User;
import com.group15.noteware.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/userupdate")
public class UserUpdateController {

    @Autowired
    private UserRepository userRepository;

    @Transactional
    public Optional<User> update(String username, User user){
        return userRepository.findByUsername(username).map(target ->{
            target.setBio("hello");
            target.setCurrentCourse("cs");
            return target;
        });
    }

}
