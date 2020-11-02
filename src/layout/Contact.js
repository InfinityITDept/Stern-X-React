import React, { Component } from 'react';
import "./Contact.scss";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import axios from "axios";

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          email: '',
          number: '',
          reason:'',
          message: ''
        }
    }

    onNameChange(event) {
        this.setState({name: event.target.value})
    }
    onEmailChange(event) {
        this.setState({email: event.target.value})
    }
    onNumberChange(event) {
        this.setState({number: event.target.value})
    }
    onReasonChange(event) {
        this.setState({reason: event.target.value})
    }
    onMessageChange(event) {
        this.setState({message: event.target.value})
    }

    submitEmail(e){
        e.preventDefault();
        axios({
          method: "POST", 
          url:"/send", 
          data:  this.state
        }).then((response)=>{
          if (response.data.status === 'success'){
              alert("Message Sent."); 
              this.resetForm()
          }else if(response.data.status === 'fail'){
              alert("Message failed to send.")
          }
        })
}
resetForm(){
        this.setState({name: '', email: '', number:'',reason:'', message: ''})
}

    render() {
        return (
            <div className="Contact container">
                <h1>Contact us</h1>
                
                <Form.Group>
                    <Form.Row>
                        <Form.Label column="lg" lg={3}>
                        Name
                        </Form.Label>
                        <Col>
                        <Form.Control size="lg" type="text" placeholder="Name" />
                        </Col>
                    </Form.Row>

                    <Form.Row>
                        <Form.Label column="lg" lg={3}>
                        E-mail
                        </Form.Label>
                        <Col>
                        <Form.Control size="lg" type="text" placeholder="E-mail" />
                        </Col>

                        <Form.Label column="lg" lg={3}>
                        Phone Number
                        </Form.Label>
                        <Col>
                        <Form.Control size="lg" type="text" placeholder="Phone Number" />
                        </Col>
                    </Form.Row>

                    <Form.Row>
                        <Form.Label column="lg" lg={3}>
                        Reason for contacting us
                        </Form.Label>
                        <Col>
                        <Form.Control size="lg" type="text" placeholder="Reason" />
                        </Col>
                    </Form.Row>

                    <Form.Label column="lg" lg={2}>Message</Form.Label>
                    <Form.Control as="textarea" rows={4} placeholder="Message"/>
                    
                </Form.Group>
            </div>
        )
    }
}
