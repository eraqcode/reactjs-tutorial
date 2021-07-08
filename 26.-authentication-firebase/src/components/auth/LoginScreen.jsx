import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { LOGIN_WITH_EMAIL_AND_PASSWORD, LOGIN_WITH_GOOGLE } from '../../actions/authActions'
import { useForm } from '../../hooks/useForm'

export const LoginScreen = ({history}) => {

    const dispatch = useDispatch()
    const [ formValues, handleInputChange ] = useForm({
        email: '',
        password: ''
    })
    const { email, password } = formValues

    const handleLoginWithGoogle = () => {
        dispatch( LOGIN_WITH_GOOGLE() )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch( LOGIN_WITH_EMAIL_AND_PASSWORD( email, password ) )
        history.replace('/users')
    }

    return (
        <div className="login__screen">
            

            <form onSubmit={ handleSubmit } className="login__form">
                <header className="login__header">
                    <h3> Login </h3>
                </header>
                <input 
                    className="login__input"
                    type="email"
                    name="email"
                    placeholder="Enter an email"
                    value={ email }
                    onChange={ handleInputChange }
                />
                <input 
                    className="login__input"
                    type="password" 
                    name="password" 
                    placeholder="Password"
                    value={ password }
                    onChange={ handleInputChange }
                />

                <button 
                    type="submit"
                    className="btn btn__login"
                >
                    Log In
                </button>
                
                <h4> Or </h4>

                <div 
                    onClick={ handleLoginWithGoogle }
                    className="google__btn"
                >
                    <div className="google__btn-img">
                        <img 
                            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.7ZvVP00p4WDHmErvpPw88gHaHa%26pid%3DApi&f=1" 
                            alt="Google logo" 
                            className="google__img"
                        />
                    </div>
                    <div className="google__btn-text">
                        <span className="google__text">
                            Sign In With Google
                        </span>
                    </div>
                </div>

                <Link
                    to="/auth/register"
                    className="link"
                >
                    Create An Account
                </Link>
            </form>
        </div>
    )
}
