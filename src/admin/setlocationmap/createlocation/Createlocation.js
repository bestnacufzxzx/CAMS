import React, { Component } from 'react'
import Breadcrumb from '../../../components/Breadcrumb';
import Map from '../Map/Map';
import axios from 'axios';
import { Link } from "react-router-dom";

export default class Createlocation extends Component {

    state = {
        gps: [],
        // roomname : '',
        // buildingName : ''
    }

    handleChange = (event) => {
        let roomname = event.target.roomname;
        let buildingName = event.target.buildingName;
        let gps = event.target.gps;
        this.setState({[roomname] : roomname,[buildingName] : buildingName});
        console.log(this.state);
    }


    setGps = (arrGps) => {
        this.setState({'gps': arrGps});
        console.log(arrGps);
        // console.log(this.state.gps);
    }

    importHandle = () => {
        axios.post('http://localhost/cams_server/api/location/create', { roomname : this.state.roomname, buildingName : this.state.buildingName, gps : this.state.gps })
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log("====>",error);
        });
    }

    render() {
        return (
            <div className="content-wrapper">
                <Breadcrumb header="สถานที่เรียน" subheader="" arrow={
                    [
                        { "icon": "fa fa-map-marker", "title": "แผนที่สถานที่เรียน", "link": "#", "active": "active" }
                    ]
                } />

                <div className="content body">
                    <div className="box theader-search-sky">
                        <div className="box-header">
                            <div className="row">
                                <form id="form-search">
                                    <div className="col-md-5"></div>
                                        <div className="col-md-2">
                                        </div>
                                    <div className="col-md-12 form-group">
                                        <div className="input-group col-md-6">
                                            <input type="text" value={this.state.buildingName} id="buildingName" onChange={this.handleChange} placeholder='ชื่ออาคาร' name="buildingName" className="form-control" />                                          
                                      
                                            <input type="text" value={this.state.roomname} id="roomname" onChange={this.handleChange} placeholder='ชื่อห้อง' name="roomname" className="form-control" />    
                                        </div>
                                    </div>
                                    <div className="col-md-2 form-group text-center">
                                        {/* <Link to=""> */}
                                            <button type="button" className="btn btn-block btn-info" onClick={this.importHandle}><i className="fa fa-plus" aria-hidden="true"></i> บันทึก </button>
                                        {/* </Link> */}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="box box-primary">
                                <div className="box-body">
                                    <div className="row">
                                        <div className="col-sm-12">
                                        <Map changeGps={this.setGps} />
                                        <h1>GPS : {this.state.gps}</h1>                                                                                                                  
                                        </div>                                   
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


