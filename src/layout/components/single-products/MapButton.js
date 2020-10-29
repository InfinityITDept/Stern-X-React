import React, {useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import Button from "react-bootstrap/Button";
import Map from "./Map";
import "./MapButton.scss";

export default function MapButton() {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <Button
                variant="warning" size="lg" block
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
            >
                Find a store
            </Button>
            <Collapse in={open}>
                <div id="example-collapse-text">
                    <Map className="Map"/>
                </div>
            </Collapse>
        </div>
    )
}
