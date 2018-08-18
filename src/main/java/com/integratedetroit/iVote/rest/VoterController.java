package com.integratedetroit.iVote.rest;

import com.integratedetroit.iVote.data.VoterRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

public class VoterController {

    private VoterService service;

    @Autowired
    public VoterController(VoterService voterService) {
        this.service = voterService;
    }

    @PostMapping
    public @ResponseBody
    ResponseEntity<VoterRecord> createVoter(@RequestBody VoterRecord voter) {
        voter = this.service.createVoter(voter);
        if (voter.getVoterId() == -1) {
            return new ResponseEntity<>(voter, HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(voter, HttpStatus.CREATED);
    }
}