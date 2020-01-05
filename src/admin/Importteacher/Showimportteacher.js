import React, { Component } from 'react'
import Breadcrumb from '../../components/Breadcrumb';
import { Link } from "react-router-dom";
import TextInput from '../../components/TextInput';
// import Button from '../../components/Button';
import axios from 'axios';
import service_uri from '../../components/variable/service_uri';

export default class Showimportteacher extends Component {
    state = {
        lecturers:[]
    }

    renderdelete(lecturerid){
        // console.log(lecturerid)
        return(
            <button type="button" className="btn btn-danger" onClick={() => this.handleRemove(lecturerid)}><i class="fa fa-trash" aria-hidden="true"></i> </button>
        )
    }

    handleRemove = (lecturerID) => {
        const url = service_uri +'admin_showuser/get_delete_lecturerid?lecturerID='+lecturerID;
        axios.get(url)
            .then(res => {
                console.log(res);
            })
            alert("ลบสำเร็จ")
            this.RefreshPage();
    } 

    RefreshPage=()=> { 
        window.location.href = 'http://localhost:3000/admin/ShowImportteacher'; 
    }

    renderedit(lecturers){
        let lecturerID = lecturers.lecturerID;
        return(
            <Link to={'EditImportteacher/'+lecturerID}>
               &nbsp; <button type="button" className="btn btn-success"> <i class="fa fa-edit" aria-hidden="true"> </i> </button>&nbsp;
            </Link>
        )
    }


    componentDidMount(){
        const script = document.createElement("script");
        script.src = '../js/Showimportteacher/content.js';
        script.async = true;
        document.body.appendChild(script);

        axios.get('http://localhost/cams_server/api/admin_showuser/showusername_teacher')
        .then(response => {
          this.setState({ lecturers: response.data });
        })
        .catch(error => {
          console.log("====>",error.status);
        });

    };

    render() {
        return (
   
             <div className="content-wrapper">
                <Breadcrumb header="แสดงรายชื่ออาจารย์" subheader="" arrow={
                    [
                        {"icon":"", "title":"อาจารย์", "link":"#", "active":"active"}
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
                                            <Link to="/admin/Createimportteacher">
                                                <button type="button" className="btn btn-block btn-info"><i className="fa fa-plus" aria-hidden="true"></i> นำเข้าข้อมูลอาจารย์</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="box box-primary table-responsive">
                                <div className="box-body">
                                    <br />
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <table id="example2" className="table table-bordered table-hover dataTable" role="grid" aria-describedby="example2_info">
                                                <thead>
                                                    <tr   >
                                                        <th className="col-sm-1" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">ลำดับ</th>
                                                        {/* <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">รูปภาพ</th> */}
                                                        <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">ชื่อ</th>
                                                        <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">อีเมล์</th>
                                                        <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">เบอร์โทร</th>
                                                        <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-label="CSS grade: activate to sort column ascending">การจัดการ</th>
                                                    </tr>
                                                </thead>

                                                <tbody>
                                                    { this.state.lecturers.map((lecturers, i) => (
                                                        <tr role="row">
                                                            <td>{i+1}</td>
                                                            {/* <td></td> */}
                                                            <td className="sorting_1"> {lecturers.prefix} {lecturers.firstName} {lecturers.lastName}</td>
                                                            <td>{lecturers.email}</td>
                                                            <td>{lecturers.phoneNumber}</td>
                                                            <td> 
                                                                {this.renderdelete(lecturers.lecturerID)}
                                                                {this.renderedit(lecturers)}
                                                                {/* <Link to={'/admin/course/Updatacourse/'+course.courseID} ><button type="button" className="btn btn-warning" onClick={this.updateCourse} ><i className="fa fa-edit"></i></button></Link> <button type="button" className="btn btn-danger"><i className="fa fa-trash"></i></button> */}
                                                            </td>
                                                        </tr>
                                                    ))
                                                    }

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div class="modal fade" id="modal-default">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span></button>
                                <h4 class="modal-title">แก้ไขข้อมูลอาจารย์</h4>
                            </div>
                            <div class="modal-body">
                            {/* &hellip; */}

                            <form onSubmit={this.savepersonalinformation}>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div class="col-md-4">
                                            <div class="form-group input-group-sm">
                                                <label>ชื่อ</label>
                                                <TextInput value={this.state.firstname} inputname="firstname" classes="form-control" placeholder="กรอกชื่อจริง" change={this.onChangeHandle} />
                                                {/* <input type="text" class="form-control" name="" id="" placeholder="" value=""/> */}
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group input-group-sm">
                                                <label>นามสกุล</label>
                                                <TextInput value={this.state.lastname} inputname="lastname" classes="form-control" placeholder="กรอกนามสกุล" change={this.onChangeHandle} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div class="col-md-4">
                                            <div class="form-group input-group-sm">
                                                <label>อิเมล์</label>
                                                <TextInput value={this.state.email} inputname="email" classes="form-control" placeholder="กรอกอีเมล์" change={this.onChangeHandle} />
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group input-group-sm">
                                                <label>เบอร์โทร</label>
                                                <TextInput value={this.state.tel} inputname="tel" classes="form-control" placeholder="กรอกเบอร์โทร" change={this.onChangeHandle} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <รูปทำไง> */}
                            </form>

                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-default pull-left" data-dismiss="modal"> ยกเลิก </button>
                                <button type="button" class="btn btn-primary" onClick={this.savepersonalinformation}> บันทึก </button>
                            </div>
                            </div>
                            {/* <!-- /.modal-content --> */}
                        </div>
                        {/* <!-- /.modal-dialog --> */}
                    </div>
                    {/* <!-- /.modal --> */}
                </div>
            </div>
            
        )
    }
}