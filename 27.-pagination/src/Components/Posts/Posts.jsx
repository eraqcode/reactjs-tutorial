import React from 'react'

export const Posts = ({currentElements, loading}) => {

    if (loading) {
        return ( <h1>Loading...</h1> )
    }

    return (
        <ul className="list-group mt-5">
            {
                currentElements.map( post => {
                    return (
                        <li key={post.id} className="mt-3">
                            <h3> {post.title} </h3>
                            <p> { post.body } </p>
                        </li>
                    )
                } )
            }
        </ul>
    )
}
