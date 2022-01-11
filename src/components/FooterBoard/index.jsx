// eslint-disable-next-line no-unused-vars
import React from 'react';
import ProductsBoard from './ProductsBoard';
import TotalPurchases from './TotalPurchases';
import './footerBoard.css';

export default function FooterBoard() {
  return (
    <div className='footer-board'>
      <TotalPurchases />
      <ProductsBoard />
    </div>
  );
}
