import React from "react"
import { connect } from "react-redux"
class Hackerhackathoncard extends React.Component {
  render() {
    let you
    if (this.props.currentUser) {
      you = this.props.currentUser.hackathons.find(
        (hackathon) => hackathon.id === this.props.hackathon.id
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
          {you ? <h4>You are attending this event</h4> : null}
        </center>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    currentUser: state.user
  }
}
export default connect(mapStateToProps)(Hackerhackathoncard)
