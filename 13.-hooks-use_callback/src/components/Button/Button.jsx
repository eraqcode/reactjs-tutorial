import React, { Fragment } from 'react'

export const Button = React.memo(({ incrementar }) => {

    console.log('Me volvi a renderizar - Button Component :)');

    return (
        <Fragment>
            <button
                className="btn btn-dark"
                onClick={ () => {
                    incrementar(6)
                } }
            >
                Show/Hide
            </button>
        </Fragment>
    )
}
)