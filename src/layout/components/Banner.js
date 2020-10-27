import React, { Component } from 'react';
import "./Banner.scss";
import BannerHS from "./images/BannerProducts.png";
import BannerBleach from "./images/bannerbleach.png";

export default class Banner extends Component {
    render() {
        return (

            <div id="banner" className="carousel slide div-1 w-100" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-interval="10000">


                            <div className="col-12">
                                <div className="div-2">
                                    <p className="p2-1">CLEAN HANDS, SAFE HANDS</p>
                                    <p className="p2-2">Soothing & Moisturizing</p>
                                </div>
                                <img src={BannerHS} className="img-fluid" alt="Banner Image" />
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
                    <div class="carousel-item" data-interval="2000">
        

                            <div className="col-12">
                                <div className="div-2">
                                    <p className="p2-1">CLEAN HANDS, SAFE HANDS</p>
                                    <p className="p2-2">Soothing & Moisturizing</p>
                                </div>
                                <img src={BannerBleach} className="img-fluid" alt="Banner Image" />
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
