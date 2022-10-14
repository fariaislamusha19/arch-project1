import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import AAA from "../../Assets/Images/Areeb Ad Agency.svg";
import ATC from "../../Assets/Images/Ayaan Trading Corporation.svg";
import EE from "../../Assets/Images/Eagle Eye Security Agency.svg";
import Ebazar from "../../Assets/Images/eBazar.svg";
import EBB from "../../Assets/Images/eBook Bazar.svg";
import FF from "../../Assets/Images/Fortune Fitness Pvt Ltd.svg";
import FG from "../../Assets/Images/Fortune Group.svg";
import HRP from "../../Assets/Images/HR Pool.svg";
import LEM from "../../Assets/Images/Lamiya Event Management House.svg";
import SQS from "../../Assets/Images/SQS Global Network.svg";
import logo from "../../Assets/Images/The Arch Interior.svg";


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (
  <div className='divcontent'>
  
  <React.Fragment>
    
    <CardContent className='card1'>
      <Typography>
      <iframe width={600} height={520} src="https://maps.google.com/maps?q=the%20arch%20interior,Road%20No.1,Dhanmondi&t=&z=13&ie=UTF8&iwloc=&output=embed"
      frameborder="50" scrolling="yes" marginheight="50" marginwidth="0"></iframe>
      </Typography>
    </CardContent>
    
    <CardContent className='card2'>

    <div className="logo">
        <img src={logo} alt width={500} height={70}></img>
      </div>

        <Typography variant="h8" component="div">
        be{bull}nev{bull}o{bull}lent
      </Typography>

      <Typography sx={{ fontSize: 14 }} color="white" gutterBottom>
        <h5>Visit Us</h5>
      </Typography>
      <Typography color="white">
        House#519(Building 2,5th Floor),Road No.1,Dhanmondi,Dhaka-1205
      </Typography>
      <Typography variant="h8" component="div">
        be{bull}nev{bull}o{bull}lent
      </Typography>
      <Typography color="white" >
        Tel:09677000111
        <br />
        Email:info@thearchbd.com
      </Typography>
      <Typography variant="h9" component="div">
        be{bull}nev{bull}o{bull}lent
      </Typography>
      <Typography variant="body2"color="white">
        Thursday - Saturday:9:00am - 7:00pm
        <br />
        Friday: Closed
      </Typography>
      <Typography variant="h5" component="div" variant="body3"color="white">
        
        <TwitterIcon/> <FacebookIcon/> <LinkedInIcon/> <InstagramIcon/>
        <br/>
        
      </Typography>
       <br/>
      <Typography variant="h5" component="div" color="white" >
        Our Sister Concerns 
        <br/>
        <div >
        <img src={EE} alt width={100} height={70}></img>
        <img src={Ebazar} alt width={100} height={70}></img>
        <img src={SQS} alt width={100} height={70}></img>
        <img src={FF} alt width={100} height={70}></img>
        <img src={LEM} alt width={100} height={70}></img>
        <img src={FG} alt width={100} height={70}></img>
        <img src={HRP} alt width={100} height={70}></img>
        <img src={EBB} alt width={100} height={70}></img>
        <img src={ATC} alt width={100} height={70}></img>
        <img src={AAA} alt width={100} height={70}></img>
      </div>
      
      </Typography>
      
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
