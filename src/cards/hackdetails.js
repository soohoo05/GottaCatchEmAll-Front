import React from 'react'
import {connect} from 'react-redux'
import {saveHackathon} from '../action/hackaction'
class Hackdetails extends React.Component{

  renderDetails = () =>{
    if(this.props.hackDetails!==null){
  return(<React.Fragment>
  <p>Hosted by: {this.props.hackDetails.host}</p>
  <p>State: {this.props.hackDetails.state}</p>
  <p>Date: {this.props.hackDetails.date}</p>
  <p>Cost: {this.props.hackDetails.free ? "Free" : "Yes"}</p>
  <p>Description: {this.props.hackDetails.description.substr(2).slice(0,-2)}</p>
  <button onClick={()=>this.props.saveHackathon(this.props.hackDetails,this.props.user)}>Save</button>
  </React.Fragment>
  )}
  }
  
  render(){
    return(
      <div>
      {this.renderDetails()}
     </div>)
  }
}
const mapStateToProps = (state) => {
  return{
    hackDetails:state.selectedhackathon,
    user:state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveHackathon:(hackathon,user) => {dispatch(saveHackathon(hackathon,user))}
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Hackdetails)
