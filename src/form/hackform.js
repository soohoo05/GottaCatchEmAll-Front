import React from "react"
import LocationSelect from "./locationselect.js"
import { submitQueryAction } from "../action/hackaction"
import { connect } from "react-redux"
import { Button, Form } from "semantic-ui-react"
import Fade from 'react-reveal/Fade';
class Hackform extends React.Component {
  state = {
    location: "",
    free: "either",
    fromDate: "",
    toDate: "",
    errors:""
  }

  handleLocation = (e) => {
    if (e.target.value === "---") {
      this.setState({ location: "" })
    } else {
      this.setState({ location: e.target.value })
    }
  }
  handleFree = (e) => {
    if (e.target.value === "Free") {
      this.setState({ free: true })
    } else if (e.target.value === "Not Free") {
      this.setState({ free: false })
    } else {
      this.setState({ free: "either" })
    }
  }
  submitHandler = (e) => {
    e.preventDefault()
    if (
      (this.state.toDate.length !== 0 && this.state.fromDate.length === 0) ||
      (this.state.toDate.length === 0 && this.state.fromDate.length !== 0)
    ) {
      this.setState({errors:"Invalid date Range"})
    } else if (
      this.state.toDate.length === 0 &&
      this.state.fromDate.length === 0 &&
      this.state.location.length === 0 &&
      this.state.free === "either"
    ) {
      this.setState({errors:"At least one parameter needed"})
    } else {
      this.props.submitQuery(this.state)
    }
  }

  handleFrom = (event) => {
    this.setState({ fromDate: event.target.value })
  }
  handleTo = (event) => {
    this.setState({ toDate: event.target.value })
  }
  render() {
    return (
      <Fade>
      <div className='hackdiv'>
        <form className='ui form' onSubmit={(e) => this.submitHandler(e)}>
          <center><p className="errorMessage">{this.state.errors}</p></center>
          <br/>
          <div className='field'>
            <h3>Location</h3>
            <LocationSelect
              handleChange={this.handleLocation}
              value={this.state.location}
            />
          </div>
          <div className='field'>
            <h3>Free</h3>
            <select onChange={this.handleFree}>
              <option value='---'>---</option>
              <option value='Free'>Free</option>
              <option value='Not Free'>Not Free</option>
            </select>
          </div>
          <div className='field'>
            <h3>Date Range</h3>
            <input
              type='date'
              format='YYYY MM DD'
              onChange={(e) => this.handleFrom(e)}
              value={this.state.fromDate}
            />
          </div>
          <Button color='black' onClick={() => this.setState({ fromDate: "" })}>
            Clear
          </Button>
          <div className='field'>
            <br />
            <h3>To</h3>
            <Form.Input
              type='date'
              format='YYYY MM DD'
              onChange={(e) => this.handleTo(e)}
              value={this.state.toDate}
            />
          </div>
          <Button color='black' onClick={() => this.setState({ toDate: "" })}>
            Clear
          </Button>
          <br />
          <br />
          <input className='ui green button' type='submit' />
        </form>
      </div>
      </Fade>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    submitQuery: (search) => dispatch(submitQueryAction(search))
  }
}
export default connect(
  null,
  mapDispatchToProps
)(Hackform)
