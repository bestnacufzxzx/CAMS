import React, {Component, useState} from "react";
import ReactMapboxGl from "react-mapbox-gl";
import DrawControl from "react-mapbox-gl-draw";
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';

const Map = ReactMapboxGl({
    accessToken: 'pk.eyJ1IjoiYXJpZmVlbjAwOCIsImEiOiJjazA2c2N0cHYwZHJpM29xYmkyenkzNnpqIn0.F7bSGeHjO' +
            '56JWyjTzmOs-A'
});

const zoom = [17];
const center = [99.897343, 8.644305];


// const [dataState,setDataState] = useState(
//     {
//         array : [],
//         counter : 0
//     }
// )

// const onDrawCreate = () => {
//     setDataState({
//         array : dataState.array
//     });
// }
// const onDrawUpdate = () => {
//     setDataState({
//         array : dataState.array
//     });
// }

// const plushandler = () => {
//     setDataState({
//         counter : dataState.counter +1
//     });
// }



const onDrawCreate = ({features}) => (console.log(features[0].geometry.coordinates));
const onDrawUpdate = ({features}) => (console.log(features[0].geometry.coordinates));

export default class MapBox extends Component {

    render() {
        return (
            <div>
                <Map
                    style={"mapbox://styles/mapbox/streets-v10"}
                    zoom={zoom}
                    center={center}
                    containerStyle={{
                    height: "80vh",
                    width: "78.5vw"
                }}>
                    <DrawControl onDrawCreate={onDrawCreate} onDrawUpdate={onDrawUpdate}/>
                </Map>
                {/* <button onClick={plushandler}>Button</button>
                button : {dataState.counter} */}
            </div>

        );
    }
}
