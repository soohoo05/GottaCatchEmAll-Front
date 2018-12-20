import React from "react"
import { connect } from "react-redux"
import HackerHackathonCard from "../cards/HackerHackathonCard"
class Hackuserscontainer extends React.Component {
  render() {
    let hackerHackathons

    if (this.props.user) {
      hackerHackathons = this.props.user.hackathons.map((hackathon) => (
        <HackerHackathonCard hackathon={hackathon} key={hackathon.id} />
      ))
    }
    return <div>{hackerHackathons}</div>
  }
}
const mapStateToProps = (state) => {
  return {
    currentUser: state.user
  }
}
export default connect(mapStateToProps)(Hackuserscontainer)
