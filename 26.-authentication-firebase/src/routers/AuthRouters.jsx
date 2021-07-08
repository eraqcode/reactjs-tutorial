import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { LoginScreen } from '../components/auth/LoginScreen'
import { REgisterScreen } from '../components/auth/REgisterScreen'

export const AuthRouters = () => {
    return (
       <Switch>
           <Route exact path="/auth/login" component={ LoginScreen } />
           <Route exact path="/auth/register" component={ REgisterScreen } />

           <Redirect to="/auth/login" />
       </Switch>
    )
}
