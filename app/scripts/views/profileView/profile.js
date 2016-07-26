import React from 'react';
import { Link } from 'react-router'
import Backbone from 'backbone'

import store from '../../store'

import Header from '../headerView/header'
import UserCard from './components/userCard'

const Profile = React.createClass({
  getInitialState: function() {
    return {user:{}, cards: []}
  },
  componentDidMount: function() {
    if (!store.users.get(this.props.routeParams.id)) {
      store.users.add({_id: this.props.routeParams.id})
    }
    let user = store.users.get(this.props.routeParams.id);

    store.userCards.on('update', () => {
      this.setState({cards: store.userCards.toJSON()});
    })

    user.on('change', (model) => {
      this.setState({user: model.toJSON()});

      store.userCards.reset()
      model.get('cards').forEach(cardName => {
        store.userCards.add({_id: cardName})
      })

      let query = model.get('cards')
      query = JSON.stringify(query.map(name => {
        return {cardname:name}
      }))

      store.userCards.fetch({
        url:`https://baas.kinvey.com/appdata/kid_H1bf3MH_/cards?query={"$or":${query}}`,
      })

    })
    user.fetch()
  },
  render: function() {
    let AllUserCards;
    if (this.state.user.cards) {
      AllUserCards = this.state.cards.map((card, i) => {
        return (
          <Link to={`/cards/${card._id}`} key={i}>
            <UserCard className="card" cardname={card.cardname}/>
          </Link>
        )
      });
    }

    return (
      <div>
        <Header/>
        <h2>{this.state.user.username}</h2>
        <ul id="cards-list">
          {AllUserCards}
          <Link to="/newcard"><li id="create-card">
            <h3>Create a card</h3>
          </li></Link>
        </ul>
      </div>
    );
  }
})

export default Profile;
