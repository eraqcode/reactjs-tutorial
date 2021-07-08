import { createContext, useReducer } from 'react'
import { COUNTER_REDUCER } from '../reducers/counterReducer';

export const CounterContext = createContext();

export const CounterProvider = ( props ) => {
    const [counter, dispatch] = useReducer(COUNTER_REDUCER, 0)
    return(
        <CounterContext.Provider value={{
            counter,
            dispatch
        }}>
            { props.children }
        </CounterContext.Provider>
    )
}