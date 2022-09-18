import { useState } from 'react';
import "../Style/componets/csvFile.css";
import "../Style/global/commonclasses.css";



export default function CsvFile(){
    const [csvFile, setCsvFile] = useState();
    const [csvArray, setCsvArray] = useState([]);
    // [{name: "", age: 0, rank: ""},{name: "", age: 0, rank: ""}]

    const processCSV = (str, delim=',') => {
        const headers = str.slice(0,str.indexOf('\n')).split(delim);
        const rows = str.slice(str.indexOf('\n')+1).split('\n');

        const newArray = rows.map( row => {
            const values = row.split(delim);
            const eachObject = headers.reduce((obj, header, i) => {
                obj[header] = values[i];
                return obj;
            }, {})
            return eachObject;
        })

        setCsvArray(newArray)
    }

    const submit = () => {
        const file = csvFile;
        const reader = new FileReader();

        reader.onload = function(e) {
            const text = e.target.result;
            console.log(text);
            processCSV(text)
        }

        reader.readAsText(file);

        // 
    }

    return(
        <form id='csv-form'>
            <input
                type='file'
                accept='.csv'
                id='csvFile'
                onChange={(e) => {
                    setCsvFile(e.target.files[0])
                }}
            >
            </input>
            <br/>
            <button
                onClick={(e) => {
                    e.preventDefault()
                    if(csvFile)submit()
                }}
                className="btn-choose cur-po "
            >
                Evaluate
            </button>
            <br/>
            <br/>
            {csvArray.length>0 ? 
            <>
                <table>
                    <thead>
                        <th>Wave Number</th>
                        <th>Intensity</th>
                    </thead>
                    <tbody>
                        {
                            csvArray.map((item, i) => (
                                <tr key={i}>
                                    <td>{item.wavenumber}</td>
                                    <td>{item.intensity}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </> : null}
        </form>
    );

}


// import { useState } from 'react'
// import Plot from 'react-plotly.js';

// export default function CsvFile() {
//     const [csvFile, setCsvFile] = useState();

//     const [field1, setfield1] = useState([]);
//     const [field2, setfield2] = useState([]);
//     // [{name: "", age: 0, rank: ""},{name: "", age: 0, rank: ""}]

//     const processCSV = (str, delim = ',') => {
//         const headers = str.slice(0, str.indexOf('\n')).split(delim);
//         const rows = str.slice(str.indexOf('\n') + 1).split('\n');

//         const newArray = rows.map(row => {
//             const values = row.split(delim);
//             const eachObject = headers.reduce((obj, header, i) => {
//                 if (header){
//                     // if (header.start)
//                     // setfield1(arr => arr.push())
//                 }

//                 obj[header] = values[i];
//                 console.log(header, values[i])

//                 console.log(obj.intensity)
//                 return obj;
//             }, {})
//             return eachObject;
//         })

//         // setCsvArray(newArray)
//     }

//     const submit = () => {
//         const file = csvFile;
//         const reader = new FileReader();

//         reader.onload = function (e) {
//             const text = e.target.result;
//             // console.log(text.split(','));
//             processCSV(text)
//         }

//         reader.readAsText(file);
//     }

//     return (
//         <form id='csv-form'>
//             <input
//                 type='file'
//                 accept='.csv'
//                 id='csvFile'
//                 onChange={(e) => {
//                     setCsvFile(e.target.files[0])
//                 }}
//             >
//             </input>
//             <br />
//             <button
//                 onClick={(e) => {
//                     e.preventDefault()
//                     if (csvFile) submit()
//                 }}
//             >
//                 Submit
//             </button>
//             <br />
//             <br />
//             {  /*    { {csvArray.length > 0 ?}
//                 <>
//                     // <table>
//                     //     <thead>
//                     //         <th>Wave number</th>
//                     //         <th>Intensity</th>
//                     //     </thead>
//                     //     <tbody>
//                     //         {
//                     //             csvArray.map((item, i) => (
//                     //                 <tr key={i}>
//                     //                     <td>{item.wavenumber}</td>
//                     //                     <td>{item.intensity}</td>
//                     //                 </tr>
//                     //             ))
//                     //         }
//                     //     </tbody>
//                     // </table>
//                     // <Plot
//                     //     data={[
//                     //         {   csvArray.map((item, i)=>
//                     //             x: [item.wavenumber],
//                     //             y: [item.intensity],
//                     //             type: 'scatter',
//                     //             name: "Wave number , Inteensity",
//                     //             line: { shape: "spline" },
//                     //             mode: "lines",
//                     //             line: {
//                     //                 color: 'lightblue',
//                     //                 width: 2
//                     //             }
//                     //             )
//                     //         },
//                     //     ]}
//                     //     layout={{
//                     //         width: 700,
//                     //         height: 500,
//                     //         title: "Graph ",
//                     //         plot_bgcolor: "rgb(27, 28, 55)",
//                     //         paper_bgcolor: "rgb(27, 28, 55)",
//                     //         xaxis: {
//                     //             showgrid: false,
//                     //             zeroline: false,
//                     //             color: "white"
//                     //         },
//                     //         yaxis: {
//                     //             color: "white"
//                     //         },
//                     //     }}
//                     //     className="plot-graph-position"
//                     // />
                    
//                 </> : null
//             }*/}
//         </form>
//     );

// }