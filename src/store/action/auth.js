import {FirebaseAuthRepository} from "../../repos/auth-repo";
export const LOGGED_IN = 'LOGGED_IN'

const attemptLogin = credential => {
    const user ={
        userId : credential.userId,
        token: credential.user.ma
    }
    localStorage.setItem("user", user)
    return {
        type: LOGGED_IN,
        user
    }
}


export const login =  ({email, password}) => dispatch => {

        FirebaseAuthRepository.login(email, password)
        .then(res => dispatch(attemptLogin(res)))
            .catch(e => console.log(e))
}
