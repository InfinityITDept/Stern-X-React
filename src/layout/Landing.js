import React, { Component } from 'react'
import Banner from "./components/Banner";
import Cards from "./components/InfoCards"
import FeaturedProducts from "./components/FeaturedProducts";
import About from "./components/About";
import Reviews from "./components/Reviews";

export default class Landing extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <Banner />
                    <Cards />
                    <FeaturedProducts />
                    <About />
                    <Reviews />
                </div>
            </div>
        )
    }
}
