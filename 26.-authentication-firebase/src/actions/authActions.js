import { GoogleAuthProvider, firebase } from "../firebase/firebase"
import { types } from "../types/types"

export const LOGIN_WITH_EMAIL_AND_PASSWORD = ( email, password ) => {
    return ( dispatch ) => {
        firebase.auth().signInWithEmailAndPassword( email, password )
            .then( ( { user } ) => {
                dispatch( LOGIN_ACTION( user.uid, user.displayName ) )
                alert( 'Haz iniciado sesion' )
            } )
            .catch( err => {
                console.log(err)
            } )
    }
}

export const LOGIN_WITH_GOOGLE = () => {
    return ( dispatch ) => {
        firebase.auth().signInWithPopup( GoogleAuthProvider )
            .then( ({user}) => {
                dispatch( LOGIN_ACTION( user.uid, user.displayName ) )
            } )
    }
}

//Register Action
export const REGISTER_WITH_EMAIL_AND_PASSWORD = ( email, password, name, lastname ) => {
    return ( dispatch ) => {
        firebase.auth().createUserWithEmailAndPassword( email, password )
            .then( async ( {user} ) => {
                await user.updateProfile({
                    displayName: `${name} ${lastname}`
                })

                dispatch( LOGIN_ACTION( user.uid, user.displayName ) )
            } )
    }

}


export const LOGIN_ACTION = ( uid, displayName) => {
    return {
        type: types.login,
        payload: {
            uid,
            displayName,
            
        }
    }
}

export const LOGOUT_USER_APP = () => {
    return ( async ( dispatch ) => {
        await firebase.auth().signOut();
        dispatch( LOGOUT_ACTION() )
    } )
}

export const LOGOUT_ACTION = () => {
    return {
        type: types.logout
    }
}