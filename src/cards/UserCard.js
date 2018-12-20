import React from 'react'
import {withRouter} from 'react-router-dom'
import {Button} from 'semantic-ui-react'
class Usercard extends React.Component{
  render(){
    let {user}=this.props
    return(
      <div className="userDiv">
        <div>
          <img src={user.img} alt="profile" height="250px" width="250px" className="ProImg"/>
        </div>
        <div>
          <h1>Name: {user.name}</h1>
        </div>
        <div>
          <p>Email: {user.email}</p>
        </div>
        <div>
          <Button color="black" onClick={()=>this.props.history.replace(`/user/${user.username}`)}>Go To {user.name} page</Button>
        </div>
      </div>
    )
  }
}
export default withRouter(Usercard)
