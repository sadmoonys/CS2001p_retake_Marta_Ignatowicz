package com.group15.noteware.models;

@Entity
@Table(name= "category")

public class Category {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="id")
    private long id;
    @Column(name = "title")
    private String title;

    public Category(){
    }

    public Category(long id, String title){
        this.id =id;
        this.title= title;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }

    @java.lang.Override
    public java.lang.String toString() {
        return "Category{" +
                "id=" + id +
                ", title='" + title + '\'' +
                '}';
    }

    
}
