import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

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
    <Box sx={{ flexGrow: 1 ,marginTop: '20px', marginLeft:'40px',  marginRight:'40px', marginBottom:'20px', borderRadius:0}}>
      <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 12, sm: 8, md: 12 }}>

          <Grid item xs={12} sm={3} md={3}>
          <Card className='divevent' sx={{ maxWidth: 300 }}>
      <CardMedia
        class='eventimg'
        component="img"
        src="images/duplex01.jpg"
        alt=" "
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" fontFamily= 'Raleway' align='center'>
          Duplex Interior
        </Typography>
      </CardContent>
    </Card>

          </Grid>
          <Grid item xs={12} sm={3} md={3}>
          <Card className='divevent' sx={{ maxWidth: 300 }}>
      <CardMedia
        class='eventimg'
        component="img"
        src="images/container01.jpg"
        alt=" "
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" fontFamily= 'Raleway' align='center'>
          Container Interior
        </Typography>
      </CardContent>
     
    </Card>
          </Grid>
          <Grid item xs={12} sm={3} md={3}>
          <Card className='divevent' sx={{ maxWidth: 300 }}>
      <CardMedia
       class='eventimg'
        component="img"
        src="images/apartment01.jpeg"
        alt=" "
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" fontFamily= 'Raleway' align='center'>
          Apartment Interior
        </Typography>
      </CardContent>
    </Card>
  
          </Grid>
          <Grid item xs={12} sm={3} md={3}>
          <Card className='divevent' sx={{ maxWidth: 300 }}>
      <CardMedia
        class='eventimg'
        component="img"
        src="images/tinyhouse01.jpg"
        alt=" "
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" fontFamily= 'Raleway' align='center'>
          Tiny House Interior
        </Typography>
      </CardContent>
    </Card>
          </Grid>
      </Grid>
    </Box>
  );
}