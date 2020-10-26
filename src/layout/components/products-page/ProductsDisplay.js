import React, { Component } from 'react';
import Placeholder from "../images/placeholder.jpg";
import "./ProductsDisplay.scss";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'

export default class ProductsDisplay extends Component {
    render() {
        return (
            <div className="Products container">

                <div className="Products-row row">
                <Card className="Products-card text-white" style={{ width: '23rem' }}>
                <Card.Img src={Placeholder} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                    <Button variant="outline-primary">Primary</Button>{' '}
                </Card.ImgOverlay>
                </Card>

                <Card className=" Products-card text-white" style={{ width: '23rem' }}>
                <Card.Img src={Placeholder} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                    <Button variant="outline-primary">Primary</Button>{' '}
                </Card.ImgOverlay>
                </Card>

                <Card className="text-white" style={{ width: '23rem' }}>
                <Card.Img src={Placeholder} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                    <Button variant="outline-primary">Primary</Button>{' '}
                </Card.ImgOverlay>
                </Card>
                </div>

                <div className="Products-row row">
                <Card className="Products-card text-white" style={{ width: '23rem' }}>
                <Card.Img src={Placeholder} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                    <Button variant="outline-primary">Primary</Button>{' '}
                </Card.ImgOverlay>
                </Card>

                <Card className=" Products-card text-white" style={{ width: '23rem' }}>
                <Card.Img src={Placeholder} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                    <Button variant="outline-primary">Primary</Button>{' '}
                </Card.ImgOverlay>
                </Card>

                <Card className="text-white" style={{ width: '23rem' }}>
                <Card.Img src={Placeholder} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                    <Button variant="outline-primary">Primary</Button>{' '}
                </Card.ImgOverlay>
                </Card>
                </div>
            </div>
        )
    }
}
