import React from "react"
import { connect } from "react-redux"
import { login } from "../action/actions"
import { withRouter } from "react-router-dom"
import { Button, Form } from "semantic-ui-react"
import Fade from 'react-reveal/Fade';

class Login extends React.Component {
  state = {
    username: "",
    password: "",
    errors:[]
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
  let noErrorState=Object.assign({},state)
  delete noErrorState.errors
    this.props.loginHandler(this.state, this.props.history)
  }
  }
  render() {
    return (
      <Fade>
      <div className='logindiv'>
        <Form onSubmit={e=>this.submitHandler(e,this.state)}>
          <center>
            <h1>Login</h1>
          </center>
          <br/>
            <center><p className="errorMessage">{this.state.errors}</p></center>
          <br/>
          <Form.Input
            label='Username'
            type='text'
            value={this.state.username}
            name='username'
            onChange={this.changeHandler}
            placeholder='Username'
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
          <center>
            <Button color='black' type='submit'>
              Submit
            </Button>
          </center>
        </Form>
      </div>
      </Fade>
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
