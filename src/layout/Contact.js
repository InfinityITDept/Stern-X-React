import React, { Component, useState, setState } from 'react';
import "./Contact.scss";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";
import axios from "axios";



export default function Contact() {
    const initialState = {
        email: '', name: '', subject: '', description: '', phone: ''
    }

    const [inputs, setInputs] = useState({...initialState});

    const handleChange = e => {
        const {name, value} = e.target
        setInputs(prev => ({...prev, [name]: value }))
      }

    const clearState = () => {
          setState({...initialState})
      }

    const handleSubmit = e => {
        e.preventDefault()
        const {email,name,subject,description,phone} = inputs;
        // post request goes here. 
        const thePost = axios.post('/sendtome', {
            //make an object to be handled from req.body on the backend. 
            email,
            name,
            subject,
            phone,
            //change the name to represent text on the backend.
            text: description
            })
        thePost.then(
            //This is where the input would reset  
            handleReset()
            
        )
      }

    const handleReset = () => {
        Array.from(document.querySelectorAll("input")).forEach(
          input => (input.value = "")
        );
      };

    return (
        <div className="Contact container">
        <h1>Contact us</h1>
        <p>We are glad to answer your questions. Please fill out the form below and we will be in touch as soon as possible.</p>

        <Form.Group onSubmit={handleSubmit}>
                <Form.Row>
                    <Form.Label column="lg" lg={1}>
                        Name:
                    </Form.Label>
                    <Col>
                    <Form.Control size="lg" type="text" placeholder="Name" name="name" value={inputs.name} onChange={handleChange} />
                    </Col>
                </Form.Row>

                <Form.Row>
                    <Form.Label column="lg" lg={1}>Phone #:</Form.Label>
                    <Col lg={5}>
                    <Form.Control size="lg" type="text" placeholder="Phone #" name="phone" value={inputs.phone} onChange={handleChange}/>
                    </Col>
                    <Form.Label column="lg" lg={1}>E-mail:</Form.Label>
                    <Col lg={5}>
                    <Form.Control size="lg" type="text" placeholder="E-mail" name="email" value={inputs.email} onChange={handleChange}/>
                    </Col>
                </Form.Row>

                <Form.Row>
                    <Form.Label column="lg" lg={1}>
                        Subject:
                    </Form.Label>
                    <Col>
                    <Form.Control size="lg" type="text" placeholder="Reason for contacting us" name="subject" value={inputs.subject} onChange={handleChange} />
                    </Col>
                </Form.Row>

                <Form.Row>
                <Form.Label column="lg" lg={1}>
                        Message:
                    </Form.Label>
                    <Col>
                    <Form.Control size="lg" type="text" placeholder="Message" as="textarea" rows={4} name="description" value={inputs.description} onChange={handleChange}/>
                    </Col>                
                </Form.Row>

                <Button variant="primary" size="lg" type="submit" onClick={handleSubmit}>
                Submit
                </Button>{' '}
        </Form.Group>

    </div>
    )
}