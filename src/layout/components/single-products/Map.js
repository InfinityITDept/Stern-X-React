import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
 const TOKEN = "pk.eyJ1IjoiaW5maW5pdHlpdCIsImEiOiJja2dxbGU5c3Awd2Y5MnJvOHI3Z3ZxeWl5In0.u4VBzBSjet_M5Uup3-nueA";
export default class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
        lng: 5,
        lat: 34,
        zoom: 2
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
          <div ref={el => this.mapContainer = el} />
      </div>

        )
    }
}
