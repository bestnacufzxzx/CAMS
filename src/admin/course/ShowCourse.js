import React, { Component } from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import { Link } from "react-router-dom";


export default class ShowCourse extends Component {
    componentDidMount(){
        const script = document.createElement("script");
        script.src = '../js/ShowCourse/content.js';
        script.async = true;
        document.body.appendChild(script);
    }


    render(){
        return(
            <div className="content-wrapper">
                <Breadcrumb header="นำเข้ารายวิชา" subheader="ค้นหา" arrow={
                    [
                        {"icon":"fa fa-dashboard", "title":"นำเข้ารายวิชา", "link":"#", "active":"active"}
                    ]
                } />

                
                <div className="content body">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="box theader-search-sky">
                                <div class="box-header">
                                    <div className="row">
                                        <div className="col-md-10">
                                            <div className="input-group">
                                                <input type="text" className="form-control" />
                                                <span className="input-group-addon"><i className="fa fa-search" aria-hidden="true"></i></span>
                                            </div>
                                        </div>
                                        <div className="col-md-2">
                                            <Link to="/admin/course/ImportCourse">
                                                <button type="button" className="btn btn-block btn-info"><i className="fa fa-plus" aria-hidden="true"></i> นำเข้าข้อมูล</button>
                                            </Link>
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
                                    <br />
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <table id="example2" className="table table-bordered table-hover dataTable" role="grid" aria-describedby="example2_info">
                                                <thead>
                                                    <tr role="row">
                                                        <th className="" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">ลำดับ.</th>
                                                        <th className="sorting_asc" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">รหัสวิชา</th>
                                                        <th className="sorting" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-label="CourseName: activate to sort column ascending">ชื่อรายวิชา</th>
                                                        <th className="sorting" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-label="Term: activate to sort column ascending">หน่วยกิต</th>
                                                        {/* <th className="sorting" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-label="Engine version: activate to sort column ascending">Engine version</th> */}
                                                        <th className="" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-label="CSS grade: activate to sort column ascending">การจัดการ</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr role="row" className="odd">
                                                        <td>1</td>
                                                        <td className="sorting_1">SWE-205</td>
                                                        <td>Data Structures</td>
                                                        <td>1</td>
                                                        {/* <td>1.7</td> */}
                                                        <td> 
                                                            <Link to="/course/updata"><button type="button" className="btn btn-warning"><i className="fa fa-edit"></i></button></Link> <button type="button" className="btn btn-danger"><i className="fa fa-trash"></i></button>
                                                        </td>
                                                    </tr>
                                                    <tr role="row" className="even">
                                                        <td>2</td>
                                                        <td className="sorting_1">SWE-361</td>
                                                        <td>Software Evolution and Maintenance</td>
                                                        <td>1</td>
                                                        {/* <td>1.8</td> */}
                                                        <td>
                                                            <button type="button" className="btn btn-warning"><i className="fa fa-edit"></i></button> <button type="button" className="btn btn-danger"><i className="fa fa-trash"></i></button>
                                                        </td>
                                                    </tr>
                                                    <tr role="row" className="even">
                                                        <td>3</td>
                                                        <td className="sorting_1">SWE-362</td>
                                                        <td>Software Process</td>
                                                        <td>1</td>
                                                        {/* <td>1.9</td> */}
                                                        <td>
                                                            <button type="button" className="btn btn-warning"><i className="fa fa-edit"></i></button> <button type="button" className="btn btn-danger"><i className="fa fa-trash"></i></button>
                                                        </td>
                                                    </tr>
                                                    <tr role="row" className="odd">
                                                        <td>4</td>
                                                        <td className="sorting_1">SWE-491</td>
                                                        <td>Cooperative Education</td>
                                                        <td>2.5</td>
                                                        {/* <td>1.8</td> */}
                                                        <td>
                                                            <button type="button" className="btn btn-warning"><i className="fa fa-edit"></i></button> <button type="button" className="btn btn-danger"><i className="fa fa-trash"></i></button>
                                                        </td>
                                                    </tr>
                                                    <tr role="row" className="even">
                                                        <td>5</td>
                                                        <td className="sorting_1">SWE-494</td>
                                                        <td>Senior Project in Software Engineering</td>
                                                        <td>0.5</td>
                                                        {/* <td>1.8</td> */}
                                                        <td>
                                                            <button type="button" className="btn btn-warning"><i className="fa fa-edit"></i></button> <button type="button" className="btn btn-danger"><i className="fa fa-trash"></i></button>
                                                        </td>
                                                    </tr>
                                                    <tr role="row" className="odd">
                                                        <td>6</td>
                                                        <td className="sorting_1">SWE60-204©</td>
                                                        <td>Data Structures</td>
                                                        <td>3</td>
                                                        {/* <td>1.7</td> */}
                                                        <td>
                                                            <button type="button" className="btn btn-warning"><i className="fa fa-edit"></i></button> <button type="button" className="btn btn-danger"><i className="fa fa-trash"></i></button>
                                                        </td>
                                                    </tr>
                                                    <tr role="row" className="even">
                                                        <td>7</td>
                                                        <td className="sorting_1">SWE60-211©</td>
                                                        <td>Computer Organization and Architecture</td>
                                                        <td>4</td>
                                                        {/* <td>1.7</td> */}
                                                        <td>
                                                            <button type="button" className="btn btn-warning"><i className="fa fa-edit"></i></button> <button type="button" className="btn btn-danger"><i className="fa fa-trash"></i></button>
                                                        </td>
                                                    </tr>
                                                    <tr role="row" className="odd">
                                                        <td>8</td>
                                                        <td className="sorting_1">SWE60-212©</td>
                                                        <td>Data Communications and Computer Network</td>
                                                        <td>3</td>
                                                        {/* <td>1.8</td> */}
                                                        <td>
                                                            <button type="button" className="btn btn-warning"><i className="fa fa-edit"></i></button> <button type="button" className="btn btn-danger"><i className="fa fa-trash"></i></button>
                                                        </td>
                                                    </tr>
                                                    <tr role="row" className="even">
                                                        <td>9</td>
                                                        <td className="sorting_1">SWE60-222©</td>
                                                        <td>Discrete Mathematics II	2 (2-0-4)</td>
                                                        <td>2</td>
                                                        {/* <td>1</td> */}
                                                        <td>
                                                            <button type="button" className="btn btn-warning"><i className="fa fa-edit"></i></button> <button type="button" className="btn btn-danger"><i className="fa fa-trash"></i></button>
                                                        </td>
                                                    </tr>            
                                                    <tr role="row" className="even">
                                                        <td>10</td>
                                                        <td className="sorting_1">SWE60-231©</td>
                                                        <td>Information Systems for Business</td>
                                                        <td>3</td>
                                                        {/* <td>1</td> */}
                                                        <td>
                                                            <button type="button" className="btn btn-warning"><i className="fa fa-edit"></i></button> <button type="button" className="btn btn-danger"><i className="fa fa-trash"></i></button>
                                                        </td>
                                                    </tr> 
                                                    <tr role="row" className="even">
                                                        <td>11</td>
                                                        <td className="sorting_1">SWE60-351©</td>
                                                        <td>Software Testing</td>
                                                        <td>3</td>
                                                        {/* <td>1</td> */}
                                                        <td>
                                                            <button type="button" className="btn btn-warning"><i className="fa fa-edit"></i></button> <button type="button" className="btn btn-danger"><i className="fa fa-trash"></i></button>
                                                        </td>
                                                    </tr>                                            
                                                    <tr role="row" className="even">
                                                        <td>12</td>
                                                        <td className="sorting_1">SWE60-352©</td>
                                                        <td>Software Metrics and Quality Assurance</td>
                                                        <td>3</td>
                                                        {/* <td>1</td> */}
                                                        <td>
                                                            <button type="button" className="btn btn-warning"><i className="fa fa-edit"></i></button> <button type="button" className="btn btn-danger"><i className="fa fa-trash"></i></button>
                                                        </td>
                                                    </tr>
                                                    <tr role="row" className="even">
                                                        <td>13</td>
                                                        <td className="sorting_1">SWE60-361©</td>
                                                        <td>Software Process and Process Improvement</td>
                                                        <td>3</td>
                                                        {/* <td>1</td> */}
                                                        <td>
                                                            <button type="button" className="btn btn-warning"><i className="fa fa-edit"></i></button> <button type="button" className="btn btn-danger"><i className="fa fa-trash"></i></button>
                                                        </td>
                                                    </tr>
                                                    <tr role="row" className="even">
                                                        <td>14</td>
                                                        <td className="sorting_1">SWE60-382©</td>
                                                        <td>Mobile Device Application Development</td>
                                                        <td>3</td>
                                                        {/* <td>1</td> */}
                                                        <td>
                                                            <button type="button" className="btn btn-warning"><i className="fa fa-edit"></i></button> <button type="button" className="btn btn-danger"><i className="fa fa-trash"></i></button>
                                                        </td>
                                                    </tr>
                                                    <tr role="row" className="even">
                                                        <td>15</td>
                                                        <td className="sorting_1">SWE60-390©</td>
                                                        <td>Pre-Cooperative Education</td>
                                                        <td>1</td>
                                                        {/* <td>1</td> */}
                                                        <td>
                                                            <button type="button" className="btn btn-warning"><i className="fa fa-edit"></i></button> <button type="button" className="btn btn-danger"><i className="fa fa-trash"></i></button>
                                                        </td>
                                                    </tr>
                                                    <tr role="row" className="even">
                                                        <td>16</td>
                                                        <td className="sorting_1">SWE60-396©</td>
                                                        <td>Soft Skills for Professional Software Engineers</td>
                                                        <td>2</td>
                                                        {/* <td>1</td> */}
                                                        <td>
                                                        <Link to="/admin/course/Updatacourse">
                                                            <button type="button" className="btn btn-warning"><i className="fa fa-edit"></i></button> </Link>
                                                            <button type="button" className="btn btn-danger"><i className="fa fa-trash"></i></button>
                                                        </td>
                                                    </tr>
                                                    <tr role="row" className="even">
                                                        <td>17</td>
                                                        <td className="sorting_1">SWE62-101©</td>
                                                        <td>Algorithmic Problem Solving</td>
                                                        <td>2</td>
                                                        {/* <td>1</td> */}
                                                        <td>
                                                            <button type="button" className="btn btn-warning"><i className="fa fa-edit"></i></button> <button type="button" className="btn btn-danger"><i className="fa fa-trash"></i></button>
                                                        </td>
                                                    </tr>
                                                    <tr role="row" className="even">
                                                        <td>18</td>
                                                        <td className="sorting_1">SWE62-121©</td>
                                                        <td>Laws and Ethics in Information Technology</td>
                                                        <td>1</td>
                                                        {/* <td>1</td> */}
                                                        <td>
                                                            <button type="button" className="btn btn-warning"><i className="fa fa-edit"></i></button> <button type="button" className="btn btn-danger"><i className="fa fa-trash"></i></button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                                {/* <tfoot>
                                                    <tr>
                                                        <th>No.</th>
                                                        <th rowSpan="1" colSpan="1">Rendering engine</th>
                                                        <th rowSpan="1" colSpan="1">Browser</th>
                                                        <th rowSpan="1" colSpan="1">Platform(s)</th>
                                                        <th rowSpan="1" colSpan="1">Engine version</th>
                                                        <th rowSpan="1" colSpan="1"></th>
                                                    </tr>
                                                </tfoot> */}
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