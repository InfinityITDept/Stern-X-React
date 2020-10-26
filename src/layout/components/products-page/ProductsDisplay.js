import React, { Component } from 'react';
import Placeholder from "../images/placeholder.jpg";
import "./ProductsDisplay.scss";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Sanitizer13 from "../images/single product images/Hand Sanitizer 13oz-01.jpg";
import Sanitizer16 from "../images/single product images/Hand Sanitizer 16oz-01.jpg";
import Sanitizer64 from "../images/single product images/Hand Sanitizer 64oz-01.jpg";
import SanitizerLiquid from "../images/single product images/Hand Sanitizer Liquid-01.jpg";
import RegBleach from "../images/single product images/Bleach Regular-01.jpg";
import XtraBleach from "../images/single product images/Bleach Extra Strength-01.jpg";
import Lavander from "../images/single product images/Bleach Lavender-01.jpg";
import Lemon from "../images/single product images/Bleach Lemon-01.jpg";



export default class ProductsDisplay extends Component {
    render() {
        return (
            <div className="Products">

                <div className="Products-row">
                <Card className="Products-card text-white" style={{ width: '26rem' }}>
                <Card.Img src={Sanitizer13} alt="Card image" />
                </Card>

                <Card className=" Products-card text-white" style={{ width: '26rem' }}>
                <Card.Img src={Sanitizer16} alt="Card image" />
                </Card>

                <Card className="Products-card text-white" style={{ width: '26rem' }}>
                <Card.Img src={Sanitizer64} alt="Card image" />
                </Card>

                <Card className="Products-card text-white" style={{ width: '26rem' }}>
                <Card.Img src={SanitizerLiquid} alt="Card image" />
                </Card>
                </div>

                <div className="Products-row">
                <Card className="Products-card text-white" style={{ width: '26rem' }}>
                <Card.Img src={RegBleach} alt="Card image" />
                </Card>

                <Card className=" Products-card text-white" style={{ width: '26rem' }}>
                <Card.Img src={XtraBleach} alt="Card image" />
                </Card>

                <Card className="Products-card text-white" style={{ width: '26rem' }}>
                <Card.Img src={Lavander} alt="Card image" />
                </Card>

                <Card className="Products-card text-white" style={{ width: '26rem' }}>
                <Card.Img src={Lemon} alt="Card image" />
                </Card>
                </div>
            </div>
        )
    }
}
