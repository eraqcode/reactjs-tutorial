import React, { useState } from 'react'
import { NewTravelForm } from '../NewTravelForm/NewTravelForm'

export const TravelList = () => {

    const [travels, setTravels] = useState([])

    const addTravel = (travel) => {
        setTravels([
            ...travels,
            travel
        ])
    }
    
    return(
        <>
            <div className="grid grid-cols-2">
                <div className="travel__form">
                    <NewTravelForm addTravel={ addTravel } />
                </div>
                <div className="travel__list">
                    { travels.map( travel => {
                        return(
                            <div key={travel.id} className="text-white grid grid-cols-2 border-2 border-gray-700 p-6 mt-4">
                                <div className="text">
                                    <header>
                                        <h4 className="text-lg font-bold"> { travel.country } </h4>
                                    </header>
                                    <p> Continent: { travel.continent } </p>
                                    <p> City: { travel.city } </p>
                                </div>
                                <div className="img">
                                    <img src={ travel.imgURL } alt={ travel.city } width="100" height="100"/>
                                </div>
                            </div>
                        )
                        
                    } ) }
                </div>
            </div>
        </>
    )
}
