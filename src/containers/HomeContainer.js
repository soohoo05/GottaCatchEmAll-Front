import React from 'react'
import {connect} from 'react-redux'
import Hackhomecard from '../cards/Hackhomecard'
class Homecontainer extends React.Component{
  render(){
    let renderedHomeCards
    if(this.props.all){
      renderedHomeCards=this.props.all.map(hackathon => <Hackhomecard hackathon={hackathon} />)
    }
    return(this.props.all ? <div>{renderedHomeCards}</div> : <div><div className="loader"></div><h1>Loading</h1></div>)
  }
}


const mapStateToProps = (state) => {
  return {
    all:state.fetchedHackathons
  }
}


export default connect(mapStateToProps)(Homecontainer)
