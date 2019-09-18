import React, {Component} from 'react';
import Breadcrumb from '../../../components/Breadcrumb.js';
import { Link } from "react-router-dom";

export default class Editlocation extends Component {

    componentDidMount(){
        const script = document.createElement("script");
        script.src = '../js/Editlocation/content.js';
        script.src = '../js/Editlocation/content.css';
        script.async = true;
        document.body.appendChild(script);
    }
    render(){
        return(
             <div className="content-wrapper">
                <Breadcrumb header="แก้ไขสถานที่" arrow={
                    [
                        {"icon":"fa fa-dashboard", "title":"แก้ไขสถานที่", "link":"#", "active":"active"}
                    ]
                } />

                <div className="content body">
                    <div class="row">
                        <div class="col-lg-9">
                            <div class="box theader-sky">
                                <div class="box-body">

                                                    Map

                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div className="box theader-sky">
                                <div className="box-body">
                                    <label>ตำแหน่งปัจจุบัน</label>
                                    <table id="example2" className="table table-bordered table-hover dataTable " role="grid" aria-describedby="example2_info">
                                        <thead>
                                            <tr role="row">
                                                <th className="col-md-6" tabIndex="0" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">lati</th>
                                                <th className="col-md-6 " tabIndex="0" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">longti</th>
                                            </tr>
                                        </thead>
                                    <tbody >
                                        <tr role="row" className="odd">
                                            <td> <input type="text" value="lati" name="name" className="form-control" /> </td>
                                            <td> <input type="text" value="longti" name="name" className="form-control" /></td>
                                        </tr>
                                    </tbody>
                                    </table> 
                                    <div>
                                        <Link to="">
                                            <button type="button" className="btn btn-block btn-info"><i className="fa fa-plus" aria-hidden="true"></i> บันทึก </button>
                                        </Link>
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


                




        