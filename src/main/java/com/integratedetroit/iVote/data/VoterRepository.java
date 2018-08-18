package com.integratedetroit.iVote.data;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VoterRepository extends CrudRepository<VoterRecord, Integer> {

}
