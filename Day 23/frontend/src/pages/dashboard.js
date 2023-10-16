import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/css/dashboard.css'


import { Link } from 'react-router-dom';
import Footer from './footer';
import Navbar from './navbar';
import Sidebar from './sidebar';

const JobList = () => {
  
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/auth/jobs/get');
        setJobs(response.data);
      } catch (error) {
        console.error('Error fetching jobs: ', error);
      }
    };
    fetchJobs();
  }, []);

  return (
    <>
    <Navbar/>
    <div className='over'>
    <Sidebar/>
    
    <div className="job-list">
    <h2>Job List</h2>
    {jobs.map((job) => (
      <div className="job-item" key={job.id}>
      <h3 className="job-title">Title: {job.title}</h3>
      <p className="job-description">Description: {job.description}</p>
      <p className="job-location">Location: {job.location}</p>
      <hr />
      </div>
      ))}
      </div>
      <Link to="/postjob">
      <button type='submit' className='search'> post Job </button>
      </Link>
      
    </div>
    <Footer/>
    </>
  );
};

export default JobList;