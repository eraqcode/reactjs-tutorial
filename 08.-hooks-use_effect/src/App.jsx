import React, { Fragment, useState, useEffect } from 'react';
import { Message } from './components/Message/Message';

function App() {

  const [usersData, setUsersData] = useState({
    name: '',
    email: '',
    password: ''
  })
  const { name, email, password } = usersData;
  useEffect( () => {
    console.log("Datos enviados")
  }, [email] )

  const handleInputChange = ({ target }) => {
    setUsersData({
      ...usersData,
      [ target.name ]: target.value
    })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setUsersData({
      name: '',
      email: '',
      password: ''
    })
  }



  return (
    <Fragment>
      <header>
        <h1 className="text-center text-2xl font-bold text-white">useEffect</h1>
      </header>
      <div className="formulario ml-16 w-1/4 p-3">
        <form onSubmit={ handleFormSubmit } className="mx-auto w-9/12">
          <div className="campo mb-4">
            <label className="text-white block" htmlFor="name">Name</label>
            <input
              className="ml-4"
              type="text"
              name="name"
              vale={ name }
              onChange= { handleInputChange }
            />
          </div>

          <div className="campo mb-4">
            <label className="text-white block" htmlFor="name">Email</label>
            <input
              className="ml-4"
              type="text"
              name="email"
              vale={ email }
              onChange= { handleInputChange }
            />
          </div>

          <div className="campo mb-4">
            <label className="text-white block" htmlFor="name">Password</label>
            <input
              className="ml-4"
              type="text"
              name="password"
              vale={ password }
              onChange= { handleInputChange }
            />
          </div>
          <button
            className="bg-blue-600 text-white text-lg p-2 w-32 block mx-auto rounded"
          >
            Save
          </button>
        </form>
      </div>
      {
        ( password === 'holamundo') ? <Message/> : null
      }
    </Fragment>
  );
}

export default App;
