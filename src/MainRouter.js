import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './containers/home';
import Detail from './containers/detail';


const MainRouter = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/detail" component={Detail} />
  </Switch>
)

export default MainRouter;
