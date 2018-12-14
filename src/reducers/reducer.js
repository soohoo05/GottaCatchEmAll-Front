let store={user:'',hackathons:[],selectedhackathon:null}

export default function reducer(state=store,action){
  switch(action.type){
      case 'SET_USER':
      return {...state,user:action.payload}
      case 'SET_SEARCH':
      return {...state,hackathons:action.payload}
      case 'SET_HACKATHON':
      return {...state,selectedhackathon:action.payload}
      case 'CLEAR_DETAILS':
      return {...state,selectedhackathon:null}
    default:
    return state
  }
}
