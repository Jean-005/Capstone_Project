package com.example.Capstone_Backend.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

import java.util.List;

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
    private List<Double> pickupGeocode;

    @Column
    private String deliveryLocation;

    @Column
    private List<Double> deliveryGeocode;

    @Column
    private boolean isDelivered;

    @JsonIgnoreProperties({"orders"})
    @ManyToOne
    @JoinColumn(name="route_id")
    private Route route;

    public Order() {
    }

    public Order(int orderNumber, String pickupLocation, String deliveryLocation, List<Double> pickupGeocode, List<Double> deliveryGeocode){
        this.orderNumber = orderNumber;
        this.pickupLocation = pickupLocation;
        this.deliveryLocation = deliveryLocation;
        this.isDelivered = false;
        this.pickupGeocode = pickupGeocode;
        this.deliveryGeocode = deliveryGeocode;
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

    public List<Double> getPickupGeocode() {
        return pickupGeocode;
    }

    public void setPickupGeocode(List<Double> pickupGeocode) {
        this.pickupGeocode = pickupGeocode;
    }

    public List<Double> getDeliveryGeocode() {
        return deliveryGeocode;
    }

    public void setDeliveryGeocode(List<Double> deliveryGeocode) {
        this.deliveryGeocode = deliveryGeocode;
    }
}






