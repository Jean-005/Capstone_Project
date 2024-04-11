package com.example.Capstone_Backend.services;


import com.example.Capstone_Backend.models.Route;
import com.example.Capstone_Backend.repositories.RouteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@Service
public class RouteService {

    @Autowired
    RouteRepository routeRepository;

    public List<Route> getAllRoutes(){
        return routeRepository.findAll();
    }

    public List<Route> getRouteByDriverId(long id){

        return routeRepository.findByDriverId(id);
    }
}

