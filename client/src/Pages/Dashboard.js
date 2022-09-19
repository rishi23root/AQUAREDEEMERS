import React, { useState } from 'react';
import Plot from 'react-plotly.js';
import Navbar from '../Components/Navbar';
import "../Style/pagee/dashboard.css";
import "../Style/global/variable.css";
import "../Style/global/commonclasses.css";
// import Image from "../assets/images/ftir.png" 
import Waterbodies from '../Components/Waterbodies';
import DashboardCard from '../Components/DashboardCard';
import DashboardCard1 from '../Components/DashboardCard1';
import ImageUpload from "../Components/ImageUpload";
import { Box, } from '@mui/material';
import CsvFile from "../Components/CsvFile";
import axios from 'axios';
import qs from 'qs';



const Dashboard = () => {
    const [SpectroScopyType, setSpectroScopyType] = useState("FTIR");
    const [loading, setLoading] = useState(false);

    const [csvData, setCsvData] = useState({});

    const [requestResults, setRequestResults] = useState({
        intensity: [],
        wavenumber: [],
        filterationMethods: [],
        spectrum_identity: "",
        requestCompleted: false,

        contamination: '0.023g/ml',
        Size: '0.005mm - 0.230mm',
        Quality: 0.89,
        Shape: 'Beads, Planar',

        SampleVolume: '1.15ml',
        NumberOfParticle: 7,
        MostAbundantParticle: 'HDPE',
        ContaminationBand: 'Moderate',

        ListOfParticles: 'HDPE, PVC, PET',

        RemovalTechnique: 'Dynamic Membrane',
        Efficiency: '90%',
        LinkDOI: 'https://doi.org/10.1016/j.scitotenv.2018.01.239',
        Vendor: 'Membrane Group'
    });

    const makeRequest = () => {
        // console.log("request made")
        setLoading(true);
        setTimeout(() => {

            const FormDataTest = qs.stringify({
                type: SpectroScopyType,
                field1: `[${csvData.field1}]`,
                field2: `[${csvData.field2}]`,
            })

            axios.post("http://localhost:3001/api/newTest", FormDataTest, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
                .then((res) => {
                    setRequestResults(ele => {
                        return {
                            ...ele,
                            intensity: res.data.valuePoints.intensity.map((elem) => parseFloat(elem)),
                            wavenumber: res.data.valuePoints.wavenumber.map((elem) => parseFloat(elem)),
                            filterationMethods: res.data.filterationMethods,
                            spectrum_identity: res.data.spectrum_identity,
                            requestCompleted: true,
                        }
                    })
                })
                .catch((err) => {
                    console.log(err)
                })
            setLoading(false);
        }, 3000);



        // console.log(csvData.field1);
        // console.log(FormDataTest);

    }

    return (
        <div className='background-dash'>
            <div>
                <div>
                    <Navbar />
                </div>
                <div className='dashboard-container absolute-center'>
                    <div className='dashboard-left-side  '>
                        <div className=' image-alignment absolute-centre white'>
                            <label className="cur-po space-checkbox">
                                <input type="radio" name="type" onChange={() => setSpectroScopyType("FTIR")} />
                                FTIR
                            </label>
                            <label className="cur-po">
                                <input type="radio" name="type" onChange={() => setSpectroScopyType("RamanSpectroScopy")} />
                                RamanSpectroScopy
                            </label>
                            <Box sx={{ mb: 2 }}>
                                <ImageUpload
                                    className=" dashboard-image"
                                />
                            </Box>
                            <Box sx={{ mb: 2 }}>
                                <CsvFile setCsvData={setCsvData}
                                    className=" dashboard-image"
                                />
                            </Box>
                            <button
                                className='submitBtn'
                                onClick={makeRequest}
                            >
                                {loading ? <>loading..</> :'Evaluate'}
                            </button>

                            {/*<img src={Image} className=" dashboard-image"/>*/}
                        </div>
                        <div>
                            <Plot
                                data={[
                                    {
                                        x: csvData.field1,
                                        y: csvData.field2,
                                        type: 'scatter',
                                        name: "Uploaded Data",
                                        mode: "lines",
                                        line: {
                                            color: 'lightblue',
                                            width: 2
                                        }
                                    },
                                    {
                                        x: requestResults.intensity,
                                        y: requestResults.wavenumber,
                                        type: 'scatter',
                                        name: requestResults.spectrum_identity,
                                        mode: "lines",
                                        line: {
                                            color: 'red',
                                            width: 3
                                        }
                                    },
                                    // {
                                    //     x: ["Jan", "Feb", "March", " Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"],
                                    //     y: [30, 25, 35, 45, 55, 69, 42, 47, 54, 57, 62, 67],
                                    //     type: 'scatter',
                                    //     mode: "lines",
                                    //     name: "PMMA",
                                    //     line: {
                                    //         color: 'lightgreen',
                                    //         width: 2
                                    //     }
                                    // },
                                    // {
                                    //     x: ["Jan", "Feb", "March", " Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"],
                                    //     y: [40, 50, 65, 75, 62, 66, 76, 66, 58, 59, 63, 67],
                                    //     type: 'scatter',
                                    //     mode: "lines",
                                    //     name: "PA",
                                    //     line: {
                                    //         color: 'purple',
                                    //         width: 2
                                    //     }
                                    // }
                                ]}
                                layout={{
                                    width: 700,
                                    height: 500,
                                    title: "Spectro Scopy",
                                    plot_bgcolor: "rgb(27, 28, 55)",
                                    paper_bgcolor: "rgb(27, 28, 55)",
                                    xaxis: {
                                        showgrid: false,
                                        zeroline: false,
                                        color: "white"
                                    },
                                    yaxis: {
                                        color: "white"
                                    },
                                }}
                                className="plot-graph-position"
                            />
                        </div>
                    </div>
                    <div className='right-side-col vertical-align'>
                        {/* <div className='btn-ali absolute-center'>
                            <Link
                                style={{ borderRadius: "3rem", color: "white", textDecoration: 'none', border: "1px solid white", width: "8rem", padding: "8px", justifyContent: "center" }}
                                href={"../dashboard1"}
                                sx={{ mb: 3 }}
                                className='button-right-side cur-po btn-size' >
                                Previous Data
                            </Link>
                        </div> */}
                        <div className='dashboard-right-side'>
                            <div className='row1'>
                                <DashboardCard requestResults={requestResults} />
                            </div>
                            <div className='row1'>
                                <DashboardCard1 requestResults={requestResults} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='absolute-center padding-style'>
                    <Waterbodies />
                </div>
            </div>
        </div>
    )
}

export default Dashboard;