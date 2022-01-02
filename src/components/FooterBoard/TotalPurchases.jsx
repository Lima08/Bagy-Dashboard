import React from 'react';

export default function TotalPurchases() {
  return (
    <section className='footerboard-section'>
      <div className='footer-header'>
        <div>
          <h3>Tital de compras</h3>
          <p>Valor geral: 13.250,00</p>
        </div>

        <button>Semanal</button>
      </div>

      <div className='footer-body'>
        <ul>
          <li>
            <p>Estilo Pri </p>
            <p>250 compras </p>
            <p>R$ 4238.00 </p>
          </li>
          <li>
            <p>Estilo Pri2 </p>
            <p>20 compras </p>
            <p>R$ 428.00 </p>
          </li>
          <li>
            <p>Estilo </p>
            <p>25 compras </p>
            <p>R$ 38.00 </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
