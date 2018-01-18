import {RECEIVE_SINGUP_RESPOND} from '../constants/actionTypes';

const singUpResult = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_SINGUP_RESPOND:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

export default singUpResult;