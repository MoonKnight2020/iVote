package com.integratedetroit.iVote.data;

import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;

public class VoterRecordTest {

    VoterRecord record;

    @Before
    public void setUp() {
        record = new VoterRecord(
                2,
                "Alice",
                "Johnson",
                "1234 Main St",
                "Apt 123",
                "West Hollywood",
                "California",
                90046,
                "password123"
        );
    }


    @Test
    public void getVoterID() {
        int expectedVoterID = 2;

        assertEquals(record.getVoterId(), expectedVoterID);

    }

    @Test
    public void setVoterID() {
        int newVoterID = 3;

        record.setVoterID(newVoterID);

        assertEquals(newVoterID, record.getVoterId());
    }

    @Test
    public void setFirstName() {
        String newFirstName = "Betty";

        record.setVoterFirstName(newFirstName);

        assertEquals(newFirstName, record.getVoterFirstName());
    }

    @Test
    public void getFirstName() {
        String expectedVoterFirstName = "Alice";

        assertEquals( expectedVoterFirstName, record.getVoterFirstName());
    }

    @Test
    public void setLastName() {
        String newLastName = "Smith";

        record.setVoterLastName(newLastName);

        assertEquals(newLastName, record.getVoterLastName());
    }

    @Test
    public void getLastName() {
        String expectedVoterLastName = "Johnson";

        assertEquals( expectedVoterLastName, record.getVoterLastName());
    }

    @Test
    public void setStreetAddress() {
        String newStreetAddress = "1234 Ball St";

        record.setStreetAddress(newStreetAddress);

        assertEquals(newStreetAddress, record.getStreetAddress());
    }

    @Test
    public void getStreetAddress() {
        String streetAddress = "1234 Main St";

        assertEquals(streetAddress, record.getStreetAddress());
    }

    @Test
    public void setStreetAddress2() {
        String newStreetAddress2 = "Apt 4";

        record.setStreetAddress2(newStreetAddress2);

        assertEquals(newStreetAddress2, record.getStreetAddress2());
    }

    @Test
    public void getStreetAddress2() {
        String streetAddress2 = "Apt 123";

        assertEquals(streetAddress2, record.getStreetAddress2());
    }

    @Test
    public void setCity() {
        String newCity = "Kalamazoo";

        record.setCity(newCity);

        assertEquals(newCity, record.getCity());
    }

    @Test
    public void getCity() {
        String city = "West Hollywood";

        assertEquals(city, record.getCity());
    }

    @Test
    public void setState() {
        String newState = "Michigan";

        record.setState(newState);

        assertEquals(newState, record.getState());
    }

    @Test
    public void getState() {
        String state = "California";

        assertEquals(state, record.getState());
    }

    @Test
    public void setZipCode() {
        int newZip = 48234;

        record.setZipCode(newZip);

        assertEquals(newZip, record.getZipCode());
    }

    @Test
    public void getZipCode() {
        int zip = 90046;

        assertEquals(zip, record.getZipCode());
    }

    @Test
    public void setPasswordHash() {
        String newPassword = "password4567";

        record.setPasswordHash(newPassword);

        assertEquals(newPassword, record.getPasswordHash());
    }

    @Test
    public void getPasswordHash() {
        String password = "password123";

        assertEquals(password, record.getPasswordHash());
    }

}