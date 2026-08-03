package com.hasbi.dto;

import java.math.BigDecimal;
import java.time.LocalDate;

public class EmployeeResponse {

    public Long id;
    public String employeeCode;
    public String fullName;
    public String email;
    public String phone;
    public String department;
    public String position;
    public BigDecimal salary;
    public LocalDate hireDate;
    public String status;

}