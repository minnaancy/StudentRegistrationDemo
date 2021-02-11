package com.example.StudentRegisterDemo.service;

import com.example.StudentRegisterDemo.model.Student;
import org.springframework.data.domain.Sort;

import java.util.List;

public interface StudentService {
    List<Student> findAll();
    List<Student> findAll(Sort var1);
    Student saveOrUpdateStudent(Student student);
}
