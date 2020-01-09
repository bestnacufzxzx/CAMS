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
    
    
    componentDidMount(){
        const  courseID = this.props.match.params.courseID;
    //     let courseID = HistorysbystudentcourseID;
        let classID = 1;
        axios.get('http://localhost/cams_server/api/lecturers/get_id_history_student?courseID='+courseID+"&classID="+classID)
        .then(res => {
        this.setState({ historys: res.data });
        })
        .catch(error => {
        console.log("====>",error.status);
        });
    
    //             // const script = document.createElement("script");
    //             // script.src = '../js/Showimportteacher/content.js';
    //             // script.async = true;
    //             // document.body.appendChild(script);
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
                
                   
                    <div className="row">
                        <div className="col-md-12">
                            <div className="box box-primary">
                                <div className="box-body">
                                    {/* <br />
                                    <div className="row">
                                        <div className="col-sm-12"> */}
                                            <table id="example1" class="table table-bordered table-striped" role="grid" >
                                                <thead>
                                                    <tr>
                                                        <th className="col-sm-1" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">คาบที่</th>
                                                        <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">วัน-เวลา</th>
                                                        <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">สถานะ</th>
                                                        <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-label="CSS grade: activate to sort column ascending">การจัดการ</th>    
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    { this.state.historys.map((history, i) => (
                                                            <tr role="row">
                                                                <td>{this.numeol()}{i+1}</td>
                                                                <td>{history.datetime}</td>
                                                                <td className="text-center">
                                                                </td>
                                                            </tr>
                                                        ))}
                                                </tbody>
                                            </table>
                                        {/* </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
     
        )
    }
}

