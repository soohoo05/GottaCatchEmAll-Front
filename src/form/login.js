import React from 'react'
import {connect} from 'react-redux'
import {login} from '../action/actions'
import {withRouter} from 'react-router-dom'

class Login extends React.Component{
  state={
    username:'',
    password:'',
  }


  changeHandler = (e) =>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  submitHandler = (e) =>{
    e.preventDefault()
    this.props.loginHandler(this.state)
    this.props.history.replace('/profile')
  }
  render(){
    return(
      <form onSubmit={this.submitHandler}>
        <label>UserName</label>
        <input type="text" value={this.state.username} name="username" onChange={this.changeHandler} placeholder="Username"/>
        <br/>
        <label>Password</label>
        <input type="password" value={this.state.password} name="password" onChange={this.changeHandler} placeholder="Password"/>
        <br/>
        <input type="submit" value="Login"/>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    loginHandler: (user) =>{dispatch(login(user))}
  }
}

export default withRouter(connect(null,mapDispatchToProps)(Login))
