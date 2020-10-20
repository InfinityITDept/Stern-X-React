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
                            <p className="Reviews-text-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales, dui vel sollicitudin faucibus, ipsum magna vehicula augue, quis pulvinar urna justo nec mauris. Duis eu libero sed libero porta pharetra.</p>
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
                            <p className="Reviews-text-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales, dui vel sollicitudin faucibus, ipsum magna vehicula augue, quis pulvinar urna justo nec mauris. Duis eu libero sed libero porta pharetra.</p>
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
                            <p className="Reviews-text-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales, dui vel sollicitudin faucibus, ipsum magna vehicula augue, quis pulvinar urna justo nec mauris. Duis eu libero sed libero porta pharetra.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
