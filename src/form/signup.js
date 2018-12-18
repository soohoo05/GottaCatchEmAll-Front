import React from "react"
import { connect } from "react-redux"
import { signUp } from "../action/actions"
import { withRouter } from "react-router-dom"
import { Button, Form } from 'semantic-ui-react'

class Signup extends React.Component {
  state = {
    name: "",
    username: "",
    password: "",
    email: ""
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
              <Button color="black" type='submit'>Submit</Button>
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
