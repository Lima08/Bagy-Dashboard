import { gql } from '@apollo/client';

const GET_ME = gql`
  query {
    me {
      name
      id
    }
  }
`;

const GET_STORE_INFO = gql`
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

const queries = {
  GET_STORE_INFO,
  GET_ME,
};

export default queries;
