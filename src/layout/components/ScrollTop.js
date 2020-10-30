import React, { Component } from 'react';
import Button from "./images/up.png";
import "./ScrollTop.scss";
import {BsFillCaretUpFill} from "react-icons/bs";

export default class ScrollTop extends Component {
    constructor(props){
        super(props);
        this.state = {
          is_visible: false
        };
    }

    componentDidMount(){
        var scrollComponent = this;
        document.addEventListener("scroll", function(e) {
          scrollComponent.toggleVisibility();
        });
    }

    toggleVisibility(){
        if (window.pageYOffset > 400) {
            this.setState({
              is_visible: true
            });
          } else {
            this.setState({
              is_visible: false
            });
          }
    }

    scrollToTop(){
        window.scrollTo({
        top: 0,
        behavior: "smooth"
        });
    }


    render() {
        const { is_visible } = this.state;
        return (
            <div className="scroll-to-top">
                {is_visible && (
                    <div onClick={() => this.scrollToTop()}>
                        <BsFillCaretUpFill className="arrow" />
                    </div>
                    )}
            </div>
        )
    }
}
