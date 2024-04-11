package com.example.Capstone_Backend.services;

import com.example.Capstone_Backend.models.Order;
import com.example.Capstone_Backend.repositories.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PatchMapping;
import java.util.Optional;

@Service
public class OrderService {
    @Autowired
    OrderRepository orderRepository;


    public Optional<Order> findOrderById(long id) {
        return orderRepository.findById(id);
    }

    public Optional<Order> updateOrderStatus(long id, boolean isDelivered) {
        Optional<Order> optionalOrderToUpdate = orderRepository.findById(id);
        if (optionalOrderToUpdate.isPresent()) {
            Order orderToUpdate = optionalOrderToUpdate.get();
            orderToUpdate.setDelivered(isDelivered);
            orderRepository.save(orderToUpdate);
        }
        return optionalOrderToUpdate;
    }
}
