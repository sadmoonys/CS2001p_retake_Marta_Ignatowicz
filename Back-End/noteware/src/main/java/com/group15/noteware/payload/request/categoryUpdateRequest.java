package com.group15.noteware.payload.request;
//import javax.validation.constraints.Size;

import javax.validation.constraints.Size;

public class categoryUpdateRequest {


    public String getCategoryName() {
        return categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }

    public long getId() {
        return Id;
    }

    public void setId(long Id) {
        this.Id = Id;
    }

    private long Id;

    @Size(min = 0, max = 50)
    private String categoryName;

}
