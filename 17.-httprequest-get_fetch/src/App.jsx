import React, { Fragment, useState, useEffect } from 'react';


function App() {

const [users, setUsers] = useState({
  user:[]
})  
const url = "https://jsonplaceholder.typicode.com/users"
const { user } = users;

useEffect(() => {
  fetch( url )
    .then( response => response.json() )
    .then( data => {
      console.log( `Data: `, data );
      setUsers({
        user: data
      })
    } )
}, [])


  return (
    <Fragment>
      <header>
        <h1 className="text-white font-bold text-3xl text-center">HTTPREQUEST GET FETCH</h1>
      </header>  

      <h3 className="ml-4 text-orange-300 font-semibold">Datos</h3>

      <ul> 
        {
          user.map( user => {
            return(
              <li 
                key={ user.id }
                className="ml-8 text-white text-lg"
              >
                 { user.name } - { user.address.city }
              </li>
            )  
          } )
        }
      </ul>    
    </Fragment>
  );
}

export default App;
