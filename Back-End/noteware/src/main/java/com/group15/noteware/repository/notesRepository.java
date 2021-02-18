package com.group15.noteware.repository;

import com.group15.noteware.models.Note;
import org.springframework.data.jpa.repository.JpaRepository;


public interface notesRepository extends JpaRepository<Note, Long> {
}
