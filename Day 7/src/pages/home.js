import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import Navbar from './navbar';
import Footer from './footer';
import JobFairInfo from './jobfairinfo';
import FeaturedCompanies from './featuredcom';
import '../assets/css/home.css';
import Sidebar from './sidebar';

 function Home() {
    const nav= useNavigate()
       const routelogin=()=>{
        nav('/Login')}
        
  return (
    <div >
    <Navbar/>
    <div className='home-grid'>
    <div className='home-side'>
    <Sidebar/>
    </div>
    <div className="home-body">
   <h2>FutureProspect Fair</h2>
   <h3></h3>
   <JobFairInfo/>
   <FeaturedCompanies/>
   <Footer/>
   </div>
    </div>
    </div>
  )
}
export default Home;
