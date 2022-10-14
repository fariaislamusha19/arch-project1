import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

import './contact.css';

const Whatsapp = () => {

    const [value, setValue] = useState(); 
  
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    
      
    return (
    <>
    
        <div className='btn-click1' variant="dark" onClick={handleShow} data-open='Call Us'  
         data-animation-in='fade-in' data-animation-out='fade-out'
          aria-controls='Call Us' aria-haspopup='true' tabIndex='0' >
         <WhatsAppIcon className='Whatsapp-icon'/>
        </div>
  
        <Modal show={show} onHide={handleClose} className='formbody'>
                <Modal.Header closeButton>
                  <Modal.Title>Feel free to call : 01735698841</Modal.Title>
                  
                </Modal.Header>
                
                <Modal.Footer>
                <button className='btn-slider' type='submit' onClick={handleClose}>Call</button>
                </Modal.Footer>
              </Modal>
        
       
        </>
    );
    
  };
  
 export default Whatsapp
      
     
    
  
  

