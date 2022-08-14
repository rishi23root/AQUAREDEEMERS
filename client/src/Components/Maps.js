import React from 'react';
import "./Maps.css";

import SearchSharpIcon from '@mui/icons-material/SearchSharp';

const Maps = () => {
  return (
    <div className='absolute-center vertical-align'>
        <div>
            maps
        </div>  
        <div className='searchbar absolute-center'>
            <SearchSharpIcon className='search-position'/>
            <input type="text" placeholder='Search ....' id='search' />
        </div>
    </div>
  )
}

export default Maps