package com.example.Capstone_Backend.services;

import com.example.Capstone_Backend.repositories.DriverRepository;
import com.example.Capstone_Backend.repositories.OrderRepository;
import com.example.Capstone_Backend.repositories.RouteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RouteService {

    @Autowired
    RouteRepository routeRepository;
}
