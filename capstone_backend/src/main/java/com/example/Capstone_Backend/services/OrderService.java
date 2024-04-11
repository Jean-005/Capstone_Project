package com.example.Capstone_Backend.services;

import com.example.Capstone_Backend.repositories.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PatchMapping;

@Service
public class OrderService {
    @Autowired
    OrderRepository orderRepository;


}
