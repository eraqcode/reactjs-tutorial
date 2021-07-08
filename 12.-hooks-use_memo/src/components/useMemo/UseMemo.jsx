import React, { useState, useMemo } from 'react'
import { useCounter } from '../../hooks/useCounter/useCounter'

export const UseMemo = () => {
    const [counter, incremento] = useCounter(200)
    const [show, setShow] = useState(true)
    
    const procesoPesado = ( iteraciones ) => {
        for (let i = 0; i < iteraciones; i++) {
           console.log("Alli vamos...")            
        }

        return `${ iteraciones } iteraciones`
    }

    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [ counter ] )

    return (
        <div className="container">
            <header>
                <h2>useMemo Hook</h2>
            </header>
            
            <h3> { counter } </h3>

            <p> <strong> { memoProcesoPesado } </strong> </p>

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
