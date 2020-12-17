import React, { ReactElement } from 'react'
import {Box, Container, Button} from '@material-ui/core'
import {ButtonBase} from "./button"
import Cookies from "js-cookie"
import {useHistory} from "react-router-dom"
import {rootRoutes} from "../route/routes"


const Header = (): ReactElement =>{
  const history=useHistory()

  const logout =():void=>{
    Cookies.remove("userId")
    Cookies.remove("userName")
    history.push(rootRoutes.login)
  }

  const login =():void =>{
    history.push(rootRoutes.login)
  }

  return (
    <Box width="100vw" height="50px" bgcolor="#3f51b5" display="flex" justifyContent="center">

      <Box width="50vw" justifyContent="flex-end" fontSize="32px" color="white" fontWeight="500" > WebChat </Box>

      <Box display="flex" justifyContent="flex-end" width="50vw">
        <Box bgcolor="white" border="1px solid white" borderRadius="10px" height="40px">
          <Button  onClick={login} color="primary">login</Button>
        </Box>

        <Box bgcolor="white" border="1px solid white" borderRadius="10px" height="40px">
          <Button  onClick={logout} color="primary" >logout</Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Header
