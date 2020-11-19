import React, { Component } from 'react';
import "./Banner.scss";
import BannerRib1 from "./images/banner/rib1.png";
import BannerRib2 from "./images/banner/rib2.png";
import BannerHS from "./images/banner/hs.png";
import BannerDisp from "./images/banner/dispenser.png";
import BannerLogo from "./images/banner/logo100x40.png";
import BannerBleach from "./images/banner/bleach.png";
 
export default class Banner extends Component {
    render() {
        return (
 
            <div id="banner" className="carousel carousel-fade div-1 w-100" data-ride="carousel">
                <div className="carousel-inner">
                    <img src={BannerRib1} className="img-fluid rib1" alt="Banner Img"/>
                    
                    <div className="carousel-item active" data-interval="10000">
                        <div className="banner-product">
                            <img src={BannerHS} className="d-block" alt="Banner Image" />
                            <div className="banner-logo-title"><img src={BannerLogo}/><span>HAND SANITIZER</span></div>
                            <p>SOOTHING & MOISTURIZING</p>
                        </div>
                    </div>
 
                    <div className="carousel-item" data-interval="20000">
                        <div className="banner-product">
                            <img src={BannerDisp} className="d-block" alt="Banner Image" />
                            <p>CLEAN HANDS, SAVE LIVES</p>
                        </div>
                    </div>
 
                    <div className="carousel-item" data-interval="20000">
                        <div className="banner-product">
                            <img src={BannerBleach} className="d-block" alt="Banner Image" />
                            <div className="banner-logo-title"><img src={BannerLogo}/><span>BLEACH</span></div>
                            <p>CLEANS & DESINFECTS</p>
                        </div>
                    </div>
 
                    <img src={BannerRib2} className="img-fluid rib2" alt="Banner Img"/>
 
                </div>
                <a className="carousel-control-prev" href="#banner" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#banner" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
 
        );
    }
}
