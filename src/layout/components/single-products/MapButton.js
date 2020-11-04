import React, {useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import Button from "react-bootstrap/Button";
import Map from "./Map";
import "./MapButton.scss";

export default function MapButton() {
    const [open, setOpen] = useState(false);

    return (
        <div>

            <Button variant="warning" size="lg" block>
            <a href="#Mapscroll">
                Find a store
                </a>
            </Button>

        </div>
    )
}
