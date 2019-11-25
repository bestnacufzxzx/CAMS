import React, { Component } from 'react'
import Breadcrumb from '../components/Breadcrumb';
import { Link } from "react-router-dom";
import axios from 'axios';


export default class Timetreatment extends Component {

    state = {
        courses : [],
        // show: false

    }
    // renderButton(time){
    //     let historyclassID = (time.classID); //+historyclassID
    //     return (
    //         <Link to={'/student/Showhistorycourse/'+historyclassID}> 
    //             <button type="button" className="btn btn-block btn-primary btn-sm" >ประวัติการเข้าเรียน</button>
    //         </Link>
    //     );
    // }

    // componentWillMount(){
    //     localStorage.setItem("user_ID", '59142901');
    //     }

    componentDidMount(){
        let user_ID = localStorage.getItem("user_ID");
        axios.get('http://localhost/cams_server/api/checknamestudent/getCourseByUserId?user_ID='+user_ID)
        .then(res => {
        this.setState({ courses: res.data });
        })
        .catch(error => {
        console.log("====>",error.status);
        });
    }

    render() {
        return (
   
             <div className="content-wrapper">
                <Breadcrumb header="แสดงรายชื่อวิชา" subheader="" arrow={
                    [
                        {"icon":"", "title":"นักศึกษา", "link":"#", "active":"active"}
                    ]
                } />

                
                <div className="content body">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="box theader-search-sky">
                                <div class="box-header">                   
                                    <div className="row">
                                        <form action="" method="POST" id="">
                                            <div className="col-md-3 form-group"></div>
                                            <div className="col-md-4 form-group">
                                            </div>
                                            <div className="col-md-3 form-group">
                                                <input type="text" className="form-control" name="searchText" value="" placeholder="ค้นหา"/>
                                            </div>
                                            <div className="col-md-2 form-group">
                                                <button type="submit" className="btn btn-block btn-info pull-right"><i class="fa fa-search" aria-hidden="true"></i> ค้นหา</button> 
                                            </div>
                                        </form>
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
                                                    <tr>
                                                        <th className="col-sm-1" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">ลำดับ</th>
                                                        <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">รหัสวิชา</th>
                                                        <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">ชื่อรายวิชา</th>
                                                        <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-label="CSS grade: activate to sort column ascending">การจัดการ</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    { this.state.courses.map((course, i) => (
                                                            <tr role="row">
                                                                <td>{i+1}</td>
                                                                <td>{course.data.courseCode}</td>
                                                                <td>{course.data.courseName}</td>
                                                                <td> 
                                                                  {/* { this.renderButton(course.time) } */}
                                                                </td>
                                                            </tr>
                                                        ))}
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