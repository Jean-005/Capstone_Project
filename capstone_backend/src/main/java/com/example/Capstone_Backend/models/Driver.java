package com.example.Capstone_Backend.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Entity
@Table(name = "drivers")
public class Driver {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private long id;

    @Column
    private String name;

    @Column
    private String emailAddress;

    @Column
    private String phone;

    @Column
    @OneToMany(mappedBy = "driver")
    @JsonIgnore
    private List<Route> routes;

    @Column
    private List<Double> startLocation;

    public Driver(){}

    public Driver(String name, String emailAddress, String phone) {
        this.name = name;
        this.emailAddress = emailAddress;
        this.phone = phone;
        this.routes = new ArrayList<>();
        this.startLocation = Arrays.asList(-0.140634, 51.501476);
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
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

    public List<Route> getRoutes() {
        return routes;
    }

    public void setRoutes(List<Route> routes) {
        this.routes = routes;
    }

    public List<Double> getStartLocation() {
        return startLocation;
    }

    public void setStartLocation(List<Double> startLocation) {
        this.startLocation = startLocation;
    }
}
