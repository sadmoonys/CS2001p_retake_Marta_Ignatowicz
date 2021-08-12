package com.group15.noteware.controllers;

import com.group15.noteware.payload.request.DeleteUserRequest;
import com.group15.noteware.payload.request.UserUpdateRequest;
import com.group15.noteware.payload.response.MessageResponse;
import com.group15.noteware.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/deleteuser")
public class DeleteUserController {


}