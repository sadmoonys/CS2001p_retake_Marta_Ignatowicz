package com.group15.noteware.payload.request;
//import javax.validation.constraints.Size;

import javax.validation.constraints.Size;

public class categoryUpdateRequest {

    public String getCategory_name(){
        return category_name;
    }
    public void setCategory_name(String category_name){
        this.category_name= category_name;
    }

    public long getId() {
        return Id;
    }

    public void setId(long Id) {
        this.Id = Id;
    }

    private long Id;

    @Size(min = 0, max = 50)
    private String category_name;


}
