// eslint-disable-next-line no-unused-vars
import React from 'react';
import fotoUser from '../../assets/images/foto_user.png';
import { useStoresContext } from '../../context/StoresContext';
import '../../style/header.css';

export default function Header() {
  const { headerPage } = useStoresContext();
  return (
    <div className='header'>
      <h2>{headerPage}</h2>
      <div className='user'>
        <p className='user-name'>João Lima</p>
        <div className='user-img-container'>
          <img src={fotoUser} alt='Foto perfil' className='user-img' />
        </div>
      </div>
    </div>
  );
}
