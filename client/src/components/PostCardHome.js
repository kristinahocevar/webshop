import React, { useContext } from 'react';
import { Card, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../context/auth';


function PostCardHome({
  item: { title, description, price, id }
}) {
  const { user } = useContext(AuthContext);

  return (
    <Card color="blue">
      <Card.Content fluid as={Link}  to={`/items/${id}`}>
        <Image
          floated="right"
          size="massive"
          src="https://react.semantic-ui.com/images//wireframe/white-image.png"
        />
        <Card.Meta >
        </Card.Meta>
        <Card.Description>{title}</Card.Description>
        <Card.Description>{description}</Card.Description>
        <Card.Description>{price} EUROS</Card.Description>
      </Card.Content>
    </Card>
  );
}

export default PostCardHome;
