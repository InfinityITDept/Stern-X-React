import React, { Component } from 'react';
import "./About.scss";

export default class About extends Component {
    render() {
        return (
            <div className="About">
                <div className="About-container">
                    <h1 className="About-title">About Us</h1>
                    <p className="About-paragraph">Stern-X was founded in 2020 in the sunny city of Miami,FL. We have since made a positive impact in the sanitary solutions industry by entering it during a time of scarcity of cleaning and disinfecting products. All while keeping a focus on our mission statement of offering the best cleaning solutions to our customers at affordable prices.
                    <br/>
                    <br/>
                    Our lineup of products includes hand sanitizers powerful enough to kill germs and bacteria promoting well-being at home and on the go. As well as bleach products in different variations of strength and scent to help everyday bacteria on household surfaces and laundry. Try our products and join the millions of satisfied customers keeping healthy at home, work, and on the go.
                    </p>
                </div>                
            </div>
        )
    }
}
