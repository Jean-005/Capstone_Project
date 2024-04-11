package com.example.Capstone_Backend.models;

public class DriverDTO {

    private String name;
    private String emailAddress;
    private String phone;

    public DriverDTO() {
    }

    public DriverDTO(String name, String emailAddress, String phone) {
        this.name = name;
        this.emailAddress = emailAddress;
        this.phone = phone;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmailAddress() {
        return emailAddress;
    }

    public void setEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }
}
