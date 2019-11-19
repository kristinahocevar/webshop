const { AuthenticationError, UserInputError } = require('apollo-server');

const Basket = require('../../models/Basket');



module.exports = {
  Query: {

  async getBasket() {
    try {
      const items = await Basket.find().sort({ createdAt: -1 });
      return items;
    } catch (err) {
      throw new Error(err);
    }
  }
},


  Mutation: {
     async removeItem(_, { itemId }) {
      //const user = checkAuth(context);

      try {
        const item = await Basket.findById(itemId);
        if (item) {
          await item.delete();
          return 'Item removed from basket';
        } else {
          throw new AuthenticationError('Action not allowed');
        }
      } catch (err) {
        throw new Error(err);
      }
    }
   }
  

  };


