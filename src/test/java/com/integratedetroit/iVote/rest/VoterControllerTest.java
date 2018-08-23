package com.integratedetroit.iVote.rest;

import com.integratedetroit.iVote.data.Voter;
import com.integratedetroit.iVote.data.VoterRecord;
import org.junit.Before;
import org.junit.Test;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

public class VoterControllerTest {

    private VoterService mockService;
    private VoterController controller;

    @Before
    public void setUp() {
        this.mockService = mock( VoterService.class );
        this.controller = new VoterController( mockService );
    }

    @Test
    public void createVoter_usesServiceToCreateVoter() {

        String firstName = "Alice";
        String lastName = "Pieszecki";
        String streetAddress = "927 North Kings Road";
        String streetAddress2 = "No. 108";
        String city = "West Hollywood";
        String state = "California";
        int zipCode = 90069;
        String emailAddress = "alice@ourchart.org";
        String passwordHash = "password123";

        Voter voterPassedIn = new Voter();
        voterPassedIn.setFirstName(firstName);
        voterPassedIn.setLastName(lastName);
        voterPassedIn.setStreetAddress(streetAddress);
        voterPassedIn.setStreetAddress2(streetAddress2);
        voterPassedIn.setCity(city);
        voterPassedIn.setState(state);
        voterPassedIn.setZipCode(zipCode);
        voterPassedIn.setEmailAddress(emailAddress);
        voterPassedIn.setPasswordHash(passwordHash);

        Voter expectedVoter = new Voter();
        expectedVoter.setId(1);
        expectedVoter.setFirstName(firstName);
        expectedVoter.setLastName(lastName);
        expectedVoter.setStreetAddress(streetAddress);
        expectedVoter.setCity(city);
        expectedVoter.setState(state);
        expectedVoter.setZipCode(zipCode);
        expectedVoter.setEmailAddress(emailAddress);
        expectedVoter.setPasswordHash(passwordHash);

        when(mockService.createVoter(voterPassedIn)).thenReturn(expectedVoter);

        ResponseEntity<Voter> voterResponseEntity = controller.createVoter(voterPassedIn);

        assertEquals(expectedVoter, voterResponseEntity.getBody());
        assertEquals(HttpStatus.CREATED, voterResponseEntity.getStatusCode());
        verify(mockService).createVoter(voterPassedIn);

    }

}