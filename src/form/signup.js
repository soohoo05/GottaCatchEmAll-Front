import React from 'react'
import {connect} from 'react-redux'
import {signUp} from '../action/actions'
import {withRouter} from 'react-router-dom'
class Signup extends React.Component{
  state={
    name:'',
    username:'',
    password:'',
    email:'',

  }

  changeHandler = (e) =>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  submitHandler = (e) =>{

    e.preventDefault()
    this.props.setUser(this.state,this.props.history)
  }
  render(){
    return(<div>

      <form onSubmit={this.submitHandler}>
        <label>Name</label>
        <input type="text" value={this.state.name} name="name" onChange={this.changeHandler} placeholder="Name" />
        <br/>
        <label>UserName</label>
        <input type="text" value={this.state.username} name="username" onChange={this.changeHandler} placeholder="Username"/>
        <br/>
        <label>Password</label>
        <input type="password" value={this.state.password} name="password" onChange={this.changeHandler} placeholder="Password"/>
        <br/>
        <label>Email</label>
        <input type="text" value={this.state.email} name="email" onChange={this.changeHandler} placeholder="Email"/>
        <br/>
        <input type="submit" value="Signup"/>
      </form>
    </div>
    )
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    setUser: (user,history) =>{dispatch(signUp(user,history))}
  }
}

export default withRouter(connect(null,mapDispatchToProps)(Signup))
