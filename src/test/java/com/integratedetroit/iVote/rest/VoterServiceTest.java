package com.integratedetroit.iVote.rest;

import com.integratedetroit.iVote.data.VoterRecord;
import com.integratedetroit.iVote.data.VoterRepository;
import org.junit.Before;
import org.junit.Test;

import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.Mockito.*;
import org.mockito.junit.MockitoJUnitRunner;

import org.springframework.dao.DataAccessException;
import org.springframework.orm.jpa.JpaSystemException;

import java.util.Optional;

import static org.junit.Assert.*;
import static org.mockito.Mockito.when;

@RunWith(MockitoJUnitRunner.class)
public class VoterServiceTest {

    @Mock
    private VoterRepository repo;

    @Before
    public void setUp() {
        //
    }

    @Test
    public void createVoter_savesToRepo() {
        VoterService service = new VoterService(repo);

        VoterRecord recordPassedIn = new VoterRecord();
        String firstName = "Alice";
        recordPassedIn.setVoterFirstName(firstName);
        String lastName = "Pieszecki";
        recordPassedIn.setVoterLastName(lastName);
        String streetAddress = "220 Lane";
        recordPassedIn.setStreetAddress(streetAddress);
        String city = "West Hollywood";
        recordPassedIn.setCity(city);
        String state = "California";
        recordPassedIn.setState(state);
        int zipCode = 90210;
        recordPassedIn.setZipCode(zipCode);

        VoterRecord record = new VoterRecord();
        record.setVoterID(1);
        record.setVoterFirstName(firstName);
        record.setVoterLastName(lastName);
        record.setStreetAddress(streetAddress);
        record.setCity(city);
        record.setState(state);
        record.setZipCode(zipCode);

        when(repo.save(recordPassedIn)).thenReturn(record);



//        int expectedVoterId = 7;
//        String expectedFirstName = "Alice";
//
//        VoterRecord expectedRecord = new VoterRecord(expectedVoterId, expectedFirstName);


    }

    @Test
    public void failedVoterCreate_returnsVoterIDNegOne() {
        //
    }

}