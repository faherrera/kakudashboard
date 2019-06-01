import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ProductListPage from '../pages/products/productlist.page';
import DetailProductPage from '../pages/products/detail.page';

const Routes = () => (
  <Switch>
    <Route exact path="/home" component={ProductListPage} />
    <Route exact path="/product/:id" component={DetailProductPage} />
    <Redirect exact from="/" to="/home" />
  </Switch>
);

export default Routes;
