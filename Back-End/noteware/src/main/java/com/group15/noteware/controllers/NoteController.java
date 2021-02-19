package com.group15.noteware.controllers;

import com.group15.noteware.models.Note;
import com.group15.noteware.payload.request.UserUpdateRequest;
import com.group15.noteware.payload.request.notesUpdateRequest;
import com.group15.noteware.payload.response.MessageResponse;
import com.group15.noteware.repository.notesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;


@CrossOrigin(origins = "*", maxAge = 3600)
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

    @PostMapping("/updatenotes")
    public ResponseEntity<?> updateNote(@Valid @RequestBody notesUpdateRequest  UpdateRequest) {
        notesRepository.findById(UpdateRequest.getId()).map(target -> {
            target.setTitle(UpdateRequest.getTitle());
            target.setText(UpdateRequest.getText());
            notesRepository.save(target);
            return target;
        });
        return ResponseEntity.ok(new MessageResponse("User updated successfully"));
    }
}
