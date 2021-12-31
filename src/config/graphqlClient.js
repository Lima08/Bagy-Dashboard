import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: process.env.GARPHQL_URI,
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

export const client = (store) => {
  return new ApolloClient({
    link: authLink(store).concat(httpLink),
    cache: new InMemoryCache(),
  });
};
