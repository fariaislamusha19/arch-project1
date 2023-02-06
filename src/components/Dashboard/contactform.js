import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#ffffff' : 'white',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  border:0,
  color: theme.palette.text.secondary,
}));


export default function ResponsiveGrid() 
  {

  return (
  
      <Box sx={{ flexGrow: 1 ,marginTop: '20px', marginBottom:'40px', marginLeft:'20px',marginRight:'20px', borderRadius:0}}>
      <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 12, sm: 8, md: 12 }}>
        
        <Grid item xs={12} sm={12} md={12}>
         
        <Typography sx={{ fontSize: 14, fontFamily: 'Raleway' }} color="Black" >
        <h5>Welcome to The Arch Interior Customer Assistance. Please send your request for 
          information to the address below and we will get back to you in the shortest time possible.</h5>
        </Typography>

        <Typography sx={{ fontSize: 14,fontFamily: 'Raleway' }} color="Black" >
       <h5> We welcome customers, please do come and visit The Arch Interior Office </h5>
      </Typography>

    <Form>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Name"
          autoFocus
        />
    </Form.Group>

  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label sx={{ fontFamily: 'Raleway' }}>Telephone/Mobile Number</Form.Label>
        <Form.Control
          type="text"
          autoFocus
            placeholder="Enter phone number"
          />
  </Form.Group>
    
  <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label sx={{ fontFamily: 'Raleway' }}>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label sx={{ fontFamily: 'Raleway' }}>Message</Form.Label>
        <Form.Control as="textarea" placeholder="Type your message" rows={3} />
  </Form.Group>
     
  <button className='btn-slider' type='submit'>send</button>
    </Form>

    
        </Grid>

       
     
     
          
      
        </Grid>
        </Box>
   
    
  );
};