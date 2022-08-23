import React from 'react';
import "../Style/componets/Navbar.css";
import Home from "../Pages/Home"
import "../Style/global/commonclasses.css"


import { Button, Link} from '@mui/material';



const Navbar= () => {
  return (
    <div className='top-navbar container'>
        <div className='logoname absolute-center cur-po' src={Home}> 
            <h4> AQUAREDEEMERS</h4>
        </div>
        <div className='cur-po absolute-center space-button '>
            <Link href={"../dashboard"}  style={{color:"white"}}>DASHBOARD</Link>
            <Button src="../../login"  className='button-space' style={{color:"white"}} >Logout | Signup</Button>
        </div>

    </div>
    )
}

export default Navbar