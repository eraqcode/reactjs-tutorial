import React, { useState } from 'react'
import PropTypes from 'prop-types'
export const Counter = ( {value = 20} ) => {

    const [counter, setCounter] = useState( value )

    const handleIncrement = () => {
        setCounter( counter + 1 )
    }
    const handleReset = () => {
        setCounter( value )
    }
    const handleDecrement = () => {
        setCounter( counter - 1 )
    }
    return (
        <section>
            <header className="header-counter">
                <h2>My Counter</h2>
            </header>
            <div className="container">
                <h3> Count: { counter } </h3>
                <div className="buttons">
                    <button
                        className= "btn"
                        onClick={handleIncrement}
                    >
                        +
                    </button>
                    <button
                        className= "btn"
                        onClick={handleReset}
                    >
                        Reset
                    </button>
                    <button
                        className= "btn"
                        onClick={handleDecrement}
                    >
                        -
                    </button>
                </div>
            </div>
        </section>
    )
}

Counter.propTypes = {
    value: PropTypes.number
}