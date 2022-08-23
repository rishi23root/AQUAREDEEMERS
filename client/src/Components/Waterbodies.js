import React, { useEffect, useState } from 'react'

import  axios  from 'axios';
import DataTable, { createTheme }  from "react-data-table-component";
import "../Style/componets/Waterbodies.css";



const Waterbodies = () => {
createTheme('solarized', {
    text: {
      primary: '#FFFFFF',
      secondary: '#2aa198',
    },
    background: {
      default: "rgb(14, 15, 35)",
    },
  }, 'dark');

  const [countries,setCountries]= useState([0]);
  const getCountries = async () => {
      try{
        const response = await axios.get('https://restcountries.com/v3.1/all')
        setCountries(response.data);
      }catch(error){
        console.log(error);
      }
  };
  const columns = [
    {
      name:"Country Rank",
      selector:(row) => row.rank,
       sortable: true
    },
    {
      name:"name",
      selector:(row) => row.nativeName,
       sortable: true
    },
    {
      name:"Country Name",
      selector:(row) => row.region,
      sortable: true
    },
    {
      name:"Area name",
      selector:(row) => row.capital,
      sortable: true
    },
    {
      name:"Country flag",
      selector:(row) =><img width={50} height={50} src={row.flag}/>,
    }
  ]

  useEffect(() => {
    getCountries();
  },[]);

  return (
    <div id="tab">
      <DataTable 
      title="Area Stats" 
      columns={columns} 
      data={countries} 
       pagination
      fixedHeader
      fixedHeaderScrollHeight='400px'
      highlightOnHover
      actions={
        <button className='btn btn-info'>Export</button>}
      theme="solarized"
        />
    </div>
  )
}

export default Waterbodies;


