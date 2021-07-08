import React from 'react'
import { useDispatch } from 'react-redux'
import { LOGOUT_USER_APP } from '../../actions/authActions'
import { firebase } from '../../firebase/firebase'

export const UsersPage = () => {

    const dispatch = useDispatch()

    const user = firebase.auth().currentUser 
    
    const handleLogoutApp = () => {
        dispatch( LOGOUT_USER_APP() )
    }

    return (
        <main className="main__users" >
           <h1> Profile </h1>
           <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fk08.kn3.net%2F19B804182.jpg&f=1&nofb=1" alt=""/>
           <h3> { user.displayName } </h3> 
           <h4> { user.email } </h4>
           <br/>
           <hr/>
           <button
                onClick={ handleLogoutApp }
                className="btn"
           >
               Log Out
           </button>
        </main>
    )
}
