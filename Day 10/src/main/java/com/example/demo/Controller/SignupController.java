package com.example.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.entity.Signup;
import com.example.demo.service.SignupService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/users")
public class SignupController {
    @Autowired
    private SignupService signupService;

    // Retrieve all users
    @GetMapping
    public List<Signup> getAllUsers() {
        return signupService.getAllUsers();
    }

    // Retrieve a user by ID
    @GetMapping("/{id}")
    public ResponseEntity<Signup> getUserById(@PathVariable Long id) {
        Optional<Signup> user = signupService.getUserById(id);
        if (user.isPresent()) {
            return new ResponseEntity<>(user.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Create a new user
    @PostMapping
    public ResponseEntity<Signup> createUser(@RequestBody Signup signup) {
        Signup createdUser = signupService.createUser(signup);
        return new ResponseEntity<>(createdUser, HttpStatus.CREATED);
    }

    // Update a user by ID
    @PutMapping("/{id}")
    public ResponseEntity<Signup> updateUser(@PathVariable Long id, @RequestBody Signup updatedUser) {
        Signup user = signupService.updateUser(id, updatedUser);
        if (user != null) {
            return new ResponseEntity<>(user, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Delete a user by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        if (signupService.deleteUser(id)) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
