import React, { Component } from 'react';
import "./Footer.scss";
import Logo from "./images/logo200x60.png";
import { GrFacebookOption, GrInstagram, GrTwitter} from 'react-icons/gr';


export default class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <div className="Footer-container">
                <div className="Footer-logo">
                    <img src={Logo} alt="Logo" />
                </div>
                <div className="Footer-column2">
                    <h3>Menu</h3>
                    <div className="Footer-links">
                        <a href="#"><p>HOME</p></a>
                        <a href="#"><p>PRODUCTS</p></a>
                        <a href="#"><p>FAQ</p></a>
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
