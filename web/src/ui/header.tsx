import React, { ReactElement, useEffect } from 'react'
import {Box,  Button} from '@material-ui/core'
import Cookies from "js-cookie"
import {useHistory} from "react-router-dom"
import {rootRoutes} from "../route/routes"


const Header = (): ReactElement =>{

  const history=useHistory()

  // useEffect(() => {
  //   const id= Cookies.get("userId")
  //   const name = Cookies.get("userName")
  //   if(name && id){
  //     history.push(rootRoutes.chat)
  //   }
  // }, [history])

  const logout =():void=>{
    Cookies.remove("userId")
    Cookies.remove("userName")
     history.push(rootRoutes.login)

  }

  const login =():void =>{
    history.push(rootRoutes.login)
  }

  return (
    <Box width="100vw" height="50px" bgcolor="#3f51b5" display="flex" justifyContent="center" alignItems="center">

      <Box width="50vw" display="flex" justifyContent="flex-start" marginLeft="10px" fontSize="32px" color="white" fontWeight="500" > WebChat </Box>

      <Box display="flex" justifyContent="flex-end" width="50vw">
      {!Cookies.get("userId") ?
        (<Box bgcolor="white" border="1px solid white" borderRadius="10px" margin="5px 10px" height="40px" textAlign="center">
          <Button  onClick={login} color="primary">login</Button>
        </Box>)
        :
        (<Box bgcolor="white" border="1px solid white" borderRadius="10px" margin="5px 10px" height="40px" textAlign="center">
          <Button  onClick={logout} color="primary" >logout</Button>
        </Box>)
      }
      </Box>
    </Box>
  )
}

export default Header
