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

    public Order(Long id, int orderNumber, String pickupLocation, String deliveryLocation, boolean isDelivered, Route route) {
        this.id = id;
        this.orderNumber = orderNumber;
        this.pickupLocation = pickupLocation;
        this.deliveryLocation = deliveryLocation;
        this.isDelivered = isDelivered;
        this.route = route;
    }
}






