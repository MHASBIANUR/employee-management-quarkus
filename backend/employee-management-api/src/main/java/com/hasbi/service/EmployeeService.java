package com.hasbi.service;

import com.hasbi.dto.EmployeeRequest;
import com.hasbi.dto.EmployeeResponse;
import com.hasbi.entity.Employee;
import com.hasbi.exception.NotFoundException;
import com.hasbi.repository.EmployeeRepository;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.transaction.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@ApplicationScoped
public class EmployeeService {

    @Inject
    EmployeeRepository employeeRepository;

    @Transactional
    public EmployeeResponse create(EmployeeRequest request) {

        Employee employee = new Employee();

        employee.employeeCode = request.employeeCode;
        employee.fullName = request.fullName;
        employee.email = request.email;
        employee.phone = request.phone;
        employee.department = request.department;
        employee.position = request.position;
        employee.salary = request.salary;
        employee.hireDate = request.hireDate;
        employee.status = request.status;

        employeeRepository.persist(employee);

        return mapToResponse(employee);
    }

    public List<EmployeeResponse> findAll() {
        return employeeRepository.listAll()
                .stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    public EmployeeResponse findById(Long id) {

        Employee employee = employeeRepository.findById(id);

        if (employee == null) {
            throw new NotFoundException("Employee not found");
        }

        return mapToResponse(employee);
    }

    @Transactional
    public EmployeeResponse update(Long id, EmployeeRequest request) {

        Employee employee = employeeRepository.findById(id);

        if (employee == null) {
            throw new NotFoundException("Employee not found");
        }

        employee.employeeCode = request.employeeCode;
        employee.fullName = request.fullName;
        employee.email = request.email;
        employee.phone = request.phone;
        employee.department = request.department;
        employee.position = request.position;
        employee.salary = request.salary;
        employee.hireDate = request.hireDate;
        employee.status = request.status;

        return mapToResponse(employee);
    }

    @Transactional
    public void delete(Long id) {

        Employee employee = employeeRepository.findById(id);

        if (employee == null) {
            throw new NotFoundException("Employee not found");
        }

        employeeRepository.delete(employee);
    }

    private EmployeeResponse mapToResponse(Employee employee) {

        EmployeeResponse response = new EmployeeResponse();

        response.id = employee.id;
        response.employeeCode = employee.employeeCode;
        response.fullName = employee.fullName;
        response.email = employee.email;
        response.phone = employee.phone;
        response.department = employee.department;
        response.position = employee.position;
        response.salary = employee.salary;
        response.hireDate = employee.hireDate;
        response.status = employee.status;

        return response;
    }

}