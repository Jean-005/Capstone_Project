package com.example.Capstone_Backend.services;

import com.example.Capstone_Backend.models.Driver;
import com.example.Capstone_Backend.models.DriverDTO;
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

    public List<Driver> getAllDrivers(){
        return driverRepository.findAll();

    }
    public Driver saveDriver(Driver driver){
        return driverRepository.save(driver);
    }

    public Optional<Driver> getDriverById(Long id) {
        return driverRepository.findById(id);
    }
    public Driver updateDriverById(Long id, DriverDTO driverDTO) {
        Driver driverToUpdate = driverRepository.findById(id).get();
        driverToUpdate.setName(driverDTO.getName());
        driverToUpdate.setEmailAddress(driverDTO.getEmailAddress());
        driverToUpdate.setPhone(driverDTO.getPhone());
        driverRepository.save(driverToUpdate);
        return driverToUpdate;
    }

    public void deleteDriver(Long id) {
        driverRepository.deleteById(id);

    }
}
