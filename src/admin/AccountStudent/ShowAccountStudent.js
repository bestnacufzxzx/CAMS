import React, { Component } from 'react'
import Breadcrumb from '../../components/Breadcrumb';
// import { Link } from "react-router-dom";
import TextInput from '../../components/TextInput';

export default class ShowAccountStudent extends Component {
    state = {
        data: [],
        firstname: '',
        lastname: '',
        email: '',
        tel: '',
        username: '',
        password: ''
    }

    componentDidMount(){
        const script = document.createElement("script");
        script.src = '../js/Showimportteacher/content.js';
        script.async = true;
        document.body.appendChild(script);
    }


    onChangeHandle = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]: value});
    } 

    createstudentinformation = () => {

        let structure = {
            idstudent: this.state.idstudent,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            tel: this.state.tel
        }

        console.log(structure);

    }

    editstudentinformation = () => {

        let structure = {
            idstudent: this.state.idstudent,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            tel: this.state.tel,
            username: this.state.username,
            password: this.state.password
        }

        console.log(structure);

    }

    render() {
        return (
   
             <div className="content-wrapper">
                <Breadcrumb header="แสดงรายนักศึกษา" subheader="" arrow={
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
                                            <div className="col-md-2 form-group"></div>
                                            <div className="col-md-3 form-group">
         
                                            </div>
                                            <div className="col-md-3 form-group">
                                                <input type="text" className="form-control" name="searchText" value="" placeholder="ค้นหา"/>
                                            </div>
                                            <div className="col-md-2 form-group">
                                                <button type="submit" className="btn btn-block btn-info pull-right"><i class="fa fa-search" aria-hidden="true"></i> ค้นหา</button> 
                                            </div>
                                        </form>
                                        <div className="col-md-2">
                                            
                                                <button type="button" className="btn btn-block btn-info pull-right" data-toggle="modal" data-target="#modal-default"><i class="fa fa-plus" aria-hidden="true"></i> สร้าง</button>
                                          
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
                                                    <tr   >
                                                        <th className="col-sm-1" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">ลำดับ</th>
                                                        <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">รหัสนักศึกษา</th>
                                                        <th className="col-sm-3" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">ชื่อ-นามสกุล</th>
                                                        <th className="col-sm-3" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">อีเมล์</th>
                                                        <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" >การจัดการ</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr role="row" className="odd">
                                                        <td>1</td>
                                                        <td className="sorting_1">59111111</td>
                                                        <td className="sorting_1">นาย เรียนดี มีชัย</td>
                                                        <td className="sorting_1">email.com</td>
                                                        <td> 
                                                            <button type="button" className="btn btn-warning" data-toggle="modal" data-target="#modal-default-edit"><i className="fa fa-edit"></i></button>
                                                            <button type="button" className="btn btn-danger"><i className="fa fa-trash"></i></button>
                                                        </td>
                                                    </tr>
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
                                <h4 class="modal-title">สร้างข้อมูลอาจารย์</h4>
                            </div>
                            <div class="modal-body">
                            {/* &hellip; */}

                            <form onSubmit={this.createstudentinformation}>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div class="col-md-4">
                                            <div class="form-group input-group-sm">
                                                <label>รหัสนักศึกษา</label>
                                                <TextInput value={this.state.idstudent} inputname="idstudent" classes="form-control" placeholder="กรอกรหัสนักศึกษา" change={this.onChangeHandle} />
                                                {/* <input type="text" class="form-control" name="" id="" placeholder="" value=""/> */}
                                            </div>
                                        </div>
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
                                    <div className="col-md-12">
                                        <div class="col-md-6">
                                            <div class="form-group input-group-sm">
                                                <label>อิเมล์</label>
                                                <TextInput value={this.state.email} inputname="email" classes="form-control" placeholder="กรอกอีเมล์" change={this.onChangeHandle} />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
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

                <div>
                    <div class="modal fade" id="modal-default-edit">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span></button>
                                <h4 class="modal-title">แก้ไขข้อมูลนักศึกษา</h4>
                            </div>
                            <div class="modal-body">
                            {/* &hellip; */}

                            <form onSubmit={this.editstudentinformation}>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div class="col-md-6">
                                            <div class="form-group input-group-sm">
                                                <label>ชื่อ</label>
                                                <TextInput value={this.state.firstname} inputname="firstname" classes="form-control" placeholder="กรอกชื่อจริง" change={this.onChangeHandle} />
                                                {/* <input type="text" class="form-control" name="" id="" placeholder="" value=""/> */}
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group input-group-sm">
                                                <label>นามสกุล</label>
                                                <TextInput value={this.state.lastname} inputname="lastname" classes="form-control" placeholder="กรอกนามสกุล" change={this.onChangeHandle} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div class="col-md-6">
                                            <div class="form-group input-group-sm">
                                                <label>อิเมล์</label>
                                                <TextInput value={this.state.email} inputname="email" classes="form-control" placeholder="กรอกอีเมล์" change={this.onChangeHandle} />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group input-group-sm">
                                                <label>เบอร์โทร</label>
                                                <TextInput value={this.state.tel} inputname="tel" classes="form-control" placeholder="กรอกเบอร์โทร" change={this.onChangeHandle} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div class="col-md-6">
                                            <div class="form-group input-group-sm">
                                                <label>ชื่อผู้ใช้งาน</label>
                                                <TextInput value={this.state.username} inputname="username" classes="form-control" placeholder="กรอกชื่อผู้ใช้งาน" change={this.onChangeHandle} />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group input-group-sm">
                                                <label>รหัสผ่าน</label>
                                                <TextInput value={this.state.password} inputname="password" classes="form-control" placeholder="กรอกรหัสผ่าน" change={this.onChangeHandle} />
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
