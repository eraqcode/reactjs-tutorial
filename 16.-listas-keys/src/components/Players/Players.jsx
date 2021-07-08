import React, { Fragment } from 'react';
import PropTypes from 'prop-types'
import './Players.css';

export const Players = ( { img, name, country } ) => {
    return (
        <Fragment>
            <div className="card">
                <div className="img">
                    <img src={ img } alt=""/>
                </div>
                <div className="info">
                    <p> {name} </p>
                    <p> {country} </p>
                </div>
            </div>
        </Fragment>
    )
}

Players.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired
}