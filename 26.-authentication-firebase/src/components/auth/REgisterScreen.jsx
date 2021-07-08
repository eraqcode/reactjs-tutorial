import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { REGISTER_WITH_EMAIL_AND_PASSWORD } from '../../actions/authActions'
import { useForm } from '../../hooks/useForm'

export const REgisterScreen = () => {

    const dispatch = useDispatch()
    const [ formValues, handleInputChange ] = useForm({
        name:'Erik',
        lastname: 'Andres',
        email: 'anndy@eraqcode.com',
        password: '123456',
        password2: '123456'
    })
    const { name, lastname, email, password, password2 } = formValues

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch( REGISTER_WITH_EMAIL_AND_PASSWORD( email, password, name, lastname ) )
    }


    return (
        <div className="register__screen">
            

            <form onSubmit={ handleSubmit } className="register__form">
                <header className="register__header">
                    <h3> Register </h3>
                </header>
                <input 
                    className="register__input"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={name}
                    onChange={ handleInputChange }
                />
                <input 
                    className="register__input"
                    type="text"
                    name="lastname"
                    placeholder="Enter your lastname"
                    value={lastname}
                    onChange={ handleInputChange }
                />
                <input 
                    className="register__input"
                    type="email"
                    name="email"
                    placeholder="Enter an email"
                    value={email}
                    onChange={handleInputChange}
                />
                <input 
                    className="register__input"
                    type="password" 
                    name="password" 
                    placeholder="Password"
                    value={password}
                    onChange={ handleInputChange }
                />
                <input 
                    className="register__input"
                    type="password" 
                    name="password2" 
                    placeholder="Confirm your Password"
                    value={password2}
                    onChange={handleInputChange}
                />

                <button 
                    type="submit"
                    className="btn btn__register"
                >
                    Sign Up
                </button>
                
                <div className="link__container">
                    <span className="link__title">
                        Already Have An Account?
                    </span>
                    <Link
                        to="/auth/login"
                        className="link"
                    >
                        Sign In
                    </Link>
                </div>
                
            </form>
        </div>
    )
}
