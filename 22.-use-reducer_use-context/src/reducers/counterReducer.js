import { types } from "../types/types";



export const COUNTER_REDUCER = ( state, action ) => {

    switch (action.type) {
        case types.increment:
            return state + 1 ;
        case types.decrement:
            return state - 1;
        case types.reset:
            return 0;
        default:
            return state;
    }

}