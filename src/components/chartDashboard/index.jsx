import React from 'react';
import query from '../../graphql';
import { useQuery } from '@apollo/client';

function ChartDashboard() {
  const { loading, error, data } = useQuery(query.queryTest3);

  if (loading) return <p>Loading ...</p>;

  if (error) {
    console.log('aqui error -->', error);
    return <h1>Error </h1>;
  }

  if (data) {
    console.log(data.getConsolidatedOrders);
    console.log(data.getConsolidatedOrders[0].products[0].productName);
    console.log(data.getConsolidatedOrders[0].products[0].firstPictureUrl);
    return (
      <>
        <h1>Frete</h1>
        {data.getConsolidatedOrders.map((product, index) => {
          return (
            <lu key={index}>
              <li>{product.products.productName}</li>
              <li><img alt='imagem' src={product.products.firstPictureUrl} /></li>
              {/* <li>{product.products.price}</li>
              <li>{product.products.selected}</li> */}
            </lu>
          );
        })}
      </>
    );
  }
}

export default ChartDashboard;
