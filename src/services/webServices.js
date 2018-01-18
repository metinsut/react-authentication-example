import axios from 'axios';
import {DATA, BASEAPIURL} from '../constants/path';

export const getSites = () => {
    return axios.get(DATA + "site.json")
};

export const getSessionUser = () => {
    return axios.get(BASEAPIURL + "/api/user/getSessionUser")
};

export const signIn = (userInfo) => {
    return axios.post(BASEAPIURL + "/auth/login", "params=" + JSON.stringify(userInfo))
};

export const signOutUser = () => {
    return axios.post(BASEAPIURL + "/auth/logout");
};

export const signUpUser = (newUserInfo) => {
    return axios.post(BASEAPIURL+"/auth/createNewUser","params="+JSON.stringify(newUserInfo));
};
