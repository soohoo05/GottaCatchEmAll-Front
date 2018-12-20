import React, { Component } from "react"
import HackForm from "../form/hackform"
import HackContainer from "../containers/HackContainer"
import HackDetails from "../cards/hackdetails"
import { connect } from "react-redux"
class Hackathons extends Component {
  componentWillUnmount() {
    this.props.deleteHackDetails()
    this.props.clearSearch()
  }
  render() {
    return (
      <React.Fragment>
        <div className="hackathon">
          <HackForm />
          <HackContainer />
          <HackDetails />
        </div>
      </React.Fragment>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    deleteHackDetails: () => dispatch({ type: "CLEAR_DETAILS" }),
    clearSearch: () => dispatch({ type: "CLEAR_SEARCH" })
  }
}
export default connect(
  null,
  mapDispatchToProps
)(Hackathons)
