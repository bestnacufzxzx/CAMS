import React, { Component } from 'react'
import Breadcrumb from '../../components/Breadcrumb';


export default class Updatacourse extends Component {
 
    render() {
        return (
            <div className="content-wrapper">
                <Breadcrumb header="หน้าแก้ไข" subheader="" arrow={
                    [
                        {"icon":"fa fa-dashboard", "title":"หน้าแก้ไข", "link":"#"}
                    ]
                } />
                <div className="content body">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="box box-primary">
                                <div className="box-body">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div className="form-group">
                                                <label htmlFor="example2">รหัสวิชา</label>
                                                <input type="text" id="example2" className="form-control form-control-md"  placeholder="SWE-205" />
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div className="form-group">
                                                <label htmlFor="example2">ชื่อรายวิชา</label>
                                                <input type="text" id="example2" className="form-control form-control-md" placeholder="Data Structures" />
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div className="form-group">
                                                <label htmlFor="example2">หน่วยกิต</label>
                                                <input type="text" id="example2" className="form-control form-control-md" placeholder="1" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="box-footer clearfix">
                                    {/* <input type="hidden" name="saoId" value="11"/>
                                    <button type="submit" class="pull-right btn btn-success">
                                        <i class="fa fa-arrow-circle-right"></i> บันทึก
                                    </button>   
                                        
                                    <a href="/course/updata" class="pull-right btn btn-danger">
                                        <i class="fa fa-arrow-circle-left"></i> กลับ
                                    </a> */}
                                     <button type="button" className="pull-right btn btn-success"><i className="fa fa-arrow-circle-right"></i> บันทึก </button> 
                                     <button type="button" className="pull-right btn btn-danger"><i className="fa fa-arrow-circle-left"></i> กลับ </button> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
