import React, { Component } from 'react';
import "./Banner.scss";
import BannerImage from "./images/BannerProducts.png";

export default class Banner extends Component {
    render() {
        return (
            <div className="div-1 w-100" id="banner">
            
                    
            <div className="col-12">
            <div className="div-2">
                <p className="p2-1">CLEAN HANDS, SAFE HANDS</p>
                <p className="p2-2">Soothing & Moisturizing</p>
            </div>
            <img src={BannerImage} className="img-fluid" alt="Banner Image" />
            <div className="div-3">
                <p className="p3-1">GEL <br/>& <br/>LIQUID</p>
            </div>
            <div className="div-4">
                <p className="p4-1">Kills 99% of Most GERMS</p>
            </div>
            <div className="div-5">
                <p className="p5-1">75% <br/> ALCOHOL</p>
            </div>
            </div>

            </div>
        )
    }
}
