// import query from '../../graphql';
// import { useQuery } from '@apollo/client';
// import { ApolloProvider } from '@apollo/client';
// import { client } from './graphql/graphqlClient';

// const { loading, error, data } = useQuery(query.queryTest3);

//   <ApolloProvider client={client}>
//   <ChartDashboard />
// </ApolloProvider>
// import query from '../../graphql';
// import { useQuery } from '@apollo/client';

import React from 'react';
import ChartDashboard from '../../components/ChartDashboard'
// import { useStoresContext } from '../../context/StoresContext';


function Dashboard() {
  // const { store, setSelectdStore } = useStoresContext()

  return (
    <main className='dashboard'>
      <div className='header'>
        <h1>Header</h1>
      </div>
      <div className='panel'>
        <h1>Panel</h1>
      </div>

      <ChartDashboard />
      <div className='section'>
        <h1>section</h1>
      </div>
    </main>
  );
}

export default Dashboard;
