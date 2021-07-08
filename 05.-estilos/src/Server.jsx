import React, { Fragment } from 'react'
import robot from './assets/img/robot.png'
import './Server.css';
export const Server = ( { name, status, message } ) => {
    return (
        <Fragment>
            <div className="card mt-5 bg-red-300 border-2 border-red-800 p-4">
                <header className="text-xl font-bold text-red-900">
                    <h4> { name } </h4>
                </header>
                <p className="text-lg font-semibold"> { status } </p>
                <p className="text-lg font-semibold"> { message } </p>
            </div>
            <div className="img block mx-auto w-48 mt-6 ">
                <img src={robot} alt="robot" width="180" height="180"/>
            </div>
        </Fragment>
    )
}
