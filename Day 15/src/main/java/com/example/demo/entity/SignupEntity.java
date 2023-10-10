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
		private String firstName;
	    private String lastName;
	    private String email;
	    private String password;
		public SignupEntity(Long id, String firstName, String lastName, String email,String password) {
			super();
			this.id = id;
			this.firstName = firstName;
			this.lastName = lastName;
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
		public String getfirstName() {
			return firstName;
		}
		public void setfirstName(String firstName) {
			this.firstName = firstName;
		}
		
		public String getlastName() {
			return lastName;
		}
		public void setlastName(String lastName) {
			this.lastName = lastName;
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