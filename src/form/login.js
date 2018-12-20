import React from "react"
import { connect } from "react-redux"
import { login } from "../action/actions"
import { withRouter } from "react-router-dom"
import { Button, Form } from 'semantic-ui-react'

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitHandler = (e) => {
    e.preventDefault()
    this.props.loginHandler(this.state, this.props.history)
  }
  render() {
    return (
      <div className="logindiv">
      <Form onSubmit={this.submitHandler}>
        <center><h1>Login</h1></center>
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
        <center>
          <Button color="black" type='submit'>Submit</Button>
        </center>
    </Form>
    </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginHandler: (user, history) => {
      dispatch(login(user, history))
    }
  }
}

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Login)
)
