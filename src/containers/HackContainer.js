import React from "react"
import { connect } from "react-redux"
import HackathonCard from "../cards/hackathoncard"
class Hackcontainer extends React.Component {
  render() {
    let hackathons
    if (this.props.userHackathons) {
      hackathons = this.props.userHackathons.map((theHackathon) => (
        <HackathonCard hackathon={theHackathon} key={theHackathon.id} />
      ))
    } else if (this.props.hackathons) {
      hackathons = this.props.hackathons.map((theHackathon) => (
        <HackathonCard hackathon={theHackathon} key={theHackathon.id} />
      ))
    }
    if(hackathons){
    if(hackathons.length!==0){
      return  <div className="hackContainer">{hackathons}</div>
    }
    else{
      return null
    }
  }
  else{
    return null
  }
}
}

const mapStateToProps = (state) => {
  return {
    hackathons: state.hackathons
  }
}

export default connect(mapStateToProps)(Hackcontainer)
