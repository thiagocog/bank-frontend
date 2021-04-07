import React from "react";
import { Redirect } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Services from "./views/services";
import About from "./views/about";
import Layout from "./components/layout/";
import Details from "./views/details";
import Error404 from "./views/errors/404";

const Routers = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Services} />
          <Route exact path="/about" component={About} />
          <Route exact path="/details/:id" component={Details} />

          <Route exact to="/error/404" component={Error404} />
          <Redirect from="*" to="/error/404" />
        </Switch>
      </Layout>
    </Router>
  );
};

export default Routers;
