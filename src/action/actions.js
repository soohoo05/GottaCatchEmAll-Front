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
        user: user,
        img: "https://ak1.picdn.net/shutterstock/videos/16685851/thumb/1.jpg"
      })
      .then((json) => {
        localStorage.setItem("token", json.data.jwt)
        history.replace("/profile")
        dispatch({ type: "SET_USER", payload: json.data.user })
      })
      .catch((error) => alert("User already made or field(s) were left blank"))
  }
}

export const fetchUsers = () => {
  return (dispatch) => {
    return axios
      .get("http://localhost:3000/users")
      .then((resp) => dispatch({ type: "SET_USERS", payload: resp.data.users }))
  }
}

export const changePicture = (picture, userId) => {
  return (dispatch) => {
    return axios
      .patch(`http://localhost:3000/users/${userId}`, {
        user: {
          img: picture
        }
      })
      .then((resp) => dispatch({ type: "SET_USER", payload: resp.data }))
  }
}

export const deleteUser = (user) => {
localStorage.clear()
  return (dispatch) => {
    return axios.delete(`http://localhost:3000/users/${user.user_id}`)
    .then((resp) => dispatch({type: 'DELETE_USER'}))
  }
}

export const edit = (id,user,history) => {
  return (dispatch) => {
    return axios.patch(`http://localhost:3000/users/${id}`,{
      name:user.name,
      username:user.username,
      password:user.password,
      email:user.email
    })
    .then(resp => {
    dispatch({type:'SET_USER',payload:resp.data})
    history.replace('/profile')
  })

  }
}
