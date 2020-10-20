import React, { Component } from 'react';
import "./InfoCards.scss";
import Placeholder from "./images/placeholder.jpg";

export default class InfoCards extends Component {
    render() {
        return (
        <div className="Cards">
            <div className="Cards-container">
                <div className="Cards-img-col">
                    <img className="Cards-img" src={Placeholder} alt="Placeholder" />
                </div>
                <div className="Cards-text-col">
                    <h1 className="Cards-title">Title</h1>
                    <hr className="Cards-hr" />
                    <p className="Cards-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales, dui vel sollicitudin faucibus, ipsum magna vehicula augue, quis pulvinar urna justo nec mauris. Duis eu libero sed libero porta pharetra.</p>
                </div>
            </div>

            <div className="Cards-container">
                <div className="Cards-img-col">
                    <img className="Cards-img" src={Placeholder} alt="Placeholder" />
                </div>
                <div className="Cards-text-col">
                    <h1 className="Cards-title">Title</h1>
                    <hr className="Cards-hr" />
                    <p className="Cards-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales, dui vel sollicitudin faucibus, ipsum magna vehicula augue, quis pulvinar urna justo nec mauris. Duis eu libero sed libero porta pharetra.</p>
                </div>
            </div>

            <div className="Cards-container">
                <div className="Cards-img-col">
                    <img className="Cards-img" src={Placeholder} alt="Placeholder" />
                </div>
                <div className="Cards-text-col">
                    <h1 className="Cards-title">Title</h1>
                    <hr className="Cards-hr" />
                    <p className="Cards-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales, dui vel sollicitudin faucibus, ipsum magna vehicula augue, quis pulvinar urna justo nec mauris. Duis eu libero sed libero porta pharetra.</p>
                </div>
            </div>
        </div>
        )
    }
}