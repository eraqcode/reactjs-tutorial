import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { HomePage } from '../components/pages/HomePage'
import { UsersPage } from '../components/pages/UsersPage'
import { AuthRouters } from './AuthRouters'
import { PrivateRouter } from './PrivateRouter'
import { PublicRouter } from './PublicRouter'
import { firebase } from '../firebase/firebase'
import { useDispatch } from 'react-redux'
import { LOGIN_ACTION } from '../actions/authActions'
export const AppRouters = () => {

    const dispatch = useDispatch()
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        firebase.auth().onAuthStateChanged( ( user ) => {
            if ( user?.uid ) {
                dispatch( LOGIN_ACTION( user.uid, user.displayName ) )
                setIsLoggedIn( true )
            }
            else {
                setIsLoggedIn( false )
            }
        } )
    }, [dispatch, setIsLoggedIn])
    return (
        <Router>
            <div>
                <Switch>
                    <PublicRouter 
                        path='/'
                        exact
                        component={ HomePage }
                        isAuthenticated={ isLoggedIn }
                    />
                    <PublicRouter
                        path='/auth' 
                        component={ AuthRouters }
                        isAuthenticated={ isLoggedIn }
                    />
                    <PrivateRouter 
                        path='/users'
                        component={ UsersPage }
                        isAuthenticated={ isLoggedIn }
                    />
                    
                </Switch>
            </div>
        </Router>
    )
}
