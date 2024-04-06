package com.chalang.hackathon;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class BackendHacathonCodeApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendHacathonCodeApplication.class, args);
	}

}
