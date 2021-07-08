import { useAuth0 } from '@auth0/auth0-react'

import { Login } from './components/auth/Login'
import { Logout } from './components/auth/Logout'
import { Profile } from './components/ui/Profile'

function App() {

  const { isAuthenticated } = useAuth0();

  return (
    <div className="container">
      <div className="button">
        {
          !isAuthenticated
          ?
            ( <Login /> )
          :
            ( <Logout /> )  
        }
      </div>
     

      <Profile />
    </div>                                                                                                                                                                                                                                                                                     
  );
}

export default App;
