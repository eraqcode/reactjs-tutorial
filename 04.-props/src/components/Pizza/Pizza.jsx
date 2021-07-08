import React, { Fragment } from 'react'

export const Pizza = ( { name, size, price } ) => {
    return (
        <Fragment>
            <p> {name} - {size} - ${price} </p>
        </Fragment>
    )
}
