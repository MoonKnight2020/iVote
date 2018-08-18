package com.integratedetroit.iVote.rest;

// TODO: Review imports after all tests pass
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

    public VoterRecord createVoter(VoterRecord voterPassedIn) {
        VoterRecord record = this.repository.save(new VoterRecord());
        return VoterRecord.fromRecord(record);
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
