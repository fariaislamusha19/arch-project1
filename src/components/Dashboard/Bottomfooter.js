import React from 'react'
import Typography from '@mui/material/Typography';

import SBUs from "../../Assets/Images/SBUs-2.png";

const Bottomfooter = () => {
  return (
    <div className='sisterconcerndiv'>
        <Typography variant="h7" sx={{ fontSize: 30 }} component="div" color="white" textAlign='center'>
              Our Sister Concerns 
        </Typography>
              
          <div className='concernlogo'>
              
              <img src={SBUs} alt="" width={1349} height={200}></img>
          </div>
    
    </div>
  )
}

export default Bottomfooter