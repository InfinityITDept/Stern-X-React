import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./Container.scss"

import Landing from "./layout/Landing";
import Products from "./layout/Products";
import About from "./layout/AboutPage";
import Contact from "./layout/Contact";
import ReactMap from "./layout/components/mapbox/ReactMapbox";

function Container({location}) {
    return (
        <div>
            <Helmet><title>Stern-X</title></Helmet>
            <TransitionGroup>
            <CSSTransition
            key={location.key}
            timeout={{ enter: 500, exit: 500 }}
            classNames={'fade'}
            >
                <Switch location={location}>
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/products" component={Products} />
                    <Route exact path="/single-product" component={Products} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/reactmap" component={ReactMap} />
                </Switch>
                </CSSTransition>
                </TransitionGroup>
            </div>
    )
}
export default withRouter(Container)
