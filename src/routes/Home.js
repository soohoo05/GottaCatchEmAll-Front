import React from "react"
import { connect } from "react-redux"
import { fetchRecent } from "../action/hackaction"
import Homecontainer from "../containers/HomeContainer"
import Hackdetails from "../cards/hackdetails"
import LocationSelect from "../form/locationselect.js"

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchRecent("---")
  }
  handleLocationSelect = (e) => {
    let state=e.target.value
    this.props.fetchRecent(state)

  }
  render() {
    return (
      <React.Fragment>
      <br/>
      <center>
      <LocationSelect handleChange={this.handleLocationSelect}/>
      </center>

      <Homecontainer />
        <Hackdetails />
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRecent: (state) => {
      dispatch(fetchRecent(state))
    }
  }
}
export default connect(
  null,
  mapDispatchToProps
)(Home)
