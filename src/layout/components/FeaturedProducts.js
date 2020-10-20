import React, { Component } from 'react'
import "./FeaturedProducts.scss";
import Placeholder from "./images/placeholder.jpg";

export default class FeaturedProducts extends Component {
    render() {
        return (
            <div className="Featured-products">
                <h1 className="Featured-title-main">Featured Products</h1>
                <div className="Featured-products-container">
                    <div className="Featured-img-col">
                        <img className="Img-1" src={Placeholder} alt="test" />
                    </div>
                    <div className="Featured-text-container">
                        <div className="Featured-text-col-right">
                            <h2 className="Featured-title">Title</h2>
                            <p className="Featured-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales, dui vel sollicitudin faucibus, ipsum magna vehicula augue, quis pulvinar urna justo nec mauris. Duis eu libero sed libero porta pharetra.</p>
                        </div>
                    </div>
                </div>

                <div className="Featured-products-container">
                <div className="Featured-text-container-2">
                        <div className="Featured-text-col-left">
                            <h2 className="Featured-title">Title</h2>
                            <p className="Featured-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales, dui vel sollicitudin faucibus, ipsum magna vehicula augue, quis pulvinar urna justo nec mauris. Duis eu libero sed libero porta pharetra.</p>
                        </div>
                    </div>
                    <div className="Featured-img-col-2">
                        <img className="Img-2" src={Placeholder} alt="test" />
                    </div>
                </div>
            </div>
        )
    }
}
