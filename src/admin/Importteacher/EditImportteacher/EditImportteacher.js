import React, { Component } from 'react'
import Breadcrumb from '../../../components/Breadcrumb';
// import { Link } from "react-router-dom";

export default class EditImportteacher extends Component {
    componentDidMount(){
        const script = document.createElement("script");
        script.src = '../js/Showimportteacher/content.js';
        script.async = true;
        document.body.appendChild(script);
    }

    render() {
        return (
   
             <div className="content-wrapper">
                <Breadcrumb header="แสดงรายชื่ออาจารย์" subheader="" arrow={
                    [
                        {"icon":"", "title":"อาจารย์", "link":"#", "active":"active"}
                    ]
                } />

                
                <div className="content body">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="box box-primary">
                                <div className="box-body">
                                    <br />
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div class="col-md-4">
                                                <div class="form-group input-group-sm">
                                                    <label>ชื่อ</label>
                                                    <input type="text" class="form-control" name="" id="" placeholder="" value=""/>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group input-group-sm">
                                                    <label>นามสกุล</label>
                                                    <input type="text" class="form-control" name="" id="" placeholder="" value=""/>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group input-group-sm">
                                                    <label>อิเมล์</label>
                                                    <input type="text" class="form-control" name="" id="" placeholder="" value=""/>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group input-group-sm">
                                                    <label>เบอร์โทร</label>
                                                    <input type="number" class="form-control" name="" id="" placeholder="" value=""/>
                                                </div>
                                            </div>
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