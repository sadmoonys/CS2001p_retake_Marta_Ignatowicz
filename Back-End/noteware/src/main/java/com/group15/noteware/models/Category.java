package com.group15.noteware.models;
import javax.persistence.*;


@Entity
@Table(name= "category")

public class Category {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="id")
    private long id;
    @Column(name = "categoryName")
    private String categoryName;

    public Category(){
    }

    public Category(long id, String title){
        this.id =id;
        this.categoryName= categoryName;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getCategoryName() {
        return categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }

    @java.lang.Override
    public java.lang.String toString() {
        return "Category{" +
                "id=" + id +
                ", title='" + categoryName + '\'' +
                '}';
    }

}
