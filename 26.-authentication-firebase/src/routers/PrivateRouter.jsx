import React from 'react'
import { Redirect, Route } from 'react-router-dom'

export const PrivateRouter = ({
    component: Component,
    isAuthenticated,
    ...rest
}) => {
    return (
        <Route 
            component={ props => (
                ( isAuthenticated )
                ?
                    ( <Component {...props} /> )
                :
                    ( <Redirect to='/' /> )    
            ) }
        />
    )
}
