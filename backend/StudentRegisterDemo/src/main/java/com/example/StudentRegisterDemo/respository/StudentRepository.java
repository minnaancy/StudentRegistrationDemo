package com.example.StudentRegisterDemo.respository;

import com.example.StudentRegisterDemo.model.Student;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface StudentRepository extends MongoRepository<Student,String> {
}
