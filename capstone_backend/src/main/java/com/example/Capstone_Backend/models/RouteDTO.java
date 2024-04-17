package com.example.Capstone_Backend.models;

import java.util.List;

public class RouteDTO {

    private List<Long> orderIds;

    private Long driverId;

    private int distance;
    private  int duration;



    public RouteDTO(List<Long> orderIds, Long driverId, int distance, int duration) {
        this.orderIds = orderIds;
        this.driverId = driverId;
        this.distance = distance;
        this.duration = duration;
    }

    public List<Long> getOrderIds() {
        return orderIds;
    }

    public void setOrderIds(List<Long> orderIds) {
        this.orderIds = orderIds;
    }

    public Long getDriverId() {
        return driverId;
    }

    public void setDriverId(Long driverId) {
        this.driverId = driverId;
    }

    public int getDistance() {
        return distance;
    }

    public void setDistance(int distance) {
        this.distance = distance;
    }

    public int getDuration() {
        return duration;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }
}
