import React from "react"
import { connect } from "react-redux"
import { Button} from 'semantic-ui-react'

class Hackathoncard extends React.Component {
  render() {
    return (
      <div className="HackCard">
        <center>
        <img className="HackImage" src={this.props.hackathon.img} alt='hackathon' />
        <p>Hosted by: {this.props.hackathon.host}</p>
        <p>State: {this.props.hackathon.state}</p>
        <p>Cost: {this.props.hackathon.free ? "Free" : "Yes"}</p>
        <Button onClick={() => this.props.clickHandler(this.props.hackathon)}>
          See More
        </Button>
        <br />
        </center>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    clickHandler: (hackathon) =>
      dispatch({ type: "SET_HACKATHON", payload: hackathon })
  }
}
export default connect(
  null,
  mapDispatchToProps
)(Hackathoncard)
