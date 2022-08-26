import React, { useState } from 'react'
import { Card, CardActionArea, CardContent, Typography } from '@mui/material'

function DashboardCard() {
  const [value, setValue] = useState('')
  // const [value, setValue] = useState('');
  // const [value, setValue] = useState('');
  // const [value, setValue] = useState('');
  // const [value, setValue] = useState('');
  // const [value, setValue] = useState('');
  // const [value, setValue] = useState('');
  // const [value, setValue] = useState('');
  // const [value, setValue] = useState('');
  // const [value, setValue] = useState('');
  // const [value, setValue] = useState('');

  return (
    <>
      <div className="card-component">
        <Typography variant="body1" className="white">
          Particles
        </Typography>
        <Card sx={{ maxWidth: 245 }} className="dashboard-card">
          <CardActionArea>
            <CardContent>
              <div className="flex-col">
                <Typography gutterBottom variant="body2">
                  contamination
                </Typography>
                <Typography gutterBottom variant="body2">
                  <b> {value}</b>
                </Typography>
              </div>
              <div className="flex-col">
                <Typography gutterBottom variant="body2">
                  Size
                </Typography>
                <Typography gutterBottom variant="body2">
                  <b> {value}</b>
                </Typography>
              </div>
              <div className="flex-col">
                <Typography gutterBottom variant="body2">
                  Quality
                </Typography>
                <Typography gutterBottom variant="body2">
                  <b>{value}</b>
                </Typography>
              </div>
              <div className="flex-col">
                <Typography gutterBottom variant="body2">
                  Shape
                </Typography>
                <Typography gutterBottom variant="body2">
                  <b> {value}</b>
                </Typography>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
      <div className="card-component">
        <Typography variant="body1" className="white">
          Statistic
        </Typography>
        <Card sx={{ maxWidth: 245 }} className="dashboard-card">
          <CardActionArea>
            <CardContent>
              <div className="flex-col">
                <Typography gutterBottom variant="body2">
                  Sample Volume
                </Typography>
                <Typography gutterBottom variant="body2">
                  <b>{value}</b>
                </Typography>
              </div>
              <div className="flex-col">
                <Typography gutterBottom variant="body2">
                  Number of particle
                </Typography>
                <Typography gutterBottom variant="body2">
                  <b> {value}</b>
                </Typography>
              </div>
              <div className="flex-col">
                <Typography gutterBottom variant="body2">
                  Most Abundant Particel
                </Typography>
                <Typography gutterBottom variant="body2">
                  <b> {value}</b>
                </Typography>
              </div>
              <div className="flex-col">
                <Typography gutterBottom variant="body2">
                  Contamination Band
                </Typography>
                <Typography gutterBottom variant="body2">
                  <b>{value}</b>
                </Typography>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </>
  )
}

export default DashboardCard