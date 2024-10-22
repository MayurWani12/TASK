package com.angular.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.angular.demo.entity.Employee;

public interface repository extends JpaRepository<Employee, Integer> {

	
	
}
