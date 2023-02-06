
import React from 'react';
import BasicContact from './components/Dashboard/basicContact';
import Upfooter from "./components/Dashboard/Upfooter";
import Whatsapp from './components/Dashboard/Whatsapp';

import Bottomfooter from './components/Dashboard/Bottomfooter';
import { Route, Routes} from 'react-router-dom';

import Home from './components/Dashboard/Home';
import Aboutus from './components/Dashboard/Aboutus';
import Contact from './components/Dashboard/Contact';
import Projects from './components/Dashboard/Projects';
import Services from './components/Dashboard/Services';
import DrawerAppBar from './components/Dashboard/Header';
function App() {
  return (
    <div className="App">
      
      <DrawerAppBar/>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="Home" element={<Home />} />
      <Route exact path="Aboutus" element={<Aboutus />} />
      <Route exact path="Contact" element={<Contact />} />
      <Route exact path="Projects" element={<Projects />} />
      <Route exact path="Services" element={<Services />} />
    </Routes>
    
     
      <BasicContact/>
      <Whatsapp/>
      <Upfooter/>
      <Bottomfooter/>
      
    </div>
  );
}

export default App;
