import React,{Component} from "react";
import ReactMapboxGl from "react-mapbox-gl";
import DrawControl from "react-mapbox-gl-draw";
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";

const Map = ReactMapboxGl({
accessToken: ""
});
const zoom = [17];
const center = [99.897343, 8.644305];
const onDrawCreate = ({features}) => {console.log(features);};
const onDrawUpdate = ({features}) => {console.log(features);};

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
            <DrawControl onDrawCreate={onDrawCreate} onDrawUpdate={onDrawUpdate}/>                     
        </Map>
               
            );
    }

}