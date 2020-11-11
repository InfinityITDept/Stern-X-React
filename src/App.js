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
        title: "Hand Sanitizer 2.5oz",
        description: "Our hand sanitizers are soothing & moisturizing gel/liquid solutions created to help reduce bacteria that can potentially cause disease when soap and water are not available. It is proven to kill 99.9% of most germs with no damage on skin, making it perfect for frequent use. Stern-X hand sanitizers are ideal for use in office settings, classrooms and or outdoor settings.",
        fact1: "Soothing and Moisturizing Gel.",
        fact2: "Kills 99.99 percent of most common germs that may cause illness.",
        fact3: "Refreshing scent.",
        ingredient1: "Isopropyl Alcohol 75% (Active ingredient)",
        ingredient2: "USP with Deionized Water",
        ingredient3: "Glycerin",
        ingredient4:"Hydrogen Peroxide",
        use1: "Hand Sanitizer to help reduce bacteria on the skin if soap and water are not available.",
        use2: "Place enough product on hands to cover all surfaces. Rub hands together until dry.",
        use3: "For external use only. Keep out of eyes ears, and mouth."
      },
      {
        id: 2,
        title: "Hand Sanitizer 4oz",
        description: "Our hand sanitizers are soothing & moisturizing gel/liquid solutions created to help reduce bacteria that can potentially cause disease when soap and water are not available. It is proven to kill 99.9% of most germs with no damage on skin, making it perfect for frequent use. Stern-X hand sanitizers are ideal for use in office settings, classrooms and or outdoor settings.",
        fact1: "Soothing and Moisturizing Gel.",
        fact2: "Kills 99.99 percent of most common germs that may cause illness.",
        fact3: "Refreshing scent.",
        ingredient1: "Isopropyl Alcohol 75% (Active ingredient)",
        ingredient2: "USP with Deionized Water",
        ingredient3: "Glycerin",
        ingredient4:"Hydrogen Peroxide",
        use1: "Hand Sanitizer to help reduce bacteria on the skin if soap and water are not available.",
        use2: "Place enough product on hands to cover all surfaces. Rub hands together until dry.",
        use3: "For external use only. Keep out of eyes ears, and mouth."
      },
      {
        id: 3,
        title: "Hand Sanitizer 8oz",
        description: "Our hand sanitizers are soothing & moisturizing gel/liquid solutions created to help reduce bacteria that can potentially cause disease when soap and water are not available. It is proven to kill 99.9% of most germs with no damage on skin, making it perfect for frequent use. Stern-X hand sanitizers are ideal for use in office settings, classrooms and or outdoor settings.",
        fact1: "Soothing and Moisturizing Gel.",
        fact2: "Kills 99.99 percent of most common germs that may cause illness.",
        fact3: "Refreshing scent.",
        ingredient1: "Isopropyl Alcohol 75% (Active ingredient)",
        ingredient2: "USP with Deionized Water",
        ingredient3: "Glycerin",
        ingredient4:"Hydrogen Peroxide",
        use1: "Hand Sanitizer to help reduce bacteria on the skin if soap and water are not available.",
        use2: "Place enough product on hands to cover all surfaces. Rub hands together until dry.",
        use3: "For external use only. Keep out of eyes ears, and mouth."
      },
      {
        id: 4,
        title: "Hand Sanitizer 13oz",
        description: "Our hand sanitizers are soothing & moisturizing gel/liquid solutions created to help reduce bacteria that can potentially cause disease when soap and water are not available. It is proven to kill 99.9% of most germs with no damage on skin, making it perfect for frequent use. Stern-X hand sanitizers are ideal for use in office settings, classrooms and or outdoor settings.",
        fact1: "Soothing and Moisturizing Gel.",
        fact2: "Kills 99.99 percent of most common germs that may cause illness.",
        fact3: "Refreshing scent.",
        ingredient1: "Isopropyl Alcohol 75% (Active ingredient)",
        ingredient2: "USP with Deionized Water",
        ingredient3: "Glycerin",
        ingredient4:"Hydrogen Peroxide",
        use1: "Hand Sanitizer to help reduce bacteria on the skin if soap and water are not available.",
        use2: "Place enough product on hands to cover all surfaces. Rub hands together until dry.",
        use3: "For external use only. Keep out of eyes ears, and mouth."
      },
      {
        id: 5,
        title: "Hand Sanitizer 16oz",
        description: "Our hand sanitizers are soothing & moisturizing gel/liquid solutions created to help reduce bacteria that can potentially cause disease when soap and water are not available. It is proven to kill 99.9% of most germs with no damage on skin, making it perfect for frequent use. Stern-X hand sanitizers are ideal for use in office settings, classrooms and or outdoor settings.",
        fact1: "Soothing and Moisturizing Gel.",
        fact2: "Kills 99.99 percent of most common germs that may cause illness.",
        fact3: "Refreshing scent.",
        ingredient1: "Isopropyl Alcohol 75% (Active ingredient)",
        ingredient2: "USP with Deionized Water",
        ingredient3: "Glycerin",
        ingredient4:"Hydrogen Peroxide",
        use1: "Hand Sanitizer to help reduce bacteria on the skin if soap and water are not available.",
        use2: "Place enough product on hands to cover all surfaces. Rub hands together until dry.",
        use3: "For external use only. Keep out of eyes ears, and mouth."
      },
      {
        id: 6,
        title: "Hand Sanitizer (Refill) 64oz",
        description: "Our hand sanitizers are soothing & moisturizing gel/liquid solutions created to help reduce bacteria that can potentially cause disease when soap and water are not available. It is proven to kill 99.9% of most germs with no damage on skin, making it perfect for frequent use. Stern-X hand sanitizers are ideal for use in office settings, classrooms and or outdoor settings.",
        fact1: "Soothing and Moisturizing Gel.",
        fact2: "Kills 99.99 percent of most common germs that may cause illness.",
        fact3: "Refreshing scent.",
        ingredient1: "Isopropyl Alcohol 75% (Active ingredient)",
        ingredient2: "USP with Deionized Water",
        ingredient3: "Glycerin",
        ingredient4:"Hydrogen Peroxide",
        use1: "Hand Sanitizer to help reduce bacteria on the skin if soap and water are not available.",
        use2: "Place enough product on hands to cover all surfaces. Rub hands together until dry.",
        use3: "For external use only. Keep out of eyes ears, and mouth."
      },
      {
        id: 7,
        title: "Hand Sanitizer (Refill) 1 Gal.",
        description: "Our hand sanitizers are soothing & moisturizing gel/liquid solutions created to help reduce bacteria that can potentially cause disease when soap and water are not available. It is proven to kill 99.9% of most germs with no damage on skin, making it perfect for frequent use. Stern-X hand sanitizers are ideal for use in office settings, classrooms and or outdoor settings.",
        fact1: "Soothing and Moisturizing Gel.",
        fact2: "Kills 99.99 percent of most common germs that may cause illness.",
        fact3: "Refreshing scent.",
        ingredient1: "Isopropyl Alcohol 75% (Active ingredient)",
        ingredient2: "USP with Deionized Water",
        ingredient3: "Glycerin",
        ingredient4:"Hydrogen Peroxide",
        use1: "Hand Sanitizer to help reduce bacteria on the skin if soap and water are not available.",
        use2: "Place enough product on hands to cover all surfaces. Rub hands together until dry.",
        use3: "For external use only. Keep out of eyes ears, and mouth."
      },
      {
        id: 8,
        title: "Liquid Hand Sanitizer 8oz",
        description: "Our hand sanitizers are soothing & moisturizing gel/liquid solutions created to help reduce bacteria that can potentially cause disease when soap and water are not available. It is proven to kill 99.9% of most germs with no damage on skin, making it perfect for frequent use. Stern-X hand sanitizers are ideal for use in office settings, classrooms and or outdoor settings.",
        fact1: "Soothing and Moisturizing Liquid.",
        fact2: "Kills 99.99 percent of most common germs that may cause illness.",
        fact3: "Refreshing scent.",
        ingredient1: "",
        ingredient2: "",
        ingredient3: "",
        ingredient4: "",
        use1: "Hand Sanitizer to help reduce bacteria on the skin if soap and water are not available.",
        use2: "Place enough product on hands to cover all surfaces. Rub hands together until dry.",
        use3: "For external use only. Keep out of eyes ears, and mouth."
      },
      {
        id: 9,
        title: "Liquid Hand Sanitizer 13oz",
        description: "Our hand sanitizers are soothing & moisturizing gel/liquid solutions created to help reduce bacteria that can potentially cause disease when soap and water are not available. It is proven to kill 99.9% of most germs with no damage on skin, making it perfect for frequent use. Stern-X hand sanitizers are ideal for use in office settings, classrooms and or outdoor settings.",
        fact1: "Soothing and Moisturizing Liquid.",
        fact2: "Kills 99.99 percent of most common germs that may cause illness.",
        fact3: "Refreshing scent.",
        ingredient1: "",
        ingredient2: "",
        ingredient3: "",
        ingredient4: "",
        use1: "Hand Sanitizer to help reduce bacteria on the skin if soap and water are not available.",
        use2: "Place enough product on hands to cover all surfaces. Rub hands together until dry.",
        use3: "For external use only. Keep out of eyes ears, and mouth."
      },
      {
        id: 10,
        title: "Liquid Hand Sanitizer 16oz",
        description: "Our hand sanitizers are soothing & moisturizing gel/liquid solutions created to help reduce bacteria that can potentially cause disease when soap and water are not available. It is proven to kill 99.9% of most germs with no damage on skin, making it perfect for frequent use. Stern-X hand sanitizers are ideal for use in office settings, classrooms and or outdoor settings.",
        fact1: "Soothing and Moisturizing Liquid.",
        fact2: "Kills 99.99 percent of most common germs that may cause illness.",
        fact3: "Refreshing scent.",
        ingredient1: "",
        ingredient2: "",
        ingredient3: "",
        ingredient4: "",
        use1: "Hand Sanitizer to help reduce bacteria on the skin if soap and water are not available.",
        use2: "Place enough product on hands to cover all surfaces. Rub hands together until dry.",
        use3: "For external use only. Keep out of eyes ears, and mouth."
      },
      {
        id: 11,
        title: "Liquid Hand Sanitizer 32oz",
        description: "Our hand sanitizers are soothing & moisturizing gel/liquid solutions created to help reduce bacteria that can potentially cause disease when soap and water are not available. It is proven to kill 99.9% of most germs with no damage on skin, making it perfect for frequent use. Stern-X hand sanitizers are ideal for use in office settings, classrooms and or outdoor settings.",
        fact1: "Soothing and Moisturizing Liquid.",
        fact2: "Kills 99.99 percent of most common germs that may cause illness.",
        fact3: "Refreshing scent.",
        ingredient1: "",
        ingredient2: "",
        ingredient3: "",
        ingredient4: "",
        use1: "Hand Sanitizer to help reduce bacteria on the skin if soap and water are not available.",
        use2: "Place enough product on hands to cover all surfaces. Rub hands together until dry.",
        use3: "For external use only. Keep out of eyes ears, and mouth."
      },
      {
        id: 12,
        title: "Liquid Hand Sanitizer 64oz",
        description: "Our hand sanitizers are soothing & moisturizing gel/liquid solutions created to help reduce bacteria that can potentially cause disease when soap and water are not available. It is proven to kill 99.9% of most germs with no damage on skin, making it perfect for frequent use. Stern-X hand sanitizers are ideal for use in office settings, classrooms and or outdoor settings.",
        fact1: "Soothing and Moisturizing Liquid.",
        fact2: "Kills 99.99 percent of most common germs that may cause illness.",
        fact3: "Refreshing scent.",
        ingredient1: "",
        ingredient2: "",
        ingredient3: "",
        ingredient4: "",
        use1: "Hand Sanitizer to help reduce bacteria on the skin if soap and water are not available.",
        use2: "Place enough product on hands to cover all surfaces. Rub hands together until dry.",
        use3: "For external use only. Keep out of eyes ears, and mouth."
      },
      {
        id: 13,
        title: "Liquid Hand Sanitizer 1 Gal.",
        description: "Our hand sanitizers are soothing & moisturizing gel/liquid solutions created to help reduce bacteria that can potentially cause disease when soap and water are not available. It is proven to kill 99.9% of most germs with no damage on skin, making it perfect for frequent use. Stern-X hand sanitizers are ideal for use in office settings, classrooms and or outdoor settings.",
        fact1: "Soothing and Moisturizing Liquid.",
        fact2: "Kills 99.99 percent of most common germs that may cause illness.",
        fact3: "Refreshing scent.",
        ingredient1: "",
        ingredient2: "",
        ingredient3: "",
        ingredient4: "",
        use1: "Hand Sanitizer to help reduce bacteria on the skin if soap and water are not available.",
        use2: "Place enough product on hands to cover all surfaces. Rub hands together until dry.",
        use3: "For external use only. Keep otu of eyes ears, and mouth."
      },
      {
        id: 14,
        title: "Lavender Disinfectant Sprayer 32oz",
        description: "Sprayer description.",
        fact1: "Fact 1",
        fact2: "Fact 2",
        fact3: "Fact 3",
        ingredient1: "",
        ingredient2: "",
        ingredient3: "",
        ingredient4: "",
        use1: "",
        use2: "",
        use3: ""
      },
      {
        id: 15,
        title: "Lavender Disinfectant Refill 64oz",
        description: "Sprayer refill description.",
        fact1: "Fact 1",
        fact2: "Fact 2",
        fact3: "Fact 3",
        ingredient1: "",
        ingredient2: "",
        ingredient3: "",
        ingredient4: "",
        use1: "",
        use2: "",
        use3: ""
      },
      {
        id: 16,
        title: "Lavender Disinfectant Refill 1 Gal.",
        description: "Sprayer refill description.",
        fact1: "Fact 1",
        fact2: "Fact 2",
        fact3: "Fact 3",
        ingredient1: "",
        ingredient2: "",
        ingredient3: "",
        ingredient4: "",
        use1: "",
        use2: "",
        use3: ""
      },
      {
        id: 17,
        title: "Regular Strength Bleach 1 Gal",
        description: "The Stern-X Bleach solution is ideal for use on clothing as well as cleaning and protecting surfaces. It is excellent for use with regular and HE standard machines delivering bright and longer lasting whites in clothing, while keeping your home clean, disinfected, and free of bacteria viruses.",
        fact1: "Disinfects to kill 99.9% of germs and bacteria.",
        fact2: "Brighter and longer-lasting whites",
        fact3: "Safe for everyday cleaning",
        ingredient1: "",
        ingredient2: "",
        ingredient3: "",
        ingredient4: "",
        use1: "",
        use2: "",
        use3: ""
      },
      {
        id: 18,
        title: "Extra Strength Bleach 1 Gal",
        description: "The Stern-X Bleach solution is ideal for use on clothing as well as cleaning and protecting surfaces. It is excellent for use with regular and HE standard machines delivering bright and longer lasting whites in clothing, while keeping your home clean, disinfected, and free of bacteria viruses.",
        fact1: "Disinfects to kill 99.9% of germs and bacteria.",
        fact2: "Brighter and longer-lasting whites",
        fact3: "Safe for everyday cleaning",
        ingredient1: "",
        ingredient2: "",
        ingredient3: "",
        ingredient4: "",
        use1: "",
        use2: "",
        use3: ""
      },
      {
        id: 19,
        title: "Lemon Fragrance Bleach 1 Gal",
        description: "The Stern-X Bleach solution is ideal for use on clothing as well as cleaning and protecting surfaces. It is excellent for use with regular and HE standard machines delivering bright and longer lasting whites in clothing, while keeping your home clean, disinfected, and free of bacteria viruses.",
        fact1: "Disinfects to kill 99.9% of germs and bacteria.",
        fact2: "Brighter and longer-lasting whites",
        fact3: "Safe for everyday cleaning",
        ingredient1: "",
        ingredient2: "",
        ingredient3: "",
        ingredient4: "",
        use1: "",
        use2: "",
        use3: ""
      },
      {
        id: 20,
        title: "Lavender Fragrance Bleach 1 Gal",
        description: "The Stern-X Bleach solution is ideal for use on clothing as well as cleaning and protecting surfaces. It is excellent for use with regular and HE standard machines delivering bright and longer lasting whites in clothing, while keeping your home clean, disinfected, and free of bacteria viruses.",
        fact1: "Disinfects to kill 99.9% of germs and bacteria.",
        fact2: "Brighter and longer-lasting whites",
        fact3: "Safe for everyday cleaning",
        ingredient1: "",
        ingredient2: "",
        ingredient3: "",
        ingredient4: "",
        use1: "",
        use2: "",
        use3: ""
      },
      {
        id: 21,
        title: "Citrus Splash Liquid Hand Soap 16oz",
        description: "Sprayer refill description.",
        fact1: "Disinfects to kill 99.9% of germs and bacteria.",
        fact2: "Fact 2",
        fact3: "Fact 3",
        ingredient1: "",
        ingredient2: "",
        ingredient3: "",
        ingredient4: "",
        use1: "",
        use2: "",
        use3: ""
      },
      {
        id: 22,
        title: "Ocean Mist Liquid Hand Soap 16oz",
        description: "Sprayer refill description.",
        fact1: "Disinfects to kill 99.9% of germs and bacteria.",
        fact2: "Fact 2",
        fact3: "Fact 3",
        ingredient1: "",
        ingredient2: "",
        ingredient3: "",
        ingredient4: "",
        use1: "",
        use2: "",
        use3: ""
      },
      {
        id: 23,
        title: "Coco Mango Liquid Hand Soap 16oz",
        description: "Sprayer refill description.",
        fact1: "Disinfects to kill 99.9% of germs and bacteria.",
        fact2: "Fact 2",
        fact3: "Fact 3",
        ingredient1: "",
        ingredient2: "",
        ingredient3: "",
        ingredient4: "",
        use1: "",
        use2: "",
        use3: ""
      },
      {
        id: 24,
        title: "Melon Cucumber Liquid Hand Soap 16oz",
        description: "Sprayer refill description.",
        fact1: "Disinfects to kill 99.9% of germs and bacteria.",
        fact2: "Fact 2",
        fact3: "Fact 3",
        ingredient1: "",
        ingredient2: "",
        ingredient3: "",
        ingredient4: "",
        use1: "",
        use2: "",
        use3: ""
      },
      {
        id: 25,
        title: "Anti Bacterial Hand Soap 16oz",
        description: "Sprayer refill description.",
        fact1: "Disinfects to kill 99.9% of germs and bacteria.",
        fact2: "Fact 2",
        fact3: "Fact 3",
        ingredient1: "",
        ingredient2: "",
        ingredient3: "",
        ingredient4: "",
        use1: "",
        use2: "",
        use3: ""
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
