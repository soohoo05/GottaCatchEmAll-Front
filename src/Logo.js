import React from "react"
import { withRouter } from "react-router-dom"
class Logo extends React.Component {
  handleHome = () => {
    this.props.history.replace("/")
  }
  render() {
    return (
      <div id='logo' onClick={this.handleHome}>
        <h1 className='odd'>G</h1>
        <h1 className='even'>O</h1>
        <h1 className='odd'>T</h1>
        <h1 className='even'>T</h1>
        <h1 className='odd'>A</h1>
        <h1 className='odd'> </h1>
        <h1 className='even'>H</h1>
        <h1 className='odd'>A</h1>
        <h1 className='even'>C</h1>
        <h1 className='odd'>K</h1>
        <h1 className='even'> </h1>
        <h1 className='odd'>'</h1>
        <h1 className='even'>E</h1>
        <h1 className='odd'>M</h1>
        <h1 className='even'> </h1>
        <h1 className='even'>A</h1>
        <h1 className='odd'>L</h1>
        <h1 className='even'>L</h1>
      </div>
    )
  }
}
export default withRouter(Logo)
