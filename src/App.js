import './App.scss';
import "bootstrap";
import Landing from "./layout/Landing";
import Products from "./layout/Products"
import NewNav from "./layout/components/NewNav";
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
import About from "./layout/AboutPage";
import ScrollButton from "./layout/components/ScrollTop";
import Contact from "./layout/Contact";
import ReactMap from "./layout/components/single-products/ReactMapbox";
import StartingPoint from "./layout/components/StartingPoint";
import React, { Component } from 'react'

export default class App extends Component {
  state ={
    products: [
      {
        id: 1,
        title: "Title 1",
        description: "Description of the product 1",
        fact1: "First fact of product 1",
        fact2: "Second fact of product 1",
        fact3: "Third fact of product 1"
      },
      {
        id: 2,
        title: "Title 2"
      },
      {
        id: 3,
        title: "Title 3"
      },
      {
        id: 4,
        title: "Title 4"
      },
      {
        id: 5,
        title: "Title 5"
      },
      {
        id: 6,
        title: "Title 6"
      },
      {
        id: 7,
        title: "Title 7"
      },
      {
        id: 8,
        title: "Title 8"
      }
    ]
  }

  renderProducts = (routerProps) => {
    let productId = parseInt(routerProps.match.params.id)
    let foundProduct = this.state.products.find(productObj => productObj.id === productId)
    return (foundProduct ? <SingleProduct product={foundProduct}/> : <Products/>)
  }

  render() {
    return (
      <div className="App">
      <Router>
        <StartingPoint />
        <NewNav />
      <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/single-product" component={Products} />
          <Route exact path="/soon" component={ComingSoon} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/reactmap" component={ReactMap} />
          <Route path="/single-product/:id" render = {routerProps => this.renderProducts(routerProps)} />
      </Switch>
      <ScrollButton />
      <Footer />
      </Router>
    </div>
    )
  }
}
