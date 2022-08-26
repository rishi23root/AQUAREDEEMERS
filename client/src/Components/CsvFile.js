// import React, { useState } from 'react';
// import Plot from 'react-plotly.js';

// function App() {

//     const [columns, setColumns] = useState([]);
//     const [data, setData] = useState([]);

//     // handle file upload
//     const handleFileUpload = e => {
//         const readUserData = async (filePath) => {
//             const csvFilePath = filePath
//             const csv = await csvtojson({
//                 noheader: true,
//                 delimiter: ','
//             }).fromFile(csvFilePath)

//             const field1 = []
//             const field2 = []

//             // convert json field data to array
//             csv.forEach(element => {
//                 field1.push(element.field1)
//                 field2.push(element.field2)
//             })
//             return { field1, field2 }

//         }

//         readUserData('./util/testdata.csv').then(data => {
//             console.log(typeof data)
//             console.log(data)
//         }).catch(err => {
//             console.log(err)
//         })
//     }

//     return (

//         <div>
//             <input
//                 type="file"
//                 accept="csv"
//                 onChange={handleFileUpload}
//             />
//             <Plot
//                 layout={{
//                     width: 700,
//                     height: 500,
//                     title: "Graph ",
//                     plot_bgcolor: "rgb(27, 28, 55)",
//                     paper_bgcolor: "rgb(27, 28, 55)",
//                     xaxis: {
//                         showgrid: false,
//                         zeroline: false,
//                         color: "white"
//                     },
//                     yaxis: {
//                         color: "white"
//                     },
//                 }}
//             />
//         </div>
//     );
// }

// export default App;