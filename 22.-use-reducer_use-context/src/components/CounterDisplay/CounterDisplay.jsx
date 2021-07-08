import React, { useContext, useEffect } from 'react'
import { CounterContext } from '../../context/CounterContext'

export const CounterDisplay = () => {

    const { counter } = useContext(CounterContext)
    useEffect(() => {
        console.log( counter )
    }, [counter])
    return (
        <div>
           <h1> Count: { counter } </h1> 
        </div>
    )
}
