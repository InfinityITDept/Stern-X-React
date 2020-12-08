import React from 'react';
import { Helmet } from 'react-helmet';
import Slider from "react-slick";
import Map from "./components/mapbox/ReactMapbox";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import "./SingleProduct.scss";
import "../../node_modules/slick-carousel/slick/slick.scss";
import "../../node_modules/slick-carousel/slick/slick-theme.scss";

export default function SingleProduct({product}) {
    const [nav1, setNav1] = React.useState(null)
    const [nav2, setNav2] = React.useState(null)
      let slider1 = []
      let slider2 = []
  
      React.useEffect(() => {
          setNav1(slider1)
          setNav2(slider2)
      }, [slider1, slider2])

    return (
        <div>
            <Helmet><title>{product.title}</title></Helmet>
            <div className="Main"> 
                <div className="Slider-class">
                    <Slider
                        asNavFor={nav2}
                        ref={slider => (slider1 = slider)}
                        >
                        <div className="img1">
                            <img src={require(`./components/images/single product images/571x500/${product.id}-1.jpg`)} alt={product.title} />
                        </div>
                        <div className="img1">
                            <img src={require(`./components/images/single product images/571x500/${product.id}-2.jpg`)} alt={product.title} />
                        </div>
                        <div className="img1">
                            <img src={require(`./components/images/single product images/571x500/${product.id}-3.jpg`)} alt={product.title} />
                        </div>

                    </Slider>
                    <Slider
                        asNavFor={nav1}
                        ref={slider => (slider2 = slider)}
                        slidesToShow={3}
                        swipeToSlide={true}
                        focusOnSelect={true}
                        className="Thumb-slider"
                        >
                        <div>
                            <img src={require(`./components/images/thumbnails/${product.id}-1.jpg`)} alt={product.title}/>
                        </div>
                        <div>
                            <img src={require(`./components/images/thumbnails/${product.id}-2.jpg`)} alt={product.title}/>
                        </div>
                        <div>
                            <img src={require(`./components/images/thumbnails/${product.id}-3.jpg`)} alt={product.title}/>
                        </div>
                    </Slider>

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
                { product.id === 17 || product.id === 18 || product.id === 19 || product.id === 20 ?                         
                    <a href="#sidebar" className="Mapbutton">
                    <Button variant="warning" size="lg" block>
                        Find a store
                    </Button>
                    </a>  : null }
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