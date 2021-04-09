import React from "react";
import { Redirect } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SignIn from './views/auth/signin'
import Services from "./views/services";
import About from "./views/about";
import Layout from "./components/layout/";
import Details from "./views/details";
import Error404 from "./views/errors/404";

const isAuthenticated = true

const AdminRoute = ({ ...rest }) => {
  if (!isAuthenticated) {
    return <Redirect to="/signin" />
  }

  return <Route {...rest} />
}

const Routers = () => {
  return (
    <Router>
      <Layout>
        <Switch>

          <Route exact path="/signin" component={SignIn} />

          <AdminRoute exact path="/" component={Services} />
          <AdminRoute exact path="/about" component={About} />
          <AdminRoute exact path="/details/:id" component={Details} />

          <Route exact to="/error/404" component={Error404} />
          <Redirect from="*" to="/error/404" />
        </Switch>
      </Layout>
    </Router>
  );
};

export default Routers;
