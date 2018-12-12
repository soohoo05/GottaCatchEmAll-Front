import React from 'react'
import {connect} from 'react-redux'
import {signUp} from '../action/actions'
import {withRouter} from 'react-router-dom'
import axios from 'axios'
class Signup extends React.Component{
  state={
    name:'',
    username:'',
    password:'',
    email:'',
    error:false
  }

  changeHandler = (e) =>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  submitHandler = (e) =>{

    e.preventDefault()
    axios.post(`http://localhost:3000/users`,{
      user:{
      name:this.state.name,
      username:this.state.username,
      password:this.state.password,
      email:this.state.email
    }
  })
    .then(json=>{
      localStorage.setItem("token",json.data.jwt)
      this.props.history.replace('/profile')
      this.props.setUser(json.data.user)
}).catch(error=>console.log(error))

  }
  render(){
    return(<div>
      {this.state.error ? <p>User already exists or fields were left blank</p> : null}
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
    setUser: (user) =>{dispatch({type:'SET_USER',payload:user})}
  }
}

export default withRouter(connect(null,mapDispatchToProps)(Signup))
