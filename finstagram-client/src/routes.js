import React from 'react'
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom'

import Login from './containers/Login'
import Signup from './containers/Signup'
import PostList from './containers/PostList'
import About from './components/about'
import Contact from './components/contact'

export default (
  <BrowserRouter>
    <Switch id='routes'>
      <Route exact path='/' render={ () =>  loggedIn() ? <PostList/> : <Redirect to="/login"/> }/>
      <Route path='/signup' component={ () => loggedIn() ? <Redirect to="/"/> : <Signup/> }/>
      <Route path='/login' component={ () => loggedIn() ? <Redirect to="/"/> : <Login/> }/>
      <Route path='/about' component={ () => loggedIn() ? <About/> : <Login/> }/>
      <Route path='/contact' component={ () => loggedIn() ? <Contact/> : <Login/> }/>
      <Route path='/logout' component={ () => logout() }/>
    </Switch>
  </BrowserRouter>
)

const loggedIn = () => !!sessionStorage['jwt']

const logout = () => {
  if(sessionStorage['jwt']) sessionStorage.removeItem('jwt')

  return <Redirect to="/login"/>
}
