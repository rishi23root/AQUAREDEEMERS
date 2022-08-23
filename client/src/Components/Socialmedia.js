import React from 'react';

import "../Style/componets/Socialmedia.css";
import LanguageIcon from '@mui/icons-material/Language';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Typography } from '@mui/material';


const Socialmedia = () => {
  return (
    <div className='social-bar'>
        <div className='absolute-center box'>
            <LanguageIcon/>
            <Typography >DRIBBLE</Typography>
        </div>
        <div className='absolute-center box'>
            <InstagramIcon/>
            <Typography >INSTAGRAM</Typography>
        </div>
        <div className='absolute-center box'>
            <YouTubeIcon/>
            <Typography >YOUTUBE</Typography>
        </div>
        <div className='absolute-center box'>
            <FacebookIcon/>
            <Typography >FACEBOOK</Typography>
        </div>
        <div className='absolute-center box'>
            <TwitterIcon/>
            <Typography >TWITTER</Typography>
        </div>
    </div>
  )
}

export default Socialmedia