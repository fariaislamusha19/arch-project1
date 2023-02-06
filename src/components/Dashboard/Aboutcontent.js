import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#1A2027' : 'black',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  border:0,
  color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid() {
  return (
    <Box sx={{ flexGrow: 1 , borderRadius:0, marginLeft:'20px', marginRight:'20px'}}>
      <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 12, sm: 8, md: 12 }}>
        
          <Grid item xs={12} sm={6} md={6}>
          <img className='aboutcardimg' src="images/aboutus3.jpg" alt=""/>
          </Grid>
        
          <Grid item xs={12} sm={6} md={6}>
         
          <Typography  variant="h4" color="black" fontFamily= "Raleway"> <br/> <br/>
        About Us
      </Typography><br/>

          <Typography className='aboutcontent' variant="h8" color="black" fontFamily= "Raleway">
    <h5>Shelter is one of the main fundamental rights of each and every human being. 
    Globalization has made our life easier to live and bring mankind closer to share their experiences.
    Nowadays people have so many choices to choose the best among the best. It is also applicable in the
      interior decoration sector. Keeping in mind The ARCH Interior is also flourishing with new to newer ideas 
      be it for your sweet home, your bread & butter corporate office, your decision- & profit-making conference halls,
      your favorite candle light or eating destinations, your special occasions or festival places. We try to adorn 
      your dream with our passionate touch to suit your requirement.
    Our unique team is always ready to accomplish your dream come true.</h5>
        </Typography>
          </Grid>
      
      </Grid>
    </Box>
  );
}