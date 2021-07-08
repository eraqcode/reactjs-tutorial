import { types } from "../types/types";

const initialState = {
    id: new Date().getTime(),
    data: []
}

export const TODO_REDUCER = ( state = initialState, action ) => {
    switch (action.type) {
        case types.addToDo:
            return {
                ...state,
                data: [...state.data, action.payload]
            };
        case types.delete:
            return state.data.filter( todo => todo.id !== action.payload.id )
    
        default:
            return state;
    }
}