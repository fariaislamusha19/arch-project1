
import React from 'react';
import BasicContact from './components/Dashboard/basicContact';
import Upfooter from "./components/Dashboard/Upfooter";
import Whatsapp from './components/Dashboard/Whatsapp';
import Dashboard from "./Pages/Dashboard";
import imagediv from './components/Dashboard/Imagediv';

function App() {
  return (
    <div className="App">
      
      
      <Dashboard />
      <BasicContact/>
      <Whatsapp/>
      <imagediv/>
      <Upfooter/>
      
    </div>
  );
}

export default App;
