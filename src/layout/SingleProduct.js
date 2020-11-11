import React from 'react';
import Menu from "./components/single-products/ProductMenu";
import Map from "./components/single-products/ReactMapbox";
import "./components/single-products/MainProduct.scss";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Slider from "./components/single-products/Slider";
import "./components/single-products/MainProduct.scss";

export default function SingleProduct({product}) {
    return (
        <div>
            <div className="Main"> 
                <div className="Slider-class">
                 <Slider />
                </div>           

                <div className="Main-list">
                    <h5>Stern-X</h5>
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                    <ul>
                    <li>{product.fact1}</li>
                    <li>{product.fact2}</li>
                    <li>{product.fact3}</li>
                    </ul>

                        <div>
                        <a href="#sidebar" className="Mapbutton">
                        <Button variant="warning" size="lg" block>
                            Find a store
                        </Button>
                        </a>
                        </div>      
                </div>        
            </div>

            <div className="Accordion-menu container">

            <Accordion>
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    Ingredients
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                <Card.Body>
                    <ul>
                    <li>{product.ingredient1}</li>
                    <li>{product.ingredient2}</li>
                    <li>{product.ingredient3}</li>
                    <li>{product.ingredient4}</li>
                    </ul>
                </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    Uses
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                <Card.Body>
                <ul>
                    <li>{product.use1}</li>
                    <li>{product.use2}</li>
                    <li>{product.use3}</li>
                </ul>
                </Card.Body>
                </Accordion.Collapse>
            </Card>
            </Accordion>
            </div>
            
            {product.id === 17 || product.id === 18 || product.id === 19 || product.id === 20 ? <Map /> : null}

        </div>

    )
}