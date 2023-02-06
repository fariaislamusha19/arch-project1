
import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { FaMobileAlt } from "react-icons/fa";


import './contact.css';
    
const BasicContact = () => {

  const [value, setValue] = useState(); 

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  
    
  return (
  <>
  
      <div className='btn-click' variant="dark" onClick={handleShow} data-open='Contact Us'  
       data-animation-in='fade-in' data-animation-out='fade-out'
        aria-controls='Contact Us' aria-haspopup='true' tabIndex='0' >
       <FaMobileAlt className='Mobile-icon'/> <span> Contact Us </span>
      </div>

      <Modal show={show} onHide={handleClose} className='formbody'>
              <Modal.Header closeButton>
                <Modal.Title>Contact Us</Modal.Title>
                
              </Modal.Header>
              <Modal.Body>
              <p>Please add your details and we'll call you back to discuss your requirments</p>
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
                    <Form.Label>Telephone/Mobile Number</Form.Label>
                    <Form.Control
                      type="text"
                      autoFocus
                        placeholder="Enter phone number"
                      />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="name@example.com"
                      autoFocus
                    />
                  </Form.Group>
                  
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" placeholder="Type your message" rows={3} />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
              <button className='btn-slider' type='submit' onClick={handleClose}>send</button>
              </Modal.Footer>
            </Modal>
      
     
      </>
  );
  
};


export default BasicContact