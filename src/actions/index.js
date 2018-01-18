import * as WebServices from '../services/webServices';
import * as ActionTypes from '../constants/actionTypes';

export const ReceiveSites = sites => ({
    type: ActionTypes.RECEIVE_SITES,
    sites
});

export const receiveSession = user => ({
    type: ActionTypes.RECEIVE_SESSION,
    payload: user
});

export const signInUserResult = loginResult => ({
    type: ActionTypes.RECEIVE_LOGIN_RESPOND,
    payload: loginResult
});

export const signOutUserSuccess = isSignOut => ({
    type: ActionTypes.SIGNOUT_USER_SUCCESS,
    payload: isSignOut
});

export const receiveSites = () => dispatch => {
    WebServices.getSites().then((res) => {
        if (res.data.success) {
            dispatch(ReceiveSites(res.data.success));
        }
    })
};

export const sessionUser = () => dispatch => {
    WebServices.getSessionUser().then((res) => {
        if (res.data.success) {
            dispatch(receiveSession(res.data.success))
        } else {
            dispatch(receiveSession())
        }
    })
};

export const sendLoginRequest = userInfo => dispatch => {
    return WebServices.signIn(userInfo)
};


export const signOutUser = () => dispatch => {
    return WebServices.signOutUser()
};

export const signUpUser = (userData) => dispatch => {
    return WebServices.signUpUser(userData)
};



