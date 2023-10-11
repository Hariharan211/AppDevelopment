package com.example.demo.service;

	import java.util.List;
	import java.util.Optional;

	import org.springframework.beans.factory.annotation.Autowired;
	import org.springframework.stereotype.Service;

import com.example.demo.entity.SignupEntity;
import com.example.demo.repository.SignupRepository;

	@Service

		public class SignupService {

		@Autowired
		SignupRepository registerRepository;
		
		public List<SignupEntity> getAllRegisterEntity() {
			return registerRepository.findAll();
		}
		
		public SignupEntity getRegisterEntityById(Long RegisterEntityId) {
			Optional<SignupEntity> RegisterEntityOptional = registerRepository.findById(RegisterEntityId);
			return RegisterEntityOptional.orElse(null);
		}
		
		public SignupEntity saveRegisterEntity(SignupEntity RegisterEntity) {
			return registerRepository.save(RegisterEntity);
		}
		
		public void deleteRegisterEntity(Long RegisterEntityId) {
			registerRepository.deleteById(RegisterEntityId);
		}
	}