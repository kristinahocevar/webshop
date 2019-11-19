const itemsResolvers = require('./items');
const usersResolvers = require('./users');
const ordersResolvers = require('./orders');
const basketResolvers = require('./basket');


//const promotionsResolvers = require('./promotions');

module.exports = {
  Query: {
    ...itemsResolvers.Query,
    ...basketResolvers.Query
  },
  Mutation: {
    ...usersResolvers.Mutation,
    ...itemsResolvers.Mutation,
    ...ordersResolvers.Mutation,
    ...basketResolvers.Mutation

  }
}