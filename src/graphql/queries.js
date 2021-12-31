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
      paymentMethod
      products {
        productName
        productCode
        firstPictureUrl
        unitPrice
        quantity
      }
    }
  }
`;
