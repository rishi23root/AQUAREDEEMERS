import { Box } from '@mui/material';
import React, { useState } from 'react';
import "../Style/componets/Maps.css";
import Map , {FullscreenControl, GeolocateControl, Marker, NavigationControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';



function Maps  ()  {
  const [lng, setLng] = useState(78.990593);
  const [lat, setLat] = useState(20.740121);

  console.log(lng,lat);
  return (
    <div className='absolute-center  map-style'>
      <Box style={{height:"40vh"}}>
        <div>
            <Map
            mapboxAccessToken='pk.eyJ1Ijoic2lyaW91c2JsYWNrIiwiYSI6ImNsNzR3ZnM4bDB4enEzb21hMzFiZWoya2EifQ.Hwya9NlfnwQDUw2CFMeC2Q'
              style={{
                 width:"119rem",
                 height:"90rem",
                 border:'1px solid black',
              }}
              initialViewState={{
                longitude:lng,
                latitude: lat,
                zoom: 3.5
              }}
              mapStyle="mapbox://styles/mapbox/dark-v10"
              
            >
            <Marker
              longitude={lng}
              latitude={lat}
            />
            <NavigationControl
              position='top-left'
            />
            <FullscreenControl/>
            <GeolocateControl/>
            </Map>
        </div>  
      </Box>
    </div>
  )
}

export default Maps