import React, { Component } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Test from "../images/placeholder.jpg";
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
          <div>
            <h2>Slider Syncing (AsNavFor)</h2>
            <h4>First Slider</h4>
            <Slider
              asNavFor={this.state.nav2}
              ref={slider => (this.slider1 = slider)}
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
              <div>
                <h3>5</h3>
              </div>
              <div>
                <h3>6</h3>
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
              <div>
                <h3>5</h3>
              </div>
              <div>
                <h3>6</h3>
              </div>
            </Slider>
          </div>
        );
      }
}
