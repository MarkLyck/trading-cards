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
    if (user.username) {
      this.setState({user: model.toJSON(), cards: this.state.cards});
    }
    user.fetch({success:(model) => {
        this.setState({user: model.toJSON(), cards: this.state.cards});
      }
    })

    store.userCards.reset()
    user.get('cards').forEach(card => {
      store.userCards.add({_id: card})
    })

    store.userCards.on('update', () => {
      this.setState({user: this.state.user, cards: store.userCards.toJSON()});
    })
    store.userCards.fetch()


  },
  render: function() {
    let AllUserCards;
    if (this.state.user.cards) {
      AllUserCards = this.state.cards.map((card) => {
        console.log(card);
        return (
          <Link to={`/cards/${card}`} key={card}>
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
