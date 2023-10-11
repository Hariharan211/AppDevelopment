import React, { useState } from 'react';
import '../assets/css/aboutus.css'; 
import Navbar from './navbar';
import {Email,Phone,Room} from '@mui/icons-material';
import FacebookIcon from '@mui/icons-material/Facebook'; // Import Facebook icon
import TwitterIcon from '@mui/icons-material/Twitter'; // Import Twitter icon
import InstagramIcon from '@mui/icons-material/Instagram'; 

function AboutUsPage() {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can implement logic here to submit the feedback
    // For this example, we'll just mark it as submitted
    setSubmitted(true);
  };

  return (
    <div>
      <Navbar/>
      <div className="about-us-page">
        <h1>About Us</h1>
        <div className="project-details">
          <h2>Virtual Job Expo</h2>
          <p>
            Welcome to the Virtual Job Expo! We are dedicated to connecting job seekers and employers in an online environment.
            Our mission is to provide a platform where job seekers can explore job opportunities and interact with potential employers.
          </p>
        </div>
        <div className="contact-info">
  <h2>Contact Information</h2>
  <p>
    <Email /> Email: virtualjaobexpo@gmail.com
  </p>
  <p>
    <Phone /> Phone: +91 8667687392
  </p>
  <p>
    <Room /> Address: Coimbatore, Tamilnadu, India
  </p>
</div>
<div className="social-media">
<h2>Follow Us on Social Media</h2>
<ul className="social-icons">
  <li>
    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
      <FacebookIcon /> {/* Add your Facebook link here */}
    </a>
  </li>
  <li>
    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
      <TwitterIcon /> {/* Add your Twitter link here */}
    </a>
  </li>
  <li>
    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
      <InstagramIcon /> {/* Add your Instagram link here */}
    </a>
  </li>
 
 
</ul>
</div>
        
        {/* Feedback form */}
        <div className="feedback-form">
          <h2>Feedback</h2>
          {submitted ? (
            <div className="feedback-submitted">
              <p>Thank you for your feedback!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <textarea
                placeholder="Enter your feedback here..."
                value={feedback}
                onChange={handleFeedbackChange}
                rows="4"
              ></textarea>
              <button type="submit">Submit Feedback</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;
