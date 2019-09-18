import React, { Component } from 'react'
import Breadcrumb from '../../components/Breadcrumb';
import { Link } from "react-router-dom";

export default class Showlocation extends Component {
    componentDidMount(){
        const script = document.createElement("script");
        script.src = '../js/Showlocation/content.js';
        script.async = true;
        document.body.appendChild(script);
    }

    render() {
        return (
   
             <div className="content-wrapper">
                <Breadcrumb header="กำหนดตำแหน่งสถานที่เรียน" subheader="" arrow={
                    [
                        {"icon":"fa fa-map-marker", "title":"แผนที่", "link":"#", "active":"active"}
                    ]
                } />

                
                <div className="content body">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="box theader-search-sky">
                                <div class="box-header">                   
                                    <div className="row">
                                        <div className="col-md-10">
                                        </div>
                                        <div className="col-md-2">
                                            <Link to="/admin/Createlocation">
                                                <button type="button" className="btn btn-block btn-info"><i className="fa fa-plus" aria-hidden="true"></i> สร้างตำแหน่ง</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
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
                                            <table id="example2" className="table table-bordered table-hover dataTable" role="grid" aria-describedby="example2_info">
                                                <thead>
                                                    <tr   >
                                                        <th className="col-sm-5" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">อาคาร</th>
                                                        <th className="col-sm-5" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">ห้องเรียน</th>
                                                        <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-label="CSS grade: activate to sort column ascending">การจัดการ</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr role="row" className="odd">
                                                        <td className="sorting_1">7</td>
                                                        <td>203</td>
                                                        <td> 
                                                            <Link to="/admin/Editlocation"><button type="button" className="btn btn-warning"><i className="fa fa-edit"></i></button> </Link>
                                                            <button type="button" className="btn btn-danger"><i className="fa fa-trash"></i></button>
                                                        </td>
                                                    </tr>
                                                    <tr role="row" className="even">
                                                        <td className="sorting_1">3</td>
                                                        <td>106</td>
                                                        <td>
                                                            <button type="button" className="btn btn-warning"><i className="fa fa-edit"></i></button> <button type="button" className="btn btn-danger"><i className="fa fa-trash"></i></button>
                                                        </td>
                                                    </tr>
                                                    <tr role="row" className="even">
                                                        <td className="sorting_1">1</td>
                                                        <td>202</td>
                                                        <td>
                                                            <Link to="/admin/Editlocation"><button type="button" className="btn btn-warning"><i className="fa fa-edit"></i></button> </Link>
                                                            <button type="button" className="btn btn-danger"><i className="fa fa-trash"></i></button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
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