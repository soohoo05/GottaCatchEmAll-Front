import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
class Navbar extends React.Component{

  handleToken = () =>{
     localStorage.removeItem('token')
     this.props.deleteUser()
  }
  render(){
    //on hover show link names?
    return(
      <div className="navbar">

      <br/><div className="Nav">

        {this.props.user ? <NavLink to="/profile" className="navlink" exact style={{width: '100px',
                padding: '12px',
                margin: '0 6px 6px',
                background: 'black',
                borderRadius: '5px',
                outline:'white',
                textDecoration: 'none',
color: 'white'}}>Profile</NavLink> :null }
      {this.props.user ?     <NavLink to="/users" className="navlink" exact style={{width: '100px',
                padding: '12px',
                margin: '0 6px 6px',
                background: 'black',
                borderRadius: '5px',
                outline:'white',
                textDecoration: 'none',
color: 'white'}}>Hackers</NavLink> :null }
      {this.props.user ?    <NavLink to="/hackathons" className="navlink" exact style={{width: '100px',
                padding: '12px',
                margin: '0 6px 6px',
                background: 'black',
                borderRadius: '5px',
                outline:'white',
                textDecoration: 'none',
color: 'white'}}>Hackathons</NavLink> :null }
      {!this.props.user ?    <NavLink to="/login" className="navlink" exact style={{width: '100px',
          padding: '12px',
          margin: '0 6px 6px',
          background: 'black',
          borderRadius: '5px',
          outline:'white',
          textDecoration: 'none',
color: 'white'}}>Login</NavLink> :null}
     {!this.props.user ? <NavLink to="/signup" className="navlink" exact style={{width: '100px',
        padding: '12px',
        margin: '0 6px 6px',
        background: 'black',
        borderRadius: '5px',
        outline:'white',
        textDecoration: 'none',
color: 'white'}}>Signup</NavLink> :null}


  {this.props.user ? <NavLink className="navlink" exact style={{width: '100px',
                padding: '12px',
                margin: '0 6px 6px',
                background: 'black',
                borderRadius: '5px',
                outline:'white',
                textDecoration: 'none',
color: 'white'}} activeStyle={{background: 'black'}} onClick={this.handleToken} to="/signup">Logout</NavLink> :null}
</div>
      </div>
    )
  }
}
const mapStateToProps = (state) =>{
  return{
    user:state.user
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    deleteUser: () => dispatch({type:"DELETE_USER"})
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Navbar)
