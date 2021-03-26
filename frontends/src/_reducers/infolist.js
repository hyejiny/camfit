import * as types from '../_actions/ActionTypes';

export default function infolist(state = {}, action) {
    console.log(action.payload,'1231241231')
    if(action.type === types.INFO) {
        return {
            ...state,
            infolist :action.payload
        };
    } else {
        return state;
    }
}