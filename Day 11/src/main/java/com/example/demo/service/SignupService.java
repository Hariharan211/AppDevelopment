package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Signup;
import com.example.demo.repository.SignupRepository;

import java.util.List;
import java.util.Optional;

@Service
public class SignupService {
    @Autowired
    private SignupRepository signupRepository;

    public List<Signup> getAllUsers() {
        return signupRepository.findAll();
    }

    public Optional<Signup> getUserById(Long id) {
        return signupRepository.findById(id);
    }

    public Signup createUser(Signup signup) {
        return signupRepository.save(signup);
    }

    public Signup updateUser(Long id, Signup updatedUser) {
        if (signupRepository.existsById(id)) {
            updatedUser.setId(id); // Ensure the ID is set for the updated user
            return signupRepository.save(updatedUser);
        }
        return null; // User not found
    }

    public boolean deleteUser(Long id) {
        if (signupRepository.existsById(id))
        {
            signupRepository.deleteById(id);
            return true;
        }
        return false; // User not found
    }
}
