package com.angular.demo.service;

import com.angular.demo.dao.StudentDao;
import com.angular.demo.entity.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {

    @Autowired
    private StudentDao employeeDao;

    public List<Employee> getAllEmployees() {
        return employeeDao.findAll();
    }

    public Optional<Employee> getEmployeeById(int id) {
        return employeeDao.findById(id);
    }

    public Employee createEmployee(Employee employee) {
        return employeeDao.save(employee);
    }

    public Employee updateEmployee(int id, Employee employeeDetails) {
        Employee employee = employeeDao.findById(id)
                .orElseThrow(() -> new RuntimeException("Employee not found with id: " + id));

        employee.setName(employeeDetails.getName());
        employee.setCity(employeeDetails.getCity());

        return employeeDao.save(employee);
    }

    public void deleteEmployee(int id) {
        employeeDao.deleteById(id);
    }
}
