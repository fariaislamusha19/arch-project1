import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import logo from "../../Assets/Images/The Arch Interior.svg";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'black',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  border:0,
  color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid() {
  return (
    <Box sx={{ flexGrow: 1 ,backgroundColor: 'black', borderRadius:0}}>
      <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 12, sm: 8, md: 12 }}>
        
          <Grid item xs={12} sm={6} md={6}>
          <Typography sx={{ marginLeft: 5,marginRight: 5, marginTop: 5 }} >
      <iframe width="100%" height={380} src="https://maps.google.com/maps?q=the%20arch%20interior,Road%20No.1,Dhanmondi&t=&z=13&ie=UTF8&iwloc=&output=embed"
      frameborder="50" scrolling="yes" marginheight="50" marginwidth="0"></iframe>
      </Typography>
          </Grid>
        
          <Grid item xs={12} sm={6} md={6}>
          <Item sx={{ marginTop: 2 }} >
            <img src={logo} alt=""  width={320} height={70}></img>
          
          <Typography sx={{ fontSize: 14 }} fontFamily= "Raleway" color="white" gutterBottom><br /> 
        <h4>Visit Us</h4> 
        <br /> 
      </Typography>
      <Typography color="white" fontFamily= "Raleway">
      <h5>House#519(Building 2,5th Floor),Road No.1,Dhanmondi,Dhaka-1205 </h5>
      </Typography>
      
      <Typography color="white" fontFamily= "Raleway">
      <h5> Tel:09677000111</h5>
        
        <h5> Email:info@thearchbd.com </h5>
      </Typography>
      
      <Typography variant="body2"color="white" fontFamily= "Raleway">
      <h5> Thursday - Saturday:9:00am - 7:00pm </h5>
      
        <h5> Friday: Closed </h5>
      </Typography> <br />

      <IconButton className='iconbutton' >  <TwitterIcon/>  </IconButton>
        
      <IconButton className='iconbutton' >  <FacebookIcon/> </IconButton>
        
      <IconButton className='iconbutton' >   <LinkedInIcon/> </IconButton>
        
      <IconButton className='iconbutton' >   <InstagramIcon/> </IconButton>

    

          </Item>
          </Grid>
      
      </Grid>
    </Box>
  );
}