import { createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

export const httpLink = createHttpLink({
  uri: 'https://staging-dot-bagy-api.appspot.com/graphql',
});

export const authLink = (store) => {
  return setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        'x-auth-token': store,
      },
    };
  });
};
