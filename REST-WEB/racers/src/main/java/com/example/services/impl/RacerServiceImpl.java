package com.example.services.impl;

import com.example.model.entity.Racer;
import com.example.model.repositories.RacerRepository;
import com.example.services.RacerService;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RacerServiceImpl implements RacerService {

    private final RacerRepository racerRepository;

    public RacerServiceImpl(RacerRepository racerRepository) {
        this.racerRepository = racerRepository;
    }

    @Override
    public List<Racer> getAllRacers() {
        return racerRepository.findAll();
    }

    @Override
    public void addRacer(Racer racer) {
        racerRepository.save(racer);
    }

    @Override
    public void updateRacer(Long id, Racer updatedRacer) {
        Optional<Racer> existingRacerOptional = racerRepository.findById(id);
        if (existingRacerOptional.isPresent()) {
            Racer existingRacer = existingRacerOptional.get();
            existingRacer.setName(updatedRacer.getName());
            existingRacer.setCarModel(updatedRacer.getCarModel());
            racerRepository.save(existingRacer);
        }
    }

    @Override
    public void deleteRacer(Long id) {
        if (racerRepository.existsById(id)) {
            racerRepository.deleteById(id);
        }
    }

    @Override
    public Optional<Racer> getRacerById(Long id) {
        return racerRepository.findById(id); // Используем метод из RacerRepository
    }

    @Override
    public Racer getRacerByCarModel(String carModel) {
        return racerRepository.findByCarModel(carModel);
    }
}