import React, { useContext } from 'react';
import {  Card, Image } from 'semantic-ui-react';

import { AuthContext } from '../context/auth';
import DeleteButton from './DeleteButton';

function PostCard({
  item: { title, description, price, id }
}) {
  const { user } = useContext(AuthContext);
  console.log(id)

  return (
    <Card color="blue">
      <Card.Content fluid >
        <Image
          floated="right"
          size="massive"
          src="https://react.semantic-ui.com/images//wireframe/white-image.png"
        />
        <Card.Description>{title}</Card.Description>
        <Card.Description>{description}</Card.Description>
        <Card.Description>{price}EUROS</Card.Description>
        <DeleteButton  itemId={id} />
      </Card.Content>
    </Card>
  ); 
}

export default PostCard;
