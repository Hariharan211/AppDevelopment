import React from 'react'
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectUser } from './Redux/Userslice';
import {login} from "./Redux/Userslice"

import '../assets/css/login.css';
function Login() {
   
        const  [email, setEmail] =  useState('');
        const  [Password, setPassword] =  useState('');
        const [errors,setErrors]=useState({});
        const dispatch = useDispatch();
        const user = useSelector(selectUser)
        
        
        const nav= useNavigate();
        const routeregister=()=>{
          nav('/Signup')
        }
        
        const handleSubmit = (e) =>
        {
          e.preventDefault();
          const validationErrors = {};
      
          if (!email.trim()) {
            validationErrors.email = "username is required";
          }
          if (!Password.trim()) {
            validationErrors.Password = "Password is required";
          } else if (Password.length < 6) {
            validationErrors.Password = "Password should be at least 6 characters";
          }
      
          setErrors(validationErrors);
      
          if (Object.keys(validationErrors).length === 0) {
            dispatch(login(email))
            nav('/');
          }
      
       }
  return (
    <div className='center'>
      <form onSubmit={handleSubmit}>
      <h2>Login</h2>
        <div className='email'>
        <label>
        Username
        <input type="name"  onChange={(a) => setEmail(a.target.value)} />
        </label>
        <h6>{errors.email && <span>{errors.email}</span>}</h6>
        </div>
        <div className='password'>
        <label>
        Password
        <input type="name" value={Password} onChange={(a) => setPassword(a.target.value)} />
        </label>
        <h6>{errors.Password && <span>{errors.Password}</span>}</h6>
        </div>
        <div className='submitbutton'>
        <button type="submit"> Submit </button>
        <p className='p'>if not have an account?
        </p>
        <button type='submit' onClick={routeregister} >Register </button>
        </div>
      </form>
      
    </div>
  )
}

export default Login