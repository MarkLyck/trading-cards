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
    // store.cards.add({
    //   _id: '1',
    //   imageURL: 'imageURL',
    //   cardname: 'testy',
    //   hp: 20,
    //   height: 20,
    //   weight: 130,
    //   attack: 10
    // })
    // store.cards.add({
    //   _id: '2',
    //   imageURL: 'imageURL',
    //   cardname: 'something',
    //   hp: 20,
    //   height: 20,
    //   weight: 130,
    //   attack: 10
    // })
    // store.cards.add({
    //   _id: '3',
    //   imageURL: 'imageURL',
    //   cardname: 'different',
    //   hp: 20,
    //   height: 20,
    //   weight: 130,
    //   attack: 10
    // })

    let AllCards = store.cards.map((card) => {
      return (
        <Link to={`/cards/${card.get('_id')}`} key={card.get('_id')}>
          <Card className="card" cardname={card.get('cardname')}/>
        </Link>
      )
      // return (
      //   <Card className="card"
      //     key={card.get('_id')}
      //     cardname={card.get('cardname')}
      //     hp={card.get('hp')}
      //     height={card.get('height')}
      //     weight={card.get('weight')}
      //     attack={card.get('attack')}
      //     />
      // )
    })
    return (
      <div>
        <Header/>
        <h1>Your Cards</h1>
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
