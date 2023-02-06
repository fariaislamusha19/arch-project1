import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ContactText from './ContactText';
import Contactform from './contactform';


const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function ComplexGrid() {
  return (
    <Paper
      sx={{
        p: 0,
        margin: 'auto',
        maxWidth: '100%',
        flexGrow: 0,
        borderRadius:0,
        backgroundColor: (theme) =>
          theme.palette.mode === 'light' ? '#ffffff' : 'white',
      }}
    >
      <Grid >
        
        <Grid item >
          
            <Img alt=" " src="images/contact01.jpg"/>
    
        </Grid>

        <Grid><ContactText/></Grid>
          <Grid><Contactform/></Grid>
     
          
      
        </Grid>
    </Paper>
  );
}