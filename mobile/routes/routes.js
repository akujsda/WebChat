import React, { ReactElement } from 'react'
import { Router, Scene } from 'react-native-router-flux'
import { rootRoutes } from "./rootRoutes"
import { Auth } from "../src/auth/auth"
import { Register } from "../src/register/register"


export const Routes = () => {
  return (
    <Router>
      <Scene key={rootRoutes.root}>
        <Scene key={rootRoutes.login} component={Auth} hideNavBar={true} initial={true}></Scene>
        <Scene key={rootRoutes.register} component={Register} hideNavBar={true} ></Scene>
        {/* <Scene key={rootRoutes.chat}></Scene> */}
      </Scene>
    </Router>
  )
}
