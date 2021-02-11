package com.example.StudentRegisterDemo.service;

import com.example.StudentRegisterDemo.model.Student;
import com.example.StudentRegisterDemo.respository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentServiceImplement implements StudentService{
    @Autowired
    private StudentRepository studRepo;
    @Override
    public List<Student> findAll() {
        return studRepo.findAll();
    }

    @Override
    public List<Student> findAll(Sort var1) {
        return studRepo.findAll(var1);
    }

    @Override
    public Student saveOrUpdateStudent(Student student) {
        return studRepo.save(student);
    }
}
