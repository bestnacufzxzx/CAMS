import React, { Component } from 'react'
import Breadcrumb from '../components/Breadcrumb';
// import { Link } from "react-router-dom";
// import TextInput from '../components/TextInput';
import axios from 'axios';

export default class Registercourses extends Component {

    state = {
        checknames : [],
        // courseID: "",
        // latitude: '',
        // longitude: ''
    }
   
    // rendercoursetable(){

    // }
    renderUserButton(time){

        if(time == null){
            {
                return (
                    <button type="button" className="btn btn-block btn-danger btn-sm"> ไม่มีเรียนในวันนี้ </button>
                        // "หมดเวลาบันทึกเข้าเรียน"
                );
            }
        }else{

            let d1 = new Date();
            let d2 = new Date(time.startdate+' '+time.starttime);
            let d3 = new Date(time.startdate+' '+time.starttime);
            console.log(d1);
            console.log(time);
            console.log(time);
            // console.log(d2);
            // let same = d1.getTime() === d2.getTime();
            if ( d1.getTime() >= d2.getTime()) {
                return (
                    <button type="button" className="btn btn-block btn-primary btn-sm" data-toggle="modal" data-target="#modal-default"><i class="fa fa-map-marker" aria-hidden="true"></i> บันทึกเวลาเรียน</button>
                );
            }else{
                return (
                    <button type="button" className="btn btn-block btn-danger btn-sm"> หมดเวลาบันทึกเข้าเรียน</button>
                        // "หมดเวลาบันทึกเข้าเรียน"
                );
            }
        }

        // function addZero(i){
        //     if (i < 10) {
        //       i = "0" + i;
        //     }
        //     return i;
        //   }

        // var d = new Date();
        // var days = ["0","1","2","3","4","5","6"];  //["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
        // var day = days[d.getDay()];
        // var x = document.getElementById("demo");
        // var h = addZero(d.getHours());
        // var m = addZero(d.getMinutes());
        // var s = addZero(d.getSeconds());
        // x = h + ":" + m + ":" + s;

        // let d1 = (x);
        // let d2 = (starttime);
        // let d3 = (endtime);
        // let date = (daypresent);
        
        
        // console.log(d1);
        // console.log(d2);
        // console.log(d3);
        // console.log(day);
        // console.log(daypresent);

        // let d1 = new Date();
        // let d2 = new Date(starttime);
        // let same = d1.getTime() === d2.getTime();
        // if ( d1 >= d2 && d1 <= d3 && days == date) {
        //   return (

        //     <button type="button" className="btn btn-block btn-primary btn-sm" data-toggle="modal" data-target="#modal-default"><i class="fa fa-map-marker" aria-hidden="true"></i> บันทึกเวลาเรียน</button>
        //     );
        // }else{
        //     return (
        //         <button type="button" className="btn btn-block btn-danger btn-sm"> หมดเวลาบันทึกเข้าเรียน</button>
        //             // "หมดเวลาบันทึกเข้าเรียน"
        //     );
        // }
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
        // console.log(renderUserButton(checkname.startdate))
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
                                <div className="box-body">
                                    <br />
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <table id="example2" className="table table-bordered table-hover dataTable" role="grid" aria-describedby="example2_info">
                                                <thead>
                                                    <tr>
                                                        <th className="col-sm-1" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">คาบเรียน</th>
                                                        <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">รหัสวิชา</th>
                                                        <th className="col-sm-3" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">ชื่อรายวิชา</th>
                                                        {/* <th className="col-sm-1" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">วันเรียน</th> */}
                                                        <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">วันที่ลงชื่อ</th>
                                                        <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">สถานะ</th>
                                                        <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">บันทึกเวลาเข้าเรียน</th>
                                                    </tr>
                                                </thead>
                                                
                                                <tbody>
                                                    { this.state.checknames.map((checkname, i) => (
                                                        <tr role="row">
                                                            <td>{checkname.lesson}</td>
                                                            <td>{checkname.data.courseCode}</td>
                                                            <td>{checkname.data.courseName}</td>
                                                            {/* <td>{checkname.date}</td> */}
                                                            <td>{checkname.data.startdate}</td>
                                                            {/* <td>{checkname.studentID}</td> */}
                                                            <td>{checkname.status}</td>
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
                <div>
                    <div class="modal fade" id="modal-default">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span></button>
                                <h4 class="modal-title">บันทึกลงเวลาเข้าเรียน</h4>
                            </div>
                            <div class="modal-body">
                            {/* &hellip; */}

                            <form onSubmit={this.createstudentinformation}>
                                <div className="row">
                                    <div className="col-md-12">
                                            {/* <Map/>  
                                            <div>
                                                <h5>latitude</h5>
                                                <input type="text" value={latitude} />
                                                <h5>longitude</h5>
                                                <input type="text" value={longitude} />
                                            </div> */}
                                    </div>
                                </div> 
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