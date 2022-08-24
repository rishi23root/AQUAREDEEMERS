import React from 'react';
import Plot from 'react-plotly.js';
import Navbar from '../Components/Navbar';
import "../Style/pagee/dashboard.css";
import "../Style/global/variable.css";
import "../Style/global/commonclasses.css";
import Image from "../assets/images/ftir.png" 
import Waterbodies from '../Components/Waterbodies';
import DashboardCard from '../Components/DashboardCard';



const Dashboard = () => {
  return (
    <div className='background'>
        <div>
            <div>
                <Navbar/>
            </div>
                <div  className='dashboard-container'>
                <div className='dashboard-left-side'>
                <img src={Image} className=" dashboard-image"/>
                <Plot 
                data={[
                    {
                        x:["Jan", "Feb", "March"," Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"],
                        y:[50, 45, 55, 65, 75, 79, 72, 67, 65, 63 ,62, 60],
                        type: 'scatter',
                        name:"spline",
                        line:{shape : "spline"},
                        mode:"lines",
                        line: {
                            color: 'lightblue',
                            width: 2
                        }
                    },
                    {
                        x:["Jan", "Feb", "March"," Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"],
                        y:[40, 35, 44, 56, 58, 65, 69, 67, 64, 62 ,67, 69],
                        type: 'scatter',
                        mode:"lines",
                        line: {
                            color: 'yelow',
                            width: 2
                        }
                    },
                    {
                        x:["Jan", "Feb", "March"," Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"],
                        y:[30, 25, 35, 45, 55, 69, 42, 47, 54, 57 ,62, 67],
                        type: 'scatter',
                        mode:"lines",
                        line: {
                            color: 'lightgreen',
                            width: 2
                        }
                    },
                    {
                        x:["Jan", "Feb", "March"," Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"],
                        y:[40, 50, 65, 75, 62, 66, 76, 66, 58, 59, 63, 67],
                        type: 'scatter',
                        mode:"lines",
                        line: {
                            color: 'purple',
                            width: 2
                        }
                    }
                ]}
                layout={{
                    width:800 ,
                    height:500,
                    title: "Graph ",
                    plot_bgcolor:"rgb(27, 28, 55)",
                    paper_bgcolor:"rgb(27, 28, 55)", 
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
                <div className='dashboard-right-side'>
                    <div className='row1'>
                        <DashboardCard/>
                    </div>
                    <div className='row1'>
                        <DashboardCard/>
                    </div>
                    <div className='row1'>
                        <DashboardCard/>
                    </div>
                </div>
            </div>
            <div className='absolute-center'>
                <Waterbodies/>
            </div>
        </div>
    </div>
  )
}

export default Dashboard;