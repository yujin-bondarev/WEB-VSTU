package com.example.services;

import com.example.model.entity.Racer;

import java.util.List;
import java.util.Optional;

public interface RacerService {
    List<Racer> getAllRacers();

    void addRacer(Racer racer);

    void updateRacer(Long id, Racer updatedRacer);

    void deleteRacer(Long id);

    Optional<Racer> getRacerById(Long id);

    Racer getRacerByCarModel(String carModel);
}