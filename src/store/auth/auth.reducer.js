import { TYPES } from './auth.action'
import { TYPES as TYPES_CLIENTS } from '../client/client.action'
import { getToken, getClient } from "../../config/auth"



const INITIAL_STATE = {
  isAdmin: getClient().type === '1' || false,
  loading: false,
  token: getToken() || "",
  client: getClient() || {},
  error: [],
  registered: false
}


const reducer = (state = INITIAL_STATE, action) => { 
  switch (action.type) {
    case TYPES.SIGN_LOADING:
      state.error = []
      state.loading = action.status
      return state
    case TYPES.SIGN_IN: 
      state.token = action.data.token
      state.client = action.data.user
      state.isAdmin = action.data.user.type === '1'
      state.loading = false
      state.error = []
      return state
    case TYPES.SIGN_UP: 
      state.registered = true
      state.token = action.data.token
      state.client = action.data.user
      state.isAdmin = action.data.user.type === '1'
      state.loading = false
      state.error = []
      return state
    case TYPES.SIGN_ERROR: 
      const err = [...state.error, action.data]
      state.loading = false
      state.error = err
      return state
    case TYPES.SIGN_OUT: 
      state.token = ""
      state.client = {}
      state.isAdmin = false
      state.error = []
      state.registered = false
      return state
    case TYPES_CLIENTS.CLIENT_PROFILE:
      state.isAdmin = false
      state.client = { ...action.data }
      state.error = []
      return state
    default:
      return state;
  }
}

export default reducer
