import React from "react"
import { connect } from "react-redux"
import axios from "axios"
import HackUsersContainer from "../containers/HackUsersContainer"
import Flip from 'react-reveal/Flip';
class Usersdisplay extends React.Component {
  state = {
    user: ""
  }
  componentDidMount() {
    let username = this.props.match.params.username
    axios
      .get(`http://localhost:3000/users/${username}`)
      .then((resp) => this.setState({ user: resp.data }))
  }

  Over= (e) =>{
  e.target.style.transition="all .7s"
  e.target.style.WebkitTransition="all.7s"
  e.target.style.opacity=0
  }
  Out=(e)=>{
    e.target.style.transition="all .7s"
    e.target.style.WebkitTransition="all.7s"
    e.target.style.opacity=1
  }
  render() {
    return (

      <center>
        <Flip top>
        <div className='userDisplayDiv'>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoIygVR6v25SAX2tB4I1vTNefv4YLalTwmczTJJML7ERA-rdZIXA"
            alt='profile'
            height='250px'
            width='250px'
              className='userimage userimage1'
            onMouseOver={e => this.Over(e)}
            onMouseOut={e=> this.Out(e)}
          />
        <img
          src={this.state.user.img}
          alt='profile'
          height='250px'
          width='250px'
            className='userimage userimage2'
          />
          <h1>Name: {this.state.user.name}</h1>
          <h2>Email: {this.state.user.email}</h2>
        </div>
        </Flip>
        <Flip bottom>
        <HackUsersContainer user={this.state.user} />
        </Flip>
      </center>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.user
  }
}

export default connect(mapStateToProps)(Usersdisplay)
