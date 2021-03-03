package com.group15.noteware.controllers;


import com.group15.noteware.models.Category;
import com.group15.noteware.models.Note;
import com.group15.noteware.payload.request.notesUpdateRequest;
import com.group15.noteware.payload.response.MessageResponse;
import com.group15.noteware.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import javax.validation.Valid;
import java.util.List;

public class CategoryController {
    @Autowired
    CategoryRepository CategoryRepository;

    @GetMapping(value = "/loadCategory")
    public List<Category> getAll() {
        return CategoryRepository.findAll();
    }


    @PostMapping(value = "/sendCategory")
    public List<Category> persist(@RequestBody final Category category){
        CategoryRepository.save(category);
        return CategoryRepository.findAll();
    }

   // @PostMapping("/updateCategory")
    //fic the "notesUpdateRequest" to change to "categoryUpdateRequest"
  //  public ResponseEntity<?> updateCategory(@Valid @RequestBody note UpdateRequest) {
    //    CategoryRepository.findById(UpdateRequest.getId()).map(target -> {
      //      target.setCategory(UpdateRequest.getCategory);
      //      CategoryRepository.save(target);
       //     return target;
       // });
     //   return ResponseEntity.ok(new MessageResponse("Category updated successfully"));
  //  }


}


