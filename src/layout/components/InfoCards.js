import React, { Component } from 'react';
import "./InfoCards.scss";
import Placeholder from "./images/placeholder.jpg";

export default class InfoCards extends Component {
    render() {
        return (
            <div className="Cards">
                <div className="row">
                    <div className="Cards-container col-6">
                        <div className="Cards-img-col col-6">
                            <div className="line"></div>
                            <img className="Cards-img" src={Placeholder} alt="Placeholder" />
                        </div>
                        <div className="Cards-text-col col-6">
                            <h1 className="Cards-title">Spread POSITIVITY</h1>
                            <h1>NOT THE VIRUS</h1>
                            <p className="Cards-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales, dui vel sollicitudin faucibus, ipsum magna vehicula augue, quis pulvinar urna justo nec mauris. Duis eu libero sed libero porta pharetra.</p>
                        </div>
                    </div>

                    <div className="Cards-container col-6">
                        <div className="Cards-img-col col-6">
                            <div className="line"></div>
                            <img className="Cards-img" src={Placeholder} alt="Placeholder" />
                        </div>
                        <div className="Cards-text-col col-6">
                            <h1 className="Cards-title">Spread POSITIVITY</h1>
                            <h1>NOT THE VIRUS</h1>
                            <p className="Cards-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales, dui vel sollicitudin faucibus, ipsum magna vehicula augue, quis pulvinar urna justo nec mauris. Duis eu libero sed libero porta pharetra.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}