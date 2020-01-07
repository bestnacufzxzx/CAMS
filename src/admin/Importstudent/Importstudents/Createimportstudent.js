import React, { Component } from 'react'
import Breadcrumb from '../../../components/Breadcrumb';
import CSVReader from "react-csv-reader";


export default class Createimportstudent extends Component {

    state = {
        data: [],
        file: []
    }

        componentDidMount(){
        const script = document.createElement("script");
        script.src = '../../js/CreateImportteacher/content.js';
        script.async = true;
        document.body.appendChild(script);
    }

    readfileHandle = data => {
        let structure = {
            idstudent: '',
            name: '',
            tel: '',
            username: ''
        }
        const file = [];
        data.map((v) => {  //(v,i)
            let temp  = {...structure};
            temp.idstudent = v[0];
            temp.name = v[1];
            temp.tel = v[2];
            temp.username = v[3];
            file.push(temp);
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
        console.log(this.state.data);
    }

    clearShowFileImport = () => {
        const data = [];
        this.setState({data: data});
    }


    render() {
        return (
                <div className="content-wrapper">
                <Breadcrumb header="นำเข้ารายชื่อนักศึกษา" subheader="นักศึกษา" arrow={
                    [
                        {"icon":"fa fa-dashboard", "title":"นำเข้ารายชื่อนักศึกษา", "link":"#"},
                        {"icon":"fa fa-dashboard", "title":"นักศึกษา", "link":"#", "active":"active"}
                    ]
                } />

                <div className="content body">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="box box-primary">
                                <div className="box-header with-border">
                                    <h3 className="box-title">นำเข้ารายชื่อนักศึกษา</h3>
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
                                                <th className="col-sm-1" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">ลำดับ</th>
                                                <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">รหัสนักศึกษา</th>
                                                <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">ชื่อ-นามสกุล*</th>
                                                <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">เบอร์โทร</th>
                                                <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">ชื่อผู้ใช้งาน</th>
                                                {/* <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">รหัสผ่าน</th> */}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            { (this.state.data.length > 0)? this.state.data.map((v, i) => (
                                                <tr role="row" className="odd">
                                                    <td className="sorting_1">{i+1}</td>
                                                    <td>{v.idstudent}</td>
                                                    <td>{v.name}</td>
                                                    <td>{v.tel}</td>
                                                    <td>{v.username}</td>
                                                    {/* <td>1</td> */}
                                                    {/* <td>1.7</td>
                                                    <td>A</td> */}
                                                </tr>
                                            )): (
                                                <tr class="odd"><td valign="top" colspan="6" class="dataTables_empty">No data available in table</td></tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="box-footer">
                                    <button type="submit" className="btn btn-default">ยกเลิก</button>
                                    <button type="submit" className="btn btn-success pull-right">นำเข้า</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
