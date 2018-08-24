package com.integratedetroit.iVote.rest;

import com.integratedetroit.iVote.data.Voter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/voter")
public class VoterController {

    private VoterService service;

    @Autowired
    public VoterController(VoterService voterService) {
        this.service = voterService;
    }

    @PostMapping
    public @ResponseBody
    ResponseEntity<Voter> createVoter(@RequestBody Voter voter) {
        return new ResponseEntity<>(this.service.createVoter(voter), HttpStatus.CREATED);
    }
}
