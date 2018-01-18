import {RECEIVE_SITES} from '../constants/actionTypes';

let initialSite = {};

const Site = (state = initialSite, action) => {
    switch (action.type) {
        case RECEIVE_SITES:
            return {
                ...state,
                ...action.sites
            };
        default:
            return state;
    }
};

export default Site;
