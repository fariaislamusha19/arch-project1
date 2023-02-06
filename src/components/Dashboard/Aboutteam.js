import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import logo from "../../Assets/Images/The Arch Interior.svg";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#ffffff' : 'white',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  border:0,
  color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid() {
  return (
    <Box sx={{ flexGrow: 1 ,marginTop: '20px', marginBottom:'20px', marginRight:'20px', marginLeft:'20px', borderRadius:0}}>
      <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 12, sm: 8, md: 12 }}>
        
          <Grid item xs={12} sm={3} md={3}>
          <Card className='aboutcard' sx={{ maxWidth: 270 }}>
      <CardMedia
        class='aboutteamimg'
        component="img"
        src="images/pic22.png"
        alt=" "
      />
     <CardContent sx={{ textAlign: 'center'}}>
        <Typography gutterBottom variant="h5" component="div">
          Name
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Designation
        </Typography>
      </CardContent>
      <CardActions  >
        <Button className='aboutteambtn' variant="h5" component="div" color="white" size="small"><FacebookIcon/></Button>
        <Button className='aboutteambtn' variant="h5" component="div" color="white" size="small"><LinkedInIcon/></Button>
        <Button className='aboutteambtn' variant="h5" component="div" color="white" size="small"><InstagramIcon/></Button>
        <Button className='aboutteambtn' variant="h5" component="div" color="white" size="small"> <TwitterIcon/></Button>
      </CardActions>
    </Card>

          </Grid>
          <Grid item xs={12} sm={3} md={3}>
          <Card className='aboutcard' sx={{ maxWidth: 270 }}>
      <CardMedia
        class='aboutteamimg'
        component="img"
        src="images/md1.jpg"
        alt=" "
      />
     <CardContent sx={{ textAlign: 'center'}}>
        <Typography gutterBottom variant="h5" component="div">
          Name
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Designation
        </Typography>
      </CardContent>
      <CardActions  >
        <Button className='aboutteambtn' variant="h5" component="div" color="white" size="small"><FacebookIcon/></Button>
        <Button className='aboutteambtn' variant="h5" component="div" color="white" size="small"><LinkedInIcon/></Button>
        <Button className='aboutteambtn' variant="h5" component="div" color="white" size="small"><InstagramIcon/></Button>
        <Button className='aboutteambtn' variant="h5" component="div" color="white" size="small"> <TwitterIcon/></Button>
      </CardActions>
    </Card>
          </Grid>
          <Grid item xs={12} sm={3} md={3}>
          <Card className='aboutcard' sx={{ maxWidth: 270 }}>
      <CardMedia
        class='aboutteamimg'
        component="img"
        src="images/gm1.jpg"
        alt=" "
      />
      <CardContent sx={{ textAlign: 'center'}}>
        <Typography gutterBottom variant="h5" component="div">
          Name
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Designation
        </Typography>
      </CardContent>
      <CardActions  >
        <Button className='aboutteambtn' variant="h5" component="div" color="white" size="small"><FacebookIcon/></Button>
        <Button className='aboutteambtn' variant="h5" component="div" color="white" size="small"><LinkedInIcon/></Button>
        <Button className='aboutteambtn' variant="h5" component="div" color="white" size="small"><InstagramIcon/></Button>
        <Button className='aboutteambtn' variant="h5" component="div" color="white" size="small"> <TwitterIcon/></Button>
      </CardActions>
    </Card>
          </Grid>
          <Grid item xs={12} sm={3} md={3}>
          <Card className='aboutcard' sx={{ maxWidth: 270 }}>
      <CardMedia
        class='aboutteamimg'
        component="img"
        src="images/pic11.png"
        alt=" "
      />
      <CardContent sx={{ textAlign: 'center'}}>
        <Typography gutterBottom variant="h5" component="div">
          Name
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Designation
        </Typography>
      </CardContent>
      <CardActions  >
        <Button className='aboutteambtn' variant="h5" component="div" color="white" size="small"><FacebookIcon/></Button>
        <Button className='aboutteambtn' variant="h5" component="div" color="white" size="small"><LinkedInIcon/></Button>
        <Button className='aboutteambtn' variant="h5" component="div" color="white" size="small"><InstagramIcon/></Button>
        <Button className='aboutteambtn' variant="h5" component="div" color="white" size="small"> <TwitterIcon/></Button>
      </CardActions>
    </Card>
          </Grid>
      </Grid>
    </Box>
  );
}