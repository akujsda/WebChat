import React, { ReactElement, useEffect, useState } from 'react'
import {Box,  Button} from '@material-ui/core'
import Cookies from "js-cookie"
import {useHistory} from "react-router-dom"
import {rootRoutes} from "../route/routes"
import {useIntl} from 'react-intl';

const Header = (): ReactElement =>{
  const intl = useIntl().messages
  const history=useHistory()
  const [isLoggedIn, setLoggedIn] = useState<boolean>(false)
  const [isButtonVisible, setButtonVisible] = useState<boolean>(false)


  useEffect(() => {
    const id= Cookies.get("userId")
    const name = Cookies.get("userName")
    if(name && id){
      history.push(rootRoutes.chat)
      setLoggedIn(true)
    }
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setButtonVisible(!window.location.href.includes(rootRoutes.login))
  }, [])

  const logout =():void=>{
    Cookies.remove("userId")
    Cookies.remove("userName")
    Cookies.remove("token")
    history.push(rootRoutes.login)
    setLoggedIn(false)
  }

  const login =():void =>{
    setLoggedIn(true)
    history.push(rootRoutes.login)
  }

  return (
    <Box width="100vw" height="50px" bgcolor="#3f51b5" display="flex" justifyContent="center" alignItems="center">

      <Box width="50vw" display="flex" justifyContent="flex-start" marginLeft="10px" fontSize="32px" color="white" fontWeight="500" > {`${intl.webChat}`} </Box>

      <Box display="flex" justifyContent="flex-end" width="50vw">

        {isButtonVisible && (
        <Box bgcolor="white" border="1px solid white" borderRadius="10px" margin="10px" height="35px" textAlign="center">
          <Button  onClick={isLoggedIn ? logout : login} color="primary">{isLoggedIn ? `${intl.signOut}` : `${intl.signIn}`}</Button>
        </Box>
        )}

      </Box>
    </Box>
  )
}

export default Header
