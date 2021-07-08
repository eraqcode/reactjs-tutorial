import { types } from "../types/types"


export const ADD_NEW_TODO_ACTION = ( element ) => {
    return {
        type: types.addToDo,
        payload: element
    }
}

export const DELECTE_ACTION = () => {
    return {
        type: types.delete,
        payload: {
            id: new Date().getTime(),
            data: []
        }
    }
}