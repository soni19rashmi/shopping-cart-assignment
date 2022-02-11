import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/Home/Home.component';
import ProductsPage from './pages/Products/Products.component';
import LoginPage from './pages/LoginPage/LoginPage.component';
import SignupPage from './pages/SignupPage/SignupPage.component';
import Footer from './components/Footer/Footer.component';
import Header from './components/Header/Header.component';

import CartState from './context/CartState';

import './App.scss';

function App() {
  return (
    <div className='App'>
      <CartState>
        <Header />
        <Routes >
          <Route path='/login' element={<LoginPage />}/>
          <Route path='/signup' element={<SignupPage />}/>
          <Route path='/products/:category' element={<ProductsPage />} />
          <Route path='/products' element={<ProductsPage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/' element={<HomePage />} />
        </Routes >
        <Footer />
      </CartState>
    </div>
  );
}

export default App;
