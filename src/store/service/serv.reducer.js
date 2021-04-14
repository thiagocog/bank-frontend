import { TYPES } from './serv.action'

const INITIAL_STATE = {
    all: [],
    loading: false
};

const reducer = (state = INITIAL_STATE, action) => { 
    switch (action.type) {
        case TYPES.COURSE_LOADING:
            state.loading = action.status
            return state;
        case TYPES.COURSE_ALL:
            state.all = action.data
            state.loading = false
            return state;
        default:
            return state;
    }
};

export default reducer;
