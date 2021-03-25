import * as types from '../actions/ActionTypes';

const initialState = {
    username: '',
    password: '',
    passwordcheck: '',
    category: '1',
};

export default function signup(state = initialState, action) {
    if(action.type === types.SIGNUP) {
        return {
            // username = action.username,
            // password = action.password,
            // passwordcheck = action.passwordcheck,
            // category = action.category
            ...state,
            signupSuccess :action.payload
        };
    } else {
        return state;
    }
}