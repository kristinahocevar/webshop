import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Grid, Transition, Dimmer, Loader } from 'semantic-ui-react';
import PostCardHome from '../components/PostCardHome'
import { FETCH_ITEMS_QUERY } from '../util/graphql';

function Home() {
  //const { user } = useContext(AuthContext);
  const {loading, data: { getItems: items }} = useQuery(FETCH_ITEMS_QUERY);
  console.log(items)



  return (
    <div>
    <Grid columns={3}>
      <Grid.Row className="page-title">
        <h1>Web Shop</h1>
        

      </Grid.Row>
        {loading ? (
          <Dimmer active inverted>
            <Loader size='large' content='Loading' />
          </Dimmer>
        ) : (
          <Transition.Group>
            {items &&
              items.map((item) => (
                <Grid.Column key={item.id} style={{ marginBottom: "20px" }}>
                  <PostCardHome item={item} />
                </Grid.Column>
              ))}
          </Transition.Group>
        )}
    </Grid>
    </div>
  );
}

export default Home;
