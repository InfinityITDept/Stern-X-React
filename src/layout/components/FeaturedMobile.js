import React, {useState} from 'react';
import "./FeaturedMobile.scss";


export default function FeaturedMobile() {
    const [readMore,setReadMore]=useState(false);

    const extraContent=<div>
      <p className="extra-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, consectetur nequeab 
        porro quasi culpa nulla rerum quis minus voluptatibus sed hic ad quo sint, libero 
        commodi officia aliquam! Maxime.
      </p>
    </div>;

    const linkName=readMore? <p className="readless">Read Less</p>:'Read More >> ';

    return (
        <div className="FeaturedMobile">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, consectetur nequeab 
            porro quasi culpa nulla rerum quis minus voluptatibus sed hic ad quo sint, libero 
            commodi officia aliquam! Maxime.</p>
             <a className="read-more-link" onClick={()=>{setReadMore(!readMore)}}><div>{linkName}</div></a>
                <p>{readMore && extraContent}</p>
        </div>
    )
}
