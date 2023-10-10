// LoginService.java
package com.example.demo.service;

import java.util.List;

import com.example.demo.entity.LoginEntity;

public interface LoginService {
    LoginEntity getUserByUsername(String username);

	void deleteUser(Long id);

	List<LoginEntity> getAllUsers();

	LoginEntity updateUser(Long id, LoginEntity user);

	LoginEntity createUser(LoginEntity user);
}
