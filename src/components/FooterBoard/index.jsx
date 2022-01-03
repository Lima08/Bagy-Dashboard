import React from 'react';
import ProductsBoard from './ProductsBoard';
import TotalPurchases from './TotalPurchases';

export default function FooterBoard() {
  return (
    <div className='footer-board'>
      <TotalPurchases />
      <ProductsBoard />
    </div>
  );
}
