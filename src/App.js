import React, { useEffect } from 'react';
import ChartDashboard from './components/chartDashboard';
import { client } from './config/client-graphql';
import { gql } from '@apollo/client';

function App() {
  function initial() {
    client
      .query({
        query: gql`
          {
            me {
              name
              id
            }
          }
        `,
        variables: { myVariable: 'someValue' },
      })
      .then((res) => console.log('A resposta é --->', res.data.me));
  }

  useEffect(() => {
    initial();
  }, []);

  return (
    <div className='App'>
      <ChartDashboard />
    </div>
  );
}

export default App;
