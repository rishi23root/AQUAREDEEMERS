import React from 'react'
import Chart from './Chart'
import Socialmedia from './Socialmedia'
import Waterbodies from './Waterbodies'
import "../Style/componets/Middlepart.css";
import { Box } from '@mui/material';
import Statistic from './Statistic';




const Middlepart = () => {
  return (
    <div className='overall'>
            <Box className='absolute-center' sx={{mb:5 , mt:10}} style={{ borderRadius:10 }} >
              <Waterbodies/>
            </Box>
          <hr></hr>
          <Box className='absolute-center' sx={{mb:5}}>
          <Statistic/>
        </Box>
          
          
          <hr></hr>
          <div className='chart-size'>
              <Chart/>
          </div>
          <div>
              <Socialmedia/>
          </div>
    </div>
  )
}

export default Middlepart
