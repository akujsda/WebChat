import React, { ReactElement } from 'react'
import {Box, Container} from '@material-ui/core'
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
  return (
    <Box width="100vw" height="50px" bgcolor="#3f51b5" display="flex" justifyContent="center">
      <Box fontSize="32px" color="white" fontWeight="500" > WebChat </Box>
      <ButtonBase text="logout" onClick={logout} />
    </Box>
  )
}

export default Header
