package com.example.demo.repository;




	import org.springframework.data.jpa.repository.JpaRepository;


import com.example.demo.entity.SignupEntity;

	

	public interface SignupRepository extends JpaRepository<SignupEntity,Long> {

		

	}