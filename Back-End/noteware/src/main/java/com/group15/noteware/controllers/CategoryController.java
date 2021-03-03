package com.group15.noteware.controllers;


import com.group15.noteware.models.Category;
import com.group15.noteware.payload.request.categoryUpdateRequest;
import com.group15.noteware.payload.response.MessageResponse;
import com.group15.noteware.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 50)
@RestController
@RequestMapping(path = "api/categories")

public class CategoryController {
    @Autowired
    CategoryRepository categoryRepository;

    @GetMapping(value = "/loadCategory")
    public List<Category> getAll() {
        return categoryRepository.findAll();
    }


    @PostMapping(value = "/sendCategory")
    public List<Category> persist(@RequestBody final Category category) {
        categoryRepository.save(category);
        return categoryRepository.findAll();
    }

    @PostMapping("/updateCategory")
    public ResponseEntity<?> updateCategory(@Valid @RequestBody categoryUpdateRequest  UpdateRequest) {
        categoryRepository.findById(UpdateRequest.getId()).map(target -> {
            target.setCategory_name(UpdateRequest.getCategory_name());
            categoryRepository.save(target);
            return target;
        });
        return ResponseEntity.ok(new MessageResponse("Category updated successfully"));
    }


    @DeleteMapping("/delete/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteCategory(Category id) {
        categoryRepository.delete(id);
    }

}



