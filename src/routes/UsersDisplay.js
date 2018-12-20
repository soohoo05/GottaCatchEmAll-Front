import React from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import HackUsersContainer from '../containers/HackUsersContainer'
class Usersdisplay extends React.Component{
  state={
    user:''
  }
  componentDidMount(){
    let username=this.props.match.params.username
    axios.get(`http://localhost:3000/users/${username}`)
    .then(resp => this.setState({user:resp.data}))
  }
  render(){
    return(
      <div className="userDisplayDiv">
        <img src={this.state.user.img} alt="profile" height="250px" width="250px" />
        <h1>Name: {this.state.user.name}</h1>
        <h2>Email: {this.state.user.email}</h2>
        <HackUsersContainer user={this.state.user}/>
    </div>)
  }
}

const mapStateToProps = (state) => {
  return{
    currentUser:state.user
  }
}

export default connect(mapStateToProps)(Usersdisplay)
