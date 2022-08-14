import React from 'react'
import Navbar from '../Components/Navbar';
import "../Style/variable.css";
import "../Style/commonclasses.css";
import Maps from '../Components/Maps';

function Home() {
  return (
    <div>
        <Navbar/> 
        <Maps/>
    </div>
  )
}

export default Home;