import React from 'react'
import {connect} from 'react-redux'
import { Button } from 'semantic-ui-react'

class NoMatch extends React.Component{
  componentDidMount(){
    window.open('https://media1.tenor.com/images/b25511087b27597960f77dd0dbaf568d/tenor.gif?itemid=5140737','_blank')
    window.open('https://memegenerator.net/img/instances/71836630/why-you-do-dis.jpg')
    window.open('https://cdn1-www.mandatory.com/assets/uploads/2017/03/1-1-e1488974194291.jpg')
  }
  render(){
    console.log(this.props.user)
    return(
      <center>
      <img src="https://i.imgflip.com/2p66xj.jpg" alt="Suprised Pikachu" height="700"/>
      <br/>
      <h1>Salutations {this.props.user.name}, it seems you put in an invalid URL. Please hit the button below to go back to the home page.</h1>
      <Button onClick={()=>  this.props.history.replace("/")}>Go Back</Button>
      </center>
    )
  }
}
const mapStateToProps = (state) => {
  return{
    user:state.user
  }
}
export default connect(mapStateToProps)(NoMatch)
