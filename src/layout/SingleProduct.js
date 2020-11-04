import React, { Component } from 'react';
import Main from "./components/single-products/MainProduct";
import Menu from "./components/single-products/ProductMenu";
import Map from "./components/single-products/ReactMapbox";

export default class SingleProduct extends Component {
    render() {
        return (
            <div>
                <Main />
                <Menu />
                <Map />
            </div>
        )
    }
}
