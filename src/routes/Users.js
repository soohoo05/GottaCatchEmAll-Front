import React from 'react'
import {connect} from 'react-redux'
import {fetchUsers} from '../action/actions'
import UsersContainer from '../containers/UsersContainer'
class Users extends React.Component{
  componentDidMount(){
    this.props.fetchUsers()
  }
  render(){
    return(
      <UsersContainer />
    )
  }
}



const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}
export default connect(null,mapDispatchToProps)(Users)
