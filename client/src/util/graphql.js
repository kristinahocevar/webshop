import gql from 'graphql-tag';

export const FETCH_ITEMS_QUERY = gql`
  {
    getItems {
      id
      title
      description
      price
      createdAt
    }
  }
`;
