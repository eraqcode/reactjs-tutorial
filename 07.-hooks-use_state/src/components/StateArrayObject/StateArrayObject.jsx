import React, { Fragment, useState } from 'react'

export const StateArrayObject = () => {

   const [countries, setCountries] = useState( [ 
        {id: 1, country: 'Germany', capital: 'Berlin'},
        {id:2, country: 'Ecuador', capital: 'Quito'},
        {id:3, country: 'Argentina', capital: 'Buenos Aires'}
   ] )


   const clickHandle = () => {
       setCountries([
           ...countries,
           {id: 4, country: 'Canada', capital: 'Ottawa'}
       ])
   }

    return (
        <Fragment>
            <header>
                <h2>State With Array And Object</h2>
            </header>
            <hr/>
            <ul>
                {
                    countries.map( country => {
                        return(<p> { country.country } - { country.capital } </p>)
                    } )
                }
            </ul>
            <button
                onClick={ clickHandle }
            >
                Add Country
            </button>
        </Fragment>
    )
}
