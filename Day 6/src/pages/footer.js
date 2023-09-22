// Footer.js
import React from 'react';
import '../assets/css/footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About Us</h3>
            <p>Learn more about our company and mission.we help to find your dream job for your carrer</p>
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>jobseeker@gmail.com</p>
          </div>
          <div className="footer-section">
            <h3>Company Name</h3>
            <p>JOB SEEKERS</p>
            
          </div>
          <div className="footer-section">
            <h3>Services</h3>
            <ul>
              <li>easy access</li>
              <li>24/7 help Service</li>
              <li>up to date job Vacancy</li>
              {/* Add more services as needed */}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
