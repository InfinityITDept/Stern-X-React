import React, { Component } from 'react';
import "./MainProduct.scss";
import Test from "../images/Product.jpg";
import Slider from "react-slick";
import "../../../../node_modules/slick-carousel/slick/slick-theme.scss";
import "../../../../node_modules/slick-carousel/slick/slick.scss";
import Sanitizer13 from "../images/single product images/Hand Sanitizer 13oz-01.jpg";
import Thumb from "../images/thumbnails/1 (1).jpg";
import Button from "react-bootstrap/Button";


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
          <div className="Main">
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
            
            <div className="Main-list">
              <h5>Stern-X</h5>
              <h1>Hand Sanitizer</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean faucibus enim nec ipsum tempus fermentum fermentum nec massa. Etiam placerat turpis metus, eu vehicula est placerat eu. Donec suscipit mauris tincidunt metus tempor.</p>
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac tincidunt diam, eget molestie ante.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac tincidunt diam, eget molestie ante.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac tincidunt diam, eget molestie ante.</li>
            </ul>
            <Button variant="warning" size="lg" block>
              Find Store
            </Button>
            </div>

          </div>

        );
      }
}
