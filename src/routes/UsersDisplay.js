import React from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
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
    console.log(this.state.user)
    return(<h1>UD</h1>)
  }
}

const mapStateToProps = (state) => {
  return{
    currentUser:state.user
  }
}
export default connect(mapStateToProps)(Usersdisplay)
