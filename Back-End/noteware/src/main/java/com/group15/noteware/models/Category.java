package com.group15.noteware.models;

@Entity
@Table(name= "category")

public class Category {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="catId")
    private long id;
    @Column(name = "title")
    private String title;

    public Category(){
    }

    public Category(long)
}
