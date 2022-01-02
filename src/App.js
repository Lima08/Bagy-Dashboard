import React from 'react';
import './style/app.css';
import Dashboard from './pages/dashboard';
import StoresContextProvider from './context/StoresContext';

function App() {
  return (
    <div className='app'>
      <nav className='navbar'>
        {/*  Componentizar */}
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
      </nav>

      <StoresContextProvider>
        <StoresContextProvider>
          <Dashboard />
        </StoresContextProvider>
      </StoresContextProvider>
    </div>
  );
}

export default App;
