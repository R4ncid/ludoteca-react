import {LOGGED_IN} from "../action/login";

const initialState = {
    user: localStorage.getItem('user') || {},
    loggedIn: !!localStorage.getItem('user')
};


export default (state=initialState, action) => {

    if(action.type === LOGGED_IN){
        return {
            ...state,
            user: action.user,
            loggedIn: true
        }
    }

    return state
}
