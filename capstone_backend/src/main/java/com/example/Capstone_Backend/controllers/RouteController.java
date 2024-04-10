package com.example.Capstone_Backend.controllers;

import com.example.Capstone_Backend.services.RouteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("routes")
public class RouteController {

    @Autowired
    RouteService routeService;
    

}
