package com.group15.noteware.models;

@Entity
@Table(name= "category")

public class Category {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="catId")
    private long catId;
    @Column(name = "title")
    private String title;

    public Category(){
    }

    public Category(long catId, String title){
        this.catId =catId;
        this.title= title;
    }

    public long getCatId() {
        return catId;
    }

    public void setCatId(long catId) {
        this.catId = catId;
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
                "catId=" + catId +
                ", title='" + title + '\'' +
                '}';
    }


}
