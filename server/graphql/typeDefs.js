const { gql } = require('apollo-server');

module.exports = gql`
  type Item {
    id: ID!
    title: String,
    price: String,
    description: String,
    createdAt: String
  }
  type Basket {
    id: ID!
    title: String,
    price: String,
    count: String,
    description: String,
    createdAt: String,
  }

  type Order {
    id: ID!
    email: String!
    address: String!
    token: String!
    creditCard: String!
    basket:String!
    createdAt: String!
  }
  type User {
    id: ID!
    email: String!
    password: String!
    username: String
    token: String!
    createdAt: String!
  }
  input RegisterInput {
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
  }
  input OrderInput {
    address: String!
    creditCard: String!
    email: String!
  }
  type Query {
    getItems: [Item]
    getItem(itemId: ID!): Item
    getBasket:[Basket]
  }
  type Mutation {
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!
    removeItem(itemId: ID!): String!
    order(orderInput: OrderInput): Order!
  }
`;
