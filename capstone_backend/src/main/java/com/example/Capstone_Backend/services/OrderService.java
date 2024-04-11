package com.example.Capstone_Backend.services;

import com.example.Capstone_Backend.models.Order;
import com.example.Capstone_Backend.repositories.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class OrderService {
    @Autowired
    OrderRepository orderRepository;

    public Optional<Order> findOrderById(long id) {
        return orderRepository.findById(id);
    }
}
