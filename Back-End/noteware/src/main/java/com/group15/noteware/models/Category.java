package com.group15.noteware.models;
import javax.persistence.*;


@Entity
@Table(name= "category")

public class Category {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="id")
    private long id;
    @Column(name = "category")
    private String category;

    public Category(){
    }

    public Category(long id, String title){
        this.id =id;
        this.category= category;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    @java.lang.Override
    public java.lang.String toString() {
        return "Category{" +
                "id=" + id +
                ", title='" + category + '\'' +
                '}';
    }

}
