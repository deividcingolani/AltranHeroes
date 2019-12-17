import { SET_GNOME } from '../actions/actionsTypes';

function gnomesReducer(state = {}, action) {
    switch (action.type) {
        case SET_GNOME:
            state = JSON.parse(JSON.stringify(action.payload));
            return state;
        default:
            return state
    }
}

export { gnomesReducer };