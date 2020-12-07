import React, { Component } from 'react';
import "./Footer.scss";
import Logo from "./images/logo200x60.png";
import { GrFacebookOption, GrInstagram, GrTwitter} from 'react-icons/gr';
import {Link} from "react-router-dom";



export default class Footer extends Component {
    render() {
        return (
            <div className="Footer row">
                <div className="col-12">

                    <div className="row Footer-container">
                        <div className="col-4 Footer-logo">
                            <img src={Logo} className="" alt="Logo" />
                        </div>
                        <div className="col-4 Footer-column2">
                            <div className="Footer-links">
                                <Link to="/products" className="products-link">PRODUCTS</Link>
                                <Link to="/contact" className="products-link">CONTACT US</Link>
                            </div>
                        </div>
                        <div className="col-4 Footer-column3">
                            <div className="Footer-icons">
                                <a href="https://www.instagram.com/stern_xproducts" target="_blank" className="Instagram" ><GrInstagram /></a>
                            </div>
                            <div className="footer-contact">
                                <p><i className="fa fa-phone phone"></i>+1 954-336-7571</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-12 Footer-rights">
                    <p>©  2020 Stern-X. All Rights Reserved. </p>
                </div>
            </div>

        )
    }
}
