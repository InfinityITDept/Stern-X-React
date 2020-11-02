import React, { Component, useRef, useEffect, ReactDOM } from 'react';
import mapboxgl from 'mapbox-gl';
import "./Map.scss";
import fetchFakeData from "../map-stuff/fetchFakeData";
import Marker from "../map-stuff/Marker";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

export default class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
                    lng: 280,
                    lat: 26,
                    zoom: 6
        };
        }

        componentDidMount() {
            const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
            });
            }


    render() {
        const style = {
            position: 'relative',
            top: 0,
            bottom: 0,
            width: '40%',
            height: "500px"
          };

        return (
            <div className="">
                <div style={style} ref={el => this.mapContainer = el} className="mapContainer map"/>
            </div>

        )
    }
}