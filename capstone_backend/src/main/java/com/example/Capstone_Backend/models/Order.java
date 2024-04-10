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
