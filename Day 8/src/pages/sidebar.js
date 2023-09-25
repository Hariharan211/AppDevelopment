import React from 'react'
import '../assets/css/sidebar.css';
import Navbar from './navbar';

 function Sidebar() {
  return (
    <div>
    <Navbar/>
    <div className="sidebar">
      <div className="logo">
      </div>
      <ul className="sidebar-menu">
        <li>
          <a href="/">dashboard</a>
        </li>
        <li>
          <a href="/about">jchbcs</a>
        </li>
        <li>
          <a href="/services">Help</a>
        </li>
        {/* Add more sidebar items as needed */}
      </ul>
    </div>
    </div>
  )
}
export default Sidebar;