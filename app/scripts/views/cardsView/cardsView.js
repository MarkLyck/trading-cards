import React from 'react'
import {Link} from 'react-router'

import store from '../../store'

import Header from '../headerView/header'
import Card from './components/card'

const CardsView = React.createClass({
  getInitialState: function() {
    return {cards:[]}
  },
  componentDidMount: function() {
    store.cards.on('update', () => {
      console.log('DO STUFF');
      this.setState({cards: store.cards.toJSON()})
    })
    store.cards.fetch({success:() => console.log('FETCHED CARDS')})
  },
  componentWillUnmount: function() {
    store.cards.off()
  },
  render: function() {
    let AllCards = store.cards.map((card) => {
      return (
        <Link to={`/cards/${card.get('_id')}`} key={card.get('_id')}>
          <Card className="card" cardname={card.get('cardname')}/>
        </Link>
      )
    })
    return (
      <div>
        <Header/>
        <h1>All Cards</h1>
        <ul id="cards-list">
          {AllCards}
          <Link to="/newcard"><li id="create-card">
            <h3>Create a card</h3>
          </li></Link>
        </ul>
      </div>
    )
  }
})

export default CardsView
