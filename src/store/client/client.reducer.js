import { TYPES } from './client.action'

const INITIAL_STATE = {
    all: []
}


const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case TYPES.CLIENT_ALL: 
            state.all = action.data
            return state
        default:
            return state
    }
    
}


export default reducer;
