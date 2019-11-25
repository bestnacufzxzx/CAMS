import React, { Component } from 'react'
import Breadcrumb from '../../components/Breadcrumb';
import CSVReader from "react-csv-reader";
import axios from 'axios';


export default class ImportCourse extends Component {

    state = {
        data: [],
        file: []
    }

        componentDidMount(){
        const script = document.createElement("script");
        script.src = '../../js/ShowCourse/content.js';
        script.async = true;
        document.body.appendChild(script);
    }


    readfileHandle = data => {
        let courses = {
            course_Code: '',
            course_Name: '',
            course_Credits: ''
        }
        const file = [];
        data.map((v) => {  //(v,i)
            let temp  = {...courses};
            temp.course_Code = v[0];
            temp.course_Name = v[1];
            temp.course_Credits = v[2];

            if (temp.course_Code == "" || temp.course_Code == null ){
                file.push(temp);
            }
            
        });
        this.setState({
            file: file
        });
    }

    showfileImportHandle = () =>{
        const data = [...this.state.file];
        this.setState({
            data: data
        })
    }

    importHandle = () => {
        axios.post('http://localhost/cams_services/importcourse/import', this.state.data)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log("====>",error);
        });
    }

    clearShowFileImport = () => {
        const data = [];
        this.setState({data: data});
    }

    
    render() {
        return (
                <div className="content-wrapper">
                <Breadcrumb header="นำเข้ารายวิชา" subheader="นำเข้าข้อมูล" arrow={
                    [
                        {"icon":"fa fa-dashboard", "title":"ค้นหารายวิชา", "link":"#"},
                        {"icon":"fa fa-dashboard", "title":"นำเข้ารายวิชา", "link":"#", "active":"active"}
                    ]
                } />

                <div className="content body">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="box box-primary">
                                <div className="box-header with-border">
                                    <h3 className="box-title">นำเข้ารายวิชา</h3>
                                </div>
                                <div className="box-body">
                                    <div className="container">
                                        <CSVReader
                                            cssClass="react-csv-input"
                                            label="เลือกไฟล์ .csv ที่มาจากการ นำเข้าข้อมูล เท่านั้น"
                                            onFileLoaded={this.readfileHandle}
                                        />
                                    </div>
                                </div>
                                <div className="box-footer">
                                    <button type="submit" className="btn btn-default" onClick={this.clearShowFileImport}>ล้าง</button>
                                    <button type="submit" className="btn btn-info pull-right" onClick={this.showfileImportHandle}>แสดง</button>
                                </div>
                            </div>
                        </div>
            
                        <div className="col-md-8">
                            <div className="box box-info">
                                <div className="box-header with-border">
                                    <h3 className="box-title">ตารางแสดงผลการนำเข้าข้อมูล</h3>
                                </div>
                                <div className="box-body">
                                    <table id="example2" className="table table-bordered table-hover dataTable" role="grid" aria-describedby="example2_info">
                                        <thead>
                                            <tr role="row">
                                                <th className="sorting_asc" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">ลำดับ</th>
                                                <th className="sorting" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-label="Rendering engine: activate to sort column descending">รหัสวิชา</th>
                                                <th className="sorting" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-label="CourseName: activate to sort column ascending">ชื่อรายวิชา</th>
                                                {/* <th className="sorting" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-label="Term: activate to sort column ascending">หน่วยกิต</th> */}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            { (this.state.data.length > 0)? this.state.data.map((v, i) => (
                                                <tr role="row" className="odd">
                                                    <td className="sorting_1">{i+1}</td>
                                                    <td>{v.course_Code}</td>
                                                    <td>{v.course_Name}</td>
                                                    <td>{v.course_Credits}</td>
                                                </tr>
                                            )): (
                                                <tr class="odd"><td valign="top" colspan="6" class="dataTables_empty">No data available in table</td></tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="box-footer">
                                    {/* <button type="submit" className="btn btn-default">ยกเลิก</button> */}
                                    <button type="submit" className="btn btn-success pull-right" onClick={this.importHandle}>นำเข้า</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
