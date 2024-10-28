// src/components/ProductList.js
import React from 'react';
import ProductCard from './ProductCard';
import './css/ProductList.css';
import sudaderBasica from '../img/sudaderaBasica.png';
import sudaderBolsas from '../img/sudaderaBolsas.png';
import sudaderaCapucha from '../img/sudaderaCapucha.png';
import sudaderaCasual from '../img/sudaderaCasual.png';
import sudaderaDeportiva from '../img/sudaderaDeportiva.png';
import sudaderaEstampada from '../img/sudaderaEstampada.png';
import sudaderaRayas from '../img/sudaderaRayas.png';
import sudaderaVintage from '../img/sudaderaVintage.png';
import sudaderOversize from '../img/sudaderOversize.png';


const products = [
  { id: 1, name: 'Sudadera Básica', price: 25, image: sudaderBasica },
  { id: 2, name: 'Sudadera Oversize', price: 30, image: sudaderBolsas },
  { id: 3, name: 'Sudadera con Capucha', price: 35, image: sudaderaCapucha },
  { id: 4, name: 'Sudadera Estampada', price: 28, image: sudaderaCasual },
  { id: 5, name: 'Sudadera Vintage', price: 40, image: sudaderaDeportiva },
  { id: 6, name: 'Sudadera Deportiva', price: 29, image: sudaderaEstampada },
  { id: 7, name: 'Sudadera a Rayas', price: 33, image: sudaderaRayas },
  { id: 8, name: 'Sudadera con Bolsillo', price: 32, image: sudaderaVintage },
  { id: 9, name: 'Sudadera Casual', price: 27, image: sudaderOversize },
];

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
