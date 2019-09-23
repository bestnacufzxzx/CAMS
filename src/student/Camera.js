import React, { Component } from 'react'
import Breadcrumb from '../components/Breadcrumb';
// import { Link } from "react-router-dom";

export default class Camera extends Component {
    // componentDidMount(){
    //     const script = document.createElement("script");
    //     script.src = '../js/Showimportteacher/content.js';
    //     script.async = true;
    //     document.body.appendChild(script);
    // }

    render() {
        return (
   
             <div className="content-wrapper">
                <Breadcrumb header="ยื่นยันการเข้าเรียน" subheader="" arrow={
                    [
                        {"icon":"", "title":"ถ่ายภาพ", "link":"#", "active":"active"}
                    ]
                } />
                <div className="content body">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="box theader-search-sky">
                                <div class="box-header">                   
                                    <div className="row">
                                       

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