package com.group15.noteware.models;
import javax.persistence.*;


@Entity
@Table(name= "category")

public class Category {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="id")
    private long id;
    @Column(name = "category_name")
    private String category_name;

    public Category(){
    }


    public Category(long id, String category_name){
        this.id =id;
        this.category_name= category_name;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getCategory_name() {
        return category_name;
    }

    public void setCategory_name(String category_name) {
        this.category_name = category_name;
    }

    @java.lang.Override
    public java.lang.String toString() {
        return "Category{" +
                "id=" + id +
                "category_name=" + category_name + '\'' +
                '}';
    }

}
