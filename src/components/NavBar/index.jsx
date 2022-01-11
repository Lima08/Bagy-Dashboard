// eslint-disable-next-line no-unused-vars
import React from 'react';
import logo from '../../assets/images/bagylogo.png'

export default function NavBar() {
  return (
    <nav className='navbar'>
      <div className='logo-container'>
        <img src={logo} alt='logo bagy' className='logo'/>
      </div>

      <ul>
        <li className='navbar-option'>Visão Geral</li>
        <li className='navbar-option'>Lojas</li>
        <li className='navbar-option'>Vendas</li>
        <li className='navbar-option'>Clientes</li>
        <li className='navbar-option'>Produtos</li>
        <li className='navbar-option'>Planos e Metas</li>
        <li className='navbar-option'>Configurações</li>
        <li className='navbar-option'>Sair</li>
      </ul>
    </nav>
  );
}
