import React from 'react'
import { Card, CardActionArea, CardContent, Typography } from '@mui/material';



const DashboardCard1 = ({ requestResults }) => {
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
                                    <b>{requestResults.requestCompleted ? requestResults.ListOfParticles : '- -'}</b>
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
                                    Removal technique
                                </Typography>
                                <Typography gutterBottom variant="body2" >
                                    {requestResults.requestCompleted ? requestResults.RemovalTechnique : '- -'}
                                </Typography>
                            </div>
                            <div className='flex-col'>
                                <Typography gutterBottom variant="body2" >
                                    Efficiency
                                </Typography>
                                <Typography gutterBottom variant="body2" >
                                    {requestResults.requestCompleted ? requestResults.Efficiency : '- -'}
                                </Typography>
                            </div>
                            <div className='flex-col'>
                                <Typography gutterBottom variant="body2" >
                                    vendor
                                </Typography>
                                <Typography gutterBottom variant="body2" >
                                    {requestResults.requestCompleted ? requestResults.Vendor : '- -'}
                                </Typography>
                            </div>

                            <div className='flex-col'>
                                <Typography gutterBottom variant="body2" >
                                    Doi
                                </Typography>
                                <Typography gutterBottom variant="body2" >
                                    <a className='atag' href={requestResults.requestCompleted ? requestResults.LinkDOI : '/dashboard'} target="_blank" rel="noreferrer">
                                        {requestResults.requestCompleted ? 'more info' : '- -'}
                                    </a>
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