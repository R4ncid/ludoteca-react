export const LOGGED_IN = 'LOGGED_IN'


const attemptLogin = credential => {
    return {
        type: LOGGED_IN,
        user: {
            username : credential.user
        }
    }
}


export const login =  ({email, password}) => dispatch => {
    console.log('try to login with', email, password)
    setTimeout(
        () => dispatch(attemptLogin({user: email}))
    ,1000)
}
