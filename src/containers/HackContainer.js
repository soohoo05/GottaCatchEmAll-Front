import React from 'react'
import {connect} from 'react-redux'
import HackathonCard from '../cards/hackathoncard'
class Hackcontainer extends React.Component{


  render(){
    console.log(this.props)
    let hackathons;
    if(this.props.userHackathons){
     hackathons=this.props.userHackathons.map(theHackathon=> <HackathonCard hackathon={theHackathon} key={theHackathon.id} />)
    }
    else{
     hackathons=this.props.hackathons.map(theHackathon => <HackathonCard hackathon={theHackathon} key={theHackathon.id} />)
  }
    return(
      <div>{hackathons ? hackathons : null}</div>

    )
  }
}

const mapStateToProps = (state) => {
  return{
    hackathons: state.hackathons
  }
}

export default connect(mapStateToProps)(Hackcontainer)
