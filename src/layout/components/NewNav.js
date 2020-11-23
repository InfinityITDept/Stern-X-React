import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from "react-bootstrap/Nav";
import Logo from "./images/logo.png";
import "./NewNav.scss";
import {Link} from "react-router-dom";


export default class NewNav extends Component {
    render() {
        return (
            <div className="NewNav">
                <Navbar clasdName="Navbar-color" expand="lg">
                    <Navbar.Brand href="#home"><Link to="/" ><img src={Logo} alt="Logo" /></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav className="mr-auto">
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/products" className="nav-link">Products</Link>
                        <Link to="/about" className="nav-link">About</Link>
                        <Link to="/contact" className="nav-link">Contact Us</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}
