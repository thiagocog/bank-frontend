import React from "react";
import { Redirect, Router, Switch, Route } from "react-router-dom"

//config
import { isAuthenticated } from "./config/auth"

//layout
import Layout from "./components/layout/"

//views
import SignIn from './views/auth/signin'
import SignUp from './views/auth/signup'
import Home from "./views/home"
import Profile from "./views/profile"
import Services from "./views/services"
import Users from "./views/users"
import About from "./views/about"
import Details from "./views/details"
import Error404 from "./views/errors/404"
import Error401 from './views/errors/401'
import history from './config/history'

import { useSelector } from 'react-redux'


// // MOCKADO
// const isAuthenticated = true
// // -------------------------

const AdminRoute = ({ ...rest }) => {
  if (!isAuthenticated()) {
    return <Redirect to="/signin" />
  }

  const hasAdmin = Object.keys(rest).includes('admin') && !rest.admin

  if (hasAdmin) {
    return <Redirect to="/error/401" />
  }

  return <Route {...rest} />
}

const Routers = () => {

  const isAdmin = useSelector(state => state.auth.isAdmin)

  return (
    <Router history={history}>
      <Layout>
        <Switch>

          <Route exact path="/signin" component={SignIn} />
          <Route exact path='/signup' component={SignUp} />

          <AdminRoute exact path="/" component={Home} />
          <AdminRoute exact path="/about" component={About} />
          <AdminRoute exact path="/details/:id" component={Details} />
          <AdminRoute exact path="/profile" component={Profile} />

          {/* ADMIN */}
          <AdminRoute exact path="/users" admin={isAdmin} component={Users} />
          <AdminRoute exact path="/services" admin={isAdmin} component={Services} />


          <AdminRoute exact to="/error/401" component={Error401} />
          <AdminRoute exact to="/error/404" component={Error404} />
          <Redirect from="*" to="/error/404" />
        </Switch>
      </Layout>
    </Router>
  );
};

export default Routers;
