package com.group15.noteware.repository;


import com.group15.noteware.models.Category;
import com.group15.noteware.models.Note;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Note, Long>{
}
