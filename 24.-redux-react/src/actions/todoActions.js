import { types } from "../types/types"

export const ADD_NEW_ACTIVITY_ACTION = ( newActivity ) => {
    return {
        type: types.addNewToDo,
        payload:{
            id: new Date().getTime(),
            text: newActivity,
            complete: false
        }
    }
}

export const COMPLETE_ACTION = (id) => {
    return{
        type: types.completeTodo,
        payload: {
            id
        }
    }
}

export const DELETE_ACTION = (id) => {
    return{
        type: types.deleteActivity,
        payload: {
            id
        }
    }
}
