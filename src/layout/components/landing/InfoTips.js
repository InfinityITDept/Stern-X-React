import React, { Component } from 'react';
import "./InfoTips.scss";
import Gloves from "../images/Gloves-01.jpg";
import Hands from "../images/CleanHands-01.jpg";

export default class InfoCards extends Component {
    render() {
        return (
            <div className="Cards">


                    <div className="Cards-container1">
                        <div className="Cards-img-container">
                            <div className="hr1"></div>
                            <img className="Cards-img img-fluid" src={Gloves} alt="Placeholder" />
                        </div>
                        <div className="Cards-text-container">
                            <h1 className="Cards-title">Help Flatten the</h1>
                            <h1 className="Second-title">Curve</h1>
                            <hr className="hr2"></hr>
                            <p className="Cards-description">Our line of products are essential to keep your home, office and surfaces free of germs.</p>
                        </div>
                    </div>



                    <div className="Cards-container2">
                        <div className="Cards-img-container">
                        <div className="hr1"></div>
                            <img className="Cards-img img-fluid" src={Hands} alt="Placeholder" />
                        </div>

                        <div className="Cards-text-container">
                            <h1 className="Cards-title">Spread Positivity</h1>
                            <h1 className="Second-title">Not the Virus</h1>
                            <hr className="hr2"></hr>
                            <p className="Cards-description">Learn more about how our products help combat the spread of Covid-19.</p>
                        </div>
                    </div>
            </div>
        )
    }
}