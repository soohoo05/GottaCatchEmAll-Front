import React, {Component} from 'react'
import HackForm from '../form/hackform'
import HackContainer from '../containers/HackContainer'
import HackDetails from '../cards/hackdetails'
export default class Hackathons extends Component{

  render(){
    return(
      <React.Fragment>
        <HackForm />
        <HackContainer />
          <HackDetails />

      </React.Fragment>
    )
  }
}
