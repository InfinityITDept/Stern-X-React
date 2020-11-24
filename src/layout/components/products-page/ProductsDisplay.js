import React, { Component } from 'react';
import "./ProductsDisplay.scss";
import Button from 'react-bootstrap/Button';
import Sanitizer13 from "../images/single product images/4-1.jpg";
import Sanitizer4 from "../images/single product images/2-1.jpg";
import SanitizerLiq4 from "../images/single product images/26-1.jpg";
import SanitizerLiq16 from "../images/single product images/10-1.jpg";
/*import RegBleach from "../images/single product images/Bleach Regular-01.jpg";
import XtraBleach from "../images/single product images/Bleach Extra Strength-01.jpg";
import Lavander from "../images/single product images/Bleach Lavender-01.jpg";
import Lemon from "../images/single product images/Bleach Lemon-01.jpg";*/
import {Link} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";


export default class ProductsDisplay extends Component {
    render() {
        const {isOpen, onClose} = this.props;
        return (
            <div className="Products">
                <h1>Our Products</h1>
                <div className="Products-row">



                    <div className="Products-card">
                        <img src={Sanitizer13} alt="Card image" className="img-fluid"/>
                        <div className="Card-text">
                            <h5>Hand Sanitizer Gel 13oz</h5>
                            <p>Stern-X&trade;</p>
                        </div>
                        <Link to="/single-product/4">
                            <Button variant="warning" size="md">
                            Details
                            </Button>{' '}
                        </Link>
                    </div>

                    <div className="Products-card">
                        <img src={Sanitizer4} alt="Card image" className="img-fluid" />
                        <div className="Card-text">
                            <h5>Hand Sanitizer Gel 4oz</h5>
                            <p>Stern-X&trade;</p>
                        </div>
                        <Link to="/single-product/2">
                            <Button variant="warning" size="md">
                            Details
                            </Button>{' '}
                        </Link>
                    </div>
                
                    <div className="Products-card">
                        <img src={SanitizerLiq16} alt="Card image" className="img-fluid" />
                        <div className="Card-text">
                            <h5>Liquid Hand Sanitizer 16oz</h5>
                            <p>Stern-X&trade;</p>
                        </div>
                        <Link to="/single-product/3">
                            <Button variant="warning" size="md">
                            Details
                            </Button>{' '}
                        </Link>
                    </div>
                    <div className="Products-card">
                        <img src={SanitizerLiq4} alt="Card image" className="img-fluid"/>
                        <div className="Card-text">
                            <h5>Liquid Hand Sanitizer 4oz</h5>
                            <p>Stern-X&trade;</p>
                        </div>
                        <Link to="/single-product/4">
                            <Button variant="warning" size="md">
                            Details
                            </Button>{' '}
                        </Link>
                    </div>
                </div>

                <div className="Products-row">

                
                </div>
            </div>
        )
    }
}