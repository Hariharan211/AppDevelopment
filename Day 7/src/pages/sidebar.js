// Sidebar.js
import React from 'react';
import '../assets/css/sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      {/* Sidebar content */}
      <ul>
        <li><a href="/">Dashboard</a></li>
        <li><a href="/profile">Profile</a></li>
        <li><a href="/jobs">Jobs</a></li>
        <li><a href="/settings">Settings</a></li>
      </ul>
    </aside>
  );
}

export default Sidebar;
