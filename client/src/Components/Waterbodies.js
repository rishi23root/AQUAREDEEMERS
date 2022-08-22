import React, { useEffect, useState } from 'react'

import  axios  from 'axios';
import DataTable, { createTheme }  from "react-data-table-component";
import "./Waterbodies.css";



const Waterbodies = () => {
createTheme('solarized', {
    text: {
      primary: '#FFFFFF',
      secondary: '#2aa198',
    },
    background: {
      default: "rgb(33, 34, 73)",
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




//  return (
//           <table>
//                 <tr>
//                     <th>Id</th>
//                     <th>Rank</th>
//                     <th>Location</th>
//                     <th>Area</th>
//                     <th>Contamination band</th>
//                     <th>Major contaminants</th>
//                     <th>Improvement over the period</th>
//                 </tr>
//             <thead>
//               { 
//                 // countries && countries.length> 0 ?
//                 countries.map((countries) =>( 
//                 <tr > 
//                     <td>{countries.id}</td>
//                     <td>{countries.rank}</td>
//                     <td>{countries.location}</td>
//                     <td>{countries.area}</td>
//                     <td>{countries.contamination}</td>
//                     <td>{countries.major_contamination}</td>
//                     <td>{countries.improvement}</td>
//                 </tr>
//                 )
//                 // :"Loading"
//     )}
//             </thead>
//         </table>
                
//     </div>
//   )
// }

// export default Waterbodies;

// import React, { useEffect, useState } from 'react'
// import Table from "./Table";


// import "./Waterbodies.css";


// const Waterbodies = () => {

//   const [contries, setCountries] = useState([]);

//   useEffect(() => {
//     fetch("https://extendsclass.com/jsonstorage/ea971b28c939").then
//       (response => response.json())
//       .then(data => {contries(data);
//       })
//   },[]);

//   return (
//     <div>
//         <Table />
//     </div>
//   );
// }

// export default Waterbodies;