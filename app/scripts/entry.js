import $ from 'jquery'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

import store from './store'

import Login from './views/loginView/loginView'
import Signup from './views/loginView/signup'
import CardsView from './views/cardsView/cardsView'
import NewCard from './views/newCardView/newCard'

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
    <Route path="/newcard" component={NewCard}/>
  </Router>
)

ReactDOM.render(CardRouter, document.getElementById('container'))
