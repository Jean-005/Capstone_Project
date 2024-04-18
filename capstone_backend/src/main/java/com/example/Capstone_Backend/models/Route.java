package com.example.Capstone_Backend.models;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;


@Entity
@Table(name="routes")
public class Route {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column
    private long id;

    @OneToMany(mappedBy = "route")
    @Column(name="orders")
    private List<Order> orders;

    @ManyToOne
    @JoinColumn( name="driver_id" )
    private Driver driver;

    @Column(name="distance")
    private  int distance;

    @Column(name="duration")
    private int duration;

    @Column(name="is_complete")
    private boolean isComplete;

    public Route(){}

    public Route(Driver driver, int distance, int duration){
        this.orders = new ArrayList<>();
        this.driver = driver;
        this.distance = distance;
        this.duration = duration;
        this.isComplete = false;
    }

    public long getId() {
        return this.id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public List<Order> getOrders() {
        return this.orders;
    }

    public void setOrders(List<Order> orders) {
        this.orders = orders;
    }

    public Driver getDriver() {
        return this.driver;
    }

    public void setDriver(Driver driver) {
        this.driver = driver;
    }

    public int getDistance() {
        return this.distance;
    }

    public void setDistance(int distance) {
        this.distance = distance;
    }

    public int getDuration() {
        return this.duration;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }

    public boolean isComplete() {
        return this.isComplete;
    }

    public void setComplete(boolean complete) {
        isComplete = complete;
    }
}
