package com.example.model.entity;

import javax.persistence.AttributeOverride;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import lombok.Data;

@Data
@Entity
@Table(name = "racers")
@AttributeOverride(name = "id", column = @Column(name = "`rc_id`"))
public class Racer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Name is mandatory")
    @Column(name = "rc_name")
    private String name;

    @NotBlank(message = "Car model is mandatory")
    @Column(name = "car_model")
    private String carModel;
}