package com.example.Capstone_Backend.controllers;


import com.example.Capstone_Backend.models.Driver;
import com.example.Capstone_Backend.services.DriverService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("drivers")
public class DriverController {

    @Autowired
    DriverService driverService;

    @GetMapping
    public ResponseEntity<List<Driver>> getAllDrivers(){
        List<Driver> allDrivers = driverService.getAllDrivers();
        return new ResponseEntity<>(allDrivers, HttpStatus.OK);
    }
//
//    @PatchMapping (value = "/{id}")                                        // add driverDTO?
//    public ResponseEntity<Driver> updateDriver(@PathVariable Long id, @RequestBody DriverDTO driverDTO){
//        Optional<Driver> driver = driverService.getDriverById(id);
//        if (driver.isPresent()) {
//            Driver updatedDriver = driverService.updateDriver(id, driverDTO);
//            return new ResponseEntity<>(updatedDriver, HttpStatus.OK);
//        }
//        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
//    }
//    @DeleteMapping(value = "/{id}")
//    public ResponseEntity<Long> deleteDriver(@PathVariable Long id) {
//        Optional<Driver> driver = driverService.getDriverById(id);
//        if (driver.isPresent()) {
//            driverService.deleteDriver(id);
//            return new ResponseEntity<>(id, HttpStatus.OK);
//        }
//        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
//    }

}
