import React, { useState } from 'react'
import Second from './Second';

import "./Statistic.css"
import Third from './Third';
// import Graphs from "./Graphs";



const Statistic = () => {
  return (
    <div className='middlePart'>
      <div className='Statistic-leftSide'>
          <div className='app-container'>
              <Second/>
              <Third/>
          </div>       
      </div>
      <div className='rightSide'>
          {/*<Graphs/>*/}
      </div>
    </div>
  )
};

export default Statistic;