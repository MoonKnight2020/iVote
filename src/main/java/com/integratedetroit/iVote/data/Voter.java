package com.integratedetroit.iVote.data;

import java.util.Objects;

/**
 * This class provides a model for the VoterRecord.
 */
public class Voter {

    private String firstName;

    private String lastName;

    private String streetAddress;

    private String streetAddress2;

    private String city;

    private String state;

    private int zipCode;

    private String emailAddress;

    private String passwordHash;

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

    public void setEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
    }

    public String getEmailAddress() {
        return this.emailAddress;
    }

    public void setPasswordHash(String passwordHash) {
        this.passwordHash = passwordHash;
    }

    public String getPasswordHash() {
        return passwordHash;
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
        voter.setEmailAddress(voterRecord.getEmailAddress());
        voter.setPasswordHash(voterRecord.getPasswordHash());

        return voter;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Voter voter = (Voter) o;
        return zipCode == voter.zipCode &&
                Objects.equals(firstName, voter.firstName) &&
                Objects.equals(lastName, voter.lastName) &&
                Objects.equals(streetAddress, voter.streetAddress) &&
                Objects.equals(streetAddress2, voter.streetAddress2) &&
                Objects.equals(city, voter.city) &&
                Objects.equals(state, voter.state);
    }

    @Override
    public int hashCode() {

        return Objects.hash(firstName, lastName, streetAddress, streetAddress2, city, state, zipCode);
    }

    public void setId(int i) {
        //
    }
}
