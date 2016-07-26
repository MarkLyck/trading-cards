import Backbone from 'backbone'

const Card = Backbone.Model.extend({
  urlRoot: `https://baas.kinvey.com/appdata/kid_H1bf3MH_/cards`,
  idAttribute: '_id',
  defaults: {
    name: ''
  },
})

export default Card
