import axios from 'axios';
import * as types from './ActionTypes';

export function login(data) {
    // let token_tmp = ''
    const request = axios.post('http://127.0.0.1:8000/accounts/api-token-auth/', data)
        .then((res) => 
            res.data.token
        );
    return {
        type: types.LOGIN,
        payload: request
    };
}
export function signup(data) {
    const request = axios.post('http://127.0.0.1:8000/accounts/signup/', data)
        .then((res) => 
            res.data);

    return {
        type: types.SIGNUP,
        payload: request
    };
}