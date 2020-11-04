import React, {Component, useState} from 'react';
import "./AboutMobile.scss";


export default function AboutMobile() {
  const [readMore,setReadMore]=useState(false);

  const extraContent=<div>
        <p className="extra-content">
        Our lineup of products includes hand sanitizers powerful enough to kill germs and bacteria promoting well-being at home and on the go. As well as bleach products in different variations of strength and scent to help everyday bacteria on household surfaces and laundry. Try our products and join the millions of satisfied customers keeping healthy at home, work, and on the go.
        </p>
    </div>;

    const linkName=readMore? <p className="readless">Read Less</p> : <p className="readmore">Read More</p>;
    return (
        <div className="AboutMobile-container">
            <h1 className="MobileTitle">Our Company:</h1>
                <div>

                    <p className="p1">Stern-X was founded in 2020 in the sunny city of Miami,FL. We have since made a positive impact in the sanitary solutions industry by venturing into it during a time of scarcity of cleaning and disinfecting products. All while keeping a focus on our mission statement of offering the best cleaning solutions to our customers at affordable prices.</p>
                    <a className="read-more-link" onClick={()=>{setReadMore(!readMore)}}><div>{linkName}</div></a>
                    <p>{readMore && extraContent}</p>

                </div>
            
        </div>
    )
}
