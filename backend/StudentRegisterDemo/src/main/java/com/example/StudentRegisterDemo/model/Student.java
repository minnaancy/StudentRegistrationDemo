package com.example.StudentRegisterDemo.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Student
{
    private String id;
    private String name;
    private String gender;
    private String dob;
    private String grade;
    private String division;

    public Student(String id, String name, String gender, String dob, String grade, String division) {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.dob = dob;
        this.grade = grade;
        this.division = division;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getDob() {
        return dob;
    }

    public void setDob(String dob) {
        this.dob = dob;
    }

    public String getGrade() {
        return grade;
    }

    public void setGrade(String grade) {
        this.grade = grade;
    }

    public String getDivision() {
        return division;
    }

    public void setDivision(String division) {
        this.division = division;
    }
}
