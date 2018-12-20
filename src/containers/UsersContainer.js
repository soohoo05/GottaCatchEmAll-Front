import React from "react"
import { connect } from "react-redux"
import UserCard from "../cards/UserCard"
import Bounce from 'react-reveal/Bounce';

class Userscontainer extends React.Component {
  render() {
    let filteredUsers = this.props.users.filter(
      (user) => user.id !== this.props.currentUser.user_id
    )
    let users = filteredUsers.map((user) => (
    <UserCard user={user} key={user.id} />
    ))
    if (users !== 0 && this.props.currentUser) {
      return   <div className='userCon'>{users}</div>
    } else {
      return null
    }
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    currentUser: state.user
  }
}
export default connect(mapStateToProps)(Userscontainer)
