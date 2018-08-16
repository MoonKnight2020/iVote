package com.integratedetroit.iVote.rest;

import com.integratedetroit.iVote.data.Voter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

public class VoterController {

    private VoterService VoterService;

    @Autowired
    public VoterController(VoterService voterService) {
        this.VoterService = voterService;
    }

    public ResponseEntity<Voter> createVoter(Voter voter) {
        return null;
    }
}
