let store = {
  user: "",
  hackathons: [],
  selectedhackathon: null,
  fetchedHackathons: null,
  users: []
}

export default function reducer(state = store, action) {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload }
    case "DELETE_USER":
      return { ...state, user: "" }
    case "SET_SEARCH":
      return { ...state, hackathons: action.payload }
    case "SET_HACKATHON":
      return { ...state, selectedhackathon: action.payload }
    case "CLEAR_DETAILS":
      return { ...state, selectedhackathon: null }
    case "CLEAR_SEARCH":
      return { ...state, hackathons: null }
    case "FETCHED":
      return { ...state, fetchedHackathons: action.payload }
    case "SET_USERS":
      return { ...state, users: action.payload }
    default:
      return state
  }
}
