package com.group15.noteware.models;

@Entity
@Table(name= "category")

public class Category {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTIT)
}
