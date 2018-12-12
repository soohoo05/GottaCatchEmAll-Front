let store={user:''}

export default function reducer(state=store,action){
  switch(action.type){
      case 'SET_USER':
      return {...state,user:action.payload}
    default:
    return state
  }
}
