package com.integratedetroit.iVote;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * Holder of basic data about a specific voter using the app.
 * @author Integrate Detroit, Cohort 1
 */
@Entity
public class Voter {

    @Id
    @GeneratedValue
    private long id;
    private String name;

}
