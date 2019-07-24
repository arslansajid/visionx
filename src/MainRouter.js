import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './containers/home';
import Detail from './containers/detail';
import FullResults from './containers/fullResults'


const MainRouter = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/detail/:bookId" component={Detail} />
    <Route exact path="/full-results/:q" component={FullResults} />
  </Switch>
)

export default MainRouter;
