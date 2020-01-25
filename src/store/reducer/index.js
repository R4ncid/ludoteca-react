import {combineReducers} from "redux";
import {LOGGED_IN} from "../action/login";
import anagrafica from "./anagrafica";

const initialState = {
    user: localStorage.getItem('user') || {},
    loggedIn: !!localStorage.getItem('user') || false
};


export const login  =  (state=initialState, action) => {

    if(action.type === LOGGED_IN){
        return {
            ...state,
            user: action.user,
            loggedIn: true
        }
    }

    return state
}

export default combineReducers({login, anagrafica})
