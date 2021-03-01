package com.group15.noteware.controllers;


import com.group15.noteware.models.Category;
import com.group15.noteware.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

public class CategoryController {
    @Autowired
    CategoryRepository CategoryRepository;

    @GetMapping(value = "/load")
    public List<Category> getAll() {
        return CategoryRepository.findAll();
    }




}


