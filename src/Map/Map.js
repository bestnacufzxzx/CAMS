import React, {Component, setState} from "react";
import ReactMapboxGl from "react-mapbox-gl";
import DrawControl from "react-mapbox-gl-draw";
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';
import axios from "axios";
const Map = ReactMapboxGl({
    accessToken: 'pk.eyJ1IjoiYXJpZmVlbjAwOCIsImEiOiJjazA2c2N0cHYwZHJpM29xYmkyenkzNnpqIn0.F7bSGeHjO' +
            '56JWyjTzmOs-A'
});

const zoom = [17];
const center = [99.897343, 8.644305];
const onDrawCreate = ({features}) => (console.log(features[0].geometry.coordinates));
const onDrawUpdate = ({features}) => (console.log(features[0].geometry.coordinates));

export default class MapBox extends Component {


    render() {
        return (
            <Map
                style={"mapbox://styles/mapbox/streets-v10"}
                zoom={zoom}
                center={center}
                containerStyle={{
                height: "80vh",
                width: "78vw"
            }}>
                <DrawControl onDrawCreate={onDrawCreate} onDrawUpdate={onDrawUpdate}/>
            </Map>
        );
    }
}
