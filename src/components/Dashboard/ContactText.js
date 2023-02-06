import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

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
        flexGrow: 1,
        borderRadius:0,
        backgroundColor: (theme) =>
          theme.palette.mode === 'Light' ? '#1A2027' : 'white',
      }}
    >
      <Grid >
        <Grid item>
        
        <Typography color="Black" fontFamily= "Raleway" align='center' fontWeight='bold' marginTop={7}>
      <h3>Our Contact</h3>
      </Typography>
    
        </Grid>
       

        </Grid>
    </Paper>
  );
}