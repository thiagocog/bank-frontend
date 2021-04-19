import { TYPES } from './auth.action'
import { getToken, getClient } from "../../config/auth";


const INITIAL_STATE = {
  isAdmin: getClient().tipo === '1' || false,
  loading: false,
  token: getToken() || "",
  client: getClient() || {},
  error: [],
  registered: false
};

const reducer = (state = INITIAL_STATE, action) => { 
  switch (action.type) {
    case TYPES.SIGN_LOADING:
      state.error = [];
      state.loading = action.status
      return state
    case TYPES.SIGN_IN: 
      state.token = action.data.token
      state.client = action.data.user
      state.isAdmin = action.data.user.tipo === '1'
      state.loading = false
      return state
    case TYPES.SIGN_UP: 
      state.registered = true
      state.token = action.data.token
      state.client = action.data.user
      state.isAdmin = action.data.user.tipo === '1'
      state.loading = false
      return state
    case TYPES.SIGN_ERROR: 
      const err = [...state.error, action.data]
      state.loading = false
      state.error = err;
      return state
    case TYPES.SIGN_OUT: 
      state.token = ""
      state.client = {}
      state.isAdmin = false
      state.error = []
      return state
    default:
      return state;
  }
}

export default reducer
