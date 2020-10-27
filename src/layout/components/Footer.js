import React, { Component } from 'react';
import "./Footer.scss";
import Logo from "./images/logo200x60.png";
import { GrFacebookOption, GrInstagram, GrTwitter} from 'react-icons/gr';
import {Link} from "react-router-dom";



export default class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <div className="Footer-container">
                <div className="Footer-logo">
                    <img src={Logo} alt="Logo" />
                </div>
                <div className="Footer-column2">
                    <div className="Footer-links">
                        <Link to="/" className="home-link">HOME</Link>
                        <Link to="/products" className="products-link">PRODUCTS</Link>
                        <Link to="/soon" className="faq-link">FAQ</Link>
                    </div>
                </div>
                <div className="Footer-column3">
                    <h3>Connect with us:</h3>
                    <div className="Footer-icons">
                        <div className="Facebook" ><GrFacebookOption /></div>
                        <div className="Instagram" ><GrInstagram /></div>
                        <div className="Twitter" ><GrTwitter /></div>
                    </div>
                </div>
            </div>
            <div className="Footer-rights">
                <p>©  2020 Stern-X. All Rights Reserved. </p>
            </div>
            </div>

        )
    }
}
