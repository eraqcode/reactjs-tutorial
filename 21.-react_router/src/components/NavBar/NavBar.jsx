import React from 'react'
import './navBar.scss'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
    return (
        <nav>
            <div className="nav__logo">
                <header>
                    <h3> React Router </h3>
                </header>
            </div>
            <div className="nav__wrapper">
                <ul className="nav">
                    <li className="item">
                        <NavLink exact activeClassName="active" to="/" className="item__link"> Home </NavLink>
                    </li>
                    <li className="item">
                        <NavLink exact activeClassName="active" to="/about" className="item__link"> About </NavLink>
                    </li>
                    <li className="item">
                        <NavLink exact activeClassName="active" to="/login" className="item__link"> Login </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
