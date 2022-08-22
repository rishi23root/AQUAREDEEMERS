import React from 'react';
import "../Style/componets/Navbar.css";



import { Button } from '@mui/material';



const Navbar= () => {
  return (
    <div className='top-navbar container'>
        <div className='logoname absolute-center cur-po'> 
            <h4> AQUAREDEEMERS</h4>
        </div>
        <div className='cur-po absolute-center space-button '>
            <Button src="../../login"  className='button-space' style={{color:"white"}} >Logout | Signup</Button>
        </div>

    </div>
    )
}

export default Navbar