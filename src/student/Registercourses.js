import React, { Component } from 'react'
import Breadcrumb from '../components/Breadcrumb';
import { Link } from "react-router-dom";
// import TextInput from '../components/TextInput';
import axios from 'axios';
export default class Registercourses extends Component {

    state = {
        checknames : [],
        show: false

    }

    // handleModal = () => {
    //     this.setState({show:true});
    //     console.log(this.state.show);
    // }

    renderUserButton(time){

        // let classid = new (classID);
        
        
        if(time == null){
            {
                return (
                    <button type="button" className="btn btn-block btn-danger btn-sm" > ไม่มีเรียนในวันนี้ </button>
                        // "หมดเวลาบันทึกเข้าเรียน"
                );
            }
        }else{
            let d1 = new Date();
            let d2 = new Date(time.startdate+' '+time.starttime);
            let classID = (time.classID);

            // console.log(d2);
            // console.log(classID);

            if ( d1.getTime() >= d2.getTime()) {
                return (
                    
                    <Link to={'/student/Cameras/'+classID}>
                        <button type="button" className="btn btn-block btn-primary btn-sm" ><i class="fa fa-map-marker" aria-hidden="true"></i> บันทึกเวลาเรียน</button>
                    </Link>
                );
            }else{
                return (
                    <button type="button" className="btn btn-block btn-danger btn-sm"> หมดเวลาบันทึกเข้าเรียน</button>
                        // "หมดเวลาบันทึกเข้าเรียน"
                );
            }
        }

       
      }
      componentWillMount(){
        localStorage.setItem("user_ID", '59142901');
      }

    componentDidMount(){
        const script = document.createElement("script");
        script.src = '../js/Showimportteacher/content.js';
        script.async = true;
        document.body.appendChild(script);
        let user_ID = localStorage.getItem("user_ID");

        axios.get('http://localhost/cams_server/api/checknamestudent/getCourseByUserId?user_ID='+user_ID)
        .then(res => {
          this.setState({ checknames: res.data });
        })
        .catch(error => {
          console.log("====>",error.status);
        });

    }

    render() {
        console.log(this.state.show)
        console.log(this)
        return (

             <div className="content-wrapper">
                <Breadcrumb header="รายการลงทะเบียนเข้าเรียน" subheader="" arrow={
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
                                <div className="box-body table-responsive">
                                    <br />
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <table id="example2" className="table table-bordered table-hover dataTable" role="grid" aria-describedby="example2_info">
                                                <thead>
                                                    <tr>
                                                        {/* <th className="col-sm-1" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">คาบเรียน</th> */}
                                                        <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">รหัสวิชา</th>
                                                        <th className="col-sm-3" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">ชื่อรายวิชา</th>
                                                        {/* <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">วันที่ลงชื่อ</th>
                                                        <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">สถานะ</th> */}
                                                        <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">บันทึกเวลาเข้าเรียน</th>
                                                    </tr>
                                                </thead>
                                                
                                                <tbody>
                                                    { this.state.checknames.map((checkname, i) => (
                                                        <tr role="row">
                                                            {/* <td>{checkname.lesson}</td> */}
                                                            <td>{checkname.data.courseCode}</td>
                                                            <td>{checkname.data.courseName}</td>
                                                            {/* <td>{checkname.time}</td> */}
                                                            {/* <td></td> */}
                                                            {/* <td>{checkname.time.startdate}</td> */}
                                                            {/* <td>{checkname.studentID}</td> */}
                                                            {/* <td>{checkname.status}</td> */}
                                                            <td> 
                                                                    { this.renderUserButton(checkname.time) }
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
                {/* { (this.state.show)? <div>
                    <Cameras />
                </div>: <div>
                   
                </div>} */}
                
            </div>
     
    //  <Link to="/admin/course/ImportCourse">
    //                                             <button type="button" className="btn btn-block btn-info"><i className="fa fa-plus" aria-hidden="true"></i> นำเข้าข้อมูล</button>
    //                                         </Link>
        )
    }
}