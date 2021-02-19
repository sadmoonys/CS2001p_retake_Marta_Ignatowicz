package com.group15.noteware.controllers;

import com.group15.noteware.models.Note;
import com.group15.noteware.repository.notesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;



@RestController
@RequestMapping(path = "api/notes")
public class NoteController {

    @Autowired
    notesRepository notesRepository;

    @GetMapping(value = "/load")
    public List<Note> getAll(){
        return notesRepository.findAll();
    }

    @PostMapping(value = "/send")
    public List<Note> persist(@RequestBody final Note notes){
        notesRepository.save(notes);
        return notesRepository.findAll();
    }
}
