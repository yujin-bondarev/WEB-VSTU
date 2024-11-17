package com.example.model.repositories;

import com.example.model.entity.Racer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RacerRepository extends JpaRepository<Racer, Long> {
    Racer findByName(String name);

    Racer findByCarModel(String carModel); // Поиск по carModel
}