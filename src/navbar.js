import React from 'react'
import {NavLink} from 'react-router-dom'
export default class Navbar extends React.Component{
  handleToken = () =>{
     localStorage.removeItem('token')
  }
  render(){
    return(
      <div>

      <br/>
        <NavLink to="/profile" exact style={{width: '100px',
                padding: '12px',
                margin: '0 6px 6px',
                background: 'gray',
                borderRadius: '5px',
                textDecoration: 'none',
color: 'white'}}>Profile</NavLink>
        <NavLink to="/meetups" exact style={{width: '100px',
                padding: '12px',
                margin: '0 6px 6px',
                background: 'gray',
                borderRadius: '5px',
                textDecoration: 'none',
color: 'white'}}>Meetups</NavLink>
        <NavLink to="/hackathons" exact style={{width: '100px',
                padding: '12px',
                margin: '0 6px 6px',
                background: 'gray',
                borderRadius: '5px',
                textDecoration: 'none',
color: 'white'}}>Hackathons</NavLink>
        <NavLink to="/login" exact style={{width: '100px',
          padding: '12px',
          margin: '0 6px 6px',
          background: 'gray',
          borderRadius: '5px',
          textDecoration: 'none',
color: 'white'}}>Login</NavLink>
<NavLink to="/signup" exact style={{width: '100px',
        padding: '12px',
        margin: '0 6px 6px',
        background: 'gray',
        borderRadius: '5px',
        textDecoration: 'none',
color: 'white'}}>Signup</NavLink>
<NavLink exact style={{width: '100px',
                padding: '12px',
                margin: '0 6px 6px',
                background: 'gray',
                borderRadius: '5px',
                textDecoration: 'none',
color: 'white'}} activeStyle={{background: 'gray'}} onClick={this.handleToken} to="/signup">Logout</NavLink>
      </div>
    )
  }
}
