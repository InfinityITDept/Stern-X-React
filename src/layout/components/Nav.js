import React, { Component } from 'react';
import Navbar from "react-bootstrap/Navbar";
import "./Nav.scss";


export default class Nav extends Component {
    render() {
        return (
            <Navbar collapseOnSelect className="pl-3 pr-3" expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="www.google.com">React-Bootstrap</Navbar.Brand>

                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link" href="www.google.com">PRODUCTS</a>
                        <a className="nav-link" href="www.google.com">CONTACT US</a>
                    </div>
                </div>
            </Navbar>
        )
    }
}
