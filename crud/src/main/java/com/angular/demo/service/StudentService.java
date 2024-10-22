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


    public List<Student> getAllStudents() {
        return studentrepo.findAll();
    }

  
    public Optional<Student> getStudentById(Integer id) {
        return studentrepo.findById(id);
    }

    public Student saveStudent(Student student) {
        return studentrepo.save(student);
    }

   
    public void deleteStudent(Integer id) {
        studentrepo.deleteById(id);
    }

    public Student updateStudent(Integer id, Student studentDetails) {
        Student student = studentrepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Student not found with id " + id));

       
//        student.setName(studentDetails.getName());
//        student.setEmail(studentDetails.getEmail());
//        student.setFee(studentDetails.getFee());

      
        return studentrepo.save(student);
    }
}