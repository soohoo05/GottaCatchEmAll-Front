import axios from 'axios';
//


export const login = (theUser) => {
  return (dispatch) =>{
    return axios.post(`http://localhost:3000/login`,{
      user:theUser
    })
  }
}
