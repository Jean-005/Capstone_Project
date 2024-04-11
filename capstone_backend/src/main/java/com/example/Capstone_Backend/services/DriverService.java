package com.example.Capstone_Backend.services;

import com.example.Capstone_Backend.models.Driver;
import com.example.Capstone_Backend.repositories.DriverRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DriverService {

    @Autowired
    DriverRepository driverRepository;


    public List<Driver> getAllDrivers() {
        return driverRepository.findAll();
    }
}
