package com.example.Capstone_Backend.controllers;

import com.example.Capstone_Backend.models.Route;
import com.example.Capstone_Backend.services.RouteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

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

    @GetMapping(value = "/driver/{id}")
    public ResponseEntity<Route> getRouteByDriverId(@PathVariable long id){
        List<Route> routes = routeService.getRouteByDriverId(id);
        if(routes.isEmpty()){
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);

        }
        else {
            return new ResponseEntity<>(routes.get(0), HttpStatus.OK);
        }
    }
    @PostMapping
    public ResponseEntity<Route> saveRoute(@RequestBody Route route){
        Route newRoute = routeService.saveRoute(route);
        return new ResponseEntity<>(newRoute, HttpStatus.CREATED);
    }
}
