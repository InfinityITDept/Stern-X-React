import React, { Component } from 'react';
import Slider from "react-slick";
import Sanitizer13 from "../images/single product images/Hand Sanitizer 13oz-01.jpg";
import "../../../../node_modules/slick-carousel/slick/slick-theme.scss";
import "../../../../node_modules/slick-carousel/slick/slick.scss";
import Thumb from "../images/thumbnails/1 (1).jpg";


export default class Slide extends Component {
    constructor(props) {
        super(props);
        this.state = {
          nav1: null,
          nav2: null
        };
      }
    
      componentDidMount() {
        this.setState({
          nav1: this.slider1,
          nav2: this.slider2
        });
      }
    render() {
        return (
            <div>
                <div className="Slider-class">
                    <Slider
                    asNavFor={this.state.nav2}
                    ref={slider => (this.slider1 = slider)}
                    >
                    <div className="img1">
                        <img src={Sanitizer13} alt="Test" />
                    </div>
                    <div className="img1">
                    <img src={Sanitizer13} alt="Test" />
                    </div>
                    <div className="img1">
                    <img src={Sanitizer13} alt="Test" />
                    </div>
                    <div className="img1">
                    <img src={Sanitizer13} alt="Test" />
                    </div>

                    </Slider>
                    <Slider
                    asNavFor={this.state.nav1}
                    ref={slider => (this.slider2 = slider)}
                    slidesToShow={3}
                    swipeToSlide={true}
                    focusOnSelect={true}
                    className="Thumb-slider"
                    >
                    <div>
                        <img src={Thumb} alt="test"/>
                    </div>
                    <div>
                    <img src={Thumb} alt="test"/>
                    </div>
                    <div>
                    <img src={Thumb} alt="test"/>
                    </div>
                    <div>
                    <img src={Thumb} alt="test"/>
                    </div>
                    </Slider>
                </div>
            </div>
        )
    }
}
