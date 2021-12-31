import { gql } from '@apollo/client';

export const GET_ME = gql`
  query {
    me {
      name
      id
    }
  }
`;

export const GET_STORE_INFO = gql`
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
