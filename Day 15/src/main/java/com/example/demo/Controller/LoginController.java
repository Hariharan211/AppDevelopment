// LoginController.java
package com.example.demo.Controller;

import com.example.demo.entity.LoginEntity;
import com.example.demo.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/login")
public class LoginController {

    private final LoginService loginService;

    @Autowired
    public LoginController(LoginService loginService) {
        this.loginService = loginService;
    }

    // Create (Register) a new user
    @PostMapping("/register")
    public ResponseEntity<LoginEntity> createUser(@RequestBody LoginEntity user) {
        LoginEntity createdUser = loginService.createUser(user);
        return ResponseEntity.ok(createdUser);
    }

    // Read (Retrieve) a user by username
    @GetMapping("/{username}")
    public ResponseEntity<LoginEntity> getUserByUsername(@PathVariable String username) {
        LoginEntity user = loginService.getUserByUsername(username);
        if (user != null) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Read (Retrieve) all users
    @GetMapping("/all")
    public ResponseEntity<List<LoginEntity>> getAllUsers() {
        List<LoginEntity> users = loginService.getAllUsers();
        return ResponseEntity.ok(users);
    }

    // Update (Change password) for a user
    @PutMapping("/{id}")
    public ResponseEntity<LoginEntity> updateUser(@PathVariable Long id, @RequestBody LoginEntity user) {
        LoginEntity updatedUser = loginService.updateUser(id, user);
        if (updatedUser != null) {
            return ResponseEntity.ok(updatedUser);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Delete a user by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        loginService.deleteUser(id);
        return ResponseEntity.noContent().build();
    }
}
