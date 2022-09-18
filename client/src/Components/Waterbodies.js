import React, { useEffect, useState, Suspense } from 'react'

import axios from 'axios';
import DataTable, { createTheme } from "react-data-table-component";
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

  const [countries, setCountries] = useState([]);

  const getCountries = async () => {
    return axios({
      method: 'get',
      url: `http://localhost:3001/api/observation`,
      withCredentials: false,
    }).then((response) => response.data.data)
      .catch((error) => console.warn(error));
  }
  // area,contamination,id,improvement,location,major_contamination,quantity,rank,tags

  const columns = [
    {
      name: "Index",
      selector: (row) => row.id,
      sortable: true
    },
    {
      name: "city",
      selector: (row) => row.location,
      sortable: true
    },
    {
      name: "Area Name",
      selector: (row) => row.area,
      sortable: true
    },
    {
      name: "major contamination",
      selector: (row) => row.major_contamination,
      sortable: true
    },
    {
      name: "contamination",
      selector: (row) => row.contamination,
      sortable: true
    },
  ]

  useEffect(() => {
    getCountries().then((data) => {
      setCountries(data);
    })
  }, []);

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