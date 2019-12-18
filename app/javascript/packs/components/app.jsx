import React from 'react';
import {
  Route,
  Switch,
  withRouter,
  HashRouter
} from 'react-router-dom'

import Splash from '../views/splash';

const App = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Splash} />
    </Switch>
  </HashRouter>
)

export default App;
