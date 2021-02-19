package com.group15.noteware.payload.request;
import javax.validation.constraints.Size;

public class notesUpdateRequest {
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public long getId() {
        return Id;
    }

    public void setId(long Id) {
        this.Id = Id;
    }

    private long Id;

    @Size(min = 0, max = 300)
    private String title;

    @Size(min = 0, max = 50)
    private String text;
}
