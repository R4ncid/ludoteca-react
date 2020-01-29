import {initializeApp} from 'firebase'
import  'firebase/auth'
import config from '../config'

export const InMemoryAuthRepository = {
    login: (email, password) => new Promise(resolve => {
        setTimeout(() => resolve(
            {
                token: 'dsadsadsadsads',
                userId: 'dsadsadsadasdsa'
            }
            )
            , 1000)
    })
};


const firebase = initializeApp(config.firebase);


export const FirebaseAuthRepository = {
    login : (email, password) =>
        firebase.auth().signInWithEmailAndPassword(email, password)

};


