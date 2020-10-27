import React from 'react';
import './App.scss';
import "bootstrap";
import Landing from "./layout/Landing";
import Products from "./layout/Products"
import Nav from "./layout/components/Nav";
import Footer from "./layout/components/Footer";
import SingleProduct from './layout/SingleProduct';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
      <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/single-product" component={SingleProduct} />
      </Switch>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
