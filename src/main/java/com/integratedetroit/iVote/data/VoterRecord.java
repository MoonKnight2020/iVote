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

    private String city;

    private String state;

    private int zipCode;

    private String passwordHash;

    // TODO: Getters for the fields

    // TODO: Setters for the fields

}
