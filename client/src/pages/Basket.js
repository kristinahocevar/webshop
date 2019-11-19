import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import {Grid, Dimmer, Loader} from 'semantic-ui-react';
import PostCard from "../components/PostCard";



function Basket(props) {


  //const { user } = useContext(AuthContext);
  const {loading, data: { getBasket: items }} = useQuery(FETCH_BASKET_QUERY);

  function deleteItemCallback() {
    props.history.push('/');
  }


  return (
    <div>
    <Grid columns={3}>
      <Grid.Row className="page-title">
        <h1>Web Shop</h1>
        

      </Grid.Row >
        {loading ? (
          <Dimmer active inverted>
            <Loader size='large' content='Loading' />
          </Dimmer>
        ) : (
          <Grid.Row >
            {items &&
              items.map((item) => (
                <Grid.Column key={item.id} style={{ marginBottom: "20px" }}>
                  <PostCard item={item}   deleteItemCallback={deleteItemCallback} />
                </Grid.Column>
              ))}
          </Grid.Row>
        )}
    </Grid>
    </div>
  );
}



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



export default Basket;



