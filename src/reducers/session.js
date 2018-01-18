import {RECEIVE_SESSION} from '../constants/actionTypes';

let initialSession = {
    isLogin: null,
    fetchStatus: "unload"
};

const session = (state = initialSession, action) => {
    switch (action.type) {
        case RECEIVE_SESSION:
            if (action.payload) {
                return {
                    ...state,
                    ...action.payload,
                    isLogin: true,
                    fetchStatus: "loaded"
                };
            }
            else {
                return {
                    isLogin: false,
                    fetchStatus:"loaded"
                }
            }
        default:
            return state;
    }
};

export default session;