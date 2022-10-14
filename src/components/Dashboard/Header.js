import { AppBar, Tab, Tabs } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import logo from "../../Assets/Images/The Arch Interior.svg";
import "../../CSS/DashboardComponent.css";

function Header() {
  const [value, setValue] = React.useState("one");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <AppBar sx={{ background: "#000000" }}>
      <div className="logo">
        <img src={logo} alt width={800} height={70}></img>
      </div>
      <div className="logotext"></div>

      <div className="tabs">
        <Box sx={{ width: "100%" }}>
          <Tabs
            centered
            value={value}
            TabIndicatorProps={{
              style: {
                backgroundColor: "#FFFFFF",
              },
            }}
            onChange={handleChange}
            textColor="inherit"
            // indicatorColor="secondary"
            aria-label="secondary tabs example"
          >
            <Tab value="one" label="HOME" />
            <Tab value="two" label="COLLECTION" />
            
            <Tab value="three" label="PROJECTS" />
            <Tab value="four" label="ABOUT US" />
          </Tabs>
        </Box>
      </div>
    </AppBar>
  );
}

export default Header;
