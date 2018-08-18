package com.integratedetroit.iVote.rest;

import com.integratedetroit.iVote.data.Voter;
import com.integratedetroit.iVote.data.VoterRecord;
import com.integratedetroit.iVote.data.VoterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

@Component
public class VoterService {

    private VoterRepository repository;

    @Autowired
    public VoterService(VoterRepository repository) {
        this.repository = repository;
    }

    public Voter createVoter(Voter voterPassedIn) {
        VoterRecord record = this.repository.save(new VoterRecord());
        return Voter.fromRecord(record);
    }


    public Voter getVoter(int voterId) {
        return null;
    }
}
