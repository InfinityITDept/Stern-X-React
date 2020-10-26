import React, { Component } from 'react';
import "./InfoCards.scss";
import Placeholder from "./images/placeholder.jpg";
import Gloves from "./images/Gloves-01.jpg";
import Hands from "./images/CleanHands-01.jpg";

export default class InfoCards extends Component {
    render() {
        return (
            <div className="Cards">
                <div className="row">
                    <div className="Cards-container col-6">
                        <div className="Cards-img-col col-6">
                            <div className="line"></div>
                            <img className="Cards-img" src={Gloves} alt="Placeholder" />
                        </div>
                        <div className="Cards-text-col col-6">
                            <h1 className="Cards-title">Frequently Asked</h1>
                            <h1>Questions</h1>
                            <p className="Cards-description">Review our frequently asked questions and learn more about our products.</p>
                        </div>
                    </div>

                    <div className="Cards-container col-6">
                        <div className="Cards-img-col col-6">
                            <div className="line"></div>
                            <img className="Cards-img" src={Hands} alt="Placeholder" />
                        </div>
                        <div className="Cards-text-col col-6">
                            <h1 className="Cards-title">Spread POSITIVITY</h1>
                            <h1>NOT THE VIRUS</h1>
                            <p className="Cards-description">Learn more about how our products help combat the spread of Covid-19.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}