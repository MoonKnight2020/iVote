package com.integratedetroit.iVote.data;

import javax.persistence.*;

/**
 * Describes the fields for the Voter table of the database.
 */
@Entity
@Table(name = "voter_record")
public class VoterRecord {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String firstName;

    private String lastName;

    private String streetAddress;

    private String streetAddress2;

    private String city;

    private String state;

    private int zipCode;

    private String passwordHash;

    public VoterRecord() {

    }

    public static VoterRecord fromRecord(VoterRecord record) {
        return new VoterRecord();
    }

    public long getVoterId() {
        return this.id;
    }

    public void setVoterID(int number) {
        this.id = number;
    }

    public void setVoterFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getVoterFirstName() {
        return this.firstName;
    }

    public void setVoterLastName(String lastName) {
        this.lastName = lastName;

    }

    public String getVoterLastName() {
        return this.lastName;
    }

    public String getStreetAddress() {
        return this.streetAddress;
    }

    public void setStreetAddress(String streetAddress) {
        this.streetAddress = streetAddress;
    }

    public void setStreetAddress2(String streetAddress2) {
        this.streetAddress2 = streetAddress2;
    }

    public String getStreetAddress2() {
        return this.streetAddress2;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getCity() {
        return this.city;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getState() {
        return this.state;
    }

    public void setZipCode(int zipCode) {
        this.zipCode = zipCode;
    }

    public int getZipCode() {
        return this.zipCode;
    }

    public void setPasswordHash(String passwordHash) {
        this.passwordHash = passwordHash;
    }

    public String getPasswordHash() {
        return this.passwordHash;
    }

}
