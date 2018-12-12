import React, { Component } from 'react';
import './App.css';

import {withRouter, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import Profile from './container/Profile'
import Meetups from './container/Meetups'
import Login from './form/login'
import Signup from './form/signup'
import NavBar from './navbar'
import Logo from './Logo'
import Hackathons from './container/Hackathon'
class App extends Component {

  componentDidMount = () => {
   let token = localStorage.getItem("token");
   if (token) {
     fetch("http://localhost:3000/current_user", {
       headers: {
         "Content-Type": "application/json",
         Accepts: "application/json",
         Authorization: token
       }
     })
       .then(resp => resp.json())
       .then(resp => {
        console.log(resp)
       });
   } else {
     this.props.history.push("/signup");
   }

};
  // <div className="theApp"> For Background black color
  render() {
    return (
    <React.Fragment>
      <Logo />

      <NavBar />
      <br />
      <Route path="/profile" component={Profile} />
      <Route path="/meetups" component={Meetups} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/hackathons" component={Hackathons} />

    </React.Fragment>
    );
  }
}
const mapDispatchToProps = (dispatch)=>{
  return{
    addUser:(user)=> dispatch({type:"ADD_USER",payload:user})
  }
}
export default  withRouter(connect(null,mapDispatchToProps)(App));
