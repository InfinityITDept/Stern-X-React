import React, { Component } from 'react';
import "./Banner.scss";
import Carousel from 'react-bootstrap/Carousel';
import Last from "./images/SternTest-01.jpg";

export default class Banner extends Component {
    render() {
        return (
            <div id="banner">
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <img
                        className="img-fluid d-block w-100"
                        src={Last}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img
                        className="img-fluid d-block w-100"
                        src={Last}
                        alt="First slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}
