import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from './redux/actions/productActions';
import Header from './components/Header';
import Banner from './components/Banner';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <Banner />
      <h2 className="section-title">Nuestros Productos</h2>
      {loading ? (
        <p>Cargando...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ProductList products={products} />
      )}
      <Footer />
    </div>
  );
};

export default App;
