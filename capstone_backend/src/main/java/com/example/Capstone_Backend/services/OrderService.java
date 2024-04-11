package com.example.Capstone_Backend.services;

import com.example.Capstone_Backend.models.Order;
import com.example.Capstone_Backend.repositories.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PatchMapping;

@Service
public class OrderService {
    @Autowired
    OrderRepository orderRepository;


    public Order updateOrderStatus(long id, boolean isDelivered) {
        Order orderToUpdate = orderRepository.findById(id).get();
        if (orderToUpdate != null) {
            orderToUpdate.setDelivered(isDelivered);
            orderRepository.save(orderToUpdate);
        }
        return orderToUpdate;
    }
}
