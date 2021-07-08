import React from 'react'
import './saludo.scss'
import PropTypes from 'prop-types'

export const Saludo = ( { greet, subtitle } ) => {
    return (
        <section>
            <header className="header-saludo">
                <h1> { greet } </h1>
                <h3> { subtitle } </h3>
            </header>
        </section>
    )
}

Saludo.propTypes = {
    greet: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
}