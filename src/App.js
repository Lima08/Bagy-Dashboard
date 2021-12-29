import React, { useEffect } from 'react';
import ChartDashboard from './components/chartDashboard';
import { client } from './config/client-graphql';
import { ApolloProvider, gql } from '@apollo/client';

function App() {
  function initial() {
    client
      .query({
        query: gql`
          query ($storeCustomerId: Int, $first: Int, $offset: Int) {
            getConsolidatedOrders(
              storeCustomerId: $storeCustomerId
              first: $first
              offset: $offset
            ) {
              consolidatedOrderId
              createdAt
              updatedAt
              deletedAt
              expirationDate
              price
            }
          }
          `,
          // variables: { storeCustomerId: 106, fist: 1, offset: 10 },
      })
      .then((res) => console.log('A resposta é --->', res.data));
  }

  useEffect(() => {
    initial();
  }, []);

  return (
    <ApolloProvider client={client}>
      <ChartDashboard />
    </ApolloProvider>
  );
}

export default App;
