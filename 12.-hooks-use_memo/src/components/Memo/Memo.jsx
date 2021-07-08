import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter/useCounter'
import { Small } from './Samll/Small'

export const Memo = () => {
    const [counter, incremento] = useCounter(1)
    const [show, setShow] = useState(true)
    return (
        <div className="container">
            <header>
                <h2>Memorize</h2>
            </header>
            <Small value = { counter } />
            <button className="btn btn-primary" onClick={ () => incremento(1) }>
                +1
            </button>
            <button
                className="btn btn-primary"
                onClick={ () => {
                    setShow( !show )
                } }
            >
                Show/Hide { JSON.stringify( show ) }
            </button>
        </div>
    )
}
