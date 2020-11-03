import React, { Component } from 'react';
import "./Contact.scss";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";
import axios from "axios";
import { ThemeProvider } from 'react-bootstrap';

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
          data: this.state
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
                
                <Form.Group onSubmit={this.submitEmail.bind(this)} method="POST">
                    <Form.Row>
                        <Form.Label column="lg" lg={3}>
                        Name
                        </Form.Label>
                        <Col>
                        <Form.Control size="lg" type="text" placeholder="Name" required value={this.state.name} onChange={this.onNameChange.bind(this)} />
                        </Col>
                    </Form.Row>

                    <Form.Row>
                        <Form.Label column="lg" lg={3}>
                        E-mail
                        </Form.Label>
                        <Col>
                        <Form.Control size="lg" type="text" placeholder="E-mail" required value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                        </Col>

                        <Form.Label column="lg" lg={3}>
                        Phone Number
                        </Form.Label>
                        <Col>
                        <Form.Control size="lg" type="text" placeholder="Phone Number" required value={this.state.number} onChange={this.onNumberChange.bind(this)}/>
                        </Col>
                    </Form.Row>

                    <Form.Row>
                        <Form.Label column="lg" lg={3}>
                        Reason for contacting us
                        </Form.Label>
                        <Col>
                        <Form.Control size="lg" type="text" placeholder="Reason" required value={this.state.reason} onChange={this.onReasonChange.bind(this)}/>
                        </Col>
                    </Form.Row>

                    <Form.Label column="lg" lg={2}>Message</Form.Label>
                    <Form.Control as="textarea" rows={4} placeholder="Message" required value={this.state.message} onChange={this.onMessageChange.bind(this)}/>

                    <Button variant="primary" size="lg" onClick={this.submitEmail}>
                    Large button
                    </Button>{' '}
                </Form.Group>
            </div>
        )
    }
}
