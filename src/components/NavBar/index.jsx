import React from 'react';

export default function NavBar() {
  return (
    <nav className='navbar'>
      <div className='logo'>
        <h2>Dashboard Bagy</h2>
      </div>

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
  );
}
