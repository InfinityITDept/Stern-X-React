import React, { Component } from 'react'
import "./Reviews.scss";
import Headshot1 from "./images/Headshot1.jpg";
import Headshot2 from "./images/Headshot2.jpg";
import Headshot3 from "./images/Headshot3.jpg";

export default class Reviews extends Component {
    render() {
        return (
            <div>
                <h1 className="Reviews-title">Customer Reviews</h1>
            <div className="Reviews">
                <div className="Reviews-container">
                    <div className="Reviews-col">
                        <div className="Reviews-img-col">
                            <img src={Headshot2} alt="alt" className="Reviews-img"/>
                        </div>
                        <div className="Reviews-text-col">
                            <h1 className="Reviews-text-title">Hand Sanitizer</h1>
                            <hr className="Reviews-hr" />
                            <p className="Reviews-text-paragraph">“Easy to use and gentle on my hands! I keep an individual bottle with me whenever I am on the go wherever I go.”-Michelle L.</p>
                        </div>
                    </div>
                </div>

                <div className="Reviews-container">
                    <div className="Reviews-col">
                        <div className="Reviews-img-col">
                            <img src={Headshot3} alt="alt" className="Reviews-img"/>
                        </div>
                        <div className="Reviews-text-col">
                            <h1 className="Reviews-text-title">Hand Sanitizer</h1>
                            <hr className="Reviews-hr" />
                            <p className="Reviews-text-paragraph">“I always keep a bottle in my desk at the office for my colleagues to use. I would recommend it.”-Chelsea S.</p>
                        </div>
                    </div>
                </div>

                <div className="Reviews-container">
                    <div className="Reviews-col">
                        <div className="Reviews-img-col">
                            <img src={Headshot1} alt="alt" className="Reviews-img"/>
                        </div>
                        <div className="Reviews-text-col">
                            <h1 className="Reviews-text-title">Regular Bleach</h1>
                            <hr className="Reviews-hr" />
                            <p className="Reviews-text-paragraph">“Doing research on the ingredients I found this bleach to be one of the more effective ones to disinfect.”-Scott V.</p>
                        </div>
                    </div>
                </div>
            </div> 
            </div>
        )
    }
}
