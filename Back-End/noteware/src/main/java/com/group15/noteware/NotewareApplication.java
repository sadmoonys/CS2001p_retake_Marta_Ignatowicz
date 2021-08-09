package com.group15.noteware;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages= {"com.group15.noteware"})
public class NotewareApplication {

	public static void main(String[] args) {
		SpringApplication.run(NotewareApplication.class, args);
	}

}
