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
import { Box, Button, Link } from '@mui/material';
import CsvFile from "../Components/CsvFile";



const Dashboard = () => {
    const [FTIR, setFTIR] = useState(true);
    const [RamanSpectroScopy, setRamanSpectroScopy] = useState(true);

    const handleChange = (data) => {
        if (data == "FTIR") {
            if (FTIR == true) {
                console.log(data, "our value")
            }
            setFTIR(!FTIR)
        }
        if (data == "RamanSpectroScopy") {
            {
                if (RamanSpectroScopy == true) {
                    console.log(data, "our value")
                }
            }
            setRamanSpectroScopy(!RamanSpectroScopy)
        }
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
                            <label className="cur-po space-checkbox"><input type="checkbox" value={FTIR} on change={() => handleChange("FTIR")} />FTIR</label>
                            <label className="cur-po"><input type="checkbox" value={RamanSpectroScopy} on change={() => handleChange("RamanSpectroScopy")} />RamanSpectroScopy</label>
                            <Box sx={{ mb: 2 }}>
                                <ImageUpload
                                    className=" dashboard-image"
                                />
                            </Box>
                            <Box sx={{ mb: 2 }}>
                                <CsvFile
                                    className=" dashboard-image"
                                />
                            </Box>

                            {/*<img src={Image} className=" dashboard-image"/>*/}
                        </div>
                        <div>
                            <Plot
                                data={[
                                    {
                                        x: ["Jan", "Feb", "March", " Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"],
                                        y: [50, 45, 55, 65, 75, 79, 72, 67, 65, 63, 62, 60],
                                        type: 'scatter',
                                        name: "PVC",
                                        line: { shape: "spline" },
                                        mode: "lines",
                                        line: {
                                            color: 'lightblue',
                                            width: 2
                                        }
                                    },
                                    {
                                        x: ["Jan", "Feb", "March", " Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"],
                                        y: [40, 35, 44, 56, 58, 65, 69, 67, 64, 62, 67, 69],
                                        type: 'scatter',
                                        name: "PVF",
                                        mode: "lines",
                                        line: {
                                            color: 'yelow',
                                            width: 2
                                        }
                                    },
                                    {
                                        x: ["Jan", "Feb", "March", " Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"],
                                        y: [30, 25, 35, 45, 55, 69, 42, 47, 54, 57, 62, 67],
                                        type: 'scatter',
                                        mode: "lines",
                                        name: "PMMA",
                                        line: {
                                            color: 'lightgreen',
                                            width: 2
                                        }
                                    },
                                    {
                                        x: ["Jan", "Feb", "March", " Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"],
                                        y: [40, 50, 65, 75, 62, 66, 76, 66, 58, 59, 63, 67],
                                        type: 'scatter',
                                        mode: "lines",
                                        name: "PA",
                                        line: {
                                            color: 'purple',
                                            width: 2
                                        }
                                    }
                                ]}
                                layout={{
                                    width: 700,
                                    height: 500,
                                    title: "Graph ",
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
                        <div className='btn-ali absolute-center'>
                            <Link style={{ borderRadius: "3rem", color: "white", textDecoration: 'none', border: "1px solid white", width: "8rem", padding: "8px", justifyContent:"center" }} href={"../dashboard1"} sx={{ mb: 3 }} className='button-right-side cur-po btn-size' >Previous Data</Link>
                        </div>
                        <div className='dashboard-right-side'>

                            <div className='row1'>
                                <DashboardCard />
                            </div>
                            <div className='row1'>
                                <DashboardCard1 />
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