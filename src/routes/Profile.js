import React, { Component } from "react"
import { connect } from "react-redux"
import HackContainer from "../containers/HackContainer"
import HackDetails from "../cards/hackdetails"
import {CloudinaryContext} from 'cloudinary-react';
import {changePicture} from '../action/actions'
import {Button} from 'semantic-ui-react'
class Profile extends Component {
  componentWillUnmount() {
    this.props.deleteHackDetails()
  }

  showHackContainer = () => {
  if (this.props.user) {
      return <HackContainer userHackathons={this.props.user.hackathons} />
    }
  }

  imageSubmit = () => {
   var myUploadWidget;
     myUploadWidget = window.cloudinary.openUploadWidget({
       cloudName: 'dz1dbcszc',
       uploadPreset: 'igzkbflf'},
       (error, result) => {
         if (result.info.secure_url){
        this.props.changeproPicture(result.info.secure_url,this.props.user.user_id)

           }
         }
       );
  }

  render() {
    return (
      <center>
        <div className="profile">
        <img src={this.props.user.img} alt="profile" height="250px" width="250px" className="ProImg"/>

        <h1>{this.props.user.name}</h1>
        <CloudinaryContext cloudName='dz1dbcszc'>
                        <Button inverted id='upload_widget_opener' onClick={this.imageSubmit}>Change your Profile Picture</Button>
                    </CloudinaryContext>
      <h1 className="headerh1">Your Hackathons</h1>
      <div className="hack">

        {this.showHackContainer()}
        <HackDetails />
      </div>
    </div>
    </center>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteHackDetails: () => dispatch({ type: "CLEAR_DETAILS" }),
    changeproPicture: (picture,userId) =>dispatch(changePicture(picture,userId))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Profile)
