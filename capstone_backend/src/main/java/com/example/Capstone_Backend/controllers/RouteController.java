package com.example.Capstone_Backend.controllers;

import com.example.Capstone_Backend.models.Route;
import com.example.Capstone_Backend.services.RouteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("routes")
public class RouteController {

    @Autowired
    RouteService routeService;

    @GetMapping
    public ResponseEntity<List<Route>> getAllRoutes(){
        List<Route> allRoutes = routeService.getAllRoutes();
        return new ResponseEntity<>(allRoutes, HttpStatus.OK);
    }
}
