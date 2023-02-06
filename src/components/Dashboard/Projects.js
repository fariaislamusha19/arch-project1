import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Prjgallery from './Prjgallery';
import ProjectText from './ProjectText';

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
          theme.palette.mode === 'dark' ? '#1A2027' : 'black',
      }}
    >
      <Grid >
        <Grid item>
          
            <Img alt=" " src="images/prj1.jpg" height='500' width='100%'/>
    
        </Grid>
        
        <Grid>
             
             <ProjectText/>
             </Grid>
       
        <Grid>
             
          <Prjgallery/>
          </Grid>

        </Grid>
    </Paper>
  );
}