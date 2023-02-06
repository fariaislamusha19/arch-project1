import * as React from 'react';
import { styled } from "@mui/material/styles";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

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
    const [expanded, setExpanded] = React.useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

  return (
    <Box sx={{ flexGrow: 1 ,marginTop: '20px', marginBottom:'20px', marginLeft:'40px',  marginRight:'40px', borderRadius:0,}}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 8, md: 12 }}>

          <Grid item xs={12} sm={4} md={4}>
          <Card >
      <CardHeader
        
        className='imageheader'
        title="Interior Design"
        
      />
      <CardMedia
        component="img"
        height="194"
        image="images/interior1.jpg"
        alt=" "
      />
      <CardContent>
        <Typography className='imagecard' variant="body2" color="Black" fontFamily='Raleway'>
        <h6> As architects, designers, and planners, we champion people and apply design solutions that improve 
        lives and create a deeper connection between people and place. 
        With an insatiable curiosity for the world, we leverage our in-between thinking to 
        make the invisible visible.</h6> 
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
       
      </Collapse>
    </Card>
          </Grid>
          
          <Grid item xs={12} sm={4} md={4}>
          <Card >
      <CardHeader
        
        className='imageheader'
        title="Exterior Design"
       
      />
      <CardMedia
        component="img"
        height="194"
        image="images/exterior1.jpg"
        alt=" "
      />
      <CardContent>
        <Typography className='imagecard' variant="body2" color="Black" fontFamily='Raleway'>
        <h6>As architects, designers, and planners, we champion people and apply design solutions that improve 
        lives and create a deeper connection between people and place. 
        With an insatiable curiosity for the world, we leverage our in-between thinking to 
        make the invisible visible. </h6>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        
      </Collapse>
    </Card>
          </Grid>
          
          <Grid item xs={12} sm={4} md={4}>
          <Card>
      <CardHeader
        className='imageheader'
        title="Landscape Design"
      
      />
      <CardMedia
        component="img"
        height="194"
        image="images/land1.jpg"
        alt=" "
      />
      <CardContent>
        <Typography className='imagecard' color="Black" variant="body2" fontFamily='Raleway'>
       <h6> As architects, designers, and planners, we champion people and apply design solutions that improve 
        lives and create a deeper connection between people and place. 
        With an insatiable curiosity for the world, we leverage our in-between thinking to 
        make the invisible visible. </h6>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        
      </Collapse>
    </Card>
          </Grid>
         
      </Grid>
    </Box>
  );
}