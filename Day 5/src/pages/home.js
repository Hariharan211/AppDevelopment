import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import Navbar from './navbar';
import './home.css';

 function Home() {
    const nav= useNavigate()
       const routelogin=()=>{
        nav('/Login')}
        
  return (
    <div >
    <Navbar/>
    <div className="body">
   <h2>FutureProspect Fair</h2>
    </div>
    </div>
  )
}
export default Home;
