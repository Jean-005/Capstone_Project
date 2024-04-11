package com.example.Capstone_Backend.repositories;

import com.example.Capstone_Backend.models.Driver;
import com.example.Capstone_Backend.models.Route;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface RouteRepository extends JpaRepository<Route, Long> {

    List<Route> findByDriverId(long id);
}