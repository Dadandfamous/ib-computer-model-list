import  { ADD_COMPDATA }  from './actions/AddCompData'

const reducer = (state = [], action = {}) => {
  switch (action.type) {
    case ADD_COMPDATA : 
      return [...state, action.payload]
      
    default:
      return state
  }
}

export default reducer;

