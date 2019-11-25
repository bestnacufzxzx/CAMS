import React, { Component } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import Camera, { FACING_MODES } from '../lib';
import axios from 'axios';

 
export default class Cameras extends Component {
    
        state = {
            latitude: '',
            longitude: '',
            classID: null
        }

        componentWillMount = () =>{
            this.setState({classID: this.props.match.params.classID})
            console.log(this.state.classID)
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
            // let classID = classID;
            let user_ID = localStorage.getItem("user_ID");
            console.log(user_ID);
            axios.post('http://localhost/cams_server/api/Checknamestudent/postCheckname', { classID: this.state.classID,picture:picture,studentID:user_ID }  )
            .then(res => {
            //   this.setState({ picture: res.data });
            })
            .catch(error => {
              console.log("====>",error.status);
            //   console.log(dataUri);
            //   console.log(this.props.classid);
            });
          }

    render() {
        // let props = this.props;
        // console.log('22222',this);

        // const { latitude, longitude } = this.state
        // const dataUri = this.props.dataUri;
        // const id = this.props.match.params.classID;
        // console.log(id);
        // console.log(latitude);
        // console.log(longitude);

        return (
   
            <div className="content-wrapper">
            <Breadcrumb header="ยืนยันสถานที่เรียน" subheader="" arrow={
                [
                    {"icon":"", "title":"นักศึกษา", "link":"#", "active":"active"}
                ]
            } />

            
            <div className="content body">
                <div class="row">
                    <div class="col-md-12">
                        <div class="box theader-search-sky">
                            <div class="box-header">                   
                                {/* {latitude} , {longitude} */}
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