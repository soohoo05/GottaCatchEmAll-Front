import React, {Component} from 'react'
import {connect} from 'react-redux'
import HackContainer from '../containers/HackContainer'

class Profile extends Component{
  showHackContainer = () =>{
    if(this.props.user.user){
      return <HackContainer userHackathons={this.props.user.user.hackathons}/>
    }
    else if (this.props.user){
      return <HackContainer userHackathons={this.props.user.hackathons} />
    }

  }
  render(){
    console.log(this.props.user)

    // let hackathons=this.props.user.hackathons.map(hackathon=><)

    return(<div>
      <h1>Your Hackathons</h1>
  {this.showHackContainer()}
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return{
    user:state.user
  }
}
export default connect(mapStateToProps)(Profile)
