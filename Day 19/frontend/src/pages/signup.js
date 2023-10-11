import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/signup.css';

function Signup() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const nav = useNavigate(); // Get the navigation function

  const handleSubmit = async (e) => {
    e.preventDefault();

    const signup = { fullName, email, password };

    try {
      const response = await fetch("http://localhost:8080/RegisterEntity/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(signup)
      });

      if (response.ok) {
        console.log("New Register added");

        // Navigate to the login page if the signup was successful
        nav('/login');
      } else {
        console.error("Error during registration");
      }
    } catch (error) {
      console.error("Error:", error);
    }
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
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
