package com.group15.noteware;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication()
@ComponentScan(basePackages = "com.baeldung.componentscan") // this line has no reason to exist but the program does not give generated security password without it
public class NotewareApplication {

	public static void main(String[] args) {
		SpringApplication.run(NotewareApplication.class, args);
	}

}
