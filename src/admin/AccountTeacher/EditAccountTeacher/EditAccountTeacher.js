import React, { Component } from 'react'
import Breadcrumb from '../../../components/Breadcrumb';
// import { Link } from "react-router-dom";

export default class EditAccountTeacher extends Component {
    componentDidMount(){
        const script = document.createElement("script");
        script.src = '../js/EditAccountTeacher/content.js';
        script.async = true;
        document.body.appendChild(script);
    }

    render() {
        return (
   
             <div className="content-wrapper">
                <Breadcrumb header="แก้ไขรายชื่ออาจารย์" subheader="" arrow={
                    [
                        {"icon":"", "title":"อาจารย์", "link":"#", "active":"active"}
                    ]
                } />

                
                <div className="content body">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="box box-primary">
                                <div className="box-body">
                                    <br />
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="col-md-6">
                                                <div className="form-group input-group-sm">
                                                    <label>ชื่อ</label>
                                                    <input type="text" className="form-control" name="" id="" placeholder="" value=""/>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group input-group-sm">
                                                    <label>นามสกุล</label>
                                                    <input type="text" className="form-control" name="" id="" placeholder="" value=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="col-md-6">
                                                <div class="form-group input-group-sm">
                                                    <label>อิเมล์</label>
                                                    <input type="text" className="form-control" name="" id="" placeholder="" value=""/>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group input-group-sm">
                                                    <label>เบอร์โทร</label>
                                                    <input type="number" className="form-control" name="" id="" placeholder="" value=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                      
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div class="col-md-6">
                                                <div className="form-group input-group-sm">
                                                    <label>Username</label>
                                                    <input type="text" className="form-control" name="" id="" placeholder="" value=""/>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div className="form-group input-group-sm">
                                                    <label>Password</label>
                                                    <input type="password" className="form-control" name="" id="" placeholder="" value=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box-footer">
                                        <input type="submit" class="btn btn-primary" value="บันทึก"/>
                                        <input type="reset" class="btn btn-default" value="เคลียร์"/>
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