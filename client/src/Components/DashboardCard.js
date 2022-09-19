import React, { useState } from 'react'
import { Card, CardActionArea, CardContent, Typography } from '@mui/material'




function DashboardCard({requestResults}) {
  return (
    <>
      <div className="card-component">
        <Typography variant="body1" className="white">
          Particles
        </Typography>
        <Card style={{ background: "#282C35", color: "white", }} sx={{ maxWidth: 245, boxShadow: 5 }} className="dashboard-card">
          <CardActionArea>
            <CardContent>
              <div className="flex-col">
                <Typography gutterBottom variant="body2">
                  contamination
                </Typography>
                <Typography gutterBottom variant="body2">
                  <b> {requestResults.requestCompleted ? requestResults.contamination : '- -'}</b>
                </Typography>
              </div>

              <div className="flex-col">
                <Typography gutterBottom variant="body2">
                  Size
                </Typography>
                <Typography gutterBottom variant="body2">
                  <b> {requestResults.requestCompleted ? requestResults.Size : '- -' }</b>
                </Typography>
              </div>

              <div className="flex-col">
                <Typography gutterBottom variant="body2">
                  Quality
                </Typography>
                <Typography gutterBottom variant="body2">
                  <b>{requestResults.requestCompleted ? requestResults.Quality : '- -'}</b>
                </Typography>
              </div>

              <div className="flex-col">
                <Typography gutterBottom variant="body2">
                  Shape
                </Typography>
                <Typography gutterBottom variant="body2">
                  <b> {requestResults.requestCompleted ? requestResults.Shape : '- -'}</b>
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
        <Card style={{ background: "#282C35", color: "white", }} sx={{ maxWidth: 245, boxShadow: 5 }} className="dashboard-card">
          <CardActionArea>
            <CardContent>
              <div className="flex-col">
                <Typography gutterBottom variant="body2">
                  Sample Volume
                </Typography>
                <Typography gutterBottom variant="body2">
                  <b>{requestResults.requestCompleted ? requestResults.SampleVolume : '- -'}</b>
                </Typography>
              </div>
              <div className="flex-col">
                <Typography gutterBottom variant="body2">
                  Number of particle
                </Typography>
                <Typography gutterBottom variant="body2">
                  <b> {requestResults.requestCompleted ? requestResults.NumberOfParticle : '- -'}</b>
                </Typography>
              </div>
              <div className="flex-col">
                <Typography gutterBottom variant="body2">
                  Most Abundant Particel
                </Typography>
                <Typography gutterBottom variant="body2">
                  <b> {requestResults.requestCompleted ? requestResults.MostAbundantParticle : '- -'}</b>
                </Typography>
              </div>
              <div className="flex-col">
                <Typography gutterBottom variant="body2">
                  Contamination Band
                </Typography>
                <Typography gutterBottom variant="body2">
                  <b>{requestResults.requestCompleted ? requestResults.ContaminationBand : '- -'}</b>
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
