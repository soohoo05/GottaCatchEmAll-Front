import React from "react"
import { connect } from "react-redux"
import { saveHackathon, deleteHackathon } from "../action/hackaction"
import { Button } from "semantic-ui-react"

class Hackdetails extends React.Component {
  renderDetails = () => {
    let saved

    if (this.props.user && this.props.hackDetails) {
      saved = this.props.user.hackathons.find((hackathon) => {
        return hackathon.id === this.props.hackDetails.id
      })
    }

    if (this.props.hackDetails !== null) {
      return (
        <center>
          <img src={this.props.hackDetails.img} alt='hackathon' />
          <p>Hosted by: {this.props.hackDetails.host}</p>
          <p>State: {this.props.hackDetails.state}</p>
          <p>Date: {this.props.hackDetails.date}</p>
          <p>Cost: {this.props.hackDetails.free ? "Free" : "Yes"}</p>
          <p>
            Description:{" "}
            {this.props.hackDetails.description.substr(2).slice(0, -2)}
          </p>
          <Button onClick={()=>window.open(this.props.hackDetails.url)}>Go to Website</Button>
            <br/>
          <br/>
          {this.props.user ? (saved ? (
            <Button onClick={this.deletedhackathon}>Delete</Button>
          ) : (
            <Button
              onClick={() =>
                this.props.saveHackathon(
                  this.props.hackDetails,
                  this.props.user
                )
              }>
              Save
            </Button>
          )) : null}
          {this.props.user? <br/>:null}
          <br/>
          <Button onClick={() => this.props.deleteHackDetails()}>
            Go Back
          </Button>
        </center>
      )
    }
  }
  deletedhackathon = () => {
    this.props.deleteHackathon(this.props.hackDetails, this.props.user)
    this.props.deleteHackDetails()
  }
  render() {
    if (this.props.hackDetails) {
      return <div className='hackDetails'>{this.renderDetails()}</div>
    } else {
      return null
    }
  }
}
const mapStateToProps = (state) => {
  return {
    hackDetails: state.selectedhackathon,
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveHackathon: (hackathon, user) => {
      dispatch(saveHackathon(hackathon, user))
    },
    deleteHackathon: (hackathon, user) => {
      dispatch(deleteHackathon(hackathon, user))
    },
    deleteHackDetails: () => {
      dispatch({ type: "CLEAR_DETAILS" })
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hackdetails)
