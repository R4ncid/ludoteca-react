import {FirebaseAuthRepository} from "../../repos/auth-repo";
export const LOGGED_IN = 'LOGGED_IN'

const attemptLogin = credential => {
    return {
        type: LOGGED_IN,
        user: {
            userId : credential.userId,
            token: credential.user.ma
        }
    }
}


export const login =  ({email, password}) => dispatch => {
  
        FirebaseAuthRepository.login(email, password)
        .then(res => dispatch(attemptLogin(res)))
            .catch(e => console.log(e))
}
