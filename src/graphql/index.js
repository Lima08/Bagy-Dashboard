import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import STORES from '../assets/stores';
import { GET_STORE_INFO } from '../graphql/queries';

const storesOptions = Object.entries(STORES);

const httpLink = createHttpLink({
  uri: 'https://staging-dot-bagy-api.appspot.com/graphql',
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
  return new ApolloClient({
    link: authLink(storesOptions[store][1]).concat(httpLink),
    cache: new InMemoryCache(),
  });
}

export function getStoresInfos(store) {
  return client(store)
    .query({
      query: GET_STORE_INFO,
    })
    .then((res) => res);
}
