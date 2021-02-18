package com.group15.noteware.controllers;

import com.group15.noteware.models.Note;
import com.group15.noteware.repository.notesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;



@RestController
@RequestMapping(path = "api/notes")
public class NoteController {

    @Autowired
    notesRepository notesRepository;

    @GetMapping
    public List<Note> getAll(){
        return notesRepository.findAll();
    }
}
