package com.integratedetroit.iVote;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class IVoteApplication {

	public static void main(String[] args) {
		SpringApplication.run(IVoteApplication.class, args);
	}

}
