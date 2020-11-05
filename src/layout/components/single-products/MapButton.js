import React, {useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import Button from "react-bootstrap/Button";
import Map from "./Map";
import "./MapButton.scss";

export default function MapButton() {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <a href="#sidebar" className="Mapbutton">
            <Button variant="warning" size="lg" block>
                Find a store
            </Button>
            </a>

        </div>
    )
}
