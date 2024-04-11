package com.example.Capstone_Backend.controllers;

import com.example.Capstone_Backend.models.Order;
import com.example.Capstone_Backend.services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("orders")
public class OrderController {

    @Autowired
    OrderService orderService;

//    @PatchMapping (value = "/{id")
//    public ResponseEntity<Order> updateOrderStatusById(@PathVariable long id, @RequestBody boolean isDelivered){
//        Optional<Order> orderOptional = orderService.findOrderStatusById(id);
//        if (orderOptional)
//    }

}
