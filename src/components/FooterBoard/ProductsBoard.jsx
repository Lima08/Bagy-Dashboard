import React from 'react';

export default function ProductsBoard() {
  return (
    <section className="footerboard-section">
      <table className="footerboard-table">
        <thead>
          <tr>
            <th>Produtos</th>
            <th>Lojas</th>
            <th>Preço</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Brinco</td>
            <td>Estilo Pri</td>
            <td className='table-price'>R$ 29.90</td>
            <td className='table-data'>17/07/20</td>
          </tr>
          <tr>
            <td>Sandalifffffffa</td>
            <td>Estilo Pri2</td>
            <td className='table-price'>R$ 29.90</td>
            <td className='table-data'>20/05/20</td>
          </tr>
          <tr>
            <td>Conjunto</td>
            <td>Estilo</td>
            <td className='table-price'>R$ 29.90</td>
            <td className='table-data'>11/02/20</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
