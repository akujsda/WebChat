import React, {useState} from 'react';

import {BrowserRouter as Router, Route, useHistory} from 'react-router-dom';
import {rootRoutes} from './routes'
import SignIn from "../auth/auth"
import SignUp from "../auth/register"
import UsersList from "../users/usersList"


const AppRouter: React.FC=():React.ReactElement=> {


  return (
    <Router >
      <Route path={rootRoutes.root} exact>
      </Route>

      <Route path={rootRoutes.login} exact>
        <SignIn />
      </Route>

      <Route path={rootRoutes.register} exact>
        <SignUp />
      </Route>

      <Route path={rootRoutes.chat} exact>
        <UsersList />
      </Route>
    </Router>
  );
};

export default AppRouter;
