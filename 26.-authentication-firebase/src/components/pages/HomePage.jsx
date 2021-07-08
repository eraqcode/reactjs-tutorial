import React from 'react'
import { Redirect } from 'react-router-dom'

export const HomePage = ( {history} ) => {


    const handleHomeLoginBtn = () => {
        history.push('/auth/login')       
    }
    const handleHomeSignUpBtn = () => {
        history.push('/auth/register')
    }
    return (
        <div className="container home">
            <header className="header__home">
                <h1> HOME PAGE </h1>
            </header>
            <main className="home__content">
                <div className="buttons">
                    <button 
                        onClick={ handleHomeLoginBtn }
                        className="btn home__btn-login"
                    >
                        Log In
                    </button>
                    <button 
                        onClick={ handleHomeSignUpBtn }
                        className="btn home__bnt-signup"
                    >
                        Sign Up
                    </button>
                </div>
            </main>
        </div>
    )
}
