const { AuthenticationError, UserInputError } = require('apollo-server');

const Item = require('../../models/Item');
const checkAuth = require('../../util/check-auth');

module.exports = {
  Query: {
    async getItems() {
      try {
        const items = await Item.find().sort({ createdAt: -1 });
        return items;
      } catch (err) {
        throw new Error(err);
      }
    },

    async getItem(_, { itemId }) {
      try {
        const item = await Item.findById(itemId);
        if (item) {
          return item;
        } else {
          throw new Error('Item not found');
        }
      } catch (err) {
        throw new Error(err);
      }
    }
  
  }};

  







  

