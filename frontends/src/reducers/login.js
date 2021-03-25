import * as types from '../actions/ActionTypes';

const initialState = {
    username: "",
    password: "",
    payload: null,
};

export default function login(state = initialState, action) {
    switch(action.type) {
        case types.LOGIN:
            console.log(action.payload);
            console.log(action)
            return {
                ...state, payload : action.payload
            }
        default:
            return state;
            
    }
}