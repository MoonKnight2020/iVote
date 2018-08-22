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
        return voterRecord;
    }

    public VoterRecord getVoter(int voterId) {
        Optional<VoterRecord> record = this.repository.findById(voterId);
        if (record.isPresent()) {
            return VoterRecord.fromRecord(record.get());
        } else {
            VoterRecord notFound = new VoterRecord();
            notFound.setVoterID(-1);
            return notFound;
        }
    }
}
