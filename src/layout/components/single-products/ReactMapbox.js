import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Feature, Marker } from 'react-mapbox-gl';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import "./ReactMapbox.scss";
import Pointer from "../images/marker.png";


export default class ReactMapbox extends Component {
    render() {
        const Map = ReactMapboxGl({
            accessToken:
            process.env.REACT_APP_MAPBOX_ACCESS_TOKEN,
              logoPosition: "top-left",
              
          });
        return (
            <div className="Mainwrap">
                <div className='sidebar pad2'>

                    <div className="list">
                    <h3>List of Stores</h3>
                    <a target="_blank" href="https://goo.gl/maps/LxgJK8fNF87Gujaj6">
                        Navarro Discount Pharmacy
                    </a>
                    <p>3949 SW 8TH ST, MIAMI, FL 33134</p>

                    <a target="_blank" href="https://goo.gl/maps/Bx89y56cqBrhHahg6">
                        Navarro Discount Pharmacy
                    </a>
                    <p>366 EAST 4TH AVE, HIALEAH, FL 33010</p>

                    <a target="_blank" href="https://goo.gl/maps/4ZMBDu5sLyRsBeG38">
                        Navarro Discount Pharmacy
                    </a>
                    <p>8740 BIRD ROAD, MIAMI, FL 33165</p>

                    <a target="_blank" href="https://goo.gl/maps/6BRjeMMtwzJdxWzM8">
                    Navarro Discount Pharmacy
                    </a>
                    <p>5252 WEST FLAGLER ST, MIAMI, FL 33134</p>

                    <a target="_blank" href="https://goo.gl/maps/SwZQNqUW32F1Z6L17">
                    Navarro Discount Pharmacy
                    </a>
                    <p>16801 NW 67TH AVE, MIAMI, FL 33015</p>

                    <a target="_blank" href="https://goo.gl/maps/YJyhumDn3JC2Bgyp8">
                    Navarro Discount Pharmacy
                    </a>
                    <p>3141 W 76TH ST, SUITE 5, HIALEAH, FL 33018</p>

                    <a target="_blank" href="https://goo.gl/maps/t2ei9UbqdzpYz1sc9">
                    Navarro Discount Pharmacy
                    </a>
                    <p>775 W 49TH ST, SUITE 1, HIALEAH, FL 33012</p>

                    <a target="_blank" href="https://goo.gl/maps/Hbi2rdnrML4LZN2t6">
                    Navarro Discount Pharmacy
                    </a>
                    <p>4410 W 16TH AVE, HIALEAH, FL 33012</p>

                    <a target="_blank" href="https://goo.gl/maps/sXeXJuDewuMHgEtC6">
                    Navarro Discount Pharmacy
                    </a>
                    <p>11865 SW 26TH ST, MIAMI, FL 33175</p>
                    </div>


                </div>
                <div id='Mapscroll' className='map pad2'>

                    <Map
                    className="Mapito"
                    style="mapbox://styles/mapbox/streets-v11"
                    containerStyle={{
                        height: '50vh',
                        width: '45vw',
                    }}
                    center={[-80.2994983, 25.7825453]}
                    zoom={[9]}
                    >

                        <Marker
                        coordinates={[-80.260274, 25.765131]}
                        anchor="bottom">
                        <img src={Pointer}/>
                        </Marker>
                        
                        <Marker
                        coordinates={[-80.274001, 25.825420]}
                        anchor="bottom">
                        <img src={Pointer}/>
                        </Marker>
                        
                        <Marker
                        coordinates={[-80.336966, 25.732573]}
                        anchor="bottom">
                        <img src={Pointer}/>
                        </Marker>
                        
                        <Marker
                        coordinates={[-80.281627, 25.770903]}
                        anchor="bottom">
                        <img src={Pointer}/>
                        </Marker>
                        
                        <Marker
                        coordinates={[-80.307852, 25.926467]}
                        anchor="bottom">
                        <img src={Pointer}/>
                        </Marker>                    
                        
                        <Marker
                        coordinates={[-80.346784, 25.892354]}
                        anchor="bottom">
                        <img src={Pointer}/>
                        </Marker>                    
                        
                        <Marker
                        coordinates={[-80.297817, 25.867433]}
                        anchor="bottom">
                        <img src={Pointer}/>
                        </Marker>                    
                        
                        <Marker
                        coordinates={[-80.316140, 25.86171]}
                        anchor="bottom">
                        <img src={Pointer}/>
                        </Marker>                    
                        
                        <Marker
                        coordinates={[-80.390779, 25.747035]}
                        anchor="bottom">
                        <img src={Pointer}/>
                        </Marker>

                    </Map>
                </div>
            </div>

        )
    }
}
