package com.example.Capstone_Backend.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

@Entity
@Table(name = "orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private int orderNumber;

    @Column
    private String pickupLocation;

    @Column
    private String deliveryLocation;

    @Column
    private boolean isDelivered;

    @JsonIgnoreProperties({"route"})
    @ManyToOne
    private Route route;

    public Order() {
    }

    public Order(Long id, int orderNumber, String pickupLocation, String deliveryLocation, boolean isDelivered, Route route){
        this.id = id;
        this.orderNumber = orderNumber;
        this.pickupLocation = pickupLocation;
        this.deliveryLocation = deliveryLocation;
        this.isDelivered = isDelivered;
        this.route = route;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getOrderNumber() {
        return orderNumber;
    }

    public void setOrderNumber(int orderNumber) {
        this.orderNumber = orderNumber;
    }

    public String getPickupLocation() {
        return pickupLocation;
    }

    public void setPickupLocation(String pickupLocation) {
        this.pickupLocation = pickupLocation;
    }

    public String getDeliveryLocation() {
        return deliveryLocation;
    }

    public void setDeliveryLocation(String deliveryLocation) {
        this.deliveryLocation = deliveryLocation;
    }

    public boolean isDelivered() {
        return isDelivered;
    }

    public void setDelivered(boolean delivered) {
        isDelivered = delivered;
    }

    public Route getRoute() {
        return route;
    }

    public void setRoute(Route route) {
        this.route = route;
    }
}






