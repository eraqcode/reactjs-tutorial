import Axios from "axios"
import { types } from "../types/types"

export const FETCH_REQUEST_ACTION = () => {
    return {
        type: types.fetchRequest
    }
}

export const FETCH_USERS_SUCCESS = (users) => {
    return {
        type:types.fetchUsersSuccess,
        payload: users
    }
}

export const FETCH_USERS_FAILURE = (error) => {
    return {
        type: types.fetchUsersFailure,
        payload: error
    }
}

//Accion Asincrona
export const GET_USERS = () => {
    return ( dispatch ) => {
        dispatch( FETCH_REQUEST_ACTION() )
        Axios.get( 'http://jsonplaceholder.typicode.com/users')
            .then( response => {
                const users = response.data
                dispatch( FETCH_USERS_SUCCESS( users ) )
            } )
            .catch( err => {
                const errorMsg = err.message
                dispatch( FETCH_USERS_FAILURE( errorMsg ) )
            } )
    }
}