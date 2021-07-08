/*
    {
        uid: 454512f1df878,
        displayName: 'Erik
    }
*/

import { types } from "../types/types";

export const AUTH_REDUCER = ( state = {} , action ) => {
    switch (action.type) {
        case types.login:
            return{
                uid: action.payload.uid,
                displayName: action.payload.displayName,
                
            };
        case types.logout:
            return {};    
    
        default:
            return state;
    }
}