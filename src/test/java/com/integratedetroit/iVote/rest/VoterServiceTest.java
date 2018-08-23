package com.integratedetroit.iVote.rest;

import com.integratedetroit.iVote.data.Voter;
import com.integratedetroit.iVote.data.VoterRecord;
import com.integratedetroit.iVote.data.VoterRepository;
import org.junit.Test;

import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

import static org.junit.Assert.*;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@RunWith(MockitoJUnitRunner.class)
public class VoterServiceTest {

    @Mock
    private VoterRepository repo;


    @Test
    public void createVoter_savesToRepo() {
        VoterService service = new VoterService(repo);

        String firstName = "Alice";
        String lastName = "Pieszecki";
        String streetAddress = "927 North Kings Road";
        String streetAddress2 = "No. 108";
        String city = "West Hollywood";
        String state = "California";
        int zipCode = 90069;
        String emailAddress = "alice@ourchart.org";
        String passwordHash = "password123";

        VoterRecord recordPassedIn = new VoterRecord();

        recordPassedIn.setVoterFirstName(firstName);
        recordPassedIn.setVoterLastName(lastName);
        recordPassedIn.setStreetAddress(streetAddress);
        recordPassedIn.setStreetAddress2(streetAddress2);
        recordPassedIn.setCity(city);
        recordPassedIn.setState(state);
        recordPassedIn.setZipCode(zipCode);
        recordPassedIn.setEmailAddress(emailAddress);
        recordPassedIn.setPasswordHash(passwordHash);

        VoterRecord record = new VoterRecord();
        record.setVoterID(1);
        record.setVoterFirstName(firstName);
        record.setVoterLastName(lastName);
        record.setStreetAddress(streetAddress);
        record.setStreetAddress2(streetAddress2);
        record.setCity(city);
        record.setState(state);
        record.setZipCode(zipCode);
        record.setEmailAddress(emailAddress);
        record.setPasswordHash(passwordHash);

        when(repo.save(recordPassedIn)).thenReturn(record);

        Voter voter = new Voter();
        voter.setFirstName(firstName);
        voter.setLastName(lastName);
        voter.setStreetAddress(streetAddress);
        voter.setStreetAddress2(streetAddress2);
        voter.setCity(city);
        voter.setState(state);
        voter.setZipCode(zipCode);
        voter.setEmailAddress(emailAddress);
        voter.setPasswordHash(passwordHash);

        Voter expectedVoter = new Voter();
        expectedVoter.setFirstName(firstName);
        expectedVoter.setLastName(lastName);
        expectedVoter.setStreetAddress(streetAddress);
        expectedVoter.setStreetAddress2(streetAddress2);
        expectedVoter.setCity(city);
        expectedVoter.setState(state);
        expectedVoter.setZipCode(zipCode);
        expectedVoter.setEmailAddress(emailAddress);
        expectedVoter.setPasswordHash(passwordHash);

        Voter returnedVoter = service.createVoter(voter);

        assertEquals(expectedVoter, returnedVoter);
        verify(repo).save(recordPassedIn);
    }

}