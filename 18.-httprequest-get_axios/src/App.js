import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [users, setUsers] = useState({
    user: []
  })
  const { user } = users;
  const url = "https://jsonplaceholder.typicode.com/users";
  

  useEffect(() => {
    axios.get( url )
      .then( response => {
        console.log( response )
        setUsers({
          user: response.data
        })
      } )
  }, [])

  return (
    <div className="App">
      <header>
        <h1>HTTPREQUEST GET AXIOS</h1>
      </header>

      <ul>
        {
          user.map( userData => {
            return(
              <li key={ userData.id }>  { userData.name } </li>
            )  
          } )
        }
      </ul>
    </div>
  );
}

export default App;
