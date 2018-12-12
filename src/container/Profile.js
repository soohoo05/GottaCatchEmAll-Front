import React, {Component} from 'react'
import {connect} from 'react-redux'
class Profile extends Component{
  render(){
    console.log(this.props.user)
    return(
      <h1>Profile</h1>
    )
  }
}
const mapStateToProps = (state) => {
  return{
    user:state.user
  }
}
export default connect(mapStateToProps)(Profile)
