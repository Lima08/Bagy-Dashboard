import { gql } from '@apollo/client';

const queryTest = gql`
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
  queryTest,
};

export default queries;
