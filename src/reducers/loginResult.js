import {RECEIVE_LOGIN_RESPOND} from '../constants/actionTypes';

const loginResult = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_LOGIN_RESPOND:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

export default loginResult;