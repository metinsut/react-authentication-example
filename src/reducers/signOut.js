import {SIGNOUT_USER_SUCCESS} from '../constants/actionTypes';

const signOut = (state = {}, action) => {
    switch (action.type) {
        case SIGNOUT_USER_SUCCESS:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

export default signOut;