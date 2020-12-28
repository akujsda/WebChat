import React from 'react';

import {BrowserRouter as Router, Route, } from 'react-router-dom';
import {rootRoutes} from './routes'
import SignIn from "../auth/auth"
import SignUp from "../auth/register"
import Chat from "../chat/chat"
import Header from "../ui/header"

const AppRouter: React.FC=():React.ReactElement=> {

  return (
    <Router >
      <Route path={rootRoutes.root}>
        <Header />
      </Route>

      <Route path={rootRoutes.login} exact>
        <SignIn  />
      </Route>

      <Route path={rootRoutes.register} exact>
        <SignUp />
      </Route>

      <Route path={rootRoutes.chat} exact>
        <Chat  />
      </Route>
    </Router>
  );
};

export default AppRouter;
