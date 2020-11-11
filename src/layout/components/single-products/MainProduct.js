import "./MainProduct.scss";
import Button from "react-bootstrap/Button";
import Slider from "./Slider";
import React from 'react';
import ProductMenu from "./ProductMenu";

export default function MainProduct({product}) {
  return (
          <div className="Main">

            <Slider className="Slider-class" />
            <div className="Main-list">
                    <h5>Stern-X</h5>
                    <h1>Title: {product.title}</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean faucibus enim nec ipsum tempus fermentum fermentum nec massa. Etiam placerat turpis metus, eu vehicula est placerat eu. Donec suscipit mauris tincidunt metus tempor.</p>
                  <ul>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac tincidunt diam, eget molestie ante.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac tincidunt diam, eget molestie ante.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac tincidunt diam, eget molestie ante.</li>
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
  )
}

