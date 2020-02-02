import {LOGGED_IN} from "../action/auth";

const initialState = {
    user:  localStorage.getItem("user") || {},
    loggedIn:  !!localStorage.getItem("user")
};


const login = (state, action) => {
    return {
        ...state,
        user: action.user,
        loggedIn: true
    }
};


export default  (state=initialState, action) => {

    switch (action.type) {

        case LOGGED_IN:
            return login(state, action);
        default:
            return state
    }
}
