import React, { useContext } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { Button, Card, Grid, Image, Icon } from 'semantic-ui-react';

import { AuthContext } from '../context/auth';

function SingleItem(props) {
  const itemId = props.match.params.itemId;
  console.log(itemId);

  const {data: { getItem }} = useQuery(FETCH_ITEM_QUERY, {
    variables: {
      itemId
    }
  });


  let itemMarkup;
  if (!getItem) {
    itemMarkup = <p>Loading post..</p>;
  } else {
    const {
      id,
      title,
      description,
      price, 

    } = getItem;

    itemMarkup = (
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
          </Grid.Column>
          <Grid.Column width={6}>

            <Card fluid>
              <Card.Content>

              <Image src="https://react.semantic-ui.com/images//wireframe/white-image.png" size="medium"/>
              <Card.Description>{title}</Card.Description>
              <Button icon><Icon name='shop' size="big" /></Button>
              </Card.Content>
              <hr />

              <Card.Content extra>
               {description}
              </Card.Content>
              <Card.Content extra>
               {price} EUROS
              </Card.Content>


            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
  return itemMarkup;
}

const FETCH_ITEM_QUERY = gql`
  query($itemId: ID!) {
    getItem(itemId: $itemId) {
      id
      title
      description
      price
    }
  }
`;

export default SingleItem;












