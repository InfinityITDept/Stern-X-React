import React, { Component } from 'react';
import "./InfoCards.scss";
import Placeholder from "./images/placeholder.jpg";
import Gloves from "./images/Gloves-01.jpg";
import Hands from "./images/CleanHands-01.jpg";

export default class InfoCards extends Component {
    render() {
        return (
            <div className="Cards container-fluid">
                <div className="row">
                    <div className="Cards-container col-lg-6 col-xl-6">
                        <div className="Cards-img-col col-lg-6">
                            <div className="line"></div>
                            <img className="Cards-img" src={Gloves} alt="Placeholder" />
                        </div>
                        <div className="Cards-text-col col-lg-6">
                            <h1 className="Cards-title">Help Flatten the</h1>
                            <h1>Curve</h1>
                            <p className="Cards-description">Our line of products are essential to keep your home, office and surfaces free of germs.</p>
                        </div>
                    </div>

                    <div className="Cards-container col-lg-6">
                        <div className="Cards-img-col col-lg-6">
                            <div className="line"></div>
                            <img className="Cards-img" src={Hands} alt="Placeholder" />
                        </div>
                        <div className="Cards-text-col col-lg-6">
                            <h1 className="Cards-title">Spread Positivity</h1>
                            <h1>Not the Virus</h1>
                            <p className="Cards-description">Learn more about how our products help combat the spread of Covid-19.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}