const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { UserInputError } = require('apollo-server');

const {validateOrderInput} = require('../../util/validators');
const { SECRET_KEY } = require('../../config');
const Order = require('../../models/Order');



function generateToken(user) {
    return jwt.sign(
      {
        id: user.id,
        email: user.email,
        username: user.username
      },
      SECRET_KEY,
      { expiresIn: '1h' }
    );
  }
  

module.exports = {
  Mutation: {
   
    async order(
      _,
      {
        orderInput: { email, address, creditCard, basket  }
      }
    ) {
      // Validate user data
      const { valid, errors } = validateOrderInput(email, address, creditCard);
      if (!valid) {
        throw new UserInputError('Errors', { errors });
      }
      
      // hash password and create an auth token
      creditCard = await bcrypt.hash(creditCard, 12);

      const newOrder = new Order({email, address, creditCard, createdAt: new Date().toISOString(), basket });

      const res = await newOrder.save();

      const token = generateToken(res);

      return {
        ...res._doc,
        id: res._id,
        token
      };
    }
  }
};