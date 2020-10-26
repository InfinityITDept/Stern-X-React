import React from 'react';
import './App.scss';
import "bootstrap";
import Landing from "./layout/Landing";
import Products from "./layout/Products"
import Nav from "./layout/components/Nav";
import Footer from "./layout/components/Footer";
import SingleProduct from './layout/SingleProduct';

function App() {
  return (
    <div className="App">
      <Nav />
      <SingleProduct />
      <Footer />
    </div>
  );
}

export default App;
