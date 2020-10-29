import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import "./Map.scss";
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
        return (
        

            <div class="container">
                <div className='sidebarStyle'>
                <div>Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}</div>
                </div>
                <div ref={el => this.mapContainer = el} className="mapContainer map"/>
            </div>

        )
    }
}
