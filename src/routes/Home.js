import React from "react"
import { connect } from "react-redux"
import { fetchAll } from "../action/hackaction"
import Homecontainer from "../containers/HomeContainer"
import Hackdetails from "../cards/hackdetails"

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchAllAttended()
  }

  render() {
    return (
      <React.Fragment>
        <Homecontainer />
        <Hackdetails />
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllAttended: () => {
      dispatch(fetchAll())
    }
  }
}
export default connect(
  null,
  mapDispatchToProps
)(Home)
