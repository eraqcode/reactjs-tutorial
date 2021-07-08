import React, { useContext } from 'react'
import { Header } from '../components/Header/Header'
import { UserContext } from '../components/UserContext/UserContext'
export const About = () => {

    const { user } = useContext(UserContext)

    
    return (
        <section className="about">
            <Header
                title = "About"
            />
            <article>
                {
                    (Object.keys( user ).length === 0) ? null
                    :
                    (
                    <p>
                        Somos una empresa dedicada al mundo del { user.description }
                        <br/>
                        formada en { user.place } por el desarrollador de software { user.owner } <br/>
                        en el año { user.foundation }
                    </p>
                    )
                }
                
            </article>
        </section>
    )
}
