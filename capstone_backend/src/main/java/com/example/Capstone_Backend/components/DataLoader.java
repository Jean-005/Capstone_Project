package com.example.Capstone_Backend.components;

import com.example.Capstone_Backend.models.Driver;
import com.example.Capstone_Backend.models.Order;
import com.example.Capstone_Backend.models.Route;
import com.example.Capstone_Backend.repositories.DriverRepository;
import com.example.Capstone_Backend.repositories.OrderRepository;
import com.example.Capstone_Backend.repositories.RouteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

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

        Driver jean = new Driver("Jean", "jean@test.com", "+44339284023", "Mercedes F1-Car", "JE08 ANN", "password");
        driverRepository.save(jean);
        Driver aebel = new Driver("Aebel", "aebelshajan.work@gmail.com", "+447577563733", "Lightning McQueen Car", "AE16 BEL", "password");
        driverRepository.save(aebel);
        Driver yesica = new Driver("Yesica", "yesica@test.com", "+44234234234", "Mercedes G-Wagon", "YE51 CCA", "password");
        driverRepository.save(yesica);
        Driver tommy = new Driver("Tommy", "tommy@test.com", "+443393453455","Ferrari", "TO07 MMY", "password");
        driverRepository.save(tommy);
        Driver sahil = new Driver("Sahil", "sahil@test.com", "+443349200293", "Boeing-545","SA45 HIL", "password");
        driverRepository.save(sahil);

        List<Double> pickupGeocode = Arrays.asList(-0.140634, 51.501476);
        String pickupLocation = "Buckingham Palace, London, SW1A 1AA";

        Order order1 = new Order(349823,pickupLocation ,"Great Russell St, London WC1B 3DG", pickupGeocode, Arrays.asList(-0.12724418034731264,51.51920852847477));
        orderRepository.save(order1);
        Order order2 = new Order(543553,pickupLocation ,"London Zoo, Outer Cir, London NW1 4RY", pickupGeocode , Arrays.asList(-0.15480659230689, 51.53480565));
        orderRepository.save(order2);
        Order order3 = new Order(234523,pickupLocation ,"Cross Bones Garden, Union St, London,  SE1 1TA", pickupGeocode , Arrays.asList(-0.0919393, 51.503344));
        orderRepository.save(order3);
        Order order4 = new Order(342323,pickupLocation , "32 London Bridge St, London SE1 9SG, United Kingdom", pickupGeocode , Arrays.asList(-0.0864458928542395, 51.5043421));
        orderRepository.save(order4);
        Order order5 = new Order(776543,pickupLocation ,"Royal Albert Hall, Kensington Gore, South Kensington, London SW7 2AP", pickupGeocode , Arrays.asList(-0.177498, 51.500942));
        orderRepository.save(order5);

        Route route1 = new Route(Arrays.asList(order1, order2, order3), aebel, 100, 180);
        routeRepository.save(route1);
        Route route2 = new Route(Arrays.asList(order4, order5), jean, 60, 120);
        routeRepository.save(route2);

    }
}
