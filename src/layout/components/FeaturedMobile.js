import React, {Component, useState} from 'react';
import "./FeaturedMobile.scss";
import {Link} from "react-router-dom";
import Sanitizers from "./images/Sanitizers-01.jpg";
import Bleach from "./images/Bleach-01.jpg";
import Button from "react-bootstrap/Button";


export default function FeaturedMobile() {
  const [readMore,setReadMore]=useState(false);
  const [readMore2,setReadMore2]=useState(false);

  const extraContent=<div>
    <p className="extra-content">
      It is proven to kill 99.9% of most germs with no damage on skin, making it perfect for frequent use. Stern-X hand sanitizers are ideal for use in office settings, classrooms and or outdoor settings.
    </p>
  </div>;

  const extraContent2=<div>
  <p className="extra-content">
  It is excellent for use with regular and HE standard machines delivering bright and longer lasting whites in clothing, while keeping your home clean, disinfected, and free of bacteria viruses. Try our Regular Strength and Extra Strength solutions for a healthy home.
  </p>
  </div>;

  const linkName=readMore? <p className="readless">Read Less</p> : <p className="readmore">Read More</p>;
  const linkName2=readMore2? <p className="readless2">Read Less</p> : <p className="readmore2">Read More</p>;
  
  
  return (
    <div className="Mobile-container">
      <h1 className="MobileTitle">Featured Products</h1>
      <div>
            <img className="Img-1" src={Sanitizers} alt="test" />
            <h1>Hand Sanitizers</h1>
            <hr></hr>
            <p className="p1">Our hand sanitizers are soothing & moisturizing gel/liquid solutions created to help reduce bacteria that can potentially cause disease.</p>
            <a className="read-more-link" onClick={()=>{setReadMore(!readMore)}}><div>{linkName}</div></a>
            <p>{readMore && extraContent}</p>
            <Link to="/products">
            <Button className="Button" variant="warning">
                View Products
            </Button>
            </Link>
      </div>


      <div>
            <img className="Img-1" src={Bleach} alt="test" />
            <h1>Bleach Solutions</h1>
            <hr></hr>
            <p>The Stern-X Bleach solution is ideal for use on clothing as well as cleaning and protecting surfaces.</p>
            <a className="read-more-link" onClick={()=>{setReadMore2(!readMore2)}}><div>{linkName2}</div></a>
            <p>{readMore2 && extraContent2}</p>
            <Link to="/products">
            <Button className="Button" variant="warning">
                View Products
            </Button>
            </Link>
      </div>


    </div>
  )
}

