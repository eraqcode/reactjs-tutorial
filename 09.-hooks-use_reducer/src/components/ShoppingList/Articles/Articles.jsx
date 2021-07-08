import React, { Fragment } from 'react'

export const Articles = ( { article, dispatch } ) => {
    return (
        <Fragment>
            <div className="row">
                <div className="col s8">
                    <li
                        style={{ color: article.bought ? 'gray' : 'black', fontSize:"1.6rem" }}
                    >
                        <strong>{ article.name } - { article.unit } </strong>
                    </li>
                </div>
                <div className="col s4">
                    <button
                        className="btn teal darken-2"
                        onClick={ () => dispatch( { type: "bought", payload: { id: article.id } } ) }
                    >
                        Bought
                    </button>
                    <button
                        className="btn red accent-3"
                        onClick={ () => dispatch( { type: "remove", payload: { id: article.id } } ) }
                    >
                        Delete
                    </button>
                </div>
            </div>
        </Fragment>
    )
}
