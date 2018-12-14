import React, { Component } from 'react';
import './App.css';

import {withRouter, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import Profile from './routes/Profile'
import Meetups from './routes/Meetups'
import Login from './form/login'
import Signup from './form/signup'
import NavBar from './navbar'
import Logo from './Logo'
import Hackathons from './routes/Hackathon'
import Home from './routes/Home'
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
        this.props.addUser(resp.user)
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
      <Route exact path="/" component={Home} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/meetups" component={Meetups} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/hackathons" component={Hackathons} />
    </React.Fragment>
    );
  }
}
const mapDispatchToProps = (dispatch)=>{
  return{
    addUser:(user)=> dispatch({type:"SET_USER",payload:user})
  }
}
export default  withRouter(connect(null,mapDispatchToProps)(App));
