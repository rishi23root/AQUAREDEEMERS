import React from 'react';
import "./Navbar.css";



import { Button } from '@mui/material';



const Navbar= () => {
  return (
    <div className='top-navbar container'>
        <div className='logoname absolute-center'> 
            <h3> Aquaredeemers</h3>
        </div>
        <div className='cur-po absolute-center space-button '>
            <Button variant='outlined'  className='button-space'>Logout</Button>
        </div>

    </div>
    )
}

export default Navbar