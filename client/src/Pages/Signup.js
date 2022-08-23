import { Box, Button, Link, TextField, Typography } from '@mui/material';
import React from 'react';
import "../Style/pagee/Signup.css";

import SignupImage from "../assets/images/signup-image.png";


const Signup = () => {
  return (
    <div className='vertical-align container-box'>
        <div className='leftside'>
            <img src={SignupImage} alt='Signup image' className='signup-image '/>
            <Typography className='overlap-text'>Signup </Typography>
        </div>
        <div className='rightcontainer '>
            <form>
                <Box display="flex" flexDirection={"column"}>
                    <Typography variant='h2' fontWeight="medium" fontFamily='"Apple Color Emoji"' bold text="bold" color="black"> Welcome</Typography>
                    <Typography variant='h4' className='inactive-color' sx={{mb:4 }}> Let's   sign you up quickly</Typography>
                    <TextField className='textfield-size' label="Enter your Name" sx={{mb:2,}} />
                    <TextField className='textfield-size' label="Enter your Email" sx={{mb:2,}} />
                    <TextField className='textfield-size' label="Enter your Password" sx={{mb:2,}}/>
                    <TextField className='textfield-size' label="confirm your Password" sx={{mb:2,}}/>
                    <Box display="flex" flexDirection={"rows"} justifyContent="space-between" width={"80%"}>
                        <Button variant='contained' size='large' >SIGNUP</Button>
                            <Link href={"../Login"} fontWeight="bold" >Login</Link>
                    </Box>
                </Box>
            </form>
        </div>
    </div>
  )
}

export default Signup;