import React, { Component, useState } from 'react'
import "./FeaturedProducts.scss";
import Sanitizers from "../images/hs-index.png";
import Bleach from "../images/bleach_index.png";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";


export default class FeaturedProducts extends Component {
    render() {
        return (
                    <div className="Featured-products">

                        <div className="Featured-products-container">
                            <div className="featured-prod-img">
                                <Link to="/products">
                                    <img className="img-fluid" src={Sanitizers} alt="Hand Sanitizers" />
                                </Link>
                            </div>
                            <div className="Featured-text-col-right">
                                <h2 className="Featured-title">Hand Sanitizers</h2>
                                <p className="Featured-text">Our hand sanitizers are soothing & moisturizing gel/liquid solutions created to help reduce bacteria that can potentially cause disease when soap and water are not available. It is proven to kill 99.9% of most germs with no damage on skin, making it perfect for frequent use. Stern-X hand sanitizers are ideal for use in office settings, classrooms and or outdoor settings.</p>
                                <Link to="/products">
                                <Button variant="warning" className="thebutton">
                                    View Products
                                </Button>
                                </Link>
                            </div>
                        </div>

                        <div className="Featured-products-container2">
                            <div className="Featured-text-col-left">
                                <h2 className="Featured-title">Bleach Solutions</h2>
                                <p className="Featured-text">The Stern-X Bleach solution is ideal for use on clothing as well as cleaning and protecting surfaces. It is excellent for use with regular and HE standard machines delivering bright and longer lasting whites in clothing, while keeping your home clean, disinfected, and free of bacteria viruses. Try our Regular Strength and Extra Strength solutions for a healthy home.</p>
                                <Link to="/products">
                                <Button variant="warning" className="thebutton">
                                    View Products
                                </Button>
                                </Link>
                            </div>
                            <div className="featured-prod-img2">
                                <Link to="/products">
                                    <img className="img-fluid" src={Bleach} alt="Bleach Solutions" />
                                </Link>
                            </div>
                        </div>


                        <div className="Featured-mobile1">
                            <Link to="/products">
                                <img className="Img-1" src={Sanitizers} alt="test" />
                            </Link>
                            <div className="Featured-text-container">
                                <div className="Featured-text-col-right">
                                    <h2 className="Featured-title">Hand Sanitizers</h2>
                                    <hr></hr>
                                    <p className="Featured-text">Our hand sanitizers are soothing & moisturizing gel/liquid solutions created to help reduce bacteria that can potentially cause disease when soap and water are not available. It is proven to kill 99.9% of most germs with no damage on skin, making it perfect for frequent use. Stern-X hand sanitizers are ideal for use in office settings, classrooms and or outdoor settings.</p>
                                    <Link to="/products">
                                    <Button variant="warning">
                                        View all products
                                    </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="Featured-mobile1">
                            <Link to="/products">
                                <img className="Img-1" src={Bleach} alt="test" />
                            </Link>
                            <div className="Featured-text-container">
                                <div className="Featured-text-col-right">
                                <h2 className="Featured-title">Bleach Solutions</h2>
                                <hr></hr>
                                <p className="Featured-text">The Stern-X Bleach solution is ideal for use on clothing as well as cleaning and protecting surfaces. It is excellent for use with regular and HE standard machines delivering bright and longer lasting whites in clothing, while keeping your home clean, disinfected, and free of bacteria viruses. Try our Regular Strength and Extra Strength solutions for a healthy home.</p>
                                    <Link to="/products">
                                    <Button variant="warning">
                                        View all products
                                    </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>


                    </div>
        )
    }
}
