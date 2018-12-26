import React from "react"
import { withRouter } from "react-router-dom"
import { Button } from "semantic-ui-react"
import Bounce from 'react-reveal/Bounce';
// onMouseOver={e =>e.currentTarget.src=user.img}
// onMouseOut={e => e.currentTarget.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoIygVR6v25SAX2tB4I1vTNefv4YLalTwmczTJJML7ERA-rdZIXA"}

class Usercard extends React.Component {
  Over= (e) =>{
  e.target.style.transition="all .7s"
  e.target.style.WebkitTransition="all.7s"
  e.target.style.opacity=0
  }
  Out=(e)=>{
    e.target.style.transition="all .7s"
    e.target.style.WebkitTransition="all.7s"
    e.target.style.opacity=1
  }
  render() {
    let { user } = this.props
    return (
      <Bounce down>
      <div className='userDiv'>
        <div className="usersimgs">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoIygVR6v25SAX2tB4I1vTNefv4YLalTwmczTJJML7ERA-rdZIXA"
            alt='profile'
            height='250px'
            width='250px'
            className='userimage userimage1'
            onMouseOver={e =>this.Over(e)}
            onMouseOut={e =>this.Out(e)}
          />
        <img
          src={user.img}
          alt='profile'
          height='250px'
          width='250px'
          className='userimage userimage2'
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
