import React from "react"
import { Form, Button } from "semantic-ui-react"
import LocationSelect from "./locationselect.js"
import Fade from 'react-reveal/Fade';
import axios from 'axios'
class Hackadd extends React.Component {
  state = {
    company: "",
    location: "",
    free: true,
    description: "",
    date: "",
    imageURL: "",
    url:"",
    errors:[]
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
    }
  }
  handleSubmit = (e,state) => {
    e.preventDefault()

    let emptykeys=[]
  for(var key in state){
    if (state[key]===""){
      emptykeys.push(key)
    }
  }
  var todayDate = new Date().toISOString().slice(0,10);
  if(emptykeys.length!==0){
  let emptyKeysString=emptykeys.join(', ').replace(/, ([^,]*)$/, ' and $1')
  emptyKeysString+=" cannot be blank"
  this.setState({errors:emptyKeysString})
}
else if(state.date<todayDate){
  this.setState({errors:"Date has already passed"})
}
else if(state.location==="---" ||state.location===""){
  this.setState({errors:"Location cannot be left blank"})
}
else{
  axios.post('http://localhost:3000/hackathons',{
    host: state.company,
    state:state.location,
    free: state.free,
    description: state.description,
    date: state.date,
    img: state.imageURL,
    url: state.url

  })
  .then(resp =>this.setState({
    company: "",
    location: "",
    free: true,
    description: "",
    date: "",
    imageURL: "",
    url:"",
    errors: ["Hackathon Submitted"]
  }))
}
  }
  render() {
    return (
      <Fade>
      <div className='hackAddDiv'>
        <center><h1>Submit a Hackathon</h1></center>
        <br/>
        <center><p className="errorMessage">{this.state.errors}</p></center>
        <Form onSubmit={e=>this.handleSubmit(e,this.state)}>
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
          <select onChange={this.handleFree} value={this.state.free}>
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
            value={this.state.date}
          />
          <label className='hackadd'>Image URL</label>

          <Form.Input
            type='text'
            placeholder='Image URL'
            name='imageURL'
            onChange={this.handleChange}
            value={this.state.imageURL}
          />
        <label className='hackadd'>Sign Up URL</label>
        <Form.Input
          type='text'
          placeholder= 'Link'
          name='url'
          onChange={this.handleChange}
          value={this.state.url}
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
