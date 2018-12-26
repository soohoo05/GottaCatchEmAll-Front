import React from "react"
import { connect } from "react-redux"
import Hackhomecard from "../cards/Hackhomecard"
import Bounce from 'react-reveal/Bounce';

class Homecontainer extends React.Component {
  componentWillUnmount() {
    this.props.deleteHackDetails()
  }
  render() {
    let renderedHomeCards
    if (this.props.all) {
      renderedHomeCards = this.props.all.map((hackathon) => (
        <Hackhomecard hackathon={hackathon} key={hackathon.id} />
      ))
    }
    if (this.props.all) {
      if (this.props.all.length !== 0) {
        return <Bounce up><div>{renderedHomeCards}</div></Bounce>
      } else {
        return <center><h1 className='headerh1'>No Hackathons being attended</h1></center>
      }
    } else {
      return null
    }
  }
}

const mapStateToProps = (state) => {
  return {
    all: state.fetchedHackathons
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    deleteHackDetails: () => dispatch({ type: "CLEAR_DETAILS" })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Homecontainer)
