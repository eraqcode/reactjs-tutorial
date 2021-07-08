import Axios from 'axios';
import React, { Fragment, useState, useEffect } from 'react';

import './App.css';
import { useForm } from './hooks/useForm/useForm';
//import { useCounter } from './hooks/useCounter/useCounter';

function App() {

  //const [ state, incremento, decremento ] = useCounter(1)
  //const [ values, handleInputChange, handleFormSubmit ] = useForm( {
  //    name: '',
  //    country: '',
  //    genre: ''
  //} ) 
  //const { name, country, genre } = values;
 

  const [users, setUsers] = useState({
    user: []
  })
  const { user } = users;
  const url = "https://jsonplaceholder.typicode.com/users";
  

  useEffect(() => {
    Axios({
      method: 'get',
      url: url,
      responseType: 'stream'
    })
      .then( response => {
        console.log( response.data )
        setUsers({
          user: response.data
        })
      } )
  }, [])

  return (
    <Fragment>
      <ul>
        {
          user.map( user => {
            return(
              <li key={ user.id }> { user.name } </li>
            )
          } )
        }
      </ul>
    </Fragment>
  );
}

export default App;
