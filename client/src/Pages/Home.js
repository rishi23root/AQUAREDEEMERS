import React from 'react'



import "../Style/variable.css";
import "../Style/commonclasses.css";

import "./Home.css";  
import Maps from '../Components/Maps';
import Navbar from '../Components/Navbar';
import Middlepart from '../Components/Middlepart';



function Home() {  



  return (
  <div  className='background' >
    <div className='nav-section'>
        <Navbar/> 
        <Maps/>
    </div>
    <Middlepart/>
      
  </div>
  )
}

export default Home;