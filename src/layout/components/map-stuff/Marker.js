import React from 'react';
import "./Marker.scss";

const Marker = ({ id }) => <div id={`marker-${id}`} className="marker" />;

export default Marker;