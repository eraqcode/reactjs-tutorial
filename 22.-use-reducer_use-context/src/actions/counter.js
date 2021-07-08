import { types } from "../types/types"

export const INCREMENT_ACTION = () => {
    return {
        type: types.increment
    }
}

export const DECREMENT_ACTION = () => {
    return {
        type: types.decrement
    }
}

export const RESET_ACTION = () => {
    return {
        type: types.reset
    }
}