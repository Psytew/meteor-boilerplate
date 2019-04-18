import { Meteor } from 'meteor/meteor'
import React from 'react'
import { Router, Route, Switch, Redirect, browserHistory } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'

import Signup from '../ui/Signup.js'
import Dashboard from '../ui/Dashboard.js'
import NotFound from '../ui/NotFound.js'
import Login from '../ui/Login.js'

const newHistory = createBrowserHistory();

window.newHistory = newHistory;

const unauthenticatedPages = ['/','/signup']
const authenticatedPages = ['/dashboard']
const onEnterPublicPage = (Component) => {
    if (Meteor.userId()) {
        return <Redirect to="/dashboard" />
    } else {
        return <Component />
    }
}
const onEnterPrivatePage = (Component) => {
    if (!Meteor.userId()) {
        return <Redirect to="/signup" />
    } else {
        return <Component />
    }
}

export const onAuthChange = (isAuthenticated) => {
    const pathName = window.newHistory.location.pathname
    const isUnauthenticatedPage = unauthenticatedPages.includes(pathName)
    const isAuthenticatedPage = authenticatedPages.includes(pathName)
    console.log('isAuthenticated',isAuthenticated)
    if (isAuthenticated && isUnauthenticatedPage){
        newHistory.push('/dashboard')
    }
    if (!isAuthenticated && isAuthenticatedPage){
        newHistory.push('/')
    }
}

export const routes = (
	<Router history={newHistory}>
		<Switch>
			<Route exact path="/" render={() => onEnterPublicPage(Login)} />
			<Route path="/signup" render={() => onEnterPublicPage(Signup)} />
			<Route path="/dashboard" render={() => onEnterPrivatePage(Dashboard)} />
			<Route path="*" component={NotFound} />
		</Switch>
	</Router>
)