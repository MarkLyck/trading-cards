import Backbone from 'backbone'

import store from '../store'

const User = Backbone.Model.extend({
  urlRoot: `https://baas.kinvey.com/user/kid_H1bf3MH_/`,
  idAttribute: '_id',
  defaults: {
    username: '',
    cards: []
  },
  parse: function(response) {
    if (response) {
      return {
        authtoken: response._kmd.authtoken,
        username: response.username,
        cards: response.cards,
        userId: response._id
      }
    }
  },
})

export default User
