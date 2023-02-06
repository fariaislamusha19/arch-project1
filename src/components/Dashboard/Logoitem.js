import * as React from 'react';
import { styled } from "@mui/material/styles";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Logoitem from './Logoitem';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#ffffff' : 'white',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  border:0,
  color: theme.palette.text.secondary,
}));


export default function ResponsiveGrid() 
  {
    
  return (
    <Box sx={{ borderRadius:0,}}>
      <Grid container spacing={{ xs: 2, md: 6 }} columns={{ xs: 12, sm: 8, md: 12 }}>

          
          <Grid item xs={12} sm={2} md={2}>
          
          <Img alt=" " src="images/archlogo1-removebg-preview.png" width={120} height={80}/>
          <Img alt=" " src="images/eaglelogo2-removebg-preview.png" width={120} height={80}/>
          
    
          </Grid>
          <Grid item xs={12} sm={2} md={2}>
          
          <Img alt=" " src="images/hrpoollogo3-removebg-preview.png" width={120} height={80}/>
          <Img alt=" " src="images/sqslogo4-removebg-preview.png" width={120} height={80}/>
          
    
          </Grid>
          <Grid item xs={12} sm={2} md={2}>
          
          <Img alt=" " src="images/ebazarlogo1-removebg-preview.png" width={120} height={80}/>
          <Img alt=" " src="images/lamiyalogo5-removebg-preview.png" width={120} height={80}/>
          
    
          </Grid>
          <Grid item xs={12} sm={2} md={2}>
          
          <Img alt=" " src="images/fortunefitlogo8-removebg-preview.png" width={120} height={80}/>
          <Img alt=" " src="images/fortunefood10-removebg-preview.png" width={120} height={80}/>
          
    
          </Grid>
          <Grid item xs={12} sm={2} md={2}>
          
          <Img alt=" " src="images/areebadv11-removebg-preview.png" width={120} height={80}/>
          <Img alt=" " src="images/ayaanlogo11-removebg-preview.png" width={120} height={80}/>
          
    
          </Grid>

          <Grid item xs={12} sm={2} md={2}>
          
          <Img alt=" " src="images/bookbazar12-removebg-preview.png" width={120} height={80}/>
         
         
    
          </Grid>
         
      </Grid>
    </Box>
  );
}