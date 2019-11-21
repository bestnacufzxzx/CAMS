import React, {Component,setState} from "react";
import ReactMapboxGl from "react-mapbox-gl";
import DrawControl from "react-mapbox-gl-draw";
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';
const Map = ReactMapboxGl({
    accessToken: 'pk.eyJ1IjoiYXJpZmVlbjAwOCIsImEiOiJjazA2c2N0cHYwZHJpM29xYmkyenkzNnpqIn0.F7bSGeHjO' +
            '56JWyjTzmOs-A'
});

const zoom = [17];
const center = [99.897343, 8.644305];

const onDrawCreate = ({features}) => (console.log(features));
const onDrawUpdate = ({features}) => (console.log(features));

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
        />
                <DrawControl onDrawCreate={onDrawCreate} onDrawUpdate={onDrawUpdate}/>
            </Map>
        );
    }
}

// import React, { Component } from "react";
// import ReactMapGL, {DrawControl} from "react-map-gl";
// // import DrawControl from "react-mapbox-gl-draw";

// const MODES = [
//   {name: 'Read Only', value: DrawControl.READ_ONLY},
//   {name: 'Select FEATURE', value: DrawControl.SELECT_FEATURE},
//   {name: 'Select Vertex', value: DrawControl.SELECT_VERTEX},
//   {name: 'Draw Path', value: DrawControl.DRAW_PATH}, 
//   {name: 'Draw Polygon', value: DrawControl.DRAW_POLYGON}, 
//   {name: 'Draw Point', value: DrawControl.DRAW_POINT}
// ];

// class Map extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       viewport: {
//         width: 800,
//         height: 600,
//         longitude: -122.45,
//         latitude: 37.78,
//         zoom: 14
//       },
//       mode: DrawControl.READ_ONLY,
//       features: [],
//       selectedId: null
//     }
//   }
  
//   _updateViewport = (viewport) => {
//     this.setState({viewport});
//   }
  
//   _onSelect = (selectedId) => {
//     this.setState({selectedId});
//   }
  
//   _onUpdate = (features) => {
//     this.setState({
//       features,
//       selectedId: null
//     });
//   }
  
//   _renderControlPanel = () => {
//     return (
//       <div style={{position: absolute, top: 0, right: 0, maxWidth: '320px'}}>
//         <select onChange={this._switchMode}>
//           <option value="">--Please choose a mode--</option>
//           {MODES.map(mode => <option value={mode.value}>{mode.name}</option>)}
//         </select>
//       </div>
//     );
//   }
  
//   _switchMode = (evt) => {
//     const mode = evt.target.value;
//     this.setState({mode});
//   }

//   render() {
//     const {viewport, mode, selectedId, features} = this.state;
//     return (
//       <ReactMapGL {...viewport} onViewportChange={updateViewport}>
//         <DrawControl
//           mode={mode}
//           features={features}
//           styles={"mapbox://styles/mapbox/streets-v10"}
//           selectedId={selectedId}
//           onSelect={this._onSelect}
//           onUpdate={this._onUpdate}
//         />
//         {this._renderControlPanel()} 
//       </ReactMapGL>
//     );
//   }
// }
