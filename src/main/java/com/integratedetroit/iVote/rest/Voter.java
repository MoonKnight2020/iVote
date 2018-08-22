package com.integratedetroit.iVote.rest;

import com.integratedetroit.iVote.data.VoterRecord;

public class Voter {

    private String firstName;

    private String lastName;

    private String streetAddress;

    private String streetAddress2;

    private String city;

    private String state;

    private int zipCode;

    public Voter() {

    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getStreetAddress() {
        return streetAddress;
    }

    public void setStreetAddress(String streetAddress) {
        this.streetAddress = streetAddress;
    }

    public String getStreetAddress2() {
        return streetAddress2;
    }

    public void setStreetAddress2(String streetAddress2) {
        this.streetAddress2 = streetAddress2;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public int getZipCode() {
        return zipCode;
    }

    public void setZipCode(int zipCode) {
        this.zipCode = zipCode;
    }

    public static Voter fromRecord(VoterRecord voterRecord) {
        Voter voter = new Voter();
        voter.setFirstName(voterRecord.getVoterFirstName());
        voter.setLastName(voterRecord.getVoterLastName());
        voter.setStreetAddress(voterRecord.getStreetAddress());
        voter.setStreetAddress2(voterRecord.getStreetAddress2());
        voter.setCity(voterRecord.getCity());
        voter.setState(voterRecord.getState());
        voter.setZipCode(voterRecord.getZipCode());

        return voter;
    }
}
