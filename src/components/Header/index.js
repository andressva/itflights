import React, { useContext } from 'react';
import { AppContext } from '../../context';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import logo from '../../assets/logo.svg';
import './styles.scss'

export const Header = () => {
  const { showMenu, toggleMenu } = useContext(AppContext);

  return <div className='header'>
      <img width="150" src={logo} alt="It Flights" />
      <div onClick={toggleMenu} className='header-menu-icon'>
        {!showMenu ? <MenuOutlined /> : <CloseOutlined /> }
      </div>
  </div>;
};
