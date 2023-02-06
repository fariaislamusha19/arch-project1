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
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 8, md: 12 }}>

          
          <Grid item xs={12} sm={4} md={4}>
          
          <Img alt=" " src="images/fortunelogoleft-removebg-preview.png" width={300} height={200}/>
    
          </Grid>
          
          <Grid item xs={12} sm={4} md={4}>
          <Grid><Logoitem/></Grid>
          </Grid>
          
          <Grid item xs={12} sm={4} md={4}>
          <Img alt=" " src="images/frtribute1.png" width={300} height={200}/>
          </Grid>
         
      </Grid>
    </Box>
  );
}