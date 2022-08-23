import React from 'react'



import "../Style/global/variable.css";
import "../Style/global/commonclasses.css";

import "../Style/pagee/Home.css";  
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
    <div className='overlay'>
      <Middlepart/>
    </div>
  </div>
  )
}

export default Home;