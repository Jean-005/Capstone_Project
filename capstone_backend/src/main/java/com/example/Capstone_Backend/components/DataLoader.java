package com.example.Capstone_Backend.components;

import com.example.Capstone_Backend.models.Driver;
import com.example.Capstone_Backend.repositories.DriverRepository;
import com.example.Capstone_Backend.repositories.OrderRepository;
import com.example.Capstone_Backend.repositories.RouteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    DriverRepository driverRepository;
    @Autowired
    OrderRepository orderRepository;
    @Autowired
    RouteRepository routeRepository;

    @Override
    public void run(ApplicationArguments args) throws Exception {

        Driver jean = new Driver("Jean", "jean@test.com", "+44339284023");
        driverRepository.save(jean);
        Driver aebel = new Driver("Aebel", "aebelshajan.work@gmail.com", "+447577563733");
        driverRepository.save(aebel);
        Driver yesica = new Driver("Yesica", "yesica@test.com", "+44234234234");
        driverRepository.save(yesica);
        Driver tommy = new Driver("Tommy", "tommy@test.com", "+443393453455");
        driverRepository.save(tommy);
        Driver sahil = new Driver("Sahil", "sahil@test.com", "+443349200293");
        driverRepository.save(sahil);


    }



}
