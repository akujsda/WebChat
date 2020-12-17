import React, {useState} from 'react';

import {BrowserRouter as Router, Route, useHistory} from 'react-router-dom';
import {rootRoutes} from './routes'
import SignIn from "../auth/auth"
import SignUp from "../auth/register"
import UsersList from "../users/usersList"
import Chat from "../chat/chat"
import {User} from "../users/user"
const AppRouter: React.FC=():React.ReactElement=> {
  const [userId, setUserId]=useState<string | null>(null)

  return (
    <Router >
      <Route path={rootRoutes.root} exact>
        <User />
      </Route>

      <Route path={rootRoutes.login} exact>
        <SignIn setUserId={setUserId} />
      </Route>

      <Route path={rootRoutes.register} exact>
        <SignUp />
      </Route>

      <Route path={rootRoutes.chat} exact>
        <Chat userId={userId} />
      </Route>
    </Router>
  );
};

export default AppRouter;
