package com.angular.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.angular.demo.entity.Student;

public interface Studentrepo extends JpaRepository<Student, Integer> {

}
