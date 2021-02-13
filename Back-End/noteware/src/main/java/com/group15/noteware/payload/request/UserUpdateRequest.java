package com.group15.noteware.payload.request;

import javax.validation.constraints.Size;

public class UserUpdateRequest {

    public String getBio() {
        return bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    public String getCurrentCourse() {
        return currentCourse;
    }

    public void setCurrentCourse(String currentCourse) {
        this.currentCourse = currentCourse;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    private String username;

    @Size (min = 0, max = 300)
    private String bio;

    @Size(min = 0, max = 50)
    private String currentCourse;
}
