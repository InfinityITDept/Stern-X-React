import React, { Component } from 'react'
import Banner from "./components/landing/Banner";
import FeaturedProducts from "./components/landing/FeaturedProducts";
import Reviews from "./components/landing/Reviews";
import InfoTips from "./components/landing/InfoTips";
import FeaturedMobile from './components/landing/FeaturedMobile';

export default class Landing extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <Banner />
                    <InfoTips />
                    <FeaturedProducts />
                    <FeaturedMobile />
                    <Reviews />
                </div>
            </div>
        )
    }
}
