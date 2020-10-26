import React, { Component } from 'react'
import "./FeaturedProducts.scss";
import Placeholder from "./images/placeholder.jpg";
import Sanitizers from "./images/Sanitizers-01.jpg";
import Bleach from "./images/Bleach-01.jpg";

export default class FeaturedProducts extends Component {
    render() {
        return (
                    <div className="Featured-products">

                        <h1 className="Featured-title-main">Featured Products</h1>
                        <div className="Featured-products-container">
                            <div className="Featured-img-col">
                                <img className="Img-1" src={Sanitizers} alt="test" />
                            </div>
                            <div className="Featured-text-container">
                                <div className="Featured-text-col-right">
                                    <h2 className="Featured-title">Hand Sanitizers</h2>
                                    <p className="Featured-text">Our hand sanitizers are soothing & moisturizing gel/liquid solutions created to help reduce bacteria that can potentially cause disease when soap and water are not available. It is proven to kill 99.9% of most germs with no damage on skin, making it perfect for frequent use. Stern-X hand sanitizers are ideal for use in office settings, classrooms and or outdoor settings.</p>
                                </div>
                            </div>
                        </div>

                        <div className="Featured-products-container2">
                            <div className="Featured-text-container-2">
                                <div className="Featured-text-col-left">
                                    <h2 className="Featured-title">Bleach Solutions</h2>
                                    <p className="Featured-text">The Stern-X Bleach solution is ideal for use on clothing as well as cleaning and protecting surfaces. It is excellent for use with regular and HE standard machines delivering bright and longer lasting whites in clothing, while keeping your home clean, disinfected, and free of bacteria viruses. Try our Regular Strength and Extra Strength solutions for a healthy home.</p>
                                </div>
                            </div>
                            <div className="Featured-img-col-2">
                                <img className="Img-2" src={Bleach} alt="test" />
                            </div>
                        </div>
            
                    </div>
        )
    }
    /*
    
    */
}
