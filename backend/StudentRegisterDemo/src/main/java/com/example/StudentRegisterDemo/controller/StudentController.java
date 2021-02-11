package com.example.StudentRegisterDemo.controller;

import com.example.StudentRegisterDemo.model.Student;
import com.example.StudentRegisterDemo.service.StudentService;
import com.example.StudentRegisterDemo.service.Utils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.aggregation.SortByCountOperation;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/student")
@CrossOrigin(origins="http://localhost:3000")
public class StudentController {
    @Autowired
    private StudentService studService;

    @GetMapping(value = "/")
    public List<Student> getAllStudents() {
        return studService.findAll(Sort.by(Sort.Direction.ASC,"name"));
    }

    @PostMapping(value = "/save")
    public ResponseEntity<?> saveOrUpdateStudent(@RequestBody Student student) {
        System.out.println("/save called with body: "+Utils.printObject(student));
        studService.saveOrUpdateStudent(student);
        return new ResponseEntity("Student added successfully", HttpStatus.OK);
    }
}
