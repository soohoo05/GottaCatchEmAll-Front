import React, { Component } from "react"
import { connect } from "react-redux"
import HackContainer from "../containers/HackContainer"
import HackDetails from "../cards/hackdetails"

class Profile extends Component {
  componentWillUnmount() {
    this.props.deleteHackDetails()
  }

  showHackContainer = () => {
    if (this.props.user.user) {
      return <HackContainer userHackathons={this.props.user.user.hackathons} />
    } else if (this.props.user) {
      return <HackContainer userHackathons={this.props.user.hackathons} />
    }
  }

  render() {
    return (
      <center>
      <h1 className="headerh1">Your Hackathons</h1>
      <div className="hack">

        {this.showHackContainer()}
        <HackDetails />
      </div>
    </center>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteHackDetails: () => dispatch({ type: "CLEAR_DETAILS" })
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Profile)
