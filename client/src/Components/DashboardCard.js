import React from 'react'
import { Card, CardActionArea, CardContent, Typography } from '@mui/material';



const DashboardCard = () => {
  return (
    <>
                <div className='card-component'>
                <Typography variant='body1' className='white'>Particles</Typography>
                <Card sx={{ maxWidth: 245 }} className="dashboard-card">
                    <CardActionArea>
                        <CardContent >
                            <div className='flex-col'>
                                <Typography gutterBottom variant="body2" >
                                    Res
                                </Typography>
                                <Typography gutterBottom variant="body2" >
                                    4K1920X1080
                                </Typography>
                            </div>
                            <div className='flex-col'>
                                <Typography gutterBottom variant="body2" >
                                    Film
                                </Typography>
                                <Typography gutterBottom variant="body2" >
                                    500ml
                                </Typography>
                            </div>
                            <div className='flex-col'>
                                <Typography gutterBottom variant="body2" >
                                    thermal
                                </Typography>
                                <Typography gutterBottom variant="body2" >
                                    4K1920X1080
                                </Typography>
                            </div>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
            <div className='card-component'>
                <Typography variant='body1' className='white'>Particles</Typography>
                <Card sx={{ maxWidth: 245 }} className="dashboard-card">
                    <CardActionArea>
                        <CardContent >
                            <div className='flex-col'>
                                <Typography gutterBottom variant="body2" >
                                    Res
                                </Typography>
                                <Typography gutterBottom variant="body2" >
                                    4K1920X1080
                                </Typography>
                            </div>
                            <div className='flex-col'>
                                <Typography gutterBottom variant="body2" >
                                    Film
                                </Typography>
                                <Typography gutterBottom variant="body2" >
                                    500ml
                                </Typography>
                            </div>
                            <div className='flex-col'>
                                <Typography gutterBottom variant="body2" >
                                    thermal
                                </Typography>
                                <Typography gutterBottom variant="body2" >
                                    4K1920X1080
                                </Typography>
                            </div>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
            </> 
    )
}

export default DashboardCard;