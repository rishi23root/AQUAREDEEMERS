import React from 'react'
import { Card, CardActionArea, CardContent, Typography } from '@mui/material';



const DashboardCard1 = () => {
    return (
        <>
            <div className='card-component'>
                <Typography variant='body1' className='white'>Identification </Typography>
                <Card style={{ background: "#282C35", color: "white", }} sx={{ maxWidth: 245, boxShadow: 5 }} className="dashboard-card">
                    <CardActionArea>
                        <CardContent >
                            <div className='flex-col'>
                                <Typography gutterBottom variant="body2" >
                                    List of particle
                                </Typography>
                                <Typography gutterBottom variant="body2" >
                                    <b> PVC,PA,
                                        <br></br>
                                        PMC,PMMA</b>
                                </Typography>
                            </div>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
            <div className='card-component'>
                <Typography variant='body1' className='white'>Removal</Typography>
                <Card style={{ background: "#282C35", color: "white", }} sx={{ maxWidth: 245, boxShadow: 5 }} className="dashboard-card">
                    <CardActionArea>
                        <CardContent >
                            <div className='flex-col'>
                                <Typography gutterBottom variant="body2" >
                                    Contamination
                                </Typography>
                                <Typography gutterBottom variant="body2" >
                                    <b>4K1</b>
                                </Typography>
                            </div>
                            <div className='flex-col'>
                                <Typography gutterBottom variant="body2" >
                                    Removal technique
                                </Typography>
                                <Typography gutterBottom variant="body2" >
                                    500ml
                                </Typography>
                            </div>
                            <div className='flex-col'>
                                <Typography gutterBottom variant="body2" >
                                    Efficiency
                                </Typography>
                                <Typography gutterBottom variant="body2" >
                                    4K19
                                </Typography>
                            </div>
                            <div className='flex-col'>
                                <Typography gutterBottom variant="body2" >
                                    Description
                                </Typography>
                                <Typography gutterBottom variant="body2" >
                                    4K19
                                </Typography>
                            </div>
                            <div className='flex-col'>
                                <Typography gutterBottom variant="body2" >
                                    Doi
                                </Typography>
                                <Typography gutterBottom variant="body2" >
                                    4K19
                                </Typography>
                            </div>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </>
    )
}

export default DashboardCard1;