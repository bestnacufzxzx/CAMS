// import React, {Component} from "react";
// import ReactMapboxGl from"react-mapbox-gl";
// import DrawControl from "react-mapbox-gl-draw";
// import'@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';
// const Map = ReactMapboxGl({
//     accessToken: 'pk.eyJ1IjoiYXJpZmVlbjAwOCIsImEiOiJjazA2c2N0cHYwZHJpM29xYmkyenkzNnpqIn0.F7bSGeHjO56JWyjTzmOs-A'}); 
    
// const zoom = [17]; 
// const center = [99.897343,8.644305];
// const onDrawCreate = ({features}) => {console.log(features)};
// const onDrawUpdate = ({features}) => {console.log(features)};
// export default class MapBox extends Component {
//     render() {
//         return (
//             <Map
//                 style={"mapbox://styles/mapbox/streets-v10"}
//                 zoom={zoom}
//                 center={center}
//                 containerStyle={{
//                 height: "80vh",
//                 width: "78vw"
//             }}>
//                 <DrawControl onDrawCreate={onDrawCreate} onDrawUpdate={onDrawUpdate}/>
//             </Map>
//         );
//     }
// }



// import React, {useState} from 'react' import MapGL, {GeolocateControl} from
// 'react-map-gl' import 'mapbox-gl/dist/mapbox-gl.css' import DrawControl from
// "react-mapbox-gl-draw"; import
// '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css'; const TOKEN =
// "pk.eyJ1IjoiYXJpZmVlbjAwOCIsImEiOiJjazA2c2N0cHYwZHJpM29xYmkyenkzNnpqIn0.F7bSG
// e HjO56JWyjTzmOs-A " const onDrawCreate = ({features}) =>
// {console.log(features)}; const onDrawUpdate = ({features}) =>
// {console.log(features)}; const geolocateStyle = {     float: 'left', margin:
// '50px',     padding: '10px' }; const Map = () => {     const
// [viewport,setViewPort] = useState({       width: "100%",       height: 900,
//   latitude: 0,       longitude: 0,       zoom: 2,     })     const
// _onViewportChange = viewport => setViewPort({         ...viewport,
// transitionDuration: 100     })     return (         <MapGL {...viewport}
//        mapboxApiAccessToken={TOKEN}
// mapStyle="mapbox://styles/arifeen008/ck0l50wxy1ncq1cqh598o309v"
// onViewportChange={_onViewportChange}>             <GeolocateControl
// style={geolocateStyle}                 positionOptions={{
// enableHighAccuracy: true             }} trackUserLocation={true}/> {/*
// <DrawControl onDrawCreate={onDrawCreate} onDrawUpdate={onDrawUpdate}/>  */}
//       </MapGL>     ) } export default Map; var map; var draw;
// mapboxgl.accessToken =
// "pk.eyJ1IjoiYXJpZmVlbjAwOCIsImEiOiJjazA2c2N0cHYwZHJpM29xYmkyenkzNnpqIn0.F7bSG
// e HjO" + "56JWyjTzmOs - A "; class Mapload extends React.Component {
// constructor(props) {     super(props)     this.state = {       lat:
// 27.85380233830591,       lng: 78.37183893820759,       zoom: 8.5,     }
// this.drawPolygon = this.drawPolygon.bind(this);     this.createArea =
// this.createArea.bind(this);     this.updateArea = this.updateArea.bind(this);
//     this.showPolygonData = this.showPolygonData.bind(this);
// this.polygonDataCalc = this.polygonDataCalc.bind(this); } componentDidMount()
// {         const { lat, lng, zoom } = this.state; map = new mapboxgl.Map({
//         container: this.mapDiv, style: 'mapbox://styles/mapbox/streets-v9',
//           center: [lng, lat],           zoom: zoom         });         draw =
// new MapboxDraw({ displayControlsDefault: false,             controls: {
// polygon: true,                 trash: true             }         });
// map.addControl(draw);        map.on('draw.create', this.createArea);
// map.on('draw.delete', this.deleteArea);        map.on('draw.update',
// this.updateArea);    }    drawPolygon(points) {         map.addLayer({
// 'id': 'maine',             'type': 'fill',             'source': {
// 'type': 'geojson',                 'data': { 'type': 'Feature',
//       'geometry': { 'type': 'Polygon',                         'coordinates':
// points        }                 }             },             'layout': {},
// 'paint': {                 'fill-color': '#088', 'fill-opacity': 0.3
//    }         });     }      createArea(e) {      let data = draw.getAll();
//        const polygonData = data.features[0].geometry.coordinates;
// this.drawPolygon(polygonData);           this.polygonDataCalc(data);     }
// polygonDataCalc(data){         let area = turf.area(data);         let
// centroid = turf.centroid(data);         let rounded_area =
// Math.round(area*100)/100;         this.polygonDiv.innerHTML =
// '<p><strong>Area: ' + rounded_area + ' square meter</strong></p><h4>Centroid:
// <br />'+             centroid.geometry.coordinates+'</h4>';     }
// deleteArea(e) {          let data = draw.getAll();
// map.removeLayer('maine').removeSource('maine');     } updateArea(e) {   let
// data = draw.getAll(); map.removeLayer('maine').removeSource('maine');
//   const polygonData = data.features[0].geometry.coordinates;
// this.drawPolygon(polygonData);           this.polygonDataCalc(data);     }
// render() {     return (       <div>         <div ref={e => this.mapDiv = e}
// className="map"></div>         <div className='calculation-box'> <div
// id='calculated-area' ref={el => this.polygonDiv = el}></div> </div>
// </div>     )   } } ReactDOM.render(<Mapload />,
// document.querySelector("#app")) import React, { Component } from 'react';
// import MapGL from 'react-map-gl'; import { Editor, EditorModes } from
// 'react-map-gl-draw'; const MODES = [   { id: EditorModes.EDITING, text:
// 'Select and Edit Feature'},   { id: EditorModes.DRAW_POINT, text: 'Draw
// Point'},   { id: EditorModes.DRAW_PATH, text: 'Draw Polyline'},   { id:
// EditorModes.DRAW_POLYGON, text: 'Draw Polygon'},   { id:
// EditorModes.DRAW_RECTANGLE, text: 'Draw Rectangle'} ]; const DEFAULT_VIEWPORT
// = {   width: 800,   height: 600,   longitude: -122.45,   latitude: 37.78,
// zoom: 14 }; export default class Map extends Component {   state = {     //
// map     viewport: DEFAULT_VIEWPORT,     // editor     selectedMode:
// EditorModes.READ_ONLY   };   _switchMode = evt => {     const selectedMode =
// evt.target.id;     this.setState({      selectedMode: selectedMode ===
// this.state.selectedMode ? null : selectedMode     });   };   _renderToolbar =
// () => {     return (       <div style={{position: absolute, top: 0, right:
// 0, maxWidth: '320px'}}>         <select onChange={this._switchMode}> <option
// value="">--Please choose a mode--</option>           {MODES.map(mode =>
// <option value={mode.id}>{mode.text}</option>)}         </select> </div>
// );   };   render() {     const { viewport, selectedMode } = this.state;
// return (       <MapGL         {...viewport}
// mapboxApiAccessToken={'pk.eyJ1IjoiYXJpZmVlbjAwOCIsImEiOiJjazA2c2N0cHYwZHJpM29
// x YmkyenkzNnpqIn0.F7bSGeHjO56JWyjTzmOs-A'}         width="100%" height="100%"
//         mapStyle={'mapbox://styles/mapbox/light-v9'}
// onViewportChange={this.setState({ viewport })}       >         <Editor
// clickRadius={12}           mode={selectedMode}         />
// {this._renderToolbar()}       </MapGL>     );   } } export default Map;
// import React from 'react'; import mapboxgl from 'mapbox-gl';
// mapboxgl.accessToken =
// 'pk.eyJ1IjoiYXJpZmVlbjAwOCIsImEiOiJjazA2c2N0cHYwZHJpM29xYmkyenkzNnpqIn0.F7bSG
// e HjO56JWyjTzmOs-A'; export default class Map extends React.Component {
// constructor(props) {   super(props);     this.state = {       lng: 99.897343,
//       lat: 8.644305,       zoom: 17     };   }   componentDidMount() { const
// map = new mapboxgl.Map({       container: this.mapContainer, style:
// 'mapbox://styles/mapbox/streets-v10',       center: [this.state.lng,
// this.state.lat],       zoom: this.state.zoom     });     map.on('move', () =>
// {       this.setState({         lng: map.getCenter().lng.toFixed(4), lat:
// map.getCenter().lat.toFixed(4),         zoom: map.getZoom().toFixed(2)
// });     });     map.addControl(new mapboxgl.GeolocateControl({
// positionOptions: {         enableHighAccuracy: true         },
// trackUserLocation: true         }));   }   render() {     return ( <div>
//    <div className='sidebarStyle'>           <div>Longitude: {this.state.lng}
// | Latitude: {this.state.lat} | Zoom: {this.state.zoom}</div>         </div>
//       <div ref={el => this.mapContainer = el} className='mapContainer' />
//   </div>     )   } }