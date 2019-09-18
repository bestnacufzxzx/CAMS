import React, { Component } from 'react'
import Breadcrumb from '../../components/Breadcrumb';

export default class ImportCourse extends Component {
        componentDidMount(){
        const script = document.createElement("script");
        script.src = '../../js/ShowCourse/content.js';
        script.async = true;
        document.body.appendChild(script);
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
                                    <div className="form-group">
                                        <label for="exampleInputFile">เลือกไฟล์</label>
                                        <input type="file" id="exampleInputFile" />
                                        <p className="help-block">เลือกไฟล์ .csv ที่มาจากการ นำเข้าข้อมูล เท่านั้น</p>
                                    </div>
                                </div>
                                <div className="box-footer">
                                    <button type="submit" className="btn btn-default">ล้าง</button>
                                    <button type="submit" className="btn btn-info pull-right">แสดง</button>
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
                                                <th className="sorting_asc" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">รหัสวิชา</th>
                                                <th className="sorting" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-label="CourseName: activate to sort column ascending">ชื่อรายวิชา</th>
                                                <th className="sorting" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-label="Term: activate to sort column ascending">หน่วยกิต</th>
                                                {/* <th className="sorting" tabindex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-label="Engine version: activate to sort column ascending">Engine version</th>
                                                <th className="sorting" tabindex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-label="CSS grade: activate to sort column ascending">CSS grade</th> */}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr role="row" className="odd">
                                                <td className="sorting_1">SWE-205</td>
                                                <td>Data Structures</td>
                                                <td>1</td>
                                                {/* <td>1.7</td>
                                                <td>A</td> */}
                                            </tr>
                                            <tr role="row" className="even">
                                                <td className="sorting_1">SWE-361</td>
                                                <td>Software Evolution and Maintenance</td>
                                                <td>1</td>
                                                {/* <td>1.8</td>
                                                <td>A</td> */}
                                            </tr>
                                            <tr role="row" className="odd">
                                                <td className="sorting_1">SWE-362</td>
                                                <td>Software Process</td>
                                                <td>1</td>
                                                {/* <td>1.8</td>
                                                <td>A</td> */}
                                            </tr>
                                            <tr role="row" className="even">
                                                <td className="sorting_1">SWE-491</td>
                                                <td>Cooperative Education</td>
                                                <td>2.5</td>
                                                {/* <td>1.9</td>
                                                <td>A</td> */}
                                            </tr>
                                            <tr role="row" className="odd">
                                                <td className="sorting_1">SWE-494</td>
                                                <td>Senior Project in Software Engineering</td>
                                                <td>0.5</td>
                                                {/* <td>1.8</td>
                                                <td>A</td> */}
                                            </tr>
                                            <tr role="row" className="even">
                                                <td className="sorting_1">SWE60-204©</td>
                                                <td>Data Structures</td>
                                                <td>3</td>
                                                {/* <td>1.8</td>
                                                <td>A</td> */}
                                            </tr>
                                            <tr role="row" className="odd">
                                                <td className="sorting_1">SWE60-211©</td>
                                                <td>Computer Organization and Architecture</td>
                                                <td>4</td>
                                                {/* <td>1.7</td>
                                                <td>A</td> */}
                                            </tr>
                                            <tr role="row" className="even">
                                                <td className="sorting_1">SWE60-212©</td>
                                                <td>Data Communications and Computer Network</td>
                                                <td>3</td>
                                                {/* <td>1.7</td>
                                                <td>A</td> */}
                                            </tr>
                                            <tr role="row" className="odd">
                                                <td className="sorting_1">SWE60-222©</td>
                                                <td>Discrete Mathematics II	2 (2-0-4)</td>
                                                <td>2</td>
                                                {/* <td>1.8</td>
                                                <td>A</td> */}
                                            </tr>
                                            <tr role="row" className="even">
                                                <td className="sorting_1">SWE60-231©</td>
                                                <td>Information Systems for Business</td>
                                                <td>3</td>
                                                {/* <td>1</td>
                                                <td>A</td> */}
                                            </tr>
                                        </tbody>
                                        {/* <tfoot>
                                            <tr>
                                                <th rowSpan="1" colSpan="1">Rendering engine</th>
                                                <th rowSpan="1" colSpan="1">Browser</th>
                                                <th rowSpan="1" colSpan="1">Platform(s)</th>
                                                <th rowSpan="1" colSpan="1">Engine version</th>
                                                <th rowSpan="1" colSpan="1">CSS grade</th>
                                            </tr>
                                        </tfoot> */}
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
