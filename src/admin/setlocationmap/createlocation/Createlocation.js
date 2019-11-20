import React, { Component,state } from 'react'
import Breadcrumb from '../../../components/Breadcrumb';
import Map from '../../../Map/Map';
import { Link } from "react-router-dom";


export default class Createlocation extends Component {

    pigud
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
                                    <div className="col-md-3 form-group">
                                        <div className="input-group col-md-12">
                                            <input type="text" value="ตั้งชื่อสถานที่" name="name" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-2 form-group text-center">
                                        <Link to="">
                                            <button type="button" className="btn btn-block btn-info"><i className="fa fa-plus" aria-hidden="true"></i> บันทึก </button>
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="box box-primary">
                                <div className="box-body">
                                    <br />
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <Map/>
                                        </div>
                                    </div>
                                </div>
                                <div className="box-body">
                                <br />
                                    <div className="row">
                                        <div className="col-sm-12">
                                            {state.features}
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


