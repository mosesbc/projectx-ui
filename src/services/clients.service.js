import axios from 'axios'
import React, { useContext, useEffect, useReducer } from 'react'
import { GET_CLIENTS_BEGIN, GET_CLIENTS_ERROR, GET_CLIENTS_SUCCESS } from '../actions/clients.actions'
import reducer from '../reducers/clients.reducer'
import { clients_url } from '../utils/constants'

const initialState = {
  clients_loading: false,
  clients_error: false,
  clients: []
}

const ClientsContext = React.createContext()

export const ClientsService = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchClients = async () => { 
    dispatch({ type: GET_CLIENTS_BEGIN })
    try { 
      const response = await axios.get(clients_url)
      const clients = response.data
      dispatch({ type: GET_CLIENTS_SUCCESS, payload:clients })
    } catch (error) {
      dispatch({ type: GET_CLIENTS_ERROR })
    }
  }

  return (
    <ClientsContext.Provider value={{ ...state, fetchClients}}>
      {children}
    </ClientsContext.Provider>
  )
}
export const useClientsContext = () => {
  return useContext(ClientsContext)
}