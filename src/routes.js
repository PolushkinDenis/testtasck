import React from 'react'
import { Redirect, Route, Switch, useRouteMatch } from 'react-router'
import Login from './components/login/Login'
import Profile from './components/profile/Profile'

export const useRoutes = (login) => {
    return(
        <Switch>
            <Route path="/" exact>
                <Login />
            </Route>
            <Route path="/profile" exact>
                <Profile login={login}/>
            </Route>
            <Redirect to="/"></Redirect>
        </Switch>
    )
}