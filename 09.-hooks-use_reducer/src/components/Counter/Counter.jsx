import React from 'react'
import { useReducer } from 'react'


import './counter.css'
export const Counter = () => {

    const counter = 0; //initialState

    const counterReducer = (state, action) => {
        switch( action.type ) {
            case "increment":
                return state + 1;
            case "decrement":
                return state - 1;
            case "increment 5":
                return state + action.payload;
            case "decrement 5":
                return state - action.payload;        
            case "reset":
                return counter;
            default:
                return state;            
        }
    }

    const [ count, dispatch ] = useReducer( counterReducer, counter )

    return (
        <section>
            <header>
                <h3 className="blue-text">Counter Exercise</h3>
                <hr/>
            </header>
            <div className="row">
                <div className="col s6">
                    <h3> Counter: { count } </h3>
                </div>
                <div className="col s6 flex">
                    <div className="row flex">
                        <button
                            className=" waves-effect waves-orange waves-ripple btn blue darken-2"
                            onClick={ () => dispatch({ type: "increment" }) }
                        >
                            Increment
                        </button>
                        <button
                            className=" waves-effect waves-orange waves-ripple btn blue darken-2"
                            onClick={ () => dispatch({ type: "decrement" }) }
                        >
                            Decrement
                        </button>
                        <button
                            className=" waves-effect waves-orange waves-ripple btn blue darken-2"
                            onClick={ () => dispatch({ type: "reset" }) }
                        >
                            Reset
                        </button>
                    </div>

                    <div className="row flex">
                        <button
                            className="waves-effect waves-light btn yellow darken-2 black-text dark"
                            onClick={ () => dispatch({ type: "increment 5", payload: 5 }) }
                        >
                            Increment +5
                        </button>
                        <button
                            className="waves-effect waves-light btn yellow darken-2 black-text dark"
                            onClick={ () => dispatch({ type: "decrement 5", payload: 5 }) }
                        >
                            Decrement -5
                        </button>
                        <button
                            className="waves-effect waves-light btn yellow darken-2 black-text dark"
                            onClick={ () => dispatch({ type: "reset" }) }
                        >
                            Reset
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
