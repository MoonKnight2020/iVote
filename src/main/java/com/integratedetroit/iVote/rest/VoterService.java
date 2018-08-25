package com.integratedetroit.iVote.rest;

// TODO: Review imports after all tests pass
import com.integratedetroit.iVote.data.Voter;
import com.integratedetroit.iVote.data.VoterRecord;
import com.integratedetroit.iVote.data.VoterRepository;
import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import java.util.Optional;

/**
 * Connects Voter to VoterRecord by way of VoterRepository.
 */
@Component
public class VoterService {

    private VoterRepository repository;

    @Autowired
    public VoterService(VoterRepository repository) {
        this.repository = repository;
    }

    public Voter createVoter(Voter voter) {
        VoterRecord voterRecord = createVoterRecord(voter);
        VoterRecord record = this.repository.save(voterRecord);
        return Voter.fromRecord(record);
    }

    private VoterRecord createVoterRecord(Voter voter){
        VoterRecord voterRecord = new VoterRecord();
        voterRecord.setVoterFirstName(voter.getFirstName());
        voterRecord.setVoterLastName(voter.getLastName());
        voterRecord.setStreetAddress(voter.getStreetAddress());
        voterRecord.setStreetAddress2(voter.getStreetAddress2());
        voterRecord.setState(voter.getState());
        voterRecord.setCity(voter.getCity());
        voterRecord.setZipCode(voter.getZipCode());
        voterRecord.setEmailAddress(voter.getEmailAddress());
        voterRecord.setPasswordHash(voter.getPasswordHash());
        return voterRecord;
    }


    public Voter voterLogin(Voter voter) {

        VoterRecord voterRecord = createVoterRecord(voter);
        Optional<VoterRecord> record = this.repository.findById(voterRecord.getEmailAddress());
        if (record.isPresent()) {
            VoterRecord voterRecord1 = record.get();
            if (voterRecord1.getPasswordHash().equals(voter.getPasswordHash())) {
                return Voter.fromRecord(voterRecord1);
            }
        }
        return null;
    }
}
