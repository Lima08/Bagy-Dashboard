import React from 'react';
import ChartDashboard from './components/chartDashboard';
import { client } from './config/graphqlClient';
import { ApolloProvider } from '@apollo/client';

function App() {
  return (
    <ApolloProvider client={client}>
      <ChartDashboard />
    </ApolloProvider>
  );
}

export default App;
