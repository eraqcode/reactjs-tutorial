import React from 'react'
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Login } from './pages/Login'
import { NavBar } from './components/NavBar/NavBar'
export const AppRouter = () => {
    return (
        <Router>
            <NavBar/>
            
            <div className="container">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />   
                    <Route exact path='/login' component={Login} />

                    <Redirect to="/"/>
                </Switch>
            </div>
                
           

        </Router>
    )
}
