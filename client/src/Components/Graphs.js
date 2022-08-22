import { Box} from '@mui/material';
import React from 'react'

import { Line } from 'react-chartjs-2';


const Graphs = () => {


  return (
   
    <div> 
        <Box>
        <Line
        datasetIdKey='id'
        data={{
          labels: ['Jun', 'Jul', 'Aug'],
          datasets: [
            {
              id: 1,
              label: '',
              data: [5, 6, 7],
            },
            {
              id: 2,
              label: '',
              data: [3, 2, 1],
            },
          ],
        }}
      />
         </Box>
    </div>
  );

}

export default Graphs;