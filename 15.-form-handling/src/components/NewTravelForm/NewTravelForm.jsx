import React, { useState } from 'react'
import { v4 as uuidV4 } from 'uuid'
export const NewTravelForm = ( { addTravel } ) => {

    const [travel, setTravel] = useState({
        continent: '',
        country: '',
        city: '',
        imgURL: ''
    })
    const {continent, country, city, imgURL} = travel;


    const handleChange = (e) => {
        setTravel({
            ...travel,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        travel.id = uuidV4();

        addTravel(travel);

        setTravel({
            continent: '',
            country: '',
            city: '',
            imgURL: ''
        })

    }
    
    

    return(
        <>
            <div className="content w-4/5 border-2 border-gray-700 rounded mt-8 p-6">
                <header>
                    <h3 className="text-lg text-gray-600 text-center font-semibold">Add Your Trip</h3>
                </header>
                <div className="form w-3/5 mx-auto">
                    <form onSubmit={handleSubmit}>
                        <div className="form__group">
                            <label className="label__form" htmlFor="continent">Continent</label>
                            <select
                                name="continent"
                                className="w-full"
                                onChange={handleChange}
                                value={continent}
                                
                            >
                                <option value="select">--Select--</option>
                                <option value="Europe">Europe</option>
                                <option value="America">America</option>
                                <option value="Africa">Africa</option>
                                <option value="Asia">Asia</option>
                                <option value="Oceania">Oceania</option>
                            </select>
                        </div>
                        <div className="form__group">
                            <label className="label__form" htmlFor="country">Country</label>
                            <input
                                type="text"
                                name="country"
                                placeholder="Country Trip"
                                onChange={handleChange}
                                value={country}
                                
                            />
                        </div>
                        <div className="form__group">
                            <label className="label__form" htmlFor="city">City</label>
                            <input
                                type="text"
                                name="city"
                                placeholder="City Trip"
                                onChange={handleChange}
                                value={ city }
                                
                            />
                        </div>
                        <div className="form__group">
                            <label className="label__form" htmlFor="photo">Photo</label>
                            <input
                                type="url"
                                name="imgURL"
                                placeholder="URL of a destinity picture"
                                onChange={handleChange}
                                value={ imgURL }
                                
                            />
                        </div>

                        <button
                        className="bg-blue-700 text-white w-full rounded mx-auto mt-6"
                            type="submit"
                        >
                            Add Trip
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}
