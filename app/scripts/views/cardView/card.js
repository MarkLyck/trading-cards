import React from 'react'
import _ from 'underscore'
import Backbone from 'backbone'

import store from '../../store'

const Card = React.createClass({
  getInitialState: function() {
    return {card:{}}
  },
  componentDidMount: function() {
    if (!store.cards.get(this.props.routeParams.cardid)) {
      store.cards.add({_id: this.props.routeParams.cardid})
    }
    let card = store.cards.get(this.props.routeParams.cardid);
    if (card.cardname) {
      this.setState({card: model.toJSON()});
    }
    card.fetch({success:(model) => {
        this.setState({card: model.toJSON()});
      }
    })
  },
  addCard: function() {
    let sessionCards = store.session.get('cards')
    sessionCards.push(this.state.card.cardname)
    // sessionCards.push(this.props.routeParams.cardid)
    sessionCards = _.uniq(sessionCards)
    store.session.set('cards', sessionCards)
    store.session.updateUser()
  },
  render: function() {
    if (this.state.card.cardname) {
      console.log('FOUND CARD');
      return (
        <div>
          <h3>{this.state.card.cardname}</h3>
          <p>HP: {this.state.card.hp}</p>
          <p>Height: {this.state.card.height}</p>
          <p>Weight: {this.state.card.weigh}</p>
          <p>Attack: {this.state.card.attack}</p>
          <button onClick={this.addCard}>Add to collection</button>
        </div>
      )
    } else {
      console.log('DONT HAVE CARD YET');
      return null
    }
  }
})

export default Card
