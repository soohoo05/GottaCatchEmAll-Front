import React, { Component } from "react"
import "./App.css"

import { withRouter, Route, Switch } from "react-router-dom"
import { connect } from "react-redux"
import Profile from "./routes/Profile"
import Login from "./form/login"
import Signup from "./form/signup"
import NavBar from "./navbar"
import Logo from "./Logo"
import Hackathons from "./routes/Hackathon"
import Home from "./routes/Home"
import NoMatch from './routes/NoMatch.js'
import Users from './routes/Users'
import UsersDisplay from './routes/UsersDisplay'
class App extends Component {

  componentDidMount = () => {
    let token = localStorage.getItem("token")
    if (token) {
      fetch("http://localhost:3000/current_user", {
        headers: {
          "Content-Type": "application/json",
          Accepts: "application/json",
          Authorization: token
        }
      })
        .then((resp) => resp.json())
        .then((resp) => {
          this.props.addUser(resp.user)
        })
    } else {
      this.props.history.push("/signup")
    }
  }

  render() {

    return (
      <div className="whole">
        <Logo />
        <NavBar />
        <center className="music"><iframe src="https://open.spotify.com/embed/artist/45eNHdiiabvmbp4erw26rg" width="300" height="80"  allowtransparency="true" allow="encrypted-media"></iframe></center>
        <br />
        <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/hackathons' component={Hackathons} />
        <Route exact path ='/users' component={Users} />
          <Route exact path='/user/:username' component={UsersDisplay} />
            <Route component={NoMatch} />

        </Switch>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (user) => dispatch({ type: "SET_USER", payload: user })
  }
}

export default withRouter(connect(null,mapDispatchToProps)(App))
