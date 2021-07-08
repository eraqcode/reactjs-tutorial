import { types } from "../types/types";

const initialState = {
    todos: []
}

export const TODO_REDUCER = ( state = initialState, action ) => {

    switch (action.type) {
        case types.addNewToDo:
            return{
                ...state,
                todos: [...state.todos, action.payload]
            };
                
        case types.completeTodo:
            return {
                ...state,
                todos: state.todos.map( todo => {
                    if ( todo.id === action.payload.id ) {
                        return { ...todo, complete: !todo.complete }
                    }
                    return todo;
                } )
            };
            
        case types.deleteActivity:
            return {
                ...state,
                todos: state.todos.filter( todo => todo.id !== action.payload.id )
            };
        default:
            return state;
    }

}