import React,{Component} from "react";
import ReactMapboxGl from "react-mapbox-gl";
import DrawControl from "react-mapbox-gl-draw";
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";

const Map = ReactMapboxGl({
accessToken: "pk.eyJ1IjoiYXJpZmVlbjAwOCIsImEiOiJjazA2c2N0cHYwZHJpM29xYmkyenkzNnpqIn0.F7bSGeHjO56JWyjTzmOs-A"
});


const zoom = [17];
const center = [99.897343, 8.644305];
const onDrawCreate = ({features}) => {console.log(features);};
// const onDrawUpdate = ({features}) => {console.log(features);};


  

export default class MapBox extends Component {

    render(){
        return (   
            <Map            
                style={"mapbox://styles/arifeen008/ck0l50wxy1ncq1cqh598o309v"}               
                zoom = {zoom}  
                center = {center}
                
                containerStyle={{
                    height: "80vh",
                    width: "78vw"     
                }}
            >         
            <DrawControl onDrawCreate={onDrawCreate} />
                                 
        </Map>
               
            );
    }

}

// import React,{ useState } from 'react'
// import MapGL, {GeolocateControl } from 'react-map-gl'
// import 'mapbox-gl/dist/mapbox-gl.css'
// import DrawControl from "react-mapbox-gl-draw";
// import ReactMapboxGl,{Feature,GeoJSONLayer} from "react-mapbox-gl";

// const TOKEN = "pk.eyJ1IjoiYXJpZmVlbjAwOCIsImEiOiJjazA2c2N0cHYwZHJpM29xYmkyenkzNnpqIn0.F7bSGeHjO56JWyjTzmOs-A"

// const onDrawCreate = ({features}) => {console.log(features);};
// const onDrawUpdate = ({features}) => {console.log(features);};

// const geolocateStyle = {
//   float: 'left',
//   margin: '50px',
//   padding: '10px'
// };

// const Map = () => {

//   const [viewport, setViewPort ] = useState({
//     width: "100%",
//     height: 900,
//     latitude: 0,
//     longitude: 0,
//     zoom: 2
//   })

//   const _onViewportChange = viewport => setViewPort({...viewport, transitionDuration: 100 })

//   return (
//       <MapGL
//         {...viewport}
//         mapboxApiAccessToken={TOKEN}
//         mapStyle="mapbox://styles/arifeen008/ck0l50wxy1ncq1cqh598o309v"
//         onViewportChange={_onViewportChange}
//       >
//         <GeolocateControl
//           style={geolocateStyle}
//           positionOptions={{enableHighAccuracy: true}}
//           trackUserLocation={true}
//         />
//         {/* <DrawControl onDrawCreate={onDrawCreate} onDrawUpdate={onDrawUpdate}/> */}
//       </MapGL>
//   )
// }

// export default Map;
