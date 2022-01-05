import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { GET_STORE_INFO } from '../graphql/queries';


const httpLink = createHttpLink({
  uri: 'https://staging-dot-bagy-api.appspot.com/graphql',
  fetchOptions: {
    mode: 'no-cors',
  },
});

const authLink = (store) => {
  return setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        'x-auth-token': store,
      },
    };
  });
};

function client(store) {
  console.log('client', store[1])

  return new ApolloClient({
    link: authLink([store][1]).concat(httpLink),
    cache: new InMemoryCache(),
  });
}

export async function getStoresInfos(store) {
  console.log('getStoresInfos', store)
  return client(store)
    .query({
      query: GET_STORE_INFO,
    })
    .then((res) => res);
}
