// eslint-disable-next-line no-unused-vars
import React from 'react';
import logo from '../../assets/images/bagylogo.png';
import '../../style/navBar.css';
import PieChartIcon from '@material-ui/icons/PieChart';
import StorefrontIcon from '@material-ui/icons/Storefront';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import PeopleOutlinedIcon from '@material-ui/icons/PeopleOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export default function NavBar() {
  return (
    <nav className='navbar'>
      <div className='logo-container'>
        <img src={logo} alt='logo bagy' className='logo'/>
      </div>
     

      <ul>
        <li className='navbar-option'>{ <PieChartIcon /> } Visão Geral</li>
        <li className='navbar-option'>{ <StorefrontIcon /> } Lojas</li>
        <li className='navbar-option'> { <EmojiObjectsOutlinedIcon /> } Vendas</li>
        <li className='navbar-option'> { <PeopleOutlinedIcon /> } Clientes</li>
        <li className='navbar-option'> { <PersonOutlineOutlinedIcon /> } Produtos</li>
        <li className='navbar-option'> { <ListAltOutlinedIcon /> } Planos e Metas</li>
        <li className='navbar-option'> { <SettingsOutlinedIcon /> } Configurações</li>
        <li className='navbar-option'>  { <ExitToAppIcon /> } Sair</li>
      </ul>
    </nav>
  );
}
