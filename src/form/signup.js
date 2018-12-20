import React from "react"
import { connect } from "react-redux"
import { signUp } from "../action/actions"
import { withRouter } from "react-router-dom"
import { Button, Form } from 'semantic-ui-react'
import {CloudinaryContext} from 'cloudinary-react';

class Signup extends React.Component {
  state = {
    name: "",
    username: "",
    password: "",
    email: "",
    img:"https://ak1.picdn.net/shutterstock/videos/16685851/thumb/1.jpg"
  }
  imageSubmit = () => {
   var myUploadWidget;
     myUploadWidget = window.cloudinary.openUploadWidget({
       cloudName: 'dz1dbcszc',
       uploadPreset: 'igzkbflf'},
       (error, result) => {
         if (result.info.secure_url){
        this.setState({img:result.info.secure_url})
           }
         }
       );
  }
  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitHandler = (e) => {
    e.preventDefault()
    this.props.setUser(this.state, this.props.history)
  }
  render() {
    return (
        <div className="logindiv">

        <Form onSubmit={this.submitHandler}>
        <center><h1>Sign Up</h1></center>
          <Form.Input
            label="Name"
            type='text'
            value={this.state.name}
            name='name'
            onChange={this.changeHandler}
            placeholder='Name'
          />
          <br />
          <Form.Input
            label="Username"
            type='text'
            value={this.state.username}
            name='username'
            onChange={this.changeHandler}
            placeholder='Username'
          />
          <br />
          <Form.Input
            label="Password"
            type='password'
            value={this.state.password}
            name='password'
            onChange={this.changeHandler}
            placeholder='Password'
          />
          <br />
          <Form.Input
            label="Email"
            type='text'
            value={this.state.email}
            name='email'
            onChange={this.changeHandler}
            placeholder='Email'
          />
          <br />
            <CloudinaryContext cloudName='dz1dbcszc' className="signupbuttons">
              <Button className="fluid" color="black" id='upload_widget_opener' onClick={this.imageSubmit}>Upload a picture</Button>
            </CloudinaryContext>
          <br/>
          <div className="signupbuttons">
            <Button className="fluid" color="black" type='submit'>Submit</Button>
          </div>

        </Form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (user, history) => {
      dispatch(signUp(user, history))
    }
  }
}

export default withRouter(connect(null,mapDispatchToProps)(Signup))
