package com.hasbi.entity;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Table(name = "employees")
public class Employee extends PanacheEntity {

    @Column(nullable = false, unique = true)
    public String employeeCode;

    @Column(nullable = false)
    public String fullName;

    @Column(nullable = false, unique = true)
    public String email;

    public String phone;

    public String department;

    public String position;

    public BigDecimal salary;

    public LocalDate hireDate;

    @Column(nullable = false)
    public String status;
}