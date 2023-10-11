package com.example.demo.entity;


	
	import jakarta.persistence.Entity;
	import jakarta.persistence.GeneratedValue;
	import jakarta.persistence.GenerationType;
	import jakarta.persistence.Id;
	import jakarta.persistence.Table;


	@Entity 
	@Table(name="virtualjob")
	
		public class SignupEntity {

		@Id
		@GeneratedValue(strategy=GenerationType.IDENTITY)
		private Long id;
		private String fullName;
	 
	    private String email;
	    private String password;
		public SignupEntity(Long id, String fullName,String email,String password) {
			super();
			this.id = id;
			this.fullName = fullName;
		
			this.email = email;
			this.password = password;
		}
	    public SignupEntity()
	    {
	    	
	    }
	    public Long getid() {
			return id;
		}
		public void setid(Long id) {
			this.id = id;
		}
		public String getfullName() {
			return fullName;
		}
		public void setfullName(String fullName) {
			this.fullName = fullName;
		}
		
		
		public String getemail() {
			return email;
		}
		public void setemail(String email) {
			this.email = email;
		}
		public String getpassword() {
			return password;
		}
		public void setpassword(String password) {
			this.password = password;
		}
	    
	
}