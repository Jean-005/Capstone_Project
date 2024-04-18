package com.example.Capstone_Backend.services;


import com.example.Capstone_Backend.models.Driver;
import com.example.Capstone_Backend.models.Order;
import com.example.Capstone_Backend.models.Route;
import com.example.Capstone_Backend.models.RouteDTO;
import com.example.Capstone_Backend.repositories.DriverRepository;
import com.example.Capstone_Backend.repositories.OrderRepository;
import com.example.Capstone_Backend.repositories.RouteRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class RouteService {

    @Autowired
    RouteRepository routeRepository;
    @Autowired
    OrderRepository orderRepository;
    @Autowired
    DriverRepository driverRepository;

    public List<Route> getAllRoutes(){
        return routeRepository.findAll();
    }

    public List<Route> getRouteByDriverId(long id){

        return routeRepository.findByDriverId(id);
    }
    public Route saveRoute(RouteDTO routeDTO) {

        Driver driver = driverRepository.findById(routeDTO.getDriverId()).get();

        Route route = new Route(driver,routeDTO.getDistance(), routeDTO.getDuration());
        routeRepository.save(route);

        for (Long orderId : routeDTO.getOrderIds()){

            Order order = orderRepository.findById(orderId).get();
            order.setRoute(route);
            orderRepository.save(order);
        }

        return route;

    }
}

