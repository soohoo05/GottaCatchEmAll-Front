import React from "react"
import { connect } from "react-redux"
import { Button } from "semantic-ui-react"

class Hackhomecard extends React.Component {
  getNames = () => {
    let user
    let users = ""
    if (this.props.user) {
      user = this.props.hackathon.users.find(
        (user) => user.id === this.props.user.user_id
      )
    }
    if (user) {
      users += "You and "
      if (this.props.hackathon.users.length !== 1) {
        if (this.props.hackathon.users.length === 1) {
          users +=
            this.props.hackathon.users.length - 1 + " other person is attending"
        } else {
          users +=
            this.props.hackathon.users.length -
            1 +
            " other people are attending"
        }
        return users
      } else {
        return "You are attending"
      }
    } else {
      if (this.props.hackathon.users.length === 1) {
        return "1 person is attending"
      } else {
        return this.props.hackathon.users.length + " people are attending"
      }
    }
  }
  render() {
    let names = this.getNames()
    let user
    if (this.props.user) {
      user = this.props.hackathon.users.find(
        (user) => user.id === this.props.user.user_id
      )
    }
    return (
      <div className='HackHomeCard'>
        <center>
          <h3>Hosted by: {this.props.hackathon.host}</h3>
          <img
            className='HackImage'
            src={this.props.hackathon.img}
            alt='hackathon'
          />
          <h4>Date: {this.props.hackathon.date}</h4>
          {this.props.hackathon.free ? (
            <h4>Free Event</h4>
          ) : (
            <h4>Paid Event</h4>
          )}
          <h4>{names}</h4>
          <Button onClick={() => this.props.clickHandler(this.props.hackathon)}>
            See more
          </Button>
        </center>
      </div>
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
    clickHandler: (hackathon) =>
      dispatch({ type: "SET_HACKATHON", payload: hackathon })
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hackhomecard)
