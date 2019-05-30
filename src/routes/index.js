import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import SegmentExamplePlaceholder from '../layout/General';

const Routes = () => (
  <Switch>
    <Route exact path="/home" component={() => <main><SegmentExamplePlaceholder /></main>} />
    <Route exact path="/detail" component={() => <main><p> Detail </p></main>} />
    <Redirect from="/" to="/home" />
  </Switch>
);

export default Routes;
