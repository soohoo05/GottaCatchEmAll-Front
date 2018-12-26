import React, { Component } from "react"
import { connect } from "react-redux"
import HackContainer from "../containers/HackContainer"
import HackDetails from "../cards/hackdetails"
import { CloudinaryContext } from "cloudinary-react"
import { changePicture } from "../action/actions"
import { Button } from "semantic-ui-react"
import Bounce from 'react-reveal/Bounce';
import {deleteUser} from '../action/actions'
class Profile extends Component {
  state={
    delete:false
  }
  componentWillUnmount() {
    this.props.deleteHackDetails()
  }

  showHackContainer = () => {
    if (this.props.user) {
      return <HackContainer userHackathons={this.props.user.hackathons} />
    }
  }

  imageSubmit = () => {
    var myUploadWidget
    myUploadWidget = window.cloudinary.openUploadWidget(
      {
        cloudName: "dz1dbcszc",
        uploadPreset: "igzkbflf"
      },
      (error, result) => {
        if (result.info.secure_url) {
          this.props.changeproPicture(
            result.info.secure_url,
            this.props.user.user_id
          )
        }
      }
    )
  }
yeshandler = () => {
  this.props.deleteUser(this.props.user)
  this.props.history.replace('/signup')
}


  render() {
    return (
      <div className='wholeprofile'>
        <Bounce left>
        <center>
          <div className='picsNdName'>
            <img
              src={this.props.user.img}
              alt='profile'
              height='250px'
              width='250px'
              className='ProImg'
            />
            <div className='profile'>
              <h1>{this.props.user.name}</h1>

              <CloudinaryContext cloudName='dz1dbcszc'>
                <Button
                  color='black'
                  id='upload_widget_opener'
                  onClick={this.imageSubmit}>
                  Change your Profile Picture
                </Button>
              </CloudinaryContext>
              <br/>
              <Button color="black" onClick={()=>this.props.history.replace('/editprofile')}>Edit Profile</Button>
              <br/>
              <br/>
              <Button color="black" onClick={e=>this.setState({delete:true})}>Delete Profile</Button>
              <br/>
              {this.state.delete ? <React.Fragment><Button onClick={e=>this.yeshandler()}>Yes</Button><Button onClick={e=>this.setState({delete:false})}>No</Button></React.Fragment>:null}
            </div>
          </div>
        </center>
      </Bounce>
        <div className='profilehackcontainer'>
          <Bounce down>
            <center><h1 className='headerh1'>Your Hackathons</h1></center>
            </Bounce>
          {this.showHackContainer()}
        </div>
        <HackDetails />
      </div>
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
    changeproPicture: (picture, userId) =>  dispatch(changePicture(picture, userId)),
    deleteUser:(user) => dispatch(deleteUser(user))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile)
