import React, { Component } from 'react';
import "./AboutPage.scss";
import Placeholder from "./components/images/BannerPlaceholder-01.jpg";

export default class AboutPage extends Component {
    render() {
        return (
            <div className="AboutPage">
                <h1 className="About-title">Our Company</h1>
                <img src={Placeholder} alt="Banner" className="Placebanner"/>
                <div className="AboutPage-container">
                    <div className="AboutPage-text">
                        <p>Stern-X was founded in 2020 in the sunny city of Miami,FL. We have since made a positive impact in the sanitary solutions industry by venturing into it during a time of scarcity of cleaning and disinfecting products. All while keeping a focus on our mission statement of offering the best cleaning solutions to our customers at affordable prices.
                        </p>
                        <p>
                        Our lineup of products includes hand sanitizers powerful enough to kill germs and bacteria promoting well-being at home and on the go. As well as bleach products in different variations of strength and scent to help everyday bacteria on household surfaces and laundry. Try our products and join the millions of satisfied customers keeping healthy at home, work, and on the go.
                        </p>
                        </div>
                </div>
            </div>
        )
    }
}
