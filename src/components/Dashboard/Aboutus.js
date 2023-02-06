import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Aboutcontent from './Aboutcontent';
import Aboutteam from './Aboutteam';

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
        p: 1,
        margin: 'auto',
        maxWidth: '100%',
        flexGrow: 1,
        borderRadius:0,
        backgroundColor: (theme) =>
          theme.palette.mode === 'light' ? '#fff' : 'white',
      }}
    >
      <Grid >
     
        <Grid item>
          
            <Img alt=" " src="images/ab01.jpg" height='500' width='100%'/>
    
        </Grid>

       

       <Grid><Aboutcontent/></Grid>
     
       <Grid><Aboutteam/></Grid>
          
      
        </Grid>
    </Paper>
  );
}