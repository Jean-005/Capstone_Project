package com.example.Capstone_Backend.controllers;

import com.example.Capstone_Backend.models.Order;
import com.example.Capstone_Backend.services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("orders")
public class OrderController {

    @Autowired
    OrderService orderService;


    @GetMapping
    public ResponseEntity<List<Order>> getAllOrders(){
        List<Order> allOrders = orderService.getAllOrders();
        return new ResponseEntity<>(allOrders, HttpStatus.OK);
    }


    @GetMapping(value = "/{id}")
    public ResponseEntity<Order> getOrderById(@PathVariable long id){
        Optional<Order> foundOrder = orderService.findOrderById(id);
        if(foundOrder.isPresent()){
            return new ResponseEntity<>(foundOrder.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }

    @PatchMapping (value = "/{id}")
    public ResponseEntity<Order> updateOrderStatusById(@PathVariable long id, @RequestBody boolean isDelivered){
        Optional<Order> optionalOrder = orderService.updateOrderStatus(id, isDelivered);
        if (optionalOrder.isPresent()) {
            return new ResponseEntity<>(optionalOrder.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }

}
