package com.integratedetroit.iVote.rest;

import com.integratedetroit.iVote.data.Voter;
import org.junit.Before;
import org.junit.Test;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import static org.assertj.core.api.Assertions.assertThat;
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
    public void createVoter_returnsHTTPStatusCreated() {

        Voter expectedVoter = new Voter();
        Voter voterPassedIn = new Voter();

        expectedVoter.setVoterID(1);

        when ( mockService.createVoter( voterPassedIn ))
                .thenReturn(expectedVoter);

        ResponseEntity expectedResponseEntity = new ResponseEntity<>(
                expectedVoter, HttpStatus.CREATED);

        ResponseEntity<Voter> responseEntity = controller.createVoter( voterPassedIn );
        verify(mockService)
                .createVoter( voterPassedIn );
        assertThat( responseEntity )
                .isEqualTo( expectedResponseEntity );

    }

    @Test
    public void createVoter_returnsHTTPStatusNoContent() {

        Voter expectedVoter = new Voter();
        Voter voterPassedIn = new Voter();

        expectedVoter.setVoterID(-1);
        int inputId = 8;

        when ( mockService.getVoter(inputId))
                .thenReturn(expectedVoter);

        ResponseEntity expectedResponseEntity = new ResponseEntity<>(
                expectedVoter, HttpStatus.NO_CONTENT);

        ResponseEntity<Voter> responseEntity = controller.createVoter( voterPassedIn );
        verify(mockService)
                .createVoter( voterPassedIn );
        assertThat( responseEntity )
                .isEqualTo( expectedResponseEntity );

    }


}