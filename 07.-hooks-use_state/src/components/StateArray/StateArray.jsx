import React, { Fragment, useState } from 'react'

export const StateArray = () => {
    const [fruits, setFruits] = useState([
        'Pear', 'Apple', 'Grapes'
    ])

    const clickHandle = () => {
        setFruits(
            [ ...fruits, 'Blackberry', 'Pineapple', 'Lemon' ]
        )
    }

    return (
        <Fragment>
            <header>
                <h2>State With Array</h2>
            </header>

            <ul>
                {
                    fruits.map( fruit => {
                        return(
                            <li> { fruit } </li>
                        )
                    } )
                }
            </ul>

            <button
                onClick={ clickHandle }
            >
                Add Fruits
            </button>
        </Fragment>
    )
}
