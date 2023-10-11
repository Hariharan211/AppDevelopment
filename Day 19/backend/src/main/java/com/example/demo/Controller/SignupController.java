package com.example.demo.Controller;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.entity.SignupEntity;
import com.example.demo.repository.SignupRepository;


@CrossOrigin(origins = "http://localhost:3000") 
@RestController
@RequestMapping("/RegisterEntity")
public class SignupController {

    @Autowired
    private SignupRepository registerRepository; // Inject the repository

    @GetMapping(value = "/get")
    public Iterable<SignupEntity> getAllRegisterEntity() {
        return registerRepository.findAll(); // Use the repository's findAll method
    }

    @PostMapping("/post")
    public SignupEntity createData(@RequestBody SignupEntity ad) {
        return registerRepository.save(ad); // Use the repository's save method
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<SignupEntity>> getById(@PathVariable Long id) {
        Optional<SignupEntity> ac = registerRepository.findById(id); // Use the repository's findById method
        return ResponseEntity.ok(ac);
    }

    @PutMapping("/update/{id}")
    public SignupEntity updateRegisterEntityDetails(@RequestBody SignupEntity b, @PathVariable Long id) {
        System.out.println("Changes Made Have Been Successfully Updated");

        b.setid(id); // Correct the method name to setId
        return registerRepository.save(b);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteDetails(@PathVariable Long id) {
        registerRepository.deleteById(id); // Use the repository's deleteById method
        return null;
    }
}