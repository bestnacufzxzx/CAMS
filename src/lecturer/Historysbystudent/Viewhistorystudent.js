import React, { Component } from 'react'
import Breadcrumb from '../../components/Breadcrumb'
import axios from 'axios';
// import { Link } from "react-router-dom";

export default class Viewhistorystudent extends Component {
  
    state = {
        historys : [],
        i : '0'
    }
    numeol(i){
        // let classID = i+1
        // this.setState(classID)
    }
    // renderhistoryid(){
    //     // let history = (history);
    //     return(
    //         <Link to={'Historysbystudent'}>
    //             <button type="button" className="btn btn-success"> <i class="fa fa-eye" aria-hidden="true"> </i> </button>
    //         </Link> 
    //     )
    // }

    chackstatus(status){
        // if(status == 1){
        //     return(
        //         "เข้าเรียน"
        //     )
        // }else if(status == 2){
        //     return(
        //         "เข้าเรียนสาย"
        //     )
        // }else if(status == 3){
        //     return(
        //         "ไม่เข้าเรียน"
        //     )
        // }
    }
    
    
    componentDidMount(){
        const  studentID = this.props.match.params.studentID;
        const  courseID = this.props.match.params.courseID;
    //     let studentID = HistorysbystudentstudentID;
        // let classID = 1;
        axios.get('http://localhost/cams_server/api/lecturers/get_id_history_student?studentID='+studentID+"&courseID="+courseID)
        .then(res => {
        this.setState({ historys: res.data });
        })
        .catch(error => {
        console.log("====>",error.status);
        });
    
        const script = document.createElement("script");
        script.src = '../js/Showimportteacher/content.js';
        script.async = true;
        document.body.appendChild(script);
        }

    render() {
        console.log(this.state.classID)
        return (
   
             <div className="content-wrapper">
                <Breadcrumb header="ประวัตินักศึกษา" subheader="" arrow={
                    [
                        // {"icon":"", "title":"รายวิชาที่สอน", "link":"#", "active":"active"}
                    ]
                } />
                <div className="content body">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="box theader-search-sky">
                                <div class="box-header">
                                    <div className="row">
                                        <div className="col-md-10">
                                            {/* <div className="input-group">
                                                <input type="text" className="form-control" />
                                                <span className="input-group-addon"><i className="fa fa-search" aria-hidden="true"></i></span>
                                            </div> */}
                                        </div>
                                        <div className="col-md-2">
                                            {/* <Link to={'/admin/Createteaching/'+this.state.courseID}> */}
                                                <button type="button" className="btn btn-block btn-info"><i className="fa fa-table" aria-hidden="true"></i> ออกรายงานประวัติการเข้าเรียน</button>
                                            {/* </Link> */}
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
                                    <table id="example1" class="table table-bordered table-striped" role="grid" >
                                        <thead>
                                            <tr>
                                                <th className="col-sm-1" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">คาบที่</th>
                                                <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">วัน-เวลา</th>
                                                <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">สถานะ</th>
                                                <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">เปอร์เซ็นการเข้าเรียน</th>
                                                <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-label="CSS grade: activate to sort column ascending">การจัดการ</th>    
                                            </tr>
                                        </thead>
                                        <tbody>
                                            { this.state.historys.map((history, i) => (
                                                    <tr role="row">
                                                        <td>{this.numeol()}{i+1}</td>
                                                        <td>{history.datetime}</td>
                                                        <td>{this.chackstatus(history.status)}</td>
                                                        <td className="text-center">
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
     
        )
    }
}

