import React from 'react'
import { useContext } from 'react'
import { Header } from '../components/Header/Header'
import { UserContext } from '../components/UserContext/UserContext'

export const Login = () => {
    
    const { setUser } = useContext(UserContext)

    const logIn = () => {
        setUser({
            nameEnterprise: "Ezaq Coin",
            description: "Crypto Currency",
            foundation: 2020,
            place: "Quito",
            owner: "Erik CArcelén",
            banner: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quos itaque in error aspernatur, tenetur repudiandae adipisci vel porro, voluptatum natus, sit velit molestiae vero totam? Qui corporis consequatur repellat"
        })
    }

    const logOut = () => {
        setUser({})
    }

    return (
        <section className="login">
            <Header 
                title = "Login"
            />

            <div className="container">
                <button
                    className="btn"
                    onClick={ logIn }
                >
                    Log IN
                </button>
                <button
                    className="btn__logout"
                    onClick={ logOut}
                >
                    Log Out
                </button>
            </div>
        </section>
    )
}
