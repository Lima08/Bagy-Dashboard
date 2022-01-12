import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { GET_STORE_INFO } from '../graphql/queries';

const httpLink = createHttpLink({
  uri: 'https://staging-dot-bagy-api.appspot.com/graphql',
  credentials: false,
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      'X-Auth-Token':
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdG9yZUlkIjoiMTAzIiwicm9sZSI6MX0.A9U6DQ_clavUnbiriUMjV1Lk7CTXL_uHBPi0NCL5-4c',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export async function getStoresInfos() {
  return client
    .query({ query: GET_STORE_INFO })
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((error) => console.log('--->', error));
}
