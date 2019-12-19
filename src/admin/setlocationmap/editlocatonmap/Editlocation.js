import React, {Component} from 'react';
import Breadcrumb from '../../../components/Breadcrumb.js';
import Map from '../Map/Map';
// import { Link } from "react-router-dom";

export default class Editlocation extends Component {

    componentDidMount(){
        const script = document.createElement("script");
        script.src = '../js/Editlocation/content.js';
        script.src = '../js/Editlocation/content.css';
        script.async = true;
        document.body.appendChild(script);
    }
    render(){
        return(
             <div className="content-wrapper">
                <Breadcrumb header="แก้ไขสถานที่" arrow={
                    [
                        {"icon":"fa fa-dashboard", "title":"แก้ไขสถานที่", "link":"#", "active":"active"}
                    ]
                } />

                <div className="content body">
                    <div class="row">
                        <div class="col-lg-9">
                            <div class="box theader-sky">
                                <div class="box-body">
                                    <Map/>
                                </div>
                            </div>
                        </div>                  
                    </div>
                </div>
            </div>
        )   
    }
}


                




        