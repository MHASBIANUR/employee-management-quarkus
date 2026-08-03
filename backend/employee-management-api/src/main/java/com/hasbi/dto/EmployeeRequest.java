package com.hasbi.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.math.BigDecimal;
import java.time.LocalDate;

public class EmployeeRequest {

    @NotBlank(message = "Employee code is required")
    public String employeeCode;

    @NotBlank(message = "Full name is required")
    public String fullName;

    @Email(message = "Invalid email")
    @NotBlank(message = "Email is required")
    public String email;

    public String phone;

    @NotBlank(message = "Department is required")
    public String department;

    @NotBlank(message = "Position is required")
    public String position;

    @NotNull(message = "Salary is required")
    public BigDecimal salary;

    @NotNull(message = "Hire date is required")
    public LocalDate hireDate;

    @NotBlank(message = "Status is required")
    public String status;
}