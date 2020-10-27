import React, { Component } from 'react'
import "./Reviews.scss";
import Placeholder from "./images/placeholder.jpg";

export default class Reviews extends Component {
    render() {
        return (
            <div className="Reviews">
                <div className="Reviews-container">
                    <div className="Reviews-col">
                        <div className="Reviews-img-col">
                            <img src={Placeholder} alt="alt" className="Reviews-img"/>
                        </div>
                        <div className="Reviews-text-col">
                            <h1 className="Reviews-text-title">Reviews</h1>
                            <hr className="Reviews-hr" />
                            <p className="Reviews-text-paragraph">“Easy to use and gentle on my hands! I keep an individual bottle with me whenever I am on the go wherever I go.”</p>
                        </div>
                    </div>
                </div>

                <div className="Reviews-container">
                    <div className="Reviews-col">
                        <div className="Reviews-img-col">
                            <img src={Placeholder} alt="alt" className="Reviews-img"/>
                        </div>
                        <div className="Reviews-text-col">
                            <h1 className="Reviews-text-title">Reviews</h1>
                            <hr className="Reviews-hr" />
                            <p className="Reviews-text-paragraph">“I originally tried this product at home and was well satisfied with it. I now keep a bottle in my desk at the office for my colleagues to use. I would definitely recommend it.”</p>
                        </div>
                    </div>
                </div>

                <div className="Reviews-container">
                    <div className="Reviews-col">
                        <div className="Reviews-img-col">
                            <img src={Placeholder} alt="alt" className="Reviews-img"/>
                        </div>
                        <div className="Reviews-text-col">
                            <h1 className="Reviews-text-title">Reviews</h1>
                            <hr className="Reviews-hr" />
                            <p className="Reviews-text-paragraph">“I switched over to this product recently while looking for a strong solution to kill bacteria at home. Doing research on the ingredients I found this bleach to be one of the more effective ones to disinfect.”</p>
                        </div>
                    </div>
                </div>
            </div> 
        )
    }
}
