import React from 'react'
import {Link} from 'react-router'

import Header from '../headerView/header'
import Card from './components/card'

const CardsView = React.createClass({
  render: function() {
    return (
      <div>
        <Header/>
        <h1>Your Cards</h1>
        <ul id="your-cards-list">
          <Card name="test"/>
          <Card name="test2"/>
          <Card name="test3"/>
          <Link to="/newcard"><li id="create-card">
            <h3>Create a card</h3>
          </li></Link>
        </ul>
      </div>
    )
  }
})

export default CardsView
