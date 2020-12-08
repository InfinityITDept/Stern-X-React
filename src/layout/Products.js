import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import "./Products.scss";
import Sanitizer13 from "./components/images/single product images/4-1.jpg";
import Sanitizer4 from "./components/images/single product images/2-1.jpg";
import SanitizerLiq4 from "./components/images/single product images/26-1.jpg";
import SanitizerLiq16 from "./components/images/single product images/10-1.jpg";
import RegBleach from "./components/images/single product images/17-1.jpg";
import XtraBleach from "./components/images/single product images/18-1.jpg";
import Lavander from "./components/images/single product images/20-1.jpg";
import Lemon from "./components/images/single product images/19-1.jpg";
import { TransitionGroup, CSSTransition } from "react-transition-group";


export default class Products extends Component {
    render() {
        return (
            <div className="Products">
                <Helmet><title>Products</title></Helmet>
                <h1>Our Products</h1>

                <div className="Products-row">
                    <div className="Products-card">
                        <Link to="/single-product/4">
                            <img src={Sanitizer13} alt="Hand Sanitizer Gel 13oz" className="img-fluid"/>
                        </Link>
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
                        <Link to="/single-product/2">
                            <img src={Sanitizer4} alt="Hand Sanitizer Gel 4oz" className="img-fluid" />
                        </Link>
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
                        <Link to="/single-product/10">
                            <img src={SanitizerLiq16} alt="Liquid Hand Sanitizer 16oz" className="img-fluid" />
                        </Link>
                        <div className="Card-text">
                            <h5>Liquid Hand Sanitizer 16oz</h5>
                            <p>Stern-X&trade;</p>
                        </div>
                        <Link to="/single-product/10">
                            <Button variant="warning" size="md">
                            Details
                            </Button>{' '}
                        </Link>
                    </div>
                    <div className="Products-card">
                        <Link to="/single-product/26">
                            <img src={SanitizerLiq4} alt="Liquid Hand Sanitizer 4oz" className="img-fluid"/>
                        </Link>
                        <div className="Card-text">
                            <h5>Liquid Hand Sanitizer 4oz</h5>
                            <p>Stern-X&trade;</p>
                        </div>
                        <Link to="/single-product/26">
                            <Button variant="warning" size="md">
                            Details
                            </Button>{' '}
                        </Link>
                    </div>

                </div>

                <div className="Products-row">
                    <div className="Products-card">
                        <Link to="/single-product/18">
                            <img src={XtraBleach} alt="Extra Strength Bleach" className="img-fluid"/>
                        </Link>
                        <div className="Card-text">
                            <h5>Extra Strength Bleach</h5>
                            <p>Stern-X&trade;</p>
                        </div>
                        <Link to="/single-product/18">
                            <Button variant="warning" size="md">
                            Details
                            </Button>{' '}
                        </Link>
                    </div>
                    <div className="Products-card">
                        <Link to="/single-product/19">
                            <img src={Lemon} alt="Hand Sanitizer Gel 13oz" className="img-fluid"/>
                        </Link>
                        <div className="Card-text">
                            <h5>Hand Sanitizer Gel 13oz</h5>
                            <p>Stern-X&trade;</p>
                        </div>
                        <Link to="/single-product/19">
                            <Button variant="warning" size="md">
                            Details
                            </Button>{' '}
                        </Link>
                    </div>
                    <div className="Products-card">
                        <Link to="/single-product/17">
                            <img src={RegBleach} alt="Hand Sanitizer Gel 13oz" className="img-fluid"/>
                        </Link>
                        <div className="Card-text">
                            <h5>Hand Sanitizer Gel 13oz</h5>
                            <p>Stern-X&trade;</p>
                        </div>
                        <Link to="/single-product/17">
                            <Button variant="warning" size="md">
                            Details
                            </Button>{' '}
                        </Link>
                    </div>
                    <div className="Products-card">
                        <Link to="/single-product/20">
                            <img src={Lavander} alt="Hand Sanitizer Gel 13oz" className="img-fluid"/>
                        </Link>
                        <div className="Card-text">
                            <h5>Hand Sanitizer Gel 13oz</h5>
                            <p>Stern-X&trade;</p>
                        </div>
                        <Link to="/single-product/20">
                            <Button variant="warning" size="md">
                            Details
                            </Button>{' '}
                        </Link>
                    </div>
                </div>


            </div>
        )
    }
}
