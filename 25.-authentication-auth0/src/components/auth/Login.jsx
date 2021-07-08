import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

export const Login = () => {

    const {loginWithPopup} = useAuth0()
    

    return (
        <>
            <button
                onClick={ () => loginWithPopup() }
                className="btn btn__login"
            >
                Log In
            </button>        
        </>
    )
}
