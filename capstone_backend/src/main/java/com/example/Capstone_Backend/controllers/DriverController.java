package com.example.Capstone_Backend.controllers;


import com.example.Capstone_Backend.models.Driver;
import com.example.Capstone_Backend.services.DriverService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("drivers")
public class DriverController {
    @Autowired
    DriverService driverService;

    @GetMapping
    public ResponseEntity<List<Driver>> getAllDrivers(){
        List<Driver> allDrivers = driverService.getAllDrivers();
        return new ResponseEntity<>(allDrivers, HttpStatus.OK);
    }


}
