import { Box, Button, Link, TextField, Typography } from '@mui/material';
import React from 'react';
import "../Style/pagee/login.css";

import LoginImage from "../assets/images/login-image.jpg";


const Login = () => {
  return (
    <div className='vertical-align container-box'>
        <div className='leftside'>
            <img src={LoginImage} alt='Login image' className='login-image '/>
            <Typography className='overlap' >Login </Typography>
        </div>
        <div className='rightcontainer '>
            <form>
                    <Box display="flex" flexDirection={"column"}>
                            <Typography variant='h2' fontWeight="medium" fontFamily='"Apple Color Emoji"' bold text="bold" color="black"> Welcome</Typography>
                            <Typography variant='h4' className='inactive-color' sx={{mb:4 }}> Let's   log you in quickly</Typography>
                            <TextField className='textfield-size' label="Enter your Email" sx={{mb:2,}} />
                            <TextField className='textfield-size' label="Enter your Password" sx={{mb:2,}}/>
                        <Box display="flex" flexDirection={"rows"} justifyContent="space-between" width={"80%"} className="content-flex-row" sx={{mb:2, mt:2}} >
                            <Button variant='contained' size='large' >LOGIN</Button>
                            <Typography fontWeight="bold" >don't have an account? </Typography>
                        </Box>
                    <Box display="flex" justifyContent="flex-end" flexDirection="column"  width={"71%"}>
                        <Link href={"../Signup"} fontWeight="bold" >Sign-up</Link>
                    </Box>
                </Box>
            </form>
        </div>
    </div>
  )
}

export default Login;