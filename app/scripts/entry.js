import $ from 'jquery'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

import store from './store'

import Login from './views/loginView/loginView'
import Signup from './views/loginView/signup'
import CardsView from './views/cardsView/cardsView'

// <Link to="/login">Login</link>
// <Link to="/">Home</link>

$(document).ajaxSend(function(e, xhrAjax, jqueryAjax) {
  if (localStorage.authtoken) {
    xhrAjax.setRequestHeader('Authorization', `Kinvey ${localStorage.authtoken}`)
  } else {
    xhrAjax.setRequestHeader('Authorization', `Basic ${store.settings.basicAuth}`)
  }
})

if (localStorage.authtoken) {
  store.session.retrieve()
}

const CardRouter = (
  <Router history={hashHistory}>
    <Route path="/" component={CardsView}/>
    <Route path="/login" component={Login}/>
    <Route path="/signup" component={Signup}/>
  </Router>
)

ReactDOM.render(CardRouter, document.getElementById('container'))
