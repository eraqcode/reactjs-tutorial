import React, { Fragment } from 'react'

export const Hamburger = ({ name, price }) => {
    return (
        <Fragment>
            
            <p> { name } - ${ price } </p>
            
        </Fragment>
    )
}
