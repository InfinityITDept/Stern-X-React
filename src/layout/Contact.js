import React, { Component, useState } from 'react';
import "./Contact.scss";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";
import axios from "axios";
import { ThemeProvider } from 'react-bootstrap';

export default function Contact() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const submitRequest = async (e) => {
      e.preventDefault();
      console.log({ email, message });
      const response = await fetch("/access", { 
        method: 'POST', 
        headers: { 
            'Content-type': 'application/json'
        }, 
        body: JSON.stringify({email, message}) 
    }); 
      const resData = await response.json(); 
      if (resData.status === 'success'){
        alert("Message Sent."); 
        this.resetForm()
    }else if(resData.status === 'fail'){
        alert("Message failed to send.")
    }
    };

    return (
        <div>
            <div className="Contact container">
                <h1>Contact us</h1>
                
                <form  onSubmit={submitRequest}>
                    <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">First and last name</span>
                    </div>
                    <input type="text" aria-label="First name" className="form-control" onChange={e => setEmail(e.target.value)} value={email} />
                    <input type="text" aria-label="Last name" className="form-control" onChange={e => setMessage(e.target.value)} value={message} />
                    </div>
                    <button type="submit" className="primary-btn submit">Submit</button>
                </form>

            </div>
        </div>
    )
}
