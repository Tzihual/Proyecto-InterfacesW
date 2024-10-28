import React from 'react';
import './css/Header.css';

const Header = () => (
  <header className="header">
    <h1>Tienda de Sudaderas</h1>
    <nav>
      <ul className="navList">
        <li>Inicio</li>
        <li>Productos</li>
        <li>Carrito</li>
      </ul>
    </nav>
  </header>
);

export default Header;
