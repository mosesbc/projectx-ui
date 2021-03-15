import { GET_CLIENTS_BEGIN, GET_CLIENTS_ERROR, GET_CLIENTS_SUCCESS } from "../actions/clients.actions"


const clients_reducer = (state, action) => {
  if (action.type === GET_CLIENTS_BEGIN) {
    return {...state, clients_loading:true}
  }
  if (action.type === GET_CLIENTS_SUCCESS) {
    return {...state, clients_loading:false, clients:action.payload}
  }
  if (action.type === GET_CLIENTS_ERROR) {
    return {...state, clients_loading:false, clients_error:true}
  }

  return state
}

export default clients_reducer