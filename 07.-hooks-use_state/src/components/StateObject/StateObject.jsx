import React, { Fragment, useState } from 'react'

export const StateObject = () => {

    const [ person, SetPerson ] = useState({
        name: "Federico Binili",
        age: 21,
        height: 1.85
    })
    const { name, age, height } = person;

    const clickHandle = () => {
        SetPerson({
            ...person,
            name: 'Veronica Fedriuzsc'
        })
    }

    return (
        <Fragment>
            <header>
                <h2>State With Object</h2>
            </header>

            <p> { name } </p>
            <p> { age } years </p>
            <p> { height }cm </p>

            <button
                onClick={ clickHandle }
            >
                Change Data
            </button>
        </Fragment>
    )
}
