import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import '../assets/css/signup.css';

function Signup() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');
  const [errors,setErrors]=useState('{}');
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
  
    if(!fullName.trim()){
      validationErrors.fullName="Username is required";
    }
    if (!email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = "Email is not valid";
    }
    if (!password.trim()) {
      validationErrors.password = "Password is required";
    } else if (password.length < 6) {
      validationErrors.password = "Password should be at least 6 characters";
    }
    if(!contactNo.trim()){
      validationErrors.contactNo = "Contact number is required";
    }
    if(!address.trim()){
      validationErrors.address = "Address is required";
    }
    if(!gender.trim()){
      validationErrors.gender = "Please select gender";
    }
    setErrors(validationErrors);
      
          if (Object.keys(validationErrors).length === 0) {
            nav('/login');
      
          }
  }
  const nav=useNavigate()
  const routeLogin =()=>{
    nav('/login');
    
   const handleSubmit=(e)=>{

    e.preventDefault();
   }
  
    
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Contact Number:', contactNo);
    console.log('Address:', address);
    console.log('Gender:', gender);
  };

  return (
    <div className="center">
      <form onSubmit={handleSubmit} className="signup-form">
      <h2>Signup</h2>
        <div className="form-group">
          <label htmlFor="fullName">Full Name<h6>{errors.fullName && <span>{errors.fullName}</span>}</h6></label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email<h6>{errors.email && <span>{errors.email}</span>}</h6></label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password<h6>{errors.password && <span>{errors.password}</span>}</h6></label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactNo">Contact Number<h6>{errors.contactNo && <span>{errors.contactNo}</span>}</h6>
          </label>
          <input
            type="text"
            id="contactNo"
            value={contactNo}
            onChange={(e) => setContactNo(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address<h6>{errors.address && <span>{errors.address}</span>}</h6></label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender<h6>{errors.gender && <span>{errors.gender}</span>}</h6></label>
          <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button type="submit" >Sign Up</button>
       
      </form>
    </div>
  );
}

export default Signup;