// Navbar.js
import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <div className="navbar">
    <div className="navbar-heading">
        <h1>JOB SEEKERS</h1>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/jobs">Companies</a></li>
        <li><a href="/job-vacancy">Job Vacancy</a></li>
        <li><a href="/interviews">Interviews</a></li>
        <li><a href="/about-us">About Us</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
      </div>
    </div>
  );
}

export default Navbar;
