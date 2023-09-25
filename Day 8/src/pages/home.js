import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import Navbar from './navbar';
import JobFairInfo from './jobfairinfo';

import Footer from './footer';
import '../assets/css/home.css';





 function Home() {
    const nav= useNavigate()
       const routelogin=()=>{
        nav('/Login')}
        
  return (
    <div>
    <Navbar/>
   
    <div className='home-grid'>
    <div className='home-side'>
   
    </div>
    <div className="home-body">
   
   <h3></h3>
   <JobFairInfo/>
  <div className='image'></div>
   
   </div>
   </div>
   <Footer/>
   </div>
  )
}
export default Home;
