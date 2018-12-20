import React from "react"
import { withRouter } from "react-router-dom"
import { Button } from "semantic-ui-react"
import Bounce from 'react-reveal/Bounce';

class Usercard extends React.Component {
  render() {
    let { user } = this.props
    return (
      <Bounce down>
      <div className='userDiv'>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoIygVR6v25SAX2tB4I1vTNefv4YLalTwmczTJJML7ERA-rdZIXA"
            alt='profile'
            height='250px'
            width='250px'
            className='ProImg'
            onMouseOver={e =>e.currentTarget.src=user.img}
            onMouseOut={e => e.currentTarget.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoIygVR6v25SAX2tB4I1vTNefv4YLalTwmczTJJML7ERA-rdZIXA"}
          />
        </div>
        <div>
          <h1>Name: {user.name}</h1>
        </div>
        <div>
          <p>Email: {user.email}</p>
        </div>
        <div>
          <Button
            color='black'
            onClick={() =>
              this.props.history.replace(`/user/${user.username}`)
            }>
            Go To {user.name} page
          </Button>
        </div>
      </div>
      </Bounce>
    )
  }
}
export default withRouter(Usercard)
