import { types } from "../types/types";

const initialState = {
    loading: false,
    users: [],
    error: ''
}

export const USERS_REDUCER = ( state= initialState, action ) => {
    switch (action.type) {
        case types.fetchRequest:
            return {
                ...state,
                loading: true
            };
        case types.fetchUsersSuccess:
            return{
                loading: false,
                users: action.payload,
                error: ''
            }
        case types.fetchUsersFailure:
            return {
                loading: false,
                users: [],
                error: action.payload
            }    
        default:
            return state;
    }
}