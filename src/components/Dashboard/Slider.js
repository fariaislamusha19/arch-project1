import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../../Assets/Images/slide1.jpeg';
import slide2 from '../../Assets/Images/slide2.jpeg';
import slide3 from '../../Assets/Images/slide3.jpeg';
import slide8 from '../../Assets/Images/slide8.jpeg';
import slide5 from '../../Assets/Images/slide5.jpeg';
import slide6 from '../../Assets/Images/slide6.jpeg';
import slide9 from '../../Assets/Images/slide9.jpeg';
import "./Home.css";

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
        
          <Grid item xs={12} sm={12} md={12}>
		  <Carousel >
		<Carousel.Item className='sliderimage' interval={2200}>
		<img src={slide1} alt="" ></img>
		</Carousel.Item>
		
		<Carousel.Item className='sliderimage' interval={2200}>
		<img src={slide2} alt="" ></img>
		</Carousel.Item> 

        <Carousel.Item className='sliderimage' interval={2200}>
		<img src={slide3} alt=""></img>
		</Carousel.Item>

        <Carousel.Item className='sliderimage' interval={2200}>
		<img src={slide8} alt=""></img>
		</Carousel.Item>

		<Carousel.Item className='sliderimage' interval={2200}>
		<img src={slide5} alt=""></img>
		</Carousel.Item>

		<Carousel.Item className='sliderimage' interval={2200}>
		<img src={slide6} alt=""></img>
		</Carousel.Item>

			<Carousel.Item className='sliderimage' interval={2200}>
		<img src={slide9} alt=""></img>
		
		</Carousel.Item>

	</Carousel>
      </Grid>
	  </Grid>
    </Box>
  );
};