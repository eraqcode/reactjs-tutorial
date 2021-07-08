import React from 'react'
import { useContext } from 'react'
import { Header } from '../components/Header/Header'
import { UserContext } from '../components/UserContext/UserContext'

export const Home = () => {

    const { user } = useContext(UserContext)

    console.log(user)

    return (
        <section className="home">
            <Header
                title = {user.nameEnterprise}
            />
            <div className="containr">
                <p>
                    { user.banner }
                </p>
            </div>
        </section>
    )
}
