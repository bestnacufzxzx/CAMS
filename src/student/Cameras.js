import React, { Component } from 'react';
// import ReactDOM from "react-dom";
// import Modal from "../components/Modal";
import Breadcrumb from '../components/Breadcrumb';
import Camera from "../demo/AppMinimumUsage"
import Location from '../location/location';
// import Registercourses from './Registercourses';
// import queryString from 'query-string';
// import ReactDOM from "react-dom";
// import { Button, } from 'react-bootstrap';
// import queryString from 'query-string';

 
export default class Cameras extends Component {
    
    constructor() {
        super()
        this.state = {
            Camera : <Camera/>,
            // Location : <Location/>,
            latitude: '',
            longitude: ''
        }
        this.getMyLocation = this.getMyLocation.bind(this)
    }

    componentDidMount() {
        this.getMyLocation()
      }
    
      getMyLocation() {
        const location = window.navigator && window.navigator.geolocation
        
        if (location) {
          location.getCurrentPosition((position) => {
            this.setState({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            })
          }, (error) => {
            this.setState({ latitude: 'err-latitude', longitude: 'err-longitude' })
          })
        }
    
      }
    

    render() {
        const { latitude, longitude } = this.state
        let id = this.props.match.params.id;

        console.log(id);
        console.log(latitude);
        console.log(longitude);
 

        return (
   
            <div className="content-wrapper">
            <Breadcrumb header="ยืนยันสถานที่เรียน" subheader="" arrow={
                [
                    {"icon":"", "title":"นักศึกษา", "link":"#", "active":"active"}
                ]
            } />

            
            <div className="content body">
                {/* <div class="row">
                    <div class="col-md-12">
                        <div class="box theader-search-sky">
                            <div class="box-header">                   
                                {latitude} , {longitude}
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="row">
                    <div className="col-md-12">
                        {/* <div className="box box-primary">
                            <div className="box-body">
                                <br /> */}
                                    {this.state.Camera}
                            {/* </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>

        )
    }
}