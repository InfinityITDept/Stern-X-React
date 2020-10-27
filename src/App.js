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
import ComingSoon from "./layout/ComingSoon";


function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
      <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/single-product" component={SingleProduct} />
          <Route exact path="/soon" component={ComingSoon} />
      </Switch>
      <Footer />
      </Router>
    </div>
  );
}

export default App;