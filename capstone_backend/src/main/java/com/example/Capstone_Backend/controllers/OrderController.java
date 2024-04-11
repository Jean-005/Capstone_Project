package com.example.Capstone_Backend.controllers;

import com.example.Capstone_Backend.models.Order;
import com.example.Capstone_Backend.services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("orders")
public class OrderController {

    @Autowired
    OrderService orderService;

    @GetMapping(value = "/{id}")
    public ResponseEntity<Order> getOrderById(@PathVariable long id){
        Optional<Order> foundOrder = orderService.findOrderById(id);
        if(foundOrder.isPresent()){
            return new ResponseEntity<>(foundOrder.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }
}
