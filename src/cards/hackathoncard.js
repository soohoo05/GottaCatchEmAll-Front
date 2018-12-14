import React from 'react'
import {connect} from 'react-redux'
class Hackathoncard extends React.Component{
  render(){

    return(
      <div>
      <p>Hosted by: {this.props.hackathon.host}</p>
      <p>State: {this.props.hackathon.state}</p>
      <p>Cost: {this.props.hackathon.free ? "Free" : "Yes"}</p>
      <button onClick={()=>this.props.clickHandler(this.props.hackathon)}>See More</button>
      <br/>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) =>{
  return{
    clickHandler: (hackathon) => dispatch({type: 'SET_HACKATHON',payload:hackathon})
  }
}
export default connect(null,mapDispatchToProps)(Hackathoncard)
