package com.example.controllers;

import com.example.model.entity.Racer;
import com.example.services.RacerService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.exception.RacerNotFoundException;

import java.net.URI;
import java.util.List;

import javax.validation.Valid;

@RestController
@RequestMapping("/racers")
public class RacerController {

    private final RacerService racerService;

    public RacerController(RacerService racerService) {
        this.racerService = racerService;
    }

    @GetMapping
    public List<Racer> getAllRacers() {
        return racerService.getAllRacers();
    }

    @PostMapping
    public ResponseEntity<Racer> addRacer(@Valid @RequestBody Racer racer) {
        Racer createdRacer = racerService.addRacer(racer);
        return ResponseEntity.created(URI.create("/racers/" + createdRacer.getId())).body(createdRacer);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Racer> updateRacer(@PathVariable Long id, @Valid @RequestBody Racer updatedRacer) {
        if (!racerService.getRacerById(id).isPresent()) {
            throw new RacerNotFoundException("Racer with id " + id + " not found");
        }
        racerService.updateRacer(id, updatedRacer);

        Racer racer = racerService.getRacerById(id).get();
        return ResponseEntity.ok(racer);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRacer(@PathVariable Long id) {
        if (!racerService.getRacerById(id).isPresent()) {
            throw new RacerNotFoundException("Racer with id " + id + " not found");
        }
        racerService.deleteRacer(id);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Racer> getRacerById(@PathVariable Long id) {
        return racerService.getRacerById(id).map(ResponseEntity::ok)
                .orElseThrow(() -> new RacerNotFoundException("Racer with id " + id + " not found"));
    }
}