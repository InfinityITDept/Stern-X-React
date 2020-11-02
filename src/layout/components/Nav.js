import React, { Component } from 'react';
import Navbar from "react-bootstrap/Navbar";
import Logo from "./images/logo200x60.png";
import "./Nav.scss";
import {Link} from "react-router-dom";



export default class Nav extends Component {
    render() {
        return (
            <Navbar collapseOnSelect className="pl-3 pr-3" expand="lg">
                <Link to="/"><Navbar.Brand><img src={Logo} alt=""/></Navbar.Brand></Link>

                <div className="collapse navbar-collapse justify-content-end">
                    <div className="navbar-nav">
                        <Link to="/" className="nav-link">HOME</Link>
                        <Link to="/products" className="nav-link">PRODUCTS</Link>
                        <Link to="/about" className="nav-link">ABOUT</Link>
                        <Link to="/contact" className="nav-link">CONTACT US</Link>
                    </div>
                </div>
            </Navbar>
        )
    }
}
