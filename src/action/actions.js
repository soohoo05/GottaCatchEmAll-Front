import axios from "axios"
//

export const login = (theUser, history) => {
  return (dispatch) => {
    return axios
      .post(`http://localhost:3000/login`, {
        user: theUser
      })
      .then((json) => {
        localStorage.setItem("token", json.data.jwt)
        history.replace("/profile")
        dispatch({ type: "SET_USER", payload: json.data.user })
      })
      .catch((error) => alert("Error, user not found or wrong password"))
  }
}

export const signUp = (user, history) => {
  return (dispatch) => {
    return axios
      .post(`http://localhost:3000/users`, {
        user: user
      })
      .then((json) => {
        localStorage.setItem("token", json.data.jwt)
        history.replace("/profile")
        dispatch({ type: "SET_USER", payload: json.data.user })
      })
      .catch((error) => alert("User already made or field(s) were left blank"))
  }
}

export const fetchUsers = () =>{
  return (dispatch) => {
    return axios.get('http://localhost:3000/users')
    .then(resp => dispatch({type:"SET_USERS",payload: resp.data.users}))
  }
}
