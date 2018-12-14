import React from 'react'
import LocationSelect from './locationselect.js'
import {submitQueryAction} from '../action/hackaction'
import {connect} from 'react-redux'

class Hackform extends React.Component{
  state={
    location:'',
    free:"either",
     fromDate:'',
     toDate:''
  }

  handleLocation = (e) =>{
    if(e.target.value==="---"){
      this.setState({location:null})
    }
    this.setState({location:e.target.value})
  }
  handleFree = (e) =>{
    if (e.target.value==="Free"){
      this.setState({free:true})
    }
    else if (e.target.value==="Not Free"){
      this.setState({free:false})
    }
    else{
      this.setState({free:"either"})
    }
  }
  submitHandler = (e) =>{
    e.preventDefault()
    if((this.state.toDate.length!==0 && this.state.fromDate.length===0) || (this.state.toDate.length===0 && this.state.fromDate.length!==0)){
      alert('Invalid date Range')
    }
    else{
      this.props.submitQuery(this.state)
    }

  }


  handleFrom = (event) => {
    this.setState({fromDate:event.target.value})
  }
  handleTo= (event)=>{
    this.setState({toDate:event.target.value})
  }
  render(){
    return(
      <React.Fragment>
        <p>Location</p>
      <LocationSelect handleChange={this.handleLocation} value={this.state.location}/>
      <br/>
      <p>Free</p>
      <select onChange={this.handleFree}>
        <option value="---">---</option>
        <option value="Free">Free</option>
        <option value="Not Free">Not Free</option>
      </select>
    <br/>
    <p>Date Range</p>
      <input type="date" format="YYYY MM DD" onChange={(e)=>this.handleFrom(e)} value={this.state.fromDate}/>
      <button onClick={()=>this.setState({fromDate:''})}>Clear</button>
      <p>To</p>
      <input type="date" format="YYYY MM DD" onChange={(e)=>this.handleTo(e)} value={this.state.toDate}/>
      <button onClick={()=>this.setState({toDate:''})}>Clear</button>
      <br/>
      <br/>
        <form onSubmit={(e)=>this.submitHandler(e)}>
        <input type="submit" />
        </form>
      </React.Fragment>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    submitQuery: (search) => dispatch(submitQueryAction(search))
  }
}
export default connect(null,mapDispatchToProps)(Hackform)
