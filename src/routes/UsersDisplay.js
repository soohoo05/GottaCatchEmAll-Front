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
            onMouseOver={e => e.currentTarget.src=this.state.user.img}
            onMouseOut={e=> e.currentTarget.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoIygVR6v25SAX2tB4I1vTNefv4YLalTwmczTJJML7ERA-rdZIXA"}
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
