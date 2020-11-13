import React, { Component } from 'react';
import "./ProductsDisplay.scss";
import Button from 'react-bootstrap/Button';
import Sanitizer13 from "../images/single product images/Hand Sanitizer 13oz-01.jpg";
import Sanitizer16 from "../images/single product images/Hand Sanitizer 16oz-01.jpg";
import Sanitizer64 from "../images/single product images/Hand Sanitizer 64oz-01.jpg";
import SanitizerLiquid from "../images/single product images/Hand Sanitizer Liquid-01.jpg";
import RegBleach from "../images/single product images/Bleach Regular-01.jpg";
import XtraBleach from "../images/single product images/Bleach Extra Strength-01.jpg";
import Lavander from "../images/single product images/Bleach Lavender-01.jpg";
import Lemon from "../images/single product images/Bleach Lemon-01.jpg";
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
                        <img src={Sanitizer13} alt="Card image" />
                        <div className="Card-text">
                            <h5>Hand Sanitizer 13oz</h5>
                            <p>Stern-X&trade;</p>
                        </div>
                        <Link to="/single-product/1">
                            <Button variant="warning" size="md">
                            More Info
                            </Button>{' '}
                        </Link>
                    </div>

                    <div className="Products-card">
                        <img src={Sanitizer16} alt="Card image" />
                        <div className="Card-text">
                            <h5>Hand Sanitizer 16oz</h5>
                            <p>Stern-X&trade;</p>
                        </div>
                        <Link to="/single-product/2">
                            <Button variant="warning" size="md">
                            More Info
                            </Button>{' '}
                        </Link>
                    </div>
                
                    <div className="Products-card">
                        <img src={Sanitizer64} alt="Card image" />
                        <div className="Card-text">
                            <h5>Hand Sanitizer 64oz</h5>
                            <p>Stern-X&trade;</p>
                        </div>
                        <Link to="/single-product/3">
                            <Button variant="warning" size="md">
                            More Info
                            </Button>{' '}
                        </Link>
                    </div>
                    <div className="Products-card">
                        <img src={SanitizerLiquid} alt="Card image" />
                        <div className="Card-text">
                            <h5>Liquid Hand Sanitizer</h5>
                            <p>Stern-X&trade;</p>
                        </div>
                        <Link to="/single-product/4">
                            <Button variant="warning" size="md">
                            More Info
                            </Button>{' '}
                        </Link>
                    </div>
                </div>

                <div className="Products-row">

                <div className="Products-card">
                <img src={RegBleach} alt="Card image" />
                    <div className="Card-text">
                        <h5>Regular Strength Bleach</h5>
                        <p>Stern-X&trade;</p>
                    </div>
                <Link to="/single-product/5">
                    <Button variant="warning" size="md">
                    More Info
                    </Button>{' '}
                </Link>
                </div>

                <div className="Products-card">
                <img src={XtraBleach} alt="Card image" />
                <div className="Card-text">
                        <h5>Extra Strength Bleach</h5>
                        <p>Stern-X&trade;</p>
                    </div>
                <Link to="/single-product/6">
                    <Button variant="warning" size="md">
                    More Info
                    </Button>{' '}
                </Link>
                </div>

                <div className="Products-card">
                <img src={Lavander} alt="Card image" />
                <div className="Card-text">
                        <h5>Lavender Scent Bleach</h5>
                        <p>Stern-X&trade;</p>
                    </div>
                <Link to="/single-product/7">
                <Button variant="warning" size="md">
                    More Info
                    </Button>{' '}
                </Link>
                </div>

                <div className="Products-card">
                <img src={Lemon} alt="Card image" />
                <div className="Card-text">
                        <h5>Lemon Scent Bleach</h5>
                        <p>Stern-X&trade;</p>
                    </div>
                <Link to="/single-product/8">
                <Button variant="warning" size="md">
                    More Info
                    </Button>{' '}
                </Link>
                </div>
                </div>
            </div>
        )
    }
}