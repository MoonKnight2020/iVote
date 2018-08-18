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
        //
    }

    public VoterRecord(String firstName, int idNumber) {
        this.firstName = firstName;
        this.id = idNumber;
    }

    // TODO: Getters for the fields

    // TODO: Setters for the fields

    public static VoterRecord fromRecord(VoterRecord record) {
        return new VoterRecord();
    }

    public long getVoterId() {
        return this.id;
    }

    public void setVoterID(int number) {
        this.id = number;
    }

}
