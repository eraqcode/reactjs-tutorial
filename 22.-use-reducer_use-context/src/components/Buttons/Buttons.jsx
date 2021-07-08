import React, { useContext } from 'react'
import { DECREMENT_ACTION, INCREMENT_ACTION, RESET_ACTION } from '../../actions/counter'
import { CounterContext } from '../../context/CounterContext'

export const Buttons = () => {

     const { dispatch } = useContext(CounterContext)

    return (
        <div className="container mt-4">
           <button
                className="btn btn-primary"
                onClick={ () => dispatch( INCREMENT_ACTION() ) }
           >
               Increment
           </button>
           <button
                className="btn btn-primary"
                onClick={ () => dispatch( RESET_ACTION() ) }
           >
                Reset
           </button>
           <button
                className="btn btn-primary"
                onClick={ () => dispatch( DECREMENT_ACTION() ) }
           >
                Decrement
           </button>
        </div>
    )
}
