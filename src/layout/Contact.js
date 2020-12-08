import React, { Component, useState, setState } from 'react';
import "./Contact.scss";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";
import axios from "axios";
import emailjs from 'emailjs-com';
import { Helmet } from 'react-helmet';


export default function Contact() {
    const initialState = {
        email: '', name: '', subject: '', description: '', phone: '', text: ""
    }

    const [inputs, setInputs] = useState({...initialState});

    const handleChange = e => {
        const {name, value} = e.target
        setInputs(prev => ({...prev, [name]: value }))
      }

    const clearState = () => {
          setState({...initialState})
      }


    const handleReset = () => {
        Array.from(document.querySelectorAll("input")).forEach(
          input => (input.value = "")
        );
      };

      function handleSubmit(e) {
        e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it
    
        emailjs.sendForm('service_3z8p8sm', 'template_f314e2t', e.target, 'user_UPMBVLwudiDGkScqXzykJ')
          .then((result) => {
              console.log(result.text);
              window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
          }, (error) => {
              console.log(error.text);
          });
      }

    return (
        <div className="Contact container">
            <Helmet><title>Contact Us</title></Helmet>
            <h1>Contact us</h1>
            <p>+1 954-336-7571<br/>support@stern-x.com <br/><br/>Or please fill out the form below and we will be in touch as soon as possible. <br/>Stern-X will be glad to answer your questions.</p>

            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                    <label className="form-inline"for="inputEmail4">Name</label>
                    <input type="text" className="form-control" name="from_name"/>
                    </div>
                    <div className="form-group col-md-6">
                    <label className="form-inline">Phone #</label>
                    <input type="text" className="form-control" name="phone"/>
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-inline">E-mail</label>
                    <input type="email" className="form-control" name="email"/>
                </div>
                <div className="form-group">
                    <label className="form-inline">Message</label>
                    <textarea type="text" rows="5" className="form-control" name="message"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
    </div>
    )
}