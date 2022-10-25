
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Aboutcardb from "../../Assets/Images/Aboutcardb.jpg";
import * as React from 'react';



const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (
  
  <div className='About'>

  <React.Fragment>
    
    <CardContent className='carda'>
    <Typography variant="h5" component="div">
       Our Mission
      </Typography>
      <Typography variant="h7" component="div">
      Architecture 2030’s mission is to rapidly transform the built environment from the major emitter
       of greenhouse gases to a central solution to the climate emergency. For over a decade,
        we’ve provided the leadership and designed the actions needed to achieve the CO2 emissions
         reductions for a high probability of limiting planetary warming to 1.5°C. 
      </Typography>
    <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </CardContent>
    
    <CardContent className='cardb'>
     
          <div>
          <img src={Aboutcardb} alt ="" width={700} height={284}></img>
          </div>

    </CardContent>
   
    <CardContent className='cardc'>
    <Typography variant="h7" component="div">
      Architecture 2030’s mission is to rapidly transform the built environment from the major emitter
       of greenhouse gases to a central solution to the climate emergency. For over a decade,
        we’ve provided the leadership and designed the actions needed to achieve the CO2 emissions
         reductions for a high probability of limiting planetary warming to 1.5°C. 
      </Typography>

</CardContent>

<CardContent className='cardd'>

      <div>
          <img src={Aboutcardb} alt ="" width={670} height={320}></img>
          </div>

    </CardContent>
   
     

  </React.Fragment>
  
  

  </div>
  
)

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 100 }}>
      <Card variant="0">{card}</Card>
    </Box>
  )
}
