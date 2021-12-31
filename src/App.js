import React from 'react';
import './style/app.css';
import ChartDashboard from './components/chartDashboard';

function App() {
  return (
    <>
      <div className='navbar'>
        <ul>
          <li>Visão Geral</li>
          <li>Lojas</li>
          <li>Vendas</li>
          <li>Clientes</li>
          <li>Produtos</li>
          <li>Planos e Metas</li>
          <li>Configurações</li>
          <li>Sair</li>
        </ul>
      </div>

      <ChartDashboard />
    </>
  );
}

export default App;
