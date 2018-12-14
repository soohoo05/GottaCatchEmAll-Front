import React from 'react'
import {withRouter} from 'react-router-dom'
class Logo extends React.Component{
  handleHome = () =>{
    this.props.history.replace("/")
  }
render(){
  return(  <div id="logo" onClick={this.handleHome}>
    <h1 className="odd">M</h1>
    <h1 className="even">E</h1>
    <h1 className="odd">E</h1>
    <h1 className="even">T</h1>
    <h1 className="odd">H</h1>
    <h1 className="even">A</h1>
    <h1 className="odd">X</h1>
    <h1 className="even">O</h1>
    <h1 className="odd">R</h1>
    </div>)
}
}
export default withRouter(Logo)
