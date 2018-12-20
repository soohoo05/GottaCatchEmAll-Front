import React from "react"
import { Form, Button } from "semantic-ui-react"
import LocationSelect from "./locationselect.js"
import Fade from 'react-reveal/Fade';

class Hackadd extends React.Component {
  state = {
    company: "",
    location: "",
    free: "",
    description: "",
    date: "",
    img: ""
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  handleDate = (event) => {
    this.setState({ date: event.target.value })
  }
  handleLocation = (e) => {
    if (e.target.value === "---") {
      this.setState({ location: null })
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
  handleSubmit = () => {
    console.log(this.state)
  }
  render() {
    return (
      <Fade>
      <div className='hackAddDiv'>
        <center><h1>Add a Hackathon</h1></center>
        <Form onSubmit={this.handleSubmit}>
          <label className='hackadd'>Company</label>
          <Form.Input
            type='text'
            placeholder='Company'
            name='company'
            onChange={this.handleChange}
            value={this.state.company}
          />
          <label className='hackadd'>Location</label>
          <LocationSelect
            handleChange={this.handleLocation}
            value={this.state.location}
          />
          <br />
          <label className='hackadd'>Cost</label>
          <select onChange={this.handleFree}>
            <option value='---'>---</option>
            <option value='Free'>Free</option>
            <option value='Not Free'>Not Free</option>
          </select>
          <br />

          <label className='hackadd'>Description</label>
          <Form.Input
            type='text'
            placeholder='Description'
            name='description'
            onChange={this.handleChange}
            value={this.state.description}
          />
          <label className='hackadd'>Date</label>

          <Form.Input
            type='date'
            format='YYYY MM DD'
            onChange={(e) => this.handleDate(e)}
            value={this.state.toDate}
          />
          <label className='hackadd'>Image URL</label>

          <Form.Input
            type='text'
            placeholder='Image URL'
            name='img'
            onChange={this.handleChange}
            value={this.state.img}
          />
          <center>
            <Button>Submit</Button>
          </center>
        </Form>
      </div>
      </Fade>
    )
  }
}
export default Hackadd
