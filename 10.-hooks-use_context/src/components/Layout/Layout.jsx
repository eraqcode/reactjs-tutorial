import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../ThemeContext/ThemeContext'

export const Layout = () => {

    const theme = useContext( ThemeContext )

    return (
        <div style={ theme }>
            <header>
                <h2> Layout </h2>
            </header>

            <article>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis incidunt minus repudiandae ipsam? Doloremque placeat ad molestias deleniti. Temporibus explicabo architecto quasi nostrum consectetur voluptates quis necessitatibus earum vitae deleniti.
                </p>
            </article>
        </div>
    )
}
