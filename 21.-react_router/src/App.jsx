import React, { Fragment } from 'react';
import { useState } from 'react';
import { AppRouter } from './AppRouter';
import { UserContext } from './components/UserContext/UserContext';

function App() {

  const [user, setUser] = useState({});

  return (
    <Fragment>
      
      <UserContext.Provider value={ {
        user,
        setUser
      } }>
        <AppRouter />
      </UserContext.Provider>
      
    </Fragment>
  );
}

export default App;
