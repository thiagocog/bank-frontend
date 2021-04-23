import { TYPES } from './serv.action'

const INITIAL_STATE = {
    all: [],
    loading: false,
    details: {}
};


const reducer = (state = INITIAL_STATE, action) => { 
    switch (action.type) {
        case TYPES.SERVICE_LOADING:
            state.loading = action.status
            return state
        case TYPES.SERVICE_ALL:
            state.all = action.data
            state.loading = false
            return state
        case TYPES.SERVICE_DETAILS:
            state.details = action.data
            state.loading = false
            return state
        default:
            return state;
    }
}


export default reducer;
