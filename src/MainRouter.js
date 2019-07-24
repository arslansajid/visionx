import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './containers/Home';
import Detail from './containers/Detail';
import FullResults from './containers/FullResults'


const MainRouter = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/detail/:bookId" component={Detail} />
    <Route exact path="/full-results/:q" component={FullResults} />
  </Switch>
)

export default MainRouter;
