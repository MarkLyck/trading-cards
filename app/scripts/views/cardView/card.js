import React from 'react'
import Backbone from 'backbone'

import store from '../../store'

const Card = React.createClass({
  getInitialState: function() {
    return {card:{}}
  },
  componentDidMount: function() {
    if (!store.cards.get(this.props.routeParams.cardid)) {
      store.cards.add({_id: this.props.routeParams.cardid})
      // console.log(store.cards);
    }
    let card = store.cards.get(this.props.routeParams.cardid);
    // console.log(card);
    // this.setState({card: store.cards.get(this.props.routeParams.cardid)});
    // this.setState({card: card});
    // console.log('CARD: ', this.state.card);
    card.fetch({
      success:(model) => {
        console.log('FETCHED CARD')
        this.setState({card: model.toJSON()});
      }
    })
  },
  render: function() {
    // console.log(this.state.card);
    if (this.state.card) {
      console.log('FOUND CARD');
      return (
        <div>
          <h3>{this.state.card.cardname}</h3>
          <p>HP: {this.state.card.hp}</p>
          <p>Height: {this.state.card.height}</p>
          <p>Weight: {this.state.card.weigh}</p>
          <p>Attack: {this.state.card.attack}</p>
        </div>
      )
    } else {
      console.log('DONT HAVE CARD YET');
      return null
    }

  }
})

export default Card
