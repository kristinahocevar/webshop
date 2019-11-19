import React, { useState } from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { Button, Confirm, Icon } from 'semantic-ui-react';

import MyPopup from '../util/MyPopup';

function DeleteButton({ itemId, callback }) {
  const [confirmOpen, setConfirmOpen] = useState(false);


  const [deleteItemOrMutation] = useMutation(DELETE_ITEM_MUTATION, {
    update(proxy) {
      setConfirmOpen(false);
      if (itemId) {
        const data = proxy.readQuery({
          query: FETCH_BASKET_QUERY
        });
        data.getBasket = data.getBasket.filter((p) => p.id !== itemId);
        proxy.writeQuery({ query: FETCH_BASKET_QUERY, data });
      }
      if (callback) callback();
    },
    variables: {
      itemId,
    }
  });

  return (
    <>
      <MyPopup content={itemId ? 'Remove item': ''}>
        <Button
          as="div"
          color="red"
          floated="right"
          onClick={() => setConfirmOpen(true)}
        >
          <Icon name="trash" style={{ margin: 0 }} />
        </Button>
      </MyPopup>
      <Confirm
        open={confirmOpen}
        onCancel={() => setConfirmOpen(false)}
        onConfirm={deleteItemOrMutation}
      />
    </>
  );
}

const DELETE_ITEM_MUTATION = gql`
  mutation removeItem($itemId: ID!) {
    removeItem(itemId: $itemId)
  }
`;

const FETCH_BASKET_QUERY = gql`
  {
    getBasket {
      id
      title
      description
      price
    }
  }
`;




export default DeleteButton;
