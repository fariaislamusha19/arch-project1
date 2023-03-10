
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Logo from "../../Assets/Images/The Arch Interior.svg";
import {Link} from 'react-router-dom';
import "../../CSS/DashboardComponent.css";

const drawerWidth = 240;
const navItems = ['Home', 'Aboutus','Services','Projects' ,'Contact'];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
   
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center'}}>
      <Typography variant="h5" sx={{ my: 2 , display: 'flex' }}>
      THE ARCH INTERIOR
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
            <Link style={{textDecoration:"none"}} to={item}>{item}</Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
   
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    
    <Box sx={{ display: 'flex'}}>
      <AppBar component="nav" className='navbar' position="fixed" sx={{ background: 'rgba(0, 0, 0, 0.9)' }} >
      <div className="logo" >
        <img src={Logo} alt="" width="100%" height={70}></img>
      </div>
        <Toolbar>
          <IconButton 
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }}}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h3"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >  
          </Typography> 
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button className='appbarbtn'  key={item} sx={{ color:'white', fontSize:20, 
              fontFamily: 'Raleway'}}>
                <Link style={{textDecoration:"none", color:"white"}} to={item}>{item}</Link>
                
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer 
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
     
    </Box>
    
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;

