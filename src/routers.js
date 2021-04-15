import React from "react";
import { Redirect, Router, Switch, Route } from "react-router-dom"

//config
import { isAuthenticated } from "./config/auth"

//layout
import Layout from "./components/layout/"

//views
import SignIn from './views/auth/signin'
import SignUp from './views/auth/signup'
import history from './config/history'
import Services from "./views/services"
import About from "./views/about"
import Details from "./views/details"
import Error404 from "./views/errors/404"


// // MOCKADO
// const isAuthenticated = true
// // -------------------------

const AdminRoute = ({ ...rest }) => {
  if (!isAuthenticated()) {
    return <Redirect to="/signin" />
  }

  return <Route {...rest} />
}

const Routers = () => {
  return (
    <Router history={history}>
      <Layout>
        <Switch>

          <Route exact path="/signin" component={SignIn} />
          <Route exact path='/signup' component={SignUp} />

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
