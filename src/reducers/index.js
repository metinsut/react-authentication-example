import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';
import Site from './siteReducer';
import Session from './session';
import loginResult from "./loginResult";
import signOut from "./signOut";

const combine = combineReducers({
    Site,
    Session,
    loginResult,
    signOut,
    form: formReducer
});

export default combine;