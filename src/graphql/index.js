import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  gql,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import STORES from '../assets/stores';

const storesOptions = Object.entries(STORES);

const GET_ME = gql`
  query {
    getConsolidatedOrders {
      consolidatedOrderId
      price
      createdAt
      products {
        productName
        productCode
        unitPrice
        quantity
      }
    }
  }
`;

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
      query: GET_ME,
    })
    .then((res) => res);
}
