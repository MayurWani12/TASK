package com.angular.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.angular.demo.entity.Student;
import com.angular.demo.repository.Studentrepo;

@Service
public class StudentService {
	
	@Autowired
	private Studentrepo studentrepo;
	
	
	public List<Student> getAllStudent(){
		
		return studentrepo.findAll();
	}
	
	public Optional<Student> getStudentbyid(Integer id){
		return studentrepo.findById(id);
	}
	
	public void deleteStudent(Integer id) {
		
		studentrepo.deleteById(id);
	}
	
	
	public Student saveStudent(Student student) {
		
		return studentrepo.save(student);
	}
	
	public Student updateStudent(Integer id,Student students) {
		
		Student student=studentrepo.findById(id).orElseThrow();
		
		student.setId(students.getId());
		student.setName(students.getName());
		
		return studentrepo.save(students);
		
		
	}
	

}
