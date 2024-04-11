package com.example.Capstone_Backend.services;

import com.example.Capstone_Backend.models.Driver;
import com.example.Capstone_Backend.repositories.DriverRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DriverService {

    @Autowired
    DriverRepository driverRepository;

    public Optional<Driver> findDriver(Long id) {
        return driverRepository.findById(id);
    }
}
