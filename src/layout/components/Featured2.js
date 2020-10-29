import React, { Component } from 'react';
import "./Featured2.scss";
import Sanitizers from "./images/Sanitizers-01.jpg";
import Bleach from "./images/Bleach-01.jpg";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

export default class FeaturedProducts extends Component {
    render() {
        return (
                    <div className="Featured-products">
                        <h1 className="Featured-title-main">Featured Products</h1>


                        <div className="Featured-products-container">
                                <img className="img1" src={Sanitizers} alt="test" />
                                <div className="empty-div"></div>
                            <div className="Featured-text-container">
                                    <h2 className="Featured-title">Hand Sanitizers</h2>
                                    <p className="Featured-text">Our hand sanitizers are soothing & moisturizing gel/liquid solutions created to help reduce bacteria that can potentially cause disease when soap and water are not available. It is proven to kill 99.9% of most germs with no damage on skin, making it perfect for frequent use. Stern-X hand sanitizers are ideal for use in office settings, classrooms and or outdoor settings.</p>
                                    <Link to="/products">
                                    <Button variant="warning">
                                        View all products
                                    </Button>
                                    </Link>
                            </div>
                        </div>

            
                    </div>
        )
    }
}
