import React from "react"
import { connect } from "react-redux"
import HackathonCard from "../cards/hackathoncard"
import Wobble from 'react-reveal/Wobble';
import Fade from 'react-reveal/Fade';
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
    if (hackathons) {
      if (hackathons.length !== 0) {
        return <div className='hackContainer'>{hackathons}</div>
      } else {
        return <Wobble><h1 className='NothingHere'>Nothing here!</h1></Wobble>
      }
    } else {
      return <Wobble><h1 className='NothingHere'>Nothing here!</h1></Wobble>
    }
  }
}

const mapStateToProps = (state) => {
  return {
    hackathons: state.hackathons
  }
}

export default connect(mapStateToProps)(Hackcontainer)
