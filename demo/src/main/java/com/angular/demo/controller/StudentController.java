package com.angular.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.angular.demo.entity.Student;
import com.angular.demo.service.StudentService;

import jakarta.persistence.criteria.CriteriaBuilder.In;

@RestController
@RequestMapping("/api/std")
public class StudentController {
@Autowired
	private StudentService service;
	
@GetMapping("/Student")

public List<Student> getAllStudents(){
	
	return service.getAllStudent();
}
@GetMapping("/Student/{id}")
  public Optional<Student> getStudentbyid(@PathVariable Integer id){
	  
	  return service.getStudentbyid(id);
  }

@PostMapping("/Student")
  public Student saveStudent(@RequestBody Student student) {
	  
	  return service.saveStudent(student);
	  
  }


@DeleteMapping("Student/{id}")
public void deleteStudent(@PathVariable Integer id) {
	
	 service.deleteStudent(id);
	
}

@PutMapping("Student/{id}")
public Student updateStudent(@PathVariable Integer id,@RequestBody Student student)
{
	return service.saveStudent(student);
	
}
  
	
	
	
}
