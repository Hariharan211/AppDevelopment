// Navbar.js
import React from 'react';
import '../assets/css/navbar.css';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout, selectUser } from './Redux/Userslice'
function Navbar() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const email = user.email ;

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
    
  };


  return (
    <div className="navbar">
    <div className="navbar-heading">
        <h1 className='navbar-head'>JOB SEEKERS</h1>
      <ul>
        <li><Link to ="/">Home</Link></li>
        <li><Link to="/companies">Companies</Link></li>
        <li><Link to="/jobvacant">Job Vacancy</Link></li>
        <li><Link to="/interview">Interviews</Link></li>
        <li><Link to="/aboutus">About Us</Link></li>
        <li>
        <div className="actions">
        {email ? (
          <>
          <div>
          <Link onClick={handleLogout}>
          Logout
          </Link>
          </div>
          <p className="nav-welcome"> 
          Welcome, {email}
            </p>
           
          </>
        ) : (
          <>
            <Link to="/login">
                Login

            </Link>
          </>
        )}
      </div>
        </li>

      </ul>
      </div>
    </div>
  );
}

export default Navbar;
