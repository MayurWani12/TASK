package com.angular.demo.dao;


import java.util.List;
import java.util.Optional;

import com.angular.demo.entity.Employee;



public interface StudentDao {
    List<Employee> findAll();

    Optional<Employee> findById(Integer id);

    Employee save(Employee employee);

    void deleteById(Integer id);
    
    
}
