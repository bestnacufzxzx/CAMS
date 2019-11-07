import React, {Component, useState} from "react";
import MapGL, {GeolocateControl} from 'react-map-gl';

const TOKEN = 'pk.eyJ1IjoiYXJpZmVlbjAwOCIsImEiOiJjazA2c2N0cHYwZHJpM29xYmkyenkzNnpqIn0.F7bSGeHjO56JWyjTzmOs-A'; 

const zoom = [17];
const center = [99.897343, 8.644305];
const geolocateStyle = {
    float: 'left',
    margin: '50px',
    padding: '10px'
};

export default class MapBox extends Component {

    render() {
        const Map = () => {
            const [viewport,
                setViewPort] = useState({width: "100%", height: 900, latitude: 0, longitude: 0, zoom: 2})

            const _onViewportChange = viewport => setViewPort({
                ...viewport,
                transitionDuration: 100
            })

            return (

                <MapGL
                    {...viewport}
                    mapboxApiAccessToken={TOKEN}
                    mapStyle="mapbox://styles/arifeen008/ck0l50wxy1ncq1cqh598o309v"
                    onViewportChange={_onViewportChange}>
                        
                    <GeolocateControl
                        style={geolocateStyle}
                        positionOptions={{
                        enableHighAccuracy: true
                    }}
                        trackUserLocation={true}/> 
                </MapGL>
            );
        }
    }
}