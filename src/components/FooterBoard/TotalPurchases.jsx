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

      <table className='footer-body'>
          <tbody>
            <tr>
              <td>Estilo Pri </td>
              <td>250 compras </td>
              <td>R$ 4238.00 </td>
            </tr>
            <tr>
              <td>Estilo Pri2 </td>
              <td>20 compras </td>
              <td>R$ 428.00 </td>
            </tr>
            <tr>
              <td>Estilo </td>
              <td>25 compras </td>
              <td>R$ 38.00 </td>
            </tr>
          </tbody>
      </table>
    </section>
  );
}
