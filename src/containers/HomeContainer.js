import React from "react"
import { connect } from "react-redux"
import Hackhomecard from "../cards/Hackhomecard"
class Homecontainer extends React.Component {
  componentWillUnmount() {
    this.props.deleteHackDetails()
  }
  render() {
    let renderedHomeCards
    if (this.props.all) {
      renderedHomeCards = this.props.all.map((hackathon) => (
        <Hackhomecard hackathon={hackathon} key={hackathon.id}/>
      ))
    }
    if (this.props.all) {
      if (this.props.all.length !== 0) {
        return (
          <div>
            {renderedHomeCards}

          </div>
        )
      } else {
        return <h1 className="headerh1">No Hackathons being attended</h1>
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

export default connect(mapStateToProps,mapDispatchToProps)(Homecontainer)
