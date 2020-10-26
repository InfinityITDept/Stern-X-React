import React, { Component } from 'react';
import "./MainProduct.scss";
import Test from "../images/Product.jpg";
import Slider from "react-slick";
import "../../../../node_modules/slick-carousel/slick/slick-theme.scss";
import "../../../../node_modules/slick-carousel/slick/slick.scss";

export default class MainProduct extends Component {
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
          <div className="Main container">
          <div className="Slider-class">
            <Slider
              asNavFor={this.state.nav2}
              ref={slider => (this.slider1 = slider)}
            >
              <div className="img1">
                <img src={Test} alt="Test" />
              </div>
              <div className="img2">
                <img src={Test} alt="Test" />
              </div>
              <div className="img3">
                <img src={Test} alt="Test" />
              </div>
              <div className="img4">
                <img src={Test} alt="Test" />
              </div>

            </Slider>
            <Slider
              asNavFor={this.state.nav1}
              ref={slider => (this.slider2 = slider)}
              slidesToShow={3}
              swipeToSlide={true}
              focusOnSelect={true}
            >
              <div>
                <h3>1</h3>
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
            </Slider>
            </div>
            
            <div className="Main-list">
              <h1>Title of the product goes here:</h1>
            <ul>
              <li>Hello</li>
              <li>Hello</li>
              <li>Hello</li>
            </ul>
            </div>

          </div>

        );
      }
}
