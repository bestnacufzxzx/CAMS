import React, { Component } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import Camera, { FACING_MODES } from '../lib';
import axios from 'axios';
// import Modal from './Layout/modal/Modal';
// import { Link } from "react-router-dom";

 
export default class Cameras extends Component {
    
        state = {
            latitude: '',
            longitude: '',
            classID: null,
            statusgets :[]
        }

        componentWillMount =    () =>{
            this.setState({classID: this.props.match.params.classID})
            // console.log(this.state.classID)
        }

        componentDidMount = () => {
            this.getMyLocation()
          }
        
          getMyLocation = () => {
            const location = window.navigator && window.navigator.geolocation
            
            if (location) {
              location.getCurrentPosition((position) => {
                this.setState({
                  latitude: position.coords.latitude,
                  longitude: position.coords.longitude,
                })
              }, (error) => {
                this.setState({ latitude: 'err-latitude', longitude: 'err-longitude' })
              })
            }
        
          }

          onTakePhoto = picture => {
            const { latitude, longitude } = this.state
            console.log(latitude);
            console.log(longitude);
            // let classID = classID;
            let user_ID = localStorage.getItem("user_ID");
            console.log(user_ID);
            axios.post('http://localhost/cams_server/api/Checknamestudent/postCheckname', { classID: this.state.classID, picture:picture, studentID:user_ID, latitude:latitude, longitude:longitude }  )
            .then(res => {
                alert("สำเร็จ");
                this.setState({ statusgets: res.data });
            })
            .catch(error => {
                console.log("====>",error.status);
                alert("ไม่สามารถบันทึกซ้ำได้")
            });
          }

    render() {
        // let props = this.props;
        // console.log('22222',this);

        const { latitude, longitude } = this.state
        // const dataUri = this.props.dataUri;
        // const id = this.props.match.params.classID;
        // console.log(id);
        // console.log(latitude);
        // console.log(longitude);

        return (
   
            <div className="content-wrapper">
            <Breadcrumb header="ยืนยันสถานที่เรียน" subheader="" arrow={
                [
                    // {"icon":"", "title":"นักศึกษา", "link":"#", "active":"active"}
                ]
            } />

            
            <div className="content body">
                <div class="row">
                    <div class="col-md-12">
                        <div class="box theader-search-sky">
                            <div class="box-header">                   
                               <h5> ตำแหน่งที่อยู่ </h5>
                               <h5> ละติจูด { latitude}   </h5>
                               <h5> ลองจิจูด { longitude} </h5> 
                                </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="box box-primary">
                            <div className="box-body">
                                <br />
                                <Camera
                                onTakePhoto = { (picture) => { this.onTakePhoto(picture); } }
                                idealFacingMode = {FACING_MODES.ENVIRONMENT}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        )
    }
}