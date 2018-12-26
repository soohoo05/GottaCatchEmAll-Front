import React from "react"
import { connect } from "react-redux"
import { edit } from "../action/actions"
import { withRouter } from "react-router-dom"
import { Button, Form } from "semantic-ui-react"
import { CloudinaryContext } from "cloudinary-react"
import Fade from 'react-reveal/Fade';

class Signup extends React.Component {
  state = {
    name: "",
    username: "",
    password: "",
    email: "",
    img: "https://ak1.picdn.net/shutterstock/videos/16685851/thumb/1.jpg",
    errors:[]
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
          this.setState({ img: result.info.secure_url })
        }
      }
    )
  }
  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitHandler = (e,state) => {
    e.preventDefault()
    let emptykeys=[]
  for(var key in state){
    if (state[key]===""){
      emptykeys.push(key)
    }
  }
  if(emptykeys.length!==0){
  let emptyKeysString=emptykeys.join(', ').replace(/, ([^,]*)$/, ' and $1')
  emptyKeysString+=" cannot be blank"
  this.setState({errors:emptyKeysString})
}
else{
  debugger
  let noErrorState=Object.assign({},state)
  delete noErrorState.errors
    this.props.setUser(this.props.user.user_id,noErrorState, this.props.history)
  }
  }
  render() {
    return (
      <Fade>
      <div className='logindiv'>
        <Form onSubmit={e=>this.submitHandler(e,this.state)}>
          <center>
            <h1>Edit Profile</h1>
            <br/>
              <center><p className="errorMessage">{this.state.errors}</p></center>
            <br/>
          </center>
          <Form.Input
            label='Name'
            type='text'
            value={this.state.name}
            name='name'
            onChange={this.changeHandler}
            placeholder={this.props.user.name}
          />
          <br />
          <Form.Input
            label='Username'
            type='text'
            value={this.state.username}
            name='username'
            onChange={this.changeHandler}
            placeholder={this.props.user.username}
          />
          <br />
          <Form.Input
            label='Password'
            type='password'
            value={this.state.password}
            name='password'
            onChange={this.changeHandler}
            placeholder='Password'
          />
          <br />
          <Form.Input
            label='Email'
            type='text'
            value={this.state.email}
            name='email'
            onChange={this.changeHandler}
            placeholder={this.props.user.email}
          />
        </Form>
          <br />
          <div className='signupbuttons'>
            <Button className='fluid' color='black' type='submit' onClick={(e)=>this.submitHandler(e,this.state)}>
              Submit
            </Button>
          </div>

      </div>
      </Fade>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (id, user, history) => {
      dispatch(edit(id, user, history))
    }
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Signup)
)
