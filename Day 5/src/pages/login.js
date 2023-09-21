import React from 'react'
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'

import './login.css';
function Login() {
   
        const  [email, setEmail] =  useState('');
        const  [Password, setPassword] =  useState('');
        const [errors,setErrors]=useState({});
        
       const handleSubmit = (e) =>
       {
        e.preventDefault();
       
       }
       
       const nav= useNavigate();
      const routeregister=()=>{
        nav('/Signup')
       }
       const routehome=(a)=>{
       
          a.preventDefault();
          const validationErrors = {};
      
          if (!email.trim()) {
            validationErrors.email = "Email is required";
          } else if (!/\S+@\S+\.\S+/.test(email)) {
            validationErrors.email = "Email is not valid";
          }
          if (!Password.trim()) {
            validationErrors.Password = "Password is required";
          } else if (Password.length < 6) {
            validationErrors.Password = "Password should be at least 6 characters";
          }
      
          setErrors(validationErrors);
      
          if (Object.keys(validationErrors).length === 0) {
            nav('/home');
      
          }
      
       }
  return (
    <div className='center'>
      <form onSubmit={handleSubmit}>
      <h2>Login</h2>
        <div className='email'>
        <label>
        Email
        <input type="email" value={email} onChange={(a) => setEmail(a.target.value)} />
        </label>
        <h6>{errors.email && <span>{errors.email}</span>}</h6>
        </div>
        <div className='password'>
        <label>
        Password
        <input type="Password" value={Password} onChange={(a) => setPassword(a.target.value)} />
        </label>
        <h6>{errors.Password && <span>{errors.Password}</span>}</h6>
        </div>
        <div className='submitbutton'>
        <button onClick={routehome}>Submit </button>
        <p>if not have an account
        </p>
        <button type='submit' onClick={routeregister} >Register </button>
        </div>
      </form>
      
    </div>
  )
}

export default Login