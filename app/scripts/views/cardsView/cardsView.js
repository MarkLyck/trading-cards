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
      console.log(card.get('imageURL'));
      return (
        <Link className="card" to={`/cards/${card.get('_id')}`} key={card.get('_id')} style={{backgroundImage: `url(${card.get('imageURL')}`}}>
          <Card cardname={card.get('cardname')} url={card.get('imageURL')}/>
        </Link>
      )
      // return (
      //   <Card cardname={card.get('cardname')} url={card.get('imageURL')} key={card.get('_id')}>
      //     <Link to={`/cards/${card.get('_id')}`} />
      //   </Card>
      // )
    })
    return (
      <div>
        <Header/>
        <h1 id="main-title">All Cards</h1>
        <ul id="cards-list">
          {AllCards}
          <Link className="card" to="/newcard"><li id="create-card">
            <h3>Create a card</h3>
          </li></Link>
        </ul>
      </div>
    )
  }
})

export default CardsView
